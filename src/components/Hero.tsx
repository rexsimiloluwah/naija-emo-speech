import React from 'react'
import Container from './Container'
import { Header, SubHeader } from './Header'
import { Button } from './ui/button'
import { ArrowDown, ArrowRightCircle } from 'lucide-react'

const Hero = () => {
  return (
    <div className="w-full py-8">
        <Container className="flex justify-center text-center flex-col gap-8 items-center">
            <Header>Welcome to <span className="text-primary">NaijaEmoSpeech</span></Header>
            <SubHeader className="max-w-3xl">NaijaEmoSpeech is an application for crowdsourcing Nigerian accented audio samples for multimodal speech emotion recognition.</SubHeader>
            <div className="flex flex-row gap-4 items-center">
                <Button variant={"default"} size={"lg"} className="flex items-center gap-2">How to Contribute? <ArrowDown className="motion-safe:animate-bounce bg-green-600 rounded-full p-1"/></Button>
                <Button variant={"secondary"} size={"lg"} className="flex items-center gap-2">Get Started <ArrowRightCircle className="bg-red-600 rounded-full p-1"/></Button>
            </div>
        </Container>
    </div>
  )
}

export default Hero