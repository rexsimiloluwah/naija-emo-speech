import { createClient } from "@supabase/supabase-js"
import { Database } from "@/types/supabase"
import dotenv from "dotenv"

dotenv.config()

// initialize the database client
const supabase = createClient<Database>(process.env.SUPABASE_URL!, process.env.SUPABASE_API_KEY!)

export default supabase;