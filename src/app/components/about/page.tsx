import ButtonCard from "../card/ButtonCard"
import Image from "next/image"
export default function About(){
    return(
    <section className="bg-purple-950 flex">
        <div>
            
            <Image className=" object-cover p-16 m-10"
            src="/images/pfp.jpg"
            height={550}
            width={550}
            alt="pfp"/>
            
        </div>

        <div className="-ml-20 mt-28">
            <h1 className="text-4xl font-semibold text-yellow-600">Who Am I?</h1> <br/>
            <p>Hello! I'm Umm-E-Hani, a 14-year-old tech enthusiast and 9th-grade science student with a passion <br/> for technology and innovation. I am currently part of the Governor Sindh IT Initiative, where Im <br/> delving into fields like AI, Metaverse, and Web 3.0. My journey in tech started with a curiosity to <br/> understand how things work, which has now turned into a dedicated pursuit of skills in <br/> programming and development. <br/><br/> Balancing my school studies with my passion, I aim to become a skilled full-stack developer and <br/> certified AI expert, using creativity and technology to make a meaningful impact. I believe in <br/> constant learning and am excited about all the future holds. Let's connect on LinkedIn or GitHub to <br/> follow my journey and share ideas!</p> <br/> <hr />
            <ButtonCard
            text="Download CV"
            href="https://hackathon-milestones1-2-journey.vercel.app/"/>
        </div>
    </section>
    )
}