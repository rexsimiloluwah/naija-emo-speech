"use client"
import React, { useRef, useState } from "react"
import Container from "./Container";
import { MinusIcon, PlusIcon } from "lucide-react";

type FAQsCardProps = {
    question: string;
    answer: string;
    id: number;
}

const FaqsCard: React.FC<FAQsCardProps> = (props) => {
    const answerElRef = useRef<HTMLDivElement|null>(null)
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { id, question, answer } = props

    const handleOpenAnswer = () => {
        const answerElH = (answerElRef.current?.childNodes[0] as any).offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={id}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {question}

                <button className="hover:bg-green-100 hover:shadow-md w-10 h-10 rounded-full flex justify-center items-center">
                    {
                        state ? (
                            <MinusIcon />
                        ) : (
                            <PlusIcon />
                        )
                    }
                </button>
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function FAQs(){
    const faqsList = [
        {
            question: "Is my data private?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, inventore?"
        },
        {
            question: "Can I record in a noisy environment?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, inventore?"
        }
    ]
  
    return (
        <div className="bg-gray-100 border-t-[1px] border-gray-100">
            <Container>
                <h2 className="text-2xl md:text-3xl font-bold mb-6"><span className="text-secondary">Frequently Asked</span> <span className="text-primary">Questions</span></h2>
                <p className="text-lg text-gray-500">Still Confused? Contact Us.</p>

                <div className="w-full mx-auto mt-12">
                    {
                        faqsList.map(({question, answer}, idx) => (
                            <FaqsCard
                                key={idx}
                                question={question}
                                answer={answer}
                                id={idx}
                            />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}