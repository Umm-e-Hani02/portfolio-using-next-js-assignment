import Link from "next/link"
export default function Contact(){
    return(

        <section className="bg-purple-950 h-[43rem] flex items-center justify-between" id="contact">
            
            <div className="items-center pl-5 ml-40">
                <div className=" flex items-center m-5 mb-12">
                    <img className="h-8 pl-2" src="png/email.png" alt="email" />
                    <p className="pl-1">hanirh2468@gmail.com</p>
                </div>
                <div className="flex items-center m-5 mb-12">
                    <img className="h-8 pl-2" src="png/location.png" alt="location" />
                    <p>Karachi, Pakistan</p>
                </div>
                <div className="flex items-center m-5 mb-12"> 
                    <img className="h-12" src="png/linkedin.png" alt="linkdein" />
                    <Link href="https://www.linkedin.com/in/umm-e-hani-400b812b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">www.linkedin.com</Link>
                </div>
                <div className="flex items-center m-5 mb-12">
                    <img className="h-9 pl-1" src="png/github.png" alt="github" />
                    <Link className="pl-2" href="https://github.com/Umm-e-Hani02" target="_blank">www.github.com</Link>
                </div>
            </div>

            <div className="hidden md:block border-l-2 border-white h-[40%] mx-4"></div>

            <form className="mr-52 mt-2">
                <legend className="mb-2">Your Name:</legend>
                <input className="rounded-md mb-4 active:border-none" type="text" name="name"  required/>
                <legend className="mb-2">Your Email:</legend>
                <input className="rounded-md mb-4" type="email" name="email" required/>
                <legend className="mb-2">Your message:</legend>
                <textarea className="rounded-lg" name="message" id="message" rows={9} cols={30}></textarea> <br/>
                <button className="bg-yellow-600 h-10 w-32 rounded-md mt-7 hover:bg-yellow-700 active:opacity-[0.9] transition-all duration-300" type="submit"> Submit </button>
            </form>
        </section> 
    )
}