import Container from "./Container";

export default function Header() {
    
    return(
        <div className="py-[24px] border-b-2 border-gray">
            <Container>
            <h1 className="text-medium text-[#FFF] flex justify-between items-center ">
               
                <div className="lap:text-lg tablet:text-[20px] space-x-1">
                    <span className="text-primary">{'<C/>'}</span>
                    <span>Ahmed alkhatim</span>
                </div>
                {/* <ul className="lap:text-[24px] flex space-x-3">
                    <li className="text-primary">Home</li>
                    <li>Blogs</li>
                </ul> */}
                <div className="hidden tablet:flex space-x-[32px]">
                    <a href = "https://linkedin.com/in/ahmed-alkhatim" target="_blank" ><img src="/icons/discord.svg" alt="linkedin"/></a>
                    <a href = "https://github.com/Ahmed-Alkhatim" target="_blank"><img src="/icons/github.svg" alt="github"/></a>
                    <a href = "https://instagram.com/ahmed__alkhatim" target="_blank"><img src="/icons/instagram.svg" alt="instagram"/></a>
                </div>
            </h1>
        </Container>
        </div>

    )
}