const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: process.env.POSTGRES_USER || 'admin',
    host: process.env.POSTGRES_HOST || 'localhost',
    database: process.env.POSTGRES_DB || 'affiliate_hub',
    password: process.env.POSTGRES_PASSWORD || 'password',
    port: process.env.POSTGRES_PORT || 5432,
});

app.get('/', (req, res) => {
    res.send('Affiliate Hub API is running');
});

// GET /api/categories
app.get('/api/categories', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM categories ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
});

// GET /api/products/:category_slug
app.get('/api/products/:category_slug', async (req, res) => {
    const { category_slug } = req.params;
    try {
        const categoryResult = await pool.query('SELECT id FROM categories WHERE seo_slug = $1', [category_slug]);

        if (categoryResult.rows.length === 0) {
            return res.status(404).json({ error: 'Category not found' });
        }

        const categoryId = categoryResult.rows[0].id;

        // Fetch products with their simplified review stats
        const query = `
            SELECT p.*, r.feature_rating_json 
            FROM products p
            LEFT JOIN reviews r ON p.id = r.product_id
            WHERE p.category_id = $1
            ORDER BY p.overall_rating DESC
        `;
        const result = await pool.query(query, [categoryId]);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
});

// GET /api/products/detail/:product_slug
app.get('/api/products/detail/:product_slug', async (req, res) => {
    const { product_slug } = req.params;
    try {
        const query = `
            SELECT p.*, r.review_text_markdown, r.pros_json, r.cons_json, r.feature_rating_json, r.date_published, c.name as category_name, c.seo_slug as category_slug
            FROM products p
            LEFT JOIN reviews r ON p.id = r.product_id
            JOIN categories c ON p.category_id = c.id
            WHERE p.seo_slug = $1
        `;
        const result = await pool.query(query, [product_slug]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
});

// Affiliate Link Tracking Endpoint
app.get('/api/track-click', async (req, res) => {
    const { product_id } = req.query;

    if (!product_id) {
        return res.status(400).send('Product ID is required');
    }

    try {
        console.log(`Tracking click for product ${product_id}`);
        // Fetch product link from DB
        const result = await pool.query('SELECT affiliate_link_base FROM products WHERE id = $1', [product_id]);

        if (result.rows.length > 0) {
            const link = result.rows[0].affiliate_link_base;
            res.redirect(link);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
