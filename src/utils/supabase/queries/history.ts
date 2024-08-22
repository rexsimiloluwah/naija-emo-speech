import { SupabaseClient } from "@supabase/supabase-js"
import { ContributionsHistory } from "@/types/db"
import { isPostgrestError } from "@/lib/utils"

export async function fetchContributionsHistory(supabase: SupabaseClient): Promise<{
    data: ContributionsHistory[] | null,
    error: string | null 
}> {
    try {
        const { data, error } = await supabase.from("contributions_history").select("*").order("created_at")

        if (error) {
            throw error 
        }

        console.log(`[INFO] Successfully fetched contributions history.`)
        return { data, error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during adding of contributions history: ${JSON.stringify(error)}`)
        
        if (isPostgrestError(error)) {
            return { data: null, error: error.message }
        } else {
            return { data: null, error }
        }
    }
}

export async function addContributionsHistory(supabase: SupabaseClient, userId: string, historyData: Omit<ContributionsHistory, "id" | "user_id">) {
    try {
        const { data, error } = await supabase.from("contributions_history").insert({
            user_id: userId, 
            ...historyData
        })

        if (error) {
            throw error 
        }

        console.log(`[INFO] Successfully added contribution history.`)
        return { data, error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during adding of contribution history: ${JSON.stringify(error)}`)
        
        if (isPostgrestError(error)) {
            return { error: error.message }
        } else {
            return { error }
        }
    }
}