import Container from "./Container";

export default  function Footer(){

    return( 
        <div className=" border-t-2 border-gray">
            <Container>
              <div className=" lap:flex lap:justify-between lap:items-center py-[32px] text-center text-medium lap:space-y-0 space-y-[24px]">
                <p> &copy; {" " + new Date().getFullYear() +" ahmed alkhatim. All rights reserved."}</p>
                <div className="text-center">
                    <div className="inline-flex space-x-[32px]">
                        <div className="bg-[#98FAEC] w-[32px] h-[32px] rounded-full flex justify-center items-center">
                            <img src="/icon-instagram.png" />
                        </div>
                        <div className="bg-[#98FAEC] w-[32px] h-[32px] rounded-full flex justify-center items-center">
                            <img src="/discord.png" />
                        </div>
                        <div className="bg-[#98FAEC] w-[32px] h-[32px] rounded-full flex justify-center items-center">
                            <img src="/github.png" />
                        </div>
                    </div>
                </div>
                {/* <p>Design By <span className="text-primary">JohannLeon</span></p> */}
                <p>Developed By <span className="text-primary">Ahmed alkhatim</span></p>
                
            </div>
            </Container>
        </div>
    )
}