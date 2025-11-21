const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read .env.local file
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');

// Parse environment variables
const env = {};
envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
        env[match[1].trim()] = match[2].trim();
    }
});

const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseKey = env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSettings() {
    console.log('Checking site_settings table...');

    const { data, error } = await supabase
        .from('site_settings')
        .select('*');

    if (error) {
        console.error('Error fetching settings:', error);
        return;
    }

    console.log('Found', data.length, 'records.');
    console.log(JSON.stringify(data, null, 2));
}

checkSettings();
