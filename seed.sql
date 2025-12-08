-- Clear existing data
TRUNCATE TABLE reviews, products, categories RESTART IDENTITY CASCADE;

-- Insert Categories
INSERT INTO categories (name, seo_slug, description) VALUES
('CRM Software', 'crm', 'Best Customer Relationship Management tools for small businesses.'),
('Email Marketing', 'email-marketing', 'Top email marketing platforms for growing your audience.'),
('Website Builders', 'website-builders', 'Easy-to-use website builders for creating your online presence.');

-- Insert Products (CRMs)
INSERT INTO products (name, category_id, affiliate_link_base, seo_slug, overall_rating, price_low, price_high) VALUES
('Salesforce Essentials', 1, 'https://salesforce.com', 'salesforce-essentials', 4.5, 25.00, 75.00),
('HubSpot CRM', 1, 'https://hubspot.com', 'hubspot-crm', 4.8, 0.00, 50.00),
('Zoho CRM', 1, 'https://zoho.com/crm', 'zoho-crm', 4.2, 14.00, 40.00),

-- Insert Products (Email Marketing)
('Mailchimp', 2, 'https://mailchimp.com', 'mailchimp', 4.6, 0.00, 30.00),
('ConvertKit', 2, 'https://convertkit.com', 'convertkit', 4.7, 29.00, 79.00),

-- Insert Products (Website Builders)
('Wix', 3, 'https://wix.com', 'wix', 4.5, 16.00, 45.00),
('Squarespace', 3, 'https://squarespace.com', 'squarespace', 4.8, 16.00, 49.00);

-- Insert Reviews
INSERT INTO reviews (product_id, review_text_markdown, pros_json, cons_json, feature_rating_json) VALUES
(1, 
 '# Salesforce Essentials Review\nSalesforce Essentials is a powerful CRM...', 
 '["Scalable ecosystem", "Advanced reporting", "Mobile app"]', 
 '["Steep learning curve", "Expensive add-ons"]', 
 '{"ease_of_use": 3, "features": 5, "support": 4, "value": 4}'
),
(2, 
 '# HubSpot CRM Review\nHubSpot offers an excellent free tier...', 
 '["Generous free plan", "Great UI/UX", "Marketing integration"]', 
 '["Price jumps quickly", "Limited customization in free tier"]', 
 '{"ease_of_use": 5, "features": 4, "support": 5, "value": 5}'
),
(3, 
 '# Zoho CRM Review\nZoho CRM is a budget-friendly option...', 
 '["Affordable", "Customizable", "AI Assistant (Zia)"]', 
 '["UI feels outdated", "Support can be slow"]', 
 '{"ease_of_use": 4, "features": 4, "support": 3, "value": 5}'
),
(4,
 '# Mailchimp Review\nMailchimp is the industry standard...',
 '["Great for beginners", "Excellent templates", "Free plan available"]',
 '["Automation can be pricey", "Support limited on free plan"]',
 '{"ease_of_use": 5, "features": 4, "support": 4, "value": 4}'
),
(5,
 '# ConvertKit Review\nConvertKit is built for creators...',
 '["Best for bloggers", "Simple automation", "High deliverability"]',
 '["Limited design options", "More expensive than competitors"]',
 '{"ease_of_use": 4, "features": 5, "support": 5, "value": 4}'
),
(6,
 '# Wix Review\nWix offers incredible design freedom...',
 '["Drag-and-drop editor", "Huge template library", "App market"]',
 '["Site speed can be slow", "Hard to switch templates"]',
 '{"ease_of_use": 5, "features": 5, "support": 4, "value": 5}'
),
(7,
 '# Squarespace Review\nSquarespace creates beautiful sites...',
 '["Stunning designs", "All-in-one platform", "Great ecommerce"]',
 '["Less customization than Wix", "No free plan"]',
 '{"ease_of_use": 4, "features": 4, "support": 5, "value": 4}'
);
