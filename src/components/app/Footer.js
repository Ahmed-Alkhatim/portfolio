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
                            <a href = "https://www.instagram.com/ahmed__alkhatim/" target="_blank"><img src="/icon-instagram.png" /></a>
                        </div>
                        <div className="bg-[#98FAEC] w-[32px] h-[32px] rounded-full flex justify-center items-center">
                            <a href = "https://www.linkedin.com/in/ahmed-alkhatim/" target="_blank" ><img src="/discord.png" /></a>
                        </div>
                        <div className="bg-[#98FAEC] w-[32px] h-[32px] rounded-full flex justify-center items-center">
                        <a href="https://github.com/Ahmed-Alkhatim" target="_blank"><img src="/github.png" /></a>
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