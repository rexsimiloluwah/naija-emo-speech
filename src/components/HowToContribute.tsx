import React from 'react'
import Container from './Container'
import Link from 'next/link'

const HowToContribute = () => {
  const steps = [
    {
        id: 1,
        title: <p><Link href="/register" className="underline underline-offset-4 font-semibold hover:text-primary">Create an Account</Link>. Your personal identification details will not be collected for anonymity.</p>
    },
    {
        id: 2,
        title: <p>Visit the "Contribute" section of the <Link href="/dashboard" className="underline underline-offset-4 font-semibold hover:text-primary">Dashboard</Link>.</p>
    },
    {
        id: 3,
        title: 'Click the "Record" button to start recording an audio sample for the text and emotional tone displayed.'
    },
    {
        id: 4,
        title: "Review the recording, refine, and submit it if you're satisfied with the result."
    },
    {
        id: 5,
        title: "Voila! You have made a massive contribution 🎉."
    },
    {
        id: 6,
        title: "Repeat the process to contribute more audio samples."
    }
  ]

  return (
    <div className="bg-background border-t-[1px] border-gray-100">
        <Container>
            <h2 className="text-2xl md:text-3xl font-bold mb-6"><span className="text-secondary">How to</span> <span className="text-primary">Contribute</span></h2>

            <div className="divide-y-[2px] lg:divide-none">
                {steps.map((step, i) => (
                    <div key={i} className="p-2 lg:p-0">
                        <div className="flex items-center gap-3 text-lg">
                            <span className="bg-primary w-10 h-10 rounded-full text-white shadow-md flex justify-center items-center">{step.id}</span>
                            <span className="flex-1">{step.title}</span>
                        </div>

                        {i < steps.length-1 && <div className="hidden lg:block w-[3px] mx-[18px] h-4 bg-secondary"></div>}
                    </div>
                ))}
            </div>
            <div>
            </div>            
        </Container>
    </div>
  )
}

export default HowToContribute