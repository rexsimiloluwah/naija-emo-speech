import { EmotionLabel } from "@/types/emotion";

export const getEmotionLabelColor = (emotionLabel: EmotionLabel) => {
    switch (emotionLabel) {
        case EmotionLabel.Happy:
            return "#FFD700"
        case EmotionLabel.Sad:
            return "#808080"
        case EmotionLabel.Neutral:
            return "#1E90FF"
        case EmotionLabel.Angry:
            return "#FF4500"
        case EmotionLabel.Fearful:
            return "#8A2BE2"
        case EmotionLabel.Surprised:
            return "#FF69B4"
        case EmotionLabel.Disgusted:
            return "#006400"
        default:
            return "#1E90FF"
    }
}

export const emotionColors: { [key in EmotionLabel]: string } = {
    [EmotionLabel.Happy]: "bg-yellow-300",    // Gold
    [EmotionLabel.Sad]: "bg-blue-300",        // Dodger Blue
    [EmotionLabel.Angry]: "bg-red-300",       // Orange Red
    [EmotionLabel.Fearful]: "bg-purple-300",  // Blue Violet
    [EmotionLabel.Disgusted]: "bg-green-300", // Dark Green
    [EmotionLabel.Surprised]: "bg-pink-300",  // Hot Pink
    [EmotionLabel.Neutral]: "bg-gray-300"     // Gray
};