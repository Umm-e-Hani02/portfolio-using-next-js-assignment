import Image from "next/image"
export default function HomePage(){
    return(
        <section className="bg-slate-900 p-12 flex items-centre justify-evenly" id="home">

            <div className="mt-24 text-gray-200">

                <p>Hi There!</p>
                <h1 className="text-4xl font-semibold">
                    I am <span className="text-yellow-600">Umm-e-Hani</span>
                </h1>
                <p>I bring creativity and technology together <br/> to build engaging web experiences.</p>
                <button className="bg-yellow-600 h-10 w-32 rounded-md mt-7 hover:bg-yellow-700 active:opacity-[0.9] transition-all duration-300">
                    <a href="#contact">Hire me</a>
                    </button>
                <div className="flex mt-52 space-x-10 text-sm text-nowrap">
                    <p className="space-y-1">
                        <span>Email</span><br/> 
                        <span>hanirh2468@gmail.com</span>
                    </p>
                    <p className="space-y-1">
                        <span>Location</span><br/>
                        <span>Karachi, Pakistan</span>
                    </p>
                </div>

            </div>

            <div>
                <Image className="ml-44 -mt-16"
                src="/png/landingimg.png"
                width={500}
                height={500}
                alt="landing-img"/>
            </div>

        </section>
    )
}
