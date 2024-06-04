import { EmotionLabel } from "@/types/emotion"

type EmotionData = {
    emotionLabel: EmotionLabel;
    text: string;
    languageAccent: string;
}

export const dummyEmotionsData: EmotionData[] = [
    {
        emotionLabel: EmotionLabel.Happy,
        text: "I just got a promotion at work, and everyone is celebrating!",
        languageAccent: "Yoruba"
    },
    {
        emotionLabel: EmotionLabel.Sad,
        text: "My best friend is moving away, and it's hard to say goodbye.",
        languageAccent: "Igbo"
    },
    {
        emotionLabel: EmotionLabel.Angry,
        text: "The way they treated us was absolutely unacceptable!",
        languageAccent: "Hausa"
    },
    {
        emotionLabel: EmotionLabel.Fearful,
        text: "There were some strange noises outside last night that kept me up.",
        languageAccent: "Efik"
    },
    {
        emotionLabel: EmotionLabel.Disgusted,
        text: "The state of the public restrooms was just awful.",
        languageAccent: "Ibibio"
    },
    {
        emotionLabel: EmotionLabel.Surprised,
        text: "I didn't expect to see you here, what a pleasant surprise!",
        languageAccent: "Kanuri"
    },
    {
        emotionLabel: EmotionLabel.Neutral,
        text: "I just got back from the market, it was an ordinary day.",
        languageAccent: "Ijaw"
    }
]