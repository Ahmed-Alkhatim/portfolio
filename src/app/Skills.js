import { Container } from "@/components"

export default () => {

    const languages = [
        { name : 'HTML', icon : 'html.png', color : 'html'},
        { name : 'CSS', icon : 'css.png', color : 'css'},
        { name : 'JS', icon : 'node.png', color : 'js'},
        { name : 'REACT', icon : 'react.png', color : 'react'}
    ]
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
                    <div className=" tablet:flex justify-around tablet:space-y-0 space-y-[32px]">
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
                    <div className="max-w-[400px] m-auto flex flex-wrap justify-between">
                                <div className="text-center mt-5">
                                    <div className={"w-[112px] h-[112px] rounded-full flex items-center justify-center bg-[#E54F26]"}>
                                        <img className="inline-block" src='/html.png' alt=""/>
                                    </div>
                                    <div className="text-medium font-bold text-[#E54F26]">HTML</div>
                                </div>
                               
                                <div className="text-center mt-5">
                                    <div className={"w-[112px] h-[112px] rounded-full flex items-center justify-center bg-[#0C73B8]"}>
                                        <img className="inline-block" src='/css.png' alt=""/>
                                    </div>
                                    <div className="text-medium font-bold text-[#0C73B8]">CSS</div>
                                </div>
                                <div className="w-full"></div>
                                <div className="text-center mt-5">
                                    <div className={"w-[112px] h-[112px] rounded-full flex items-center justify-center bg-[#E7A020]"}>
                                        <img className="inline-block" src='/node.png' alt=""/>
                                    </div>
                                    <div className="text-medium font-bold text-[#E7A020]">JS</div>
                                </div>

                                <div className="text-center mt-5">
                                    <div className={"w-[112px] h-[112px] rounded-full flex items-center justify-center bg-[#28A9E0]"}>
                                        <img className="inline-block" src='/react.png' alt=""/>
                                    </div>
                                    <div className="text-medium font-bold text-[#28A9E0]">Reactjs</div>
                                </div>
                        </div>
                </div>
            </Container>
        </div>
    )
}