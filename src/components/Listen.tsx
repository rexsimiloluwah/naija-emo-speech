import React from 'react'
import Container from './Container'
import { AudioLines, PlayCircle } from 'lucide-react'
import { FaPlay } from "react-icons/fa"
import { dummyEmotionsData } from '@/data/emotions'
import { emotionColors, getEmotionLabelColor } from '@/utils/emotion'

const Listen = () => {
  return (
    <div className="bg-gray-100 border-t-[1px] border-gray-100">
        <Container>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2"><AudioLines className="text-secondary" /> <span className="text-secondary">Listen to</span> <span className="text-primary">Audio Samples</span></h2>

            <div className="grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {dummyEmotionsData.map(({emotionLabel, languageAccent, text}, i) => {
                    return (
                        <div key={i} className="bg-background px-6 pt-12 pb-8 rounded-lg shadow-lg relative">
                            <div className="absolute top-3 left-3 flex gap-2">
                                <span className={`${emotionColors[emotionLabel]} rounded-md px-2 shadow-md`}>{emotionLabel}</span>
                                <span className="bg-green-200 rounded-md px-2 shadow-md">{languageAccent}</span>
                            </div>

                            <button className="absolute top-2 right-4 bg-secondary w-10 h-10 rounded-full flex justify-center items-center shadow-md text-white"><FaPlay /></button>

                            <p className="text-lg">{text}</p>
                        </div>
                    )
                })}
            </div>
            <div>
            </div>            
        </Container>
    </div>
  )
}

export default Listen