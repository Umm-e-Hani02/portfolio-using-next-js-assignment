export default function Skills() {
    return (
        <section className="h-[44rem] bg-purple-950 flex flex-wrap gap-4 items-center justify-center text-white" id="skills">
            <div className="flex flex-col items-center mt-1">
                <img className="h-36 object-cover " src="png/sketch.png" alt="Sketch" />
                <p className="pt-11">Sketching</p>
            </div>
            <div className="flex flex-col items-center">
                <img className="h-48 object-cover" src="png/html.png" alt="HTML" />
                <p>HTML</p>
            </div>
            <div className="flex flex-col items-center">
                <img className="h-48 object-cover" src="png/css.png" alt="CSS" />
                <p className="">CSS</p>
            </div>
            
            <div className="flex gap-12 w-full justify-center mb-28">
                <div className="flex flex-col items-center">
                    <img className="h-36 object-cover rounded-xl" src="png/javascript.png" alt="JavaScript" />
                    <p className="pt-6">JavaScript</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="h-36 object-cover" src="png/typescript.png" alt="TypeScript" />
                    <p className="pt-6">TypeScript</p>
                </div>
            </div>

        </section>
    )
}