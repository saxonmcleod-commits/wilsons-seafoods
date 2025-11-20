import { createClient } from '@supabase/supabase-js';

// IMPORTANT: Replace with your Supabase project URL and Anon Key
// It's recommended to use environment variables for these in a real project
const supabaseUrl = process.env.SUPABASE_URL || 'https://heeihaozzlgucbxzhfvs.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlZWloYW96emxndWNieHpoZnZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0MDI3ODEsImV4cCI6MjA3ODk3ODc4MX0.YJ_PQ0LtD8q73o27mqfCAkpkDh2qdycPFi83pcc-u90';

if (supabaseUrl === 'YOUR_SUPABASE_URL' || supabaseAnonKey === 'YOUR_SUPABASE_ANON_KEY') {
    console.warn("Supabase credentials are not configured. Please add your SUPABASE_URL and SUPABASE_ANON_KEY.");
}


export const supabase = createClient(supabaseUrl, supabaseAnonKey);