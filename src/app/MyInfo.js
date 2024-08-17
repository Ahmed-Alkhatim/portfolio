import { Container } from "@/components";

export default function MyInfo() {
    return(
        <div>
            <h1 className="lap:block hidden mb-[64px] text-xlg text-primary text-center">Developer</h1>

             <div className="m-auto mb-10 w-[320px] p-[24px] pb-[36px] border-[4px] border-[#FFF] rounded-tl-[160px] rounded-br-[160px] space-y-[32px]">

                <div className="text-center">
                    <div className="inline-block m-auto">
                        <img src="/profile.png" alt="portfolio"/>
                    </div>
                    <h2 className="text-lg">Alkhatim</h2>
                    <p className="text-medium">Front-end developer</p>
                </div>

                <ul className="text-medium space-y-[16px]">
                    <li className="space-x-2">
                        <img src="/icon-mail.png" className="inline-block"/>
                        <span>alkhatimaw@gmail.com</span>
                    </li>
                    <li className="space-x-2">
                        <img src="/icon-map-pin.png" className="inline-block"/>
                        <span>Emirates</span>
                    </li>
                    <li className="space-x-2">
                        <img src="/icon-briefcase.png" className="inline-block"/>
                        <span>Full-time / Freelancer</span>    
                    </li>
                    <li className="space-x-2">
                        <img src="/icon-link.png" className="inline-block"/>
                        <span>alkhatim.vercel.app</span>
                    </li>
                    <li className="space-x-2">
                        <a className="text-sm" href="tel:+971544474970">+971544474970</a>
                    </li>

                </ul>
                <div className="text-[#000]">
                    <button className="bg-primary px-[16px] rounded-full mt-2 mr-2">HTML</button>
                    <button className="bg-primary px-[16px] rounded-full mt-2 mr-2">CSS</button>
                    <button className="bg-primary px-[16px] rounded-full mt-2 mr-2">JS</button>
                    <button className="bg-primary px-[16px] rounded-full mt-2 mr-2">React</button>
                    <button className="bg-primary px-[16px] rounded-full mt-2 mr-2">Vuejs</button>
                </div>
                {/* <button className="text-center px-[32px] py-[16px] bg-[#FFF] text-[#292F36] text-[20px] rounded-full font-medium ">Download CV <img src="/download.png" className="inline-block"/></button> */}
            </div>
        </div>
    )
}