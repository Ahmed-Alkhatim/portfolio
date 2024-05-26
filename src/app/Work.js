"use client"
import { Container } from "@/components"
import { useState } from "react"

export default () => {
    const images = ['work1.png', 'work2.png']
    const [image, setImage] = useState(0)
    const next = () => {
        if(image != images.length - 1) setImage(image + 1)
    }
    const prev = () => {
        if(image != 0 ) setImage(image - 1)
    }

    return( 
    <div className="bg-text bg-cover bg-center py-[64px]">
        <Container>
            <div className="space-y-[64px] ">
                <div>
                    <div className="text-center">
                        <h3 className="test inline-block m-auto text-xlg text-primary border-b-2  border-primary">Work</h3>
                    </div>
                    <p className="text-center mt-5"> I had the pleasure of working with <br /> these awesome projects</p>
                </div>
                <div className="relative">

                    <div onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray"><img src="/icons/right.svg" alt=""/></div>
                    <div onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray"><img src="/icons/left.svg" alt=""/></div>
                    <img src = {'/' + images[image]}/>
                </div>
            </div>

        </Container>
    </div>
    )
}