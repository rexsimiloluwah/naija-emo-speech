import { isPostgrestError } from "@/lib/utils"
import { Notification } from "@/types/db"
import { SupabaseClient } from "@supabase/supabase-js"

export async function createNotification(supabase: SupabaseClient, userId: string, notificationText: string): Promise<{
    data: Notification | null,
    error: string | null, 
}> {
    try {
        const { data, error } = await supabase.from("notifications").insert({
            notification_text: notificationText,
            user_id: userId
        })

        if (error) {
            throw error 
        }

        console.log(`[INFO] Successfully created notification.`)
        return { data, error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during notification creation: ${JSON.stringify(error)}`)
        
        if (isPostgrestError(error)) {
            return { data: null, error: error.message }
        } else {
            return { data: null, error }
        }
    }
}

export async function markNotificationAsRead(supabase: SupabaseClient, userId: string): Promise<{
    data: Notification | null, 
    error: string | null 
}> {
    try {
        const { data, error } = await supabase.from("notifications").update({
            user_id: userId, 
            is_read: true
        })

        if (error) {
            throw error 
        }

        console.log(`[INFO] Successfully marked notification as read.`)
        return { data, error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during marking notification as read: ${JSON.stringify(error)}`)
        
        if (isPostgrestError(error)) {
            return { data: null, error: error.message }
        } else {
            return { data: null, error }
        }
    }
}

export async function clearNotificationById(supabase: SupabaseClient, notificationId: string): Promise<{
    error: string | null 
}> {
    try {
        const { error } = await supabase.from("notifications").delete().eq("id", notificationId)

        if (error) {
            throw error 
        }

        console.log(`[INFO] Successfully deleted notification.`)
        return { error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during deletion of notification: ${JSON.stringify(error)}`)
        
        if (isPostgrestError(error)) {
            return { error: error.message }
        } else {
            return { error }
        }
    }
}

export async function clearAllNotifications(supabase: SupabaseClient) {
    try {
        const { error } = await supabase.from("notifications").delete()

        if (error) {
            throw error 
        }

        console.log(`[INFO] Successfully deleted all notifications.`)
        return { error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during deletion of all notifications: ${JSON.stringify(error)}`)
        
        if (isPostgrestError(error)) {
            return { error: error.message }
        } else {
            return { error }
        }
    }
}