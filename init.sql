CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    seo_slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INTEGER REFERENCES categories(id),
    affiliate_link_base TEXT NOT NULL,
    seo_slug VARCHAR(255) UNIQUE NOT NULL,
    overall_rating FLOAT,
    price_low FLOAT,
    price_high FLOAT
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    review_text_markdown TEXT,
    pros_json JSONB,
    cons_json JSONB,
    feature_rating_json JSONB,
    date_published TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
