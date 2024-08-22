export enum UserRoleEnumType {
    ADMIN = 'Admin',
    USER = 'User'
}

export enum DomainExperienceEnumType {
    EDUCATION = 'Education',
    HEALTH = 'Health',
    SCIENCE_AND_TECHNOLOGY = 'Science and Technology', 
    FASHION = 'Fashion',
    AGRICULTURE = 'Agriculture', 
    BUSINESS = 'Business',
    MANUFACTURING = 'Manufacturing', 
    CONSTRUCTION = 'Construction', 
    RETAIL = 'Retail', 
    TRANSPORTATION = 'Transportation', 
    HOSPITALITY = 'Hospitality',
    GOVERNMENT = 'Government',
    LEGAL = 'Legal',
    MEDIA_AND_ARTS = 'Media and Arts', 
    ENGINEERING = 'Engineering',
    FINANCE = 'Finance',
    OTHER_STUDENT = 'Other (Student)',
    OTHER_UNSKILLED_WORKER = 'Other (Unskilled Worker)', 
    OTHER_SKILLED_WORKER = 'Other (Skilled Worker)'
}

export enum EmotionalLabelEnumType {
    HAPPY = 'Happy',
    SAD = 'Sad',
    FEAR = 'Fear',
    DISGUST = 'Disgust',
    NEUTRAL = 'Neutral',
    ANGER = 'Anger',
    SURPRISE = 'Surprise'
}

export enum TaskEnumType {
    AUDIO_RECORDING = 'Audio_Recording',
    AUDIO_RECORDING_VALIDATION = 'Audio_Recording_Validation',
    PROMPT = 'Prompt',
    PROMPT_VALIDATION = 'Prompt_Validation',
    FEEDBACK = 'Feedback'
}

export enum AccentEnumType {
    YORUBA = 'Yoruba',
    HAUSA = 'Hausa',
    IGBO = 'Igbo',
    NIGERIAN_PIDGIN = 'Nigerian_Pidgin',
    EDO = 'Edo',
    TIV = 'Tiv',
    EFIK = 'Efik',
    IJAW = 'Ijaw',
    KANURI = 'Kanuri',
    URHOBO = 'Urhobo',
    OTHER = 'Other'
}

export enum SexEnumType {
    MALE = 'Male',
    FEMALE = 'Female'
}

export type DomainExperienceType = "Education" | "Health"
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

export type EmotionalLabelType = "Happy"
        | "Sad"
        | "Fear"
        | "Disgust"
        | "Neutral"
        | "Anger"
        | "Surprise"


export type SexType = "Male" | "Female"

export type TaskType = "Audio_Recording"
        | "Audio_Recording_Validation"
        | "Prompt"
        | "Prompt_Validation"
        | "Feedback"


export type UserRoleType = "Admin" | "User"

export type AudioRecordingValidation =  {
    audio_recording_id: string
    created_at: string | null
    feedback: string | null
    id: string
    is_valid: boolean | null
    updated_at: string | null
    user_id: string
}

export type AudioRecording = {
    audio_url: string
    created_at: string | null
    id: string
    num_validations: number | null
    prompt_id: string
    updated_at: string | null
    user_id: string
}

export type Badge = {
    badge_name: string
    created_at: string | null
    description: string | null
    id: string
    updated_at: string | null
    user_id: string
}

export type ContributionsHistory = {
    audio_recording_id: string | null
    audio_recording_validation_id: string | null
    created_at: string | null
    id: string
    prompt_feedback_id: string | null
    prompt_id: string | null
    prompt_validation_id: string | null
    task: TaskType
    updated_at: string | null
    user_id: string
}

export type Notification = {
    created_at: string | null
    id: string
    is_read: boolean | null
    notification_text: string
    updated_at: string | null
    user_id: string   
}

export type PromptFeedback = {
    created_at: string | null
    feedback: string | null
    id: string
    prompt_id: string
    rating: number | null
    updated_at: string | null
    user_id: string
}

export type PromptValidation = {
    created_at: string | null
    feedback: string | null
    id: string
    is_valid: boolean | null
    prompt_id: string
    updated_at: string | null
    user_id: string   
}

export type Prompt = {
    created_at: string | null
    emotional_label: EmotionalLabelType
    id: string
    is_contribution: boolean | null
    num_recordings: number | null
    num_validations: number | null
    prompt_text: string
    updated_at: string | null
    user_id: string | null
}

export type Reward = {
    created_at: string | null
    id: string
    points: number
    reason: string
    updated_at: string | null
    user_id: string
}

export type Settings = {
    created_at: string | null
    data_retention_period: string | null
    encryption_preference: string | null
    id: string
    notification_preferences: string | null
    preferred_language: string | null
    updated_at: string | null
    user_id: string
}

export type UserProfile = {
    accent_type: string | null
    age: number | null
    created_at: string | null
    domain_experience:
    | DomainExperienceType
    | null
    id: string
    sex: SexType | null
    state_of_origin: string | null
    state_of_residence: string | null
    updated_at: string | null
    user_id: string
    user_role: UserRoleType | null
}