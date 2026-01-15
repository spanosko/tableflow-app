import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const SUPABASE_URL = window.SUPABASE_URL;
export const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error("Missing Supabase env vars");
}

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
