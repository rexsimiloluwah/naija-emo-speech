import { PostgrestError, SupabaseClient } from "@supabase/supabase-js"
import { Prompt, PromptValidation } from "@/types/db"
import { isPostgrestError } from "@/lib/utils"

export async function createPrompt(supabase: SupabaseClient, userId: string, prompt: Omit<Prompt, "id" | "user_id" | "is_contribution">): Promise<{  
    error: string | null 
 }> {
    try {
        const { data, error } = await supabase.from("prompts").insert({
            user_id: userId, 
            is_contribution: true, 
            ...prompt
        })

        if (error) {
            throw error 
        }

        console.log(`[INFO] Successfully created a new prompt.`)
        return { error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during creation of prompt: ${JSON.stringify(error)}`)

        if (isPostgrestError(error)) {
            return { error: error.message }
        } else {
            return { error }
        }
    }
}

export async function seedPrompts(supabase: SupabaseClient, promptsData: Prompt[]): Promise<{
    error: string | null 
}> {
    try {
        const { error } = await supabase.from("prompts").insert(promptsData)
        if (error) throw error
        
        console.log(`[INFO] Successfully created ${promptsData.length} prompts.`)
        return { error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during prompts creation: ${error}`)
        
        if (isPostgrestError(error)) {
            return { error: error.message }
        } else {
            return { error }
        }
    }
}

export async function fetchRandomPrompt(supabase: SupabaseClient): Promise<{
    data: Prompt | null, 
    error: string | null
}> {
    try {
        const { data, error } = await supabase.from("prompts").select("*").limit(1)
        if (error) throw error 

        if (data.length > 0) {
            const randomPromptData = data[0]
            console.log(`[INFO] Successfully fetched random prompt: ${JSON.stringify(randomPromptData)}`)
            return { data: randomPromptData, error: null }
        } else {
            console.log(`[INFO] No prompts found.`)
            return { data: null, error: "No prompts found." }
        }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred while fetching random prompt: ${JSON.stringify(error)}`)
        
        if (isPostgrestError(error)) {
            return { data: null, error: error.message }
        } else {
            return { data: null, error }
        }
    }
}

/** Fetch random prompts that the user has not recorded */
export async function fetchRandomPromptsForUser(supabase: SupabaseClient, userId: string, amount: number): Promise<{
    data: Partial<Prompt>[] | null,
    error: string | null 
}> {
    try {
        const { data, error } = await supabase 
            .from("prompts")
            .select("id, prompt_text, emotional_label")
            .not("id", "in", supabase.from("audio_recordings").select("prompt_id").eq("user_id", userId))
            .order("random()")
            .limit(amount)

        if (error) throw error 

        if (data.length === 0) {
            console.log(`[INFO] No prompts available for user ${userId}.`)
            return { data: null, error: "No prompts available for this user." }
        }

        console.log(`[INFO] Fetched ${amount} random prompts for user ${userId}.`)
        return { data, error: null } 
    } catch (error: any) {
        console.error(`[ERROR] An error occurred when fetching prompts for user: ${error}`)
        
        if (isPostgrestError(error)) {
            return { data: null, error: error.message }
        } else {
            return { data: null, error }
        }
    }
}

export async function validatePrompt(supabase: SupabaseClient, userId: string, promptId: string, isValid: boolean, feedback?: string): Promise<{
    error: string | null 
}> {
    try {
        const { error } = await supabase.from("prompt_validations").insert({
            user_id: userId,
            is_valid: isValid, 
            prompt_id: promptId,
            feedback: feedback
        })

        if (error) {
            throw error 
        }

        console.log(`[INFO] Successfully validated a prompt`)
        return { error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during validation of prompt: ${JSON.stringify(error)}`)
        
        if (isPostgrestError(error)) {
            return { error: error.message }
        } else {
            return { error }
        }
    }
}