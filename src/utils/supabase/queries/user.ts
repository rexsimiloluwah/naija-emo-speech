import { SupabaseClient } from "@supabase/supabase-js";
import supabase from "../client";
import { UserProfile, Settings } from "@/types/db";
import { isPostgrestError } from "@/lib/utils";

export async function createUserProfile(supabase: SupabaseClient, userId: string, profile: Omit<UserProfile, "id" | "user_id">): Promise<{
    data: UserProfile | null, 
    error: string | null 
}> {
    try {
        const { data, error } = await supabase.from("user_profiles").insert({
            user_id: userId, 
            ...profile
        })

        if (error) {
            throw error 
        }

        console.log(`[INFO] Successfully created user profile.`)
        return { data, error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during user profile creation: ${JSON.stringify(error)}`)
        
        if (isPostgrestError(error)) {
            return { data: null, error: error.message }
        } else {
            return { data: null, error }
        }
    }
}

export async function createUserSettings(supabase: SupabaseClient, userId: string, settings: Omit<Settings, "id" | "user_id">): Promise<{
    data: Settings | null, 
    error: string | null 
}> {
    try {
        const { data, error } = await supabase.from("settings").insert({
            user_id: userId, 
            ...settings
        })

        if (error) {
            throw error 
        }

        console.log(`[INFO] Successfully created user settings.`)
        return { data, error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during user settings creation: ${JSON.stringify(error)}`)
        
        if (isPostgrestError(error)) {
            return { data: null, error: error.message }
        } else {
            return { data: null, error }
        }
    }
}

export async function updateUserProfile(supabase: SupabaseClient, userId: string, profile: Partial<Omit<UserProfile, "id" | "user_id">>): Promise<{
    error: string | null 
}> {
    try {
        const { error } = await supabase.from("user_profiles").update({
            user_id: userId,
            ...profile
        })

        if (error) {
            throw error 
        }

        console.log(`[INFO] Successfully updated user profile.`)
        return { error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during user profile update: ${JSON.stringify(error)}`)
        
        if (isPostgrestError(error)) {
            return { error: error.message }
        } else {
            return { error }
        }
    }
}

export async function updateUserSettings(supabase: SupabaseClient, userId: string, settings: Partial<Omit<Settings, "id" | "user_id">>): Promise<{
    error: string | null 
}> {
    try {
        const { error } = await supabase.from("settings").update({
            user_id: userId,
            ...settings
        })

        if (error) {
            throw error 
        }

        console.log(`[INFO] Successfully updated user settings.`)
        return { error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during user settings update: ${JSON.stringify(error)}`)
        
        if (isPostgrestError(error)) {
            return { error: error.message }
        } else {
            return { error }
        }
    }
}
