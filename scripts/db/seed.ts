import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv"
import path from "path"
import fs from "fs"
import { Database } from "@/types/supabase";
import { getRandomNumberBetween } from "@/lib/utils";
import { fetchRandomPrompt, fetchRandomPromptsForUser, seedPrompts } from "@/utils/supabase/queries/prompt";
import { fetchRandomAudioRecording, uploadAudioRecording } from "@/utils/supabase/queries/audio_recording";
import { signIn } from "@/utils/supabase/queries/auth";

dotenv.config()

const testUserProfile = {
    accent_type: "Yoruba", 
    age: getRandomNumberBetween(10, 50),
    domain_experience: "Engineering",
    state_of_origin: "Lagos",
    state_of_residence: "Lagos",
    user_role: "User"
} 

// initialize the supabase client for seeding
const supabase = createClient<Database>(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

const main = async () => {
    const { data: loginResponse, error: _ } = await signIn(supabase, "testuser@gmail.com", "secret")

    if (!loginResponse?.user) return 

    // const promptsData = JSON.parse(fs.readFileSync(path.join(__dirname, "data", "prompts.json"), "utf-8"))
    // await seedPrompts(supabase, promptsData)

    // Fetch a random prompt
    const { data: prompt, error: __ } = await fetchRandomPrompt(supabase)

    if (!prompt) return 

    // // Upload a new audio recording
    // await uploadAudioRecording(
    //     supabase,
    //     path.join(__dirname, "audios", "therapy.wav"),
    //     loginResponse.user.id,
    //     prompt?.id
    // )
    
    const { data: recordingData, error: ___ } = await fetchRandomAudioRecording(supabase)

    if (!recordingData) return 

    // // Validate an audio recording
    // await validateAudioRecording(
    //     loginResponse.user.id,
    //     (recordingData as AudioRecording).id,
    //     Math.random() > 0.5,
    //     "Accurate."
    // )
}

main()