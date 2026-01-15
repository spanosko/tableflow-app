import { supabase } from "./config.js";

export async function login(email, password) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function fetchMyVenues() {
  return supabase
    .from("v_me_venues")
    .select("*");
}
