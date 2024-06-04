"use client"
import React, { useMemo } from 'react'
import Container from './Container'
import CrowdsourcePieChart from './CrowdsourcePieChart'
import { useState, useEffect } from 'react'
import { EmotionLabel } from '@/types/emotion'
import { Header, SubHeader } from './Header'
import { Button } from './ui/button'
import { ArrowRightCircle } from 'lucide-react'

const emotionalData = [
    { label: EmotionLabel.Happy, count: 30 },
    { label: EmotionLabel.Sad, count: 20 },
    { label: EmotionLabel.Fearful, count: 15 },
    { label: EmotionLabel.Surprised, count:  4},
    { label: EmotionLabel.Fearful, count: 10 },
    { label: EmotionLabel.Angry, count: 5 },
    { label: EmotionLabel.Neutral, count: 8 }
];


const RecordCTA = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const emotionalDataCount = useMemo(() => (
        emotionalData.map(d => d.count).reduce((acc, curr) => acc + curr)
    ), [])

    return (
        <div className="bg-background border-t-[1px] border-gray-100">
            <Container className="flex justify-between gap-8 items-center">
                <div className="flex gap-4 flex-col">
                    <Header className="text-2xl md:text-3xl font-bold text-primary">Make a Contribution <span className="text-secondary">Today!</span></Header>
                    <SubHeader className="text-center md:text">{emotionalDataCount} samples collected, a lot more to go.</SubHeader>
                    <Button variant={"secondary"} size={"lg"} className="flex items-center gap-2 w-fit">Get Started <ArrowRightCircle className="bg-red-600 rounded-full p-1"/></Button>
                </div>
                <div className="hidden md:flex justify-center items-center">
                    {isClient && <CrowdsourcePieChart data={emotionalData} />}
                </div>
            </Container>
        </div>
    )
}

export default RecordCTA