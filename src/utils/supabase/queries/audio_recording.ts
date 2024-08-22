import { SupabaseClient } from "@supabase/supabase-js"
import path from "path"
import fs from "fs"
import { AudioRecording } from "@/types/db"
import { isPostgrestError } from "@/lib/utils"

export async function fetchRandomAudioRecording(supabase: SupabaseClient): Promise<{
    data: AudioRecording | null, 
    error: string | null 
}> {
    try {
        const { data, error } = await supabase.from("audio_recordings").select("*")
        if (error) throw error 

        console.log(data)

        if (data.length > 0) {
            const randomAudioRecording = data[0]
            console.log(`[INFO] Successfully fetched random audio recording: ${JSON.stringify(randomAudioRecording)}`)
            return { data: randomAudioRecording, error: null }
        } else {
            console.log(`[INFO] No audio recordings found.`)
            return { data: null, error: "No audio recordings found" }
        }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred while fetching random audio recording: ${JSON.stringify(error)}`)
        
        if (isPostgrestError(error)) {
            return { data: null, error: error.message }
        } else {
            return { data: null, error }
        }
    }
}

export async function fetchUserAudioRecordings(supabase: SupabaseClient, userId: string): Promise<{
    data: AudioRecording[] | null, 
    error: string | null 
}> {
    try {
        const { data, error } = await supabase.from("audio_recordings").select("*").eq("userId", userId)

        if (error) throw error 
        return { data, error: null }
    } catch (error: any) {
        console.error(`[INFO] Successfully fetched audio recordings.`)
        
        if (isPostgrestError(error)) {
            return { data: null, error: error.message }
        } else {
            return { data: null, error }
        }
    }
}

export async function incrementNumRecordings(supabase: SupabaseClient, promptId: string) {
    try {
        // Perform the update to increment num_recordings 
        // @ts-ignore
        const { data: _, error } = await supabase.rpc("increment_num_recordings", { prompt_id: promptId })

        if (error) throw error 

        console.log(`[INFO] Num recordings successfully incremented`)
    } catch (error) {
        console.error(`[ERROR] An error occurred when incrementing num_recordings: ${JSON.stringify(error)}`)
    }
}

export async function incrementNumRecordingValidations(supabase: SupabaseClient, recordingId: string) {
    try {
        // @ts-ignore
        const { data: _, error: updateError } = await supabase.rpc("increment_num_validations", {
            recording_id: recordingId
        })

        if (updateError) throw updateError 
        console.log(`[INFO] Num validations successfully incremented`)
    } catch (error) {
        console.error(`[ERROR] An error occurred when incrementing num_validations for audio recording: ${JSON.stringify(error)}`)
    }
}

export async function uploadAudioRecording(supabase: SupabaseClient, filePath: string, userId: string, promptId: string): Promise<{
    data: AudioRecording | null, 
    error: string | null 
}> {
    try {
        const fileName = path.basename(filePath)
        const fileBuffer = fs.readFileSync(filePath)

        const { data: _, error } = await supabase.storage.from("audio_recordings").upload(`${userId}/${fileName}`, fileBuffer)

        if (error) throw error 

        const { data: publicUrl } = supabase.storage.from("audio_recordings").getPublicUrl(`${userId}/${fileName}`)

        const { data: recordingData, error: recordingError } = await supabase.from("audio_recordings").insert({
            user_id: userId,
            prompt_id: promptId,
            audio_url: publicUrl.publicUrl
        })

        if (recordingError) throw recordingError 

        await incrementNumRecordings(supabase, promptId)
        console.log(`[INFO] Audio recording uploaded successfully: ${JSON.stringify(recordingData)}`)
        return { data: recordingData, error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred during uploading of audio recording: ${JSON.stringify(error)}`)
        
        if (isPostgrestError(error)) {
            return { data: null, error: error.message }
        } else {
            return { data: null, error }
        }
    }
}

export async function validateAudioRecording(supabase: SupabaseClient, userId: string, recordingId: string, isValid: boolean, feedback?: string): Promise<{
    error: string | null 
}> {
    try {
        const { data, error } = await supabase
            .from("audio_recording_validations")
            .insert({
                user_id: userId,
                audio_recording_id: recordingId,
                is_valid: isValid,
                feedback: feedback 
            })

        if (error) throw error 

        // Update the `num_validations` count in the `audio_recordings` table 
        await incrementNumRecordingValidations(supabase, recordingId)

        console.log(`[INFO] Validation recorded successfully for recording ${recordingId}`)
        return { error: null }
    } catch (error: any) {
        console.error(`[ERROR] An error occurred when validating audio recording: ${JSON.stringify(error)}`)
        
        if (isPostgrestError(error)) {
            return { error: error.message }
        } else {
            return { error }
        }
    }
}
