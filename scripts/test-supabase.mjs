import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load variables from .env
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'placeholder_anon_key';

console.log('Testing Supabase Client initialization...');
console.log('URL mapped:', supabaseUrl);
console.log('Key mapped:', supabaseAnonKey.substring(0, 10) + '...');

try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log('✅ Supabase Client initialized successfully.');
    console.log('Since Docker is not running and we are using a mock URL, actual database queries will fail. However, the client is ready to accept real credentials in your .env file.');
    process.exit(0);
} catch (e) {
    console.error('❌ Failed to initialize Supabase Client:', e);
    process.exit(1);
}
