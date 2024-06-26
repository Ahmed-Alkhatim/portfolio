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
                    <img src="/icons/discord.svg" alt=""/>
                    <img src="/icons/github.svg" alt=""/>
                    <img src="/icons/instagram.svg" alt=""/>
                </div>
            </h1>
        </Container>
        </div>

    )
}