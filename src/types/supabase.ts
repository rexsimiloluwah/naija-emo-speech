export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      audio_recording_validations: {
        Row: {
          audio_recording_id: string
          created_at: string | null
          feedback: string | null
          id: string
          is_valid: boolean | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          audio_recording_id: string
          created_at?: string | null
          feedback?: string | null
          id?: string
          is_valid?: boolean | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          audio_recording_id?: string
          created_at?: string | null
          feedback?: string | null
          id?: string
          is_valid?: boolean | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "audio_recording_validations_audio_recording_id_fkey"
            columns: ["audio_recording_id"]
            isOneToOne: false
            referencedRelation: "audio_recordings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audio_recording_validations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      audio_recordings: {
        Row: {
          audio_url: string
          created_at: string | null
          id: string
          num_validations: number | null
          prompt_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          audio_url: string
          created_at?: string | null
          id?: string
          num_validations?: number | null
          prompt_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          audio_url?: string
          created_at?: string | null
          id?: string
          num_validations?: number | null
          prompt_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "audio_recordings_prompt_id_fkey"
            columns: ["prompt_id"]
            isOneToOne: false
            referencedRelation: "prompts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audio_recordings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      badges: {
        Row: {
          badge_name: string
          created_at: string | null
          description: string | null
          id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          badge_name: string
          created_at?: string | null
          description?: string | null
          id?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          badge_name?: string
          created_at?: string | null
          description?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "badges_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      contributions_history: {
        Row: {
          audio_recording_id: string | null
          audio_recording_validation_id: string | null
          created_at: string | null
          id: string
          prompt_feedback_id: string | null
          prompt_id: string | null
          prompt_validation_id: string | null
          task: Database["public"]["Enums"]["task_type"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          audio_recording_id?: string | null
          audio_recording_validation_id?: string | null
          created_at?: string | null
          id?: string
          prompt_feedback_id?: string | null
          prompt_id?: string | null
          prompt_validation_id?: string | null
          task: Database["public"]["Enums"]["task_type"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          audio_recording_id?: string | null
          audio_recording_validation_id?: string | null
          created_at?: string | null
          id?: string
          prompt_feedback_id?: string | null
          prompt_id?: string | null
          prompt_validation_id?: string | null
          task?: Database["public"]["Enums"]["task_type"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contributions_history_audio_recording_id_fkey"
            columns: ["audio_recording_id"]
            isOneToOne: false
            referencedRelation: "audio_recordings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contributions_history_audio_recording_validation_id_fkey"
            columns: ["audio_recording_validation_id"]
            isOneToOne: false
            referencedRelation: "audio_recording_validations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contributions_history_prompt_feedback_id_fkey"
            columns: ["prompt_feedback_id"]
            isOneToOne: false
            referencedRelation: "prompt_feedback"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contributions_history_prompt_id_fkey"
            columns: ["prompt_id"]
            isOneToOne: false
            referencedRelation: "prompts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contributions_history_prompt_validation_id_fkey"
            columns: ["prompt_validation_id"]
            isOneToOne: false
            referencedRelation: "prompt_validations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contributions_history_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          notification_text: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          notification_text: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          notification_text?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      prompt_feedback: {
        Row: {
          created_at: string | null
          feedback: string | null
          id: string
          prompt_id: string
          rating: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          feedback?: string | null
          id?: string
          prompt_id: string
          rating?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          feedback?: string | null
          id?: string
          prompt_id?: string
          rating?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "prompt_feedback_prompt_id_fkey"
            columns: ["prompt_id"]
            isOneToOne: false
            referencedRelation: "prompts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prompt_feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      prompt_validations: {
        Row: {
          created_at: string | null
          feedback: string | null
          id: string
          is_valid: boolean | null
          prompt_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          feedback?: string | null
          id?: string
          is_valid?: boolean | null
          prompt_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          feedback?: string | null
          id?: string
          is_valid?: boolean | null
          prompt_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "prompt_validations_prompt_id_fkey"
            columns: ["prompt_id"]
            isOneToOne: false
            referencedRelation: "prompts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prompt_validations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      prompts: {
        Row: {
          created_at: string | null
          emotional_label: Database["public"]["Enums"]["emotional_label_type"]
          id: string
          is_contribution: boolean | null
          num_recordings: number | null
          num_validations: number | null
          prompt_text: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          emotional_label: Database["public"]["Enums"]["emotional_label_type"]
          id?: string
          is_contribution?: boolean | null
          num_recordings?: number | null
          num_validations?: number | null
          prompt_text: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          emotional_label?: Database["public"]["Enums"]["emotional_label_type"]
          id?: string
          is_contribution?: boolean | null
          num_recordings?: number | null
          num_validations?: number | null
          prompt_text?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prompts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      rewards: {
        Row: {
          created_at: string | null
          id: string
          points: number
          reason: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          points: number
          reason: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          points?: number
          reason?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rewards_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      settings: {
        Row: {
          created_at: string | null
          data_retention_period: string | null
          encryption_preference: string | null
          id: string
          notification_preferences: string | null
          preferred_language: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          data_retention_period?: string | null
          encryption_preference?: string | null
          id?: string
          notification_preferences?: string | null
          preferred_language?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          data_retention_period?: string | null
          encryption_preference?: string | null
          id?: string
          notification_preferences?: string | null
          preferred_language?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "settings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          accent_type: string | null
          age: number | null
          created_at: string | null
          domain_experience:
            | Database["public"]["Enums"]["domain_experience_type"]
            | null
          id: string
          sex: Database["public"]["Enums"]["sex_type"] | null
          state_of_origin: string | null
          state_of_residence: string | null
          updated_at: string | null
          user_id: string
          user_role: Database["public"]["Enums"]["user_role_type"] | null
        }
        Insert: {
          accent_type?: string | null
          age?: number | null
          created_at?: string | null
          domain_experience?:
            | Database["public"]["Enums"]["domain_experience_type"]
            | null
          id?: string
          sex?: Database["public"]["Enums"]["sex_type"] | null
          state_of_origin?: string | null
          state_of_residence?: string | null
          updated_at?: string | null
          user_id: string
          user_role?: Database["public"]["Enums"]["user_role_type"] | null
        }
        Update: {
          accent_type?: string | null
          age?: number | null
          created_at?: string | null
          domain_experience?:
            | Database["public"]["Enums"]["domain_experience_type"]
            | null
          id?: string
          sex?: Database["public"]["Enums"]["sex_type"] | null
          state_of_origin?: string | null
          state_of_residence?: string | null
          updated_at?: string | null
          user_id?: string
          user_role?: Database["public"]["Enums"]["user_role_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "user_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      domain_experience_type:
        | "Education"
        | "Health"
        | "Science and Technology"
        | "Fashion"
        | "Agriculture"
        | "Business"
        | "Manufacturing"
        | "Construction"
        | "Retail"
        | "Transportation"
        | "Hospitality"
        | "Government"
        | "Legal"
        | "Media and Arts"
        | "Engineering"
        | "Finance"
        | "Other (Unskilled Worker)"
        | "Other (Skilled Worker)"
        | "Other (Student)"
      emotional_label_type:
        | "Happy"
        | "Sad"
        | "Fear"
        | "Disgust"
        | "Neutral"
        | "Anger"
        | "Surprise"
      sex_type: "Male" | "Female"
      task_type:
        | "Audio_Recording"
        | "Audio_Recording_Validation"
        | "Prompt"
        | "Prompt_Validation"
        | "Feedback"
      user_role_type: "Admin" | "User"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
