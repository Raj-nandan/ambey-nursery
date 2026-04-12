-- 1. Add missing columns to support the Admin UI redesign
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS discount_percent INTEGER DEFAULT 0;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS is_featured BOOLEAN DEFAULT false;

-- 2. Insert all the initial products from the Category page
INSERT INTO public.products (name, price, category, image_url, badge, in_stock, discount_percent) VALUES
('Monstera Deliciosa', 19.20, 'Indoor Plants', 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=300&fit=crop', '20% Off', true, 20),
('Snake Plant', 14.00, 'Indoor Plants', 'https://images.unsplash.com/photo-1593482892580-e32e47e0a38d?w=400&h=300&fit=crop', null, true, 0),
('Peace Lily', 16.00, 'Flowering Plants', 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&h=300&fit=crop', null, true, 0),
('Aloe Vera', 30.00, 'Succulents', 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=300&fit=crop', null, true, 0),
('Golden Pothos', 18.00, 'Hanging Plants', 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400&h=300&fit=crop', null, true, 0),
('Jade Plant', 22.00, 'Succulents', 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=300&fit=crop', null, true, 0),
('Bougainvillea', 18.00, 'Flowering Plants', 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=400&h=300&fit=crop', '18% Off', true, 18),
('Money Plant', 8.00, 'Creepers', 'https://images.unsplash.com/photo-1521334884684-d80222895322?w=400&h=300&fit=crop', null, true, 0),
('Lemon Tree', 25.00, 'Fruit Plants', 'https://images.unsplash.com/photo-1557844352-761f2565b576?w=400&h=300&fit=crop', null, true, 0),
('Guava Plant', 22.00, 'Fruit Plants', 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop', null, true, 0),
('Hibiscus', 13.00, 'Outdoor Plants', 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=400&h=300&fit=crop', null, true, 0),
('Organic Potting Mix', 6.00, 'Soil & Composts', 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop', null, true, 0),
('Ceramic Planter', 15.00, 'Gardening Tools', 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop', '25% Off', true, 25),
('Terracotta Pot', 11.00, 'Gardening Tools', 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop', null, true, 0),
('English Ivy', 9.00, 'Creepers', 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400&h=300&fit=crop', null, true, 0),
('String of Pearls', 12.00, 'Hanging Plants', 'https://images.unsplash.com/photo-1521334884684-d80222895322?w=400&h=300&fit=crop', null, true, 0);
