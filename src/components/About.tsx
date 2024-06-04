import React from 'react'
import Container from './Container'
import { Header } from './Header'

const About = () => {
  return (
    <div className="bg-gray-100 border-t-[1px] border-gray-100">
        <Container>
            <h2 className="text-2xl md:text-3xl font-bold mb-6"><span className="text-secondary">About</span> <span className="text-primary">NaijaEmoSpeech</span></h2>

            <div className="flex flex-col gap-3">
                <p>Nigerian Accented English is rich in emotional expression, but often misunderstood by currently available speech technologies. This is because existing speech recognition systems are primarily trained on standard varieties of English, failing to account for unique tonal patterns, inflections, and linguistic nuances present in Nigerian English.</p>
                <p>To address this issue, NaijaEmoSpeech is crowdsourcing authentic voice samples to build a diverse database for developing advanced emotion recognition systems tailored to Nigerian accents and tones.</p>
                <p>By adding your voice, you&apos;ll be part of groundbreaking research to help AI to better comprehend the nuances of Nigerian Accented English emotions. From customer service to healthcare, this technology will power more natural and emphathetic human-machine interactions.</p>
                <p>Whether Yoruba, Igbo, Edo, Fulani, Tiv; your contribution matters. Record your voice samples today and be a pioneer in making machines truly understand how Nigerians speak.</p>
            </div>
            <div>
            </div>            
        </Container>
    </div>
  )
}

export default About