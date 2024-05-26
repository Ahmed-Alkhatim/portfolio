import Container from "./Container";

export default  function Footer(){

    return( 
        <Container>
              <div className="border-t-2 border-gray py-[32px] text-center text-medium space-y-[24px]">
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
              
                <p> &copy; {" " + new Date().getFullYear() +" ahmed alkhatim. All rights reserved."}</p>
                <p>Design By <span className="text-primary">JohannLeon</span></p>
                <p>Developed By <span className="text-primary">Ahmed alkhatim</span></p>
                
            </div>
        </Container>
    )
}