-- SQL Editor to add the missing 'categories' column to 'site_settings'
ALTER TABLE site_settings 
ADD COLUMN IF NOT EXISTS categories text[] DEFAULT ARRAY['Fresh Fish', 'Shellfish', 'White Fish', 'Sashimi', 'Other'];

-- Run this command to add the 'description' column to 'products' if it's missing
ALTER TABLE products
ADD COLUMN IF NOT EXISTS description text;

-- ROW LEVEL SECURITY POLICIES
-- Ensure RLS is enabled on site_settings
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Allow public read access to site_settings (so everyone can see categories, hours, etc.)
CREATE POLICY "Allow public read access" ON site_settings
FOR SELECT USING (true);

-- Allow authenticated users (admins) to update site_settings
CREATE POLICY "Allow authenticated update" ON site_settings
FOR UPDATE USING (auth.role() = 'authenticated');

-- Ensure RLS is enabled on products
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access to products
CREATE POLICY "Allow public read access" ON products
FOR SELECT USING (true);

-- Allow authenticated users (admins) to insert, update, delete products
CREATE POLICY "Allow authenticated insert" ON products
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update" ON products
FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete" ON products
FOR DELETE USING (auth.role() = 'authenticated');
