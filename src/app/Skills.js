import { Container } from "@/components"

export default () => {

    const languages = [
        { name : 'HTML', icon : 'html.png', color : '#E54F26'},
        { name : 'CSS', icon : 'css.png', color : '#28A9E0'},
        { name : 'JS', icon : 'node.png', color : '#E7A020'},
        { name : 'REACT', icon : 'react.png', color : '#28A9E0'}
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
                        <div className="flex flex-wrap justify-between">
                            { languages.map( (language, index) => 
                            <>
                                <div className="text-center mt-5 ">
                                    <div className={"w-[112px] h-[112px] rounded-full flex items-center justify-center " + 'bg-['+language.color+']'}>
                                        <img className="inline-block" src={language.icon} alt=""/>
                                    </div>
                                    <div className={"text-medium font-bold " + 'text-['+language.color+']'}>{language.name}</div>
                                </div>
                                {index ==1 && <div className="w-full"></div>}
                            </>
                            )}
                        </div>
                </div>
            </Container>
        </div>
    )
}