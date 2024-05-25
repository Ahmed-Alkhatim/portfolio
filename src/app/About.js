import { Container } from "@/components"

export default () => {
    return( <>
        <div className="bg-about bg-center bg-cover py-[64px]">
            <Container>
                <div className="space-y-[32px]">
                    <div className=" m-auto text-primary text-lg py-[16px] px-[40px] text-center border-[4px] border-primary rounded-tl-[40px] rounded-br-[40px]">
                        About me
                    </div>
                    <div className="space-y-[16px] p-[24px] bg-gray-2 rounded-[40px]">
                        <span className="text-primary text-sm inline-block">{'<p>'}</span>
                        <h2 className="text-medium ps-[16px]">
                            <span className="text-lg text-primary">Hello! </span><br />
                            My name is Sinan and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.<br />
                            I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.<br />
                            When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art project like photography.<br />
                            I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                        </h2>
                        <span className="text-primary text-sm inline-block">{'</p>'}</span>
                    </div>
                </div>
                <img className = "m-auto mt-[64px]" src="/work.png" alt=""/>
            </Container>
        </div>
    </>)
}