import { isPostgrestError } from "@/lib/utils"
import { SupabaseClient } from "@supabase/supabase-js"

export async function signUp(supabase: SupabaseClient, email: string, password: string) {
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        })
    
        if (error) throw error 
        return data
    } catch (error: any) {
        if (isPostgrestError(error)) {
            return { error: error.message }
        } else {
            return { error }
        }
    }
}

export async function signIn(supabase: SupabaseClient, email: string, password: string) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
    
        if (error) throw error 
        return { data, error: null }
    } catch (error: any) {
        if (isPostgrestError(error)) {
            return { data: null, error: error.message }
        } else {
            return { data: null, error }
        }
    }
}

export async function signOut(supabase: SupabaseClient) {
    try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error;
    } catch (error) {
        if (isPostgrestError(error)) {
            return { error: error.message }
        } else {
            return { error }
        }
    }
}