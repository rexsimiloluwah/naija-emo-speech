import { SupabaseClient } from "@supabase/supabase-js"
import { Badge, Reward } from "@/types/db"
import { isPostgrestError } from "@/lib/utils"

export async function createReward(supabase: SupabaseClient, userId: string, points: number, reason: string): Promise<{
    data: Reward | null, 
    error: string | null 
}> {
    try {
        const { data, error } = await supabase.from("rewards").insert({
            user_id: userId, 
            points, 
            reason 
        })

        if (error) {
            throw error 
        }

        console.log(`[INFO] User ${userId} has successfully earned a reward.`)
        return { data, error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during creation of reward: ${error}`)

        if (isPostgrestError(error)) {
            return { data: null, error: error.message }
        } else {
            return { data: null, error }
        }
    }
}

export async function awardBadge(supabase: SupabaseClient, userId: string, badge: Omit<Badge, "id" | "user_id">): Promise<{
    data: Badge | null, 
    error: string | null 
}> {
    try {
        const { data, error } = await supabase.from("badges").insert({
            user_id: userId, 
            ...badge
        })

        if (error) {
            throw error 
        }

        console.log(`[INFO] Successfully awarded a badge to user ${userId}.`)
        return { data, error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during awarding of badge: ${error}`)

        if (isPostgrestError(error)) {
            return { data: null, error: error.message }
        } else {
            return { data: null, error }
        }
    }
}