import { Service } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Service()
export class SupabaseService {
    supabaseUrl = 'https://nrceehlctyiwecjvlpaz.supabase.co';
    supabaseKey = 'sb_publishable_CULWh2v0Ra454TNCKLo0FQ_jD4f_fmf';

    /**
     * Supabase client.
     */
    supabase = createClient(this.supabaseUrl, this.supabaseKey);

    /**
     * Temporary session client used for sign-up.
     */
    signUp = createClient(this.supabaseUrl, this.supabaseKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false,
            storageKey: 'supabase-signup-auth',
        },
    });
}
