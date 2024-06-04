import Link from "next/link";

export default function Footer(){
    const footerLinks = [
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Privacy Policy",
            link: "/privacy-policy"
        },
        {
            title: "FAQs",
            link: "/faqs"
        }
    ]

    return (
        <div className="bg-primary text-primary-foreground flex justify-between items-center p-4">
            <h1>&copy; NaijaEmoSpeech {new Date().getFullYear()}</h1>
            <ul className="flex gap-4 items-center">
                {footerLinks.map(({title, link}, i) => <li key={i} className="hover:underline underline-offset-4"><Link href={link}>{title}</Link></li>)}
            </ul>
        </div>
    )
}