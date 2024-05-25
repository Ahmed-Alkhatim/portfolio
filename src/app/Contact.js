
import { Container } from "@/components"

export default () => {

    return( 
    <div className="py-[64px]">
        <Container>
            <div className="space-y-[64px] space-y-[32px] ">
                <div>
                    <div className="text-center">
                        <h3 className="test inline-block m-auto text-xlg text-primary border-b-2  border-primary">Contact</h3>
                    </div>
                    <p className="text-center mt-5"> I’m currently available for <br /> freelance/Fulltime work</p>
                    
                </div>
                <div className=" m-auto text-primary text-[24px] py-[16px] px-[40px] text-center border-[4px] border-primary rounded-tl-[40px] rounded-br-[40px]">
                    Send me a message
                </div>
                {/* Form */}
                <div className="flex flex-wrap">
                    <div className="w-1/2 px-2 space-y-[24px]">
                        <label className="text-primary text-medium">Your name *</label>
                        <input placeholder="Enter your name"/>
                    </div>
                
                    <div className="w-1/2 px-2 space-y-[24px]">
                        <label className="text-primary text-medium">Your email *</label>
                        <input placeholder="Enter your email"/>
                    </div>
                    <div className="w-full space-y-[24px] px-2 mt-[64px]">
                        <label className="text-primary text-medium">Your message *</label>
                        <input placeholder="Enter your needs"/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
    )
}