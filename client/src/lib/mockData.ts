// Mock data for product categories
export const mockProducts = {
    'crm': [
        {
            id: 1,
            name: 'HubSpot CRM',
            seo_slug: 'hubspot-crm',
            overall_rating: 4.5,
            price_low: 0,
            price_high: 50,
            feature_rating_json: {
                'Ease of Use': 4.5,
                'Features': 4.3,
                'Support': 4.6,
                'Value': 4.8
            },
            affiliate_link_base: 'https://www.hubspot.com/products/crm',
            pros_json: ['Free forever plan', 'Easy to use', 'Great integrations', 'Excellent support'],
            cons_json: ['Limited customization on free plan', 'Can get expensive at scale'],
            review_text_markdown: 'HubSpot CRM is an excellent choice for micro-businesses looking for a free, powerful CRM solution. The interface is intuitive and the free plan includes most essential features.'
        },
        {
            id: 2,
            name: 'Zoho CRM',
            seo_slug: 'zoho-crm',
            overall_rating: 4.2,
            price_low: 14,
            price_high: 52,
            feature_rating_json: {
                'Ease of Use': 4.0,
                'Features': 4.4,
                'Support': 4.1,
                'Value': 4.5
            },
            affiliate_link_base: 'https://www.zoho.com/crm/',
            pros_json: ['Affordable pricing', 'Feature-rich', 'Good mobile app'],
            cons_json: ['Steeper learning curve', 'Interface can feel cluttered'],
            review_text_markdown: 'Zoho CRM offers incredible value with extensive features at an affordable price point, perfect for growing micro-businesses.'
        },
        {
            id: 3,
            name: 'Pipedrive',
            seo_slug: 'pipedrive',
            overall_rating: 4.4,
            price_low: 14,
            price_high: 99,
            feature_rating_json: {
                'Ease of Use': 4.7,
                'Features': 4.2,
                'Support': 4.3,
                'Value': 4.3
            },
            affiliate_link_base: 'https://www.pipedrive.com/',
            pros_json: ['Visual sales pipeline', 'Intuitive interface', 'Great for sales teams'],
            cons_json: ['Limited marketing features', 'Higher price point'],
            review_text_markdown: 'Pipedrive excels at visual sales pipeline management with an incredibly user-friendly interface that sales teams love.'
        }
    ],
    'email-marketing': [
        {
            id: 4,
            name: 'Mailchimp',
            seo_slug: 'mailchimp',
            overall_rating: 4.3,
            price_low: 0,
            price_high: 350,
            feature_rating_json: {
                'Ease of Use': 4.5,
                'Features': 4.2,
                'Support': 3.9,
                'Value': 4.4
            },
            affiliate_link_base: 'https://mailchimp.com/',
            pros_json: ['Free plan available', 'Easy to use', 'Great templates', 'Strong analytics'],
            cons_json: ['Support can be slow', 'Pricing increases quickly'],
            review_text_markdown: 'Mailchimp is the industry standard for email marketing, offering a generous free plan and powerful automation features perfect for micro-businesses.'
        },
        {
            id: 5,
            name: 'ConvertKit',
            seo_slug: 'convertkit',
            overall_rating: 4.5,
            price_low: 9,
            price_high: 29,
            feature_rating_json: {
                'Ease of Use': 4.6,
                'Features': 4.4,
                'Support': 4.7,
                'Value': 4.5
            },
            affiliate_link_base: 'https://convertkit.com/',
            pros_json: ['Creator-focused', 'Excellent automation', 'Great support', 'Simple interface'],
            cons_json: ['No free plan', 'Limited design options'],
            review_text_markdown: 'ConvertKit is built specifically for creators and offers powerful automation with a clean, simple interface and outstanding customer support.'
        },
        {
            id: 6,
            name: 'Sendinblue',
            seo_slug: 'sendinblue',
            overall_rating: 4.1,
            price_low: 0,
            price_high: 65,
            feature_rating_json: {
                'Ease of Use': 4.2,
                'Features': 4.0,
                'Support': 4.0,
                'Value': 4.6
            },
            affiliate_link_base: 'https://www.sendinblue.com/',
            pros_json: ['Excellent value', 'SMS marketing included', 'Free plan available'],
            cons_json: ['Interface less polished', 'Limited templates'],
            review_text_markdown: 'Sendinblue offers exceptional value with email and SMS marketing combined, making it perfect for budget-conscious micro-businesses.'
        }
    ],
    'website-builders': [
        {
            id: 7,
            name: 'Wix',
            seo_slug: 'wix',
            overall_rating: 4.4,
            price_low: 16,
            price_high: 45,
            feature_rating_json: {
                'Ease of Use': 4.8,
                'Features': 4.3,
                'Support': 4.2,
                'Value': 4.3
            },
            affiliate_link_base: 'https://www.wix.com/',
            pros_json: ['Extremely easy to use', 'Tons of templates', 'Great for beginners', 'App marketplace'],
            cons_json: ['Can\'t switch templates', 'Less flexibility for advanced users'],
            review_text_markdown: 'Wix is the easiest website builder for beginners, offering drag-and-drop simplicity with hundreds of beautiful templates.'
        },
        {
            id: 8,
            name: 'Squarespace',
            seo_slug: 'squarespace',
            overall_rating: 4.5,
            price_low: 16,
            price_high: 49,
            feature_rating_json: {
                'Ease of Use': 4.6,
                'Features': 4.5,
                'Support': 4.4,
                'Value': 4.2
            },
            affiliate_link_base: 'https://www.squarespace.com/',
            pros_json: ['Beautiful templates', 'All-in-one platform', 'Great for portfolios', 'Excellent design'],
            cons_json: ['Less customization', 'Higher learning curve'],
            review_text_markdown: 'Squarespace offers stunning, professionally-designed templates perfect for creatives and businesses that want a beautiful online presence.'
        },
        {
            id: 9,
            name: 'Webflow',
            seo_slug: 'webflow',
            overall_rating: 4.6,
            price_low: 14,
            price_high: 39,
            feature_rating_json: {
                'Ease of Use': 3.9,
                'Features': 4.9,
                'Support': 4.3,
                'Value': 4.5
            },
            affiliate_link_base: 'https://webflow.com/',
            pros_json: ['Professional-grade design control', 'No code required', 'Powerful CMS', 'Clean code output'],
            cons_json: ['Steeper learning curve', 'More complex for beginners'],
            review_text_markdown: 'Webflow is perfect for designers and businesses that want complete design control without writing code, offering professional-grade capabilities.'
        }
    ]
};

export function getProductsByCategory(categorySlug: string) {
    return mockProducts[categorySlug as keyof typeof mockProducts] || [];
}

export function getProductBySlug(slug: string) {
    for (const category of Object.values(mockProducts)) {
        const product = category.find(p => p.seo_slug === slug);
        if (product) return product;
    }
    return null;
}
