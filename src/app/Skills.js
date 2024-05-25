import { Container } from "@/components"

export default () => {
    return(
        <div className="bg-code bg-cover bg-center py-[64px]">
            <Container>
                <div className="space-y-[64px] ">
                    <div>
                        <div className="text-center">
                            <h3 className="test inline-block m-auto text-xlg text-primary border-b-2  border-primary">Skills</h3>
                        </div>
                        {/* <p className="text-center">I am striving to never stop <br /> learning and improving</p> */}
                        <p className="text-center mt-5"> Motivated by the fear of <br /> being average</p>
                    </div>
                    <div className="space-y-[32px]">
                        <div className="text-black bg-[#98FAEC] border-l-[12px] border-[#0C73B8] rounded-[8px]">
                            <div className="px-[24px] py-[16px] space-y-2 text-center">
                                <img src="/desktop.png" alt="" className="inline-block"/>
                                <h6 className="text-[24px]">web developement</h6>
                                <p className="text-medium">HTML·CSS·JS·REACT</p>
                            </div>
                        </div>
                        <div className="text-black bg-[#98FAEC] border-l-[12px] border-[#28A9E0] rounded-[8px]">
                            <div className="px-[24px] py-[16px] space-y-2 text-center">
                                <img src="/mobile.png" alt="" className="inline-block"/>
                                <h6 className="text-[24px]">App developement</h6>
                                <p className="text-medium">iOS·Android</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </Container>
        </div>
    )
}