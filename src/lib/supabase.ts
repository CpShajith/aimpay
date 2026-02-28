import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder_anon_key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
    id: string;
    full_name: string | null;
    role: 'user' | 'admin';
    created_at: string;
};

export type Transaction = {
    id: string;
    user_id: string;
    type: 'deposit' | 'withdrawal' | 'transfer';
    amount: number;
    currency: string;
    status: 'pending' | 'completed' | 'failed';
    created_at: string;
};

export type ContactMessage = {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    subject: string;
    message: string;
    status: 'unread' | 'read';
    created_at: string;
};
