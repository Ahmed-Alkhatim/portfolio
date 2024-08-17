import { Container } from "@/components"

export default () => {
    return( <>
        <div className="bg-about bg-center bg-cover py-[64px]">
        <Container>
            <div className="desk:flex">
                <div className="desk:w-2/3 lap:px-[80px] space-y-[32px]">
                    <div className=" min-[600px]:inline-block  text-primary tablet:text-xlg text-lg py-[16px] px-[40px] text-center border-[4px] border-primary rounded-tl-[40px] rounded-br-[40px]">
                        About me
                    </div>
                    <div className="space-y-[16px] p-[24px] bg-gray-2 rounded-[40px]">
                        <span className="text-primary text-sm inline-block">{'<p>'}</span>
                        <h2 className="text-medium ps-[16px]">
                        <span className="text-lg text-primary">Hello! </span><br />
                            My name is Ahmed I am a seasoned <span className="text-primary">software engineer</span> with three years of hands-on experience in web development. <br />
                            Expertise in crafting intricate systems with a focus on sophisticated <span className="text-primary">state management </span> and <span className="text-primary">component architecture</span> 
                            . Committed to high-quality standards and <span className="text-primary">pixel-perfect</span> design-to-code implementation. <br />
                            Developed disciplined approaches to maintaining organized code by implementing best practices and design patterns like <span className="text-primary">MVVM </span> and <span className="text-primary"> event-driven architecture. </span>
                            Proficient in producing reusable, scalable, and easily refactored code.<br />
                            I am eager to contribute my expertise to an environment that <span className="text-primary">values and appreciates </span> the depth of skill and effort I bring to the table. Finding a workplace that fully <span className="text-primary">leverages my capabilities </span> is paramount to me, as I believe mutual recognition and utilization of expertise are essential for <span className="text-primary">professional fulfillment and success.</span>
                        </h2>
                        <span className="text-primary text-sm inline-block">{'</p>'}</span>
                    </div>
                </div>
                <div className="desk:w-1/3">
                    <img className = "m-auto mt-[64px] tablet:w-[462px]" src="/work.png" alt=""/>
                </div>
            </div>
        </Container>
        </div>
    </>)
}