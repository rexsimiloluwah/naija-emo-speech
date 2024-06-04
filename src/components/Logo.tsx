import { Mic } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div className="flex flex-row gap-3 text-base md:text-xl items-center">
        <Mic />
        <h3>NaijaEmoSpeech</h3>
    </div>
  )
}

export default Logo