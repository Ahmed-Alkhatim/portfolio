import { Container } from "@/components";

export default function MyInfo() {
    return(
        <Container>
             <div className="p-[24px] pb-[36px] border-[4px] border-[#FFF] rounded-tl-[160px] rounded-br-[160px] space-y-[32px]">
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
                        <span>alkhatim.com</span>
                    </li>
                </ul>
                <div className="space-x-2 space-y-2 text-[#000]">
                    <button className="bg-primary px-[16px] rounded-full">HTML</button>
                    <button className="bg-primary px-[16px] rounded-full">CSS</button>
                    <button className="bg-primary px-[16px] rounded-full">JS</button>
                    <button className="bg-primary px-[16px] rounded-full">React</button>
                    <button className="bg-primary px-[16px] rounded-full">Vuejs</button>
                </div>
                <button className="text-center px-[32px] py-[16px] bg-[#FFF] text-[#292F36] text-[20px] rounded-full font-medium ">Download CV <img src="/download.png" className="inline-block"/></button>
            </div>
        </Container>
    )
}