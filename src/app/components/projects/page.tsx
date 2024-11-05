import ProjectCard from "../card/ProjectCard";
import ButtonCard from "../card/ButtonCard";

export default function Projects() {
    return (
        <section className="bg-purple-950 flex justify-center items-center min-h-screen" id="projects">
            <div className="grid grid-cols-3 gap-6 p-10">

                <div className="bg-purple-800 p-4 rounded-lg flex flex-col items-center">
                    <ProjectCard
                        imageSrc="images/project1.jpeg"
                        imageAlt="CLI Calculator using Typescript"
                        title="CLI Calculator using Typescript"
                    />
                    <ButtonCard text="View Project" 
                    href="https://github.com/Umm-e-Hani02/CLI-Calculator.git"/>
                </div>

                <div className="bg-purple-800 p-4 rounded-lg flex flex-col items-center">
                    <ProjectCard
                        imageSrc="images/project2.jpeg"
                        imageAlt="CLI Number Guessing Game using Typescript"
                        title="CLI Number Guessing Game using Typescript"
                    />
                    <ButtonCard text="View Project" 
                    href="https://github.com/Umm-e-Hani02/CLI-ATM-Machine.git"/>
                </div>

                <div className="bg-purple-800 p-4 rounded-lg flex flex-col items-center">
                    <ProjectCard
                        imageSrc="images/project3.jpeg"
                        imageAlt="Photography website using HTML CSS"
                        title="Photography website using HTML CSS"
                    />
                    <ButtonCard text="View Project" 
                    href="https://photography-website-lyart.vercel.app/"/>
                </div>

                <div className="bg-purple-800 p-4 rounded-lg flex flex-col items-center">
                    <ProjectCard
                        imageSrc="images/project4.jpeg"
                        imageAlt="Milestone 1 and 2: Static Resume"
                        title="Milestone 1 and 2: Static Resume"
                    />
                    <ButtonCard text="View Project" 
                    href="https://hackathon-milestones1-2-journey.vercel.app/"/>
                </div>

                <div className="bg-purple-800 p-4 rounded-lg flex flex-col items-center">
                    <ProjectCard
                        imageSrc="images/project5.jpeg"
                        imageAlt="Milestone 3: Dynamic Resume"
                        title="Milestone 3: Dynamic Resume"
                    />
                    <ButtonCard text="View Project" 
                    href="https://hackathon-milestones3-journey.vercel.app/"/>
                </div>

                <div className="bg-purple-800 p-4 rounded-lg flex flex-col items-center">
                    <ProjectCard
                        imageSrc="images/project6.jpeg"
                        imageAlt="Milestone 4: Editable Resume"
                        title="Milestone 4: Editable Resume"
                    />
                    <ButtonCard text="View Project" 
                    href="https://hackathon-milestones4-journey.vercel.app/"/>
                </div>

                <div className="bg-purple-800 p-4 rounded-lg flex flex-col items-center">
                    <ProjectCard
                        imageSrc="images/project7.jpeg"
                        imageAlt="Milestone 5: Shareable resume"
                        title="Milestone 5: Shareable resume"
                    />
                    <ButtonCard text="View Project" 
                    href="https://hackathon-milestones5-journey.vercel.app/"/>
                </div>

                <div className="bg-purple-800 p-4 rounded-lg flex flex-col items-center">
                    <ProjectCard
                        imageSrc="images/project8.jpeg"
                        imageAlt="Dynamic routing using Nextjs"
                        title="Dynamic routing using Nextjs"
                    />
                    <ButtonCard text="View Project" 
                    href="https://country-listing-teal.vercel.app/"/>
                </div>

                <div className="bg-purple-800 p-4 rounded-lg flex flex-col items-center">
                    <ProjectCard
                        imageSrc="images/project9.jpeg"
                        imageAlt="Figma to HTMl"
                        title="Figma to HTMl"
                    />
                    <ButtonCard text="View Project" 
                    href="https://figma-to-html-nextjs-assignment.vercel.app/"/>
                </div>
            </div>
        </section>
    );
}
