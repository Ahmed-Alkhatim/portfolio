"use client"
import { Container } from "@/components"
import { useState } from "react"


const projects = [
    { name : "AqaratExpo Web App", skills : "NextJs - Reactjs - tailwindcss", img : "aqarat.png"},
    { name : "Agency", skills : "Reactjs - css", img : "agency.png"},
    { name : "EasyLabs", skills : "Reactjs - css", img : "easylabs.png"},
    { name : "CardsCart", skills : "NuxtJs - Vuejs",  img : "cardscart.net.jpeg" },
    { name : "EcoNile", skills : "Reactjs - css", img : "econile.org.jpeg"},
    { name : "CardsCart dashboard", skills : "NuxtJs - vuejs", img : "d.cardscart.net.jpeg"},
]
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
    <div className="bg-gray-2 py-[64px]">
        <Container>
            <div className="space-y-[64px] ">
                <div>
                    <div className="text-center">
                        <h3 className="test inline-block m-auto text-xlg text-primary border-b-2  border-primary">Work</h3>
                    </div>
                    <p className="text-center mt-5"> I had the pleasure of working with <br /> these awesome projects</p>
                </div>
                <div className="flex justify-between items-center flex-wrap  ">
                    { projects.map( project => 
                        <Project project={project}/>
                    )}
                    {/* { projects.length%3 != 0 && <div className="w-[280px] h-[200px]"></div>} */}
                </div>
            </div>

        </Container>
    </div>
    )
}

const Project = ({ project }) => {
    const [hovered, setHover] = useState(false)
    return(
        <div className="m-auto mb-10  cursor-pointer">
            <div className="w-[280px] h-[200px] overflow-hidden rounded-[16px]">
                <img src = {"/projects/" + project.img}  alt="project" 
                    className={"w-full min-h-[200px] transform transition-transform  " + 
                        (hovered ? ' transform-to-bottom duration-5000' : 'transform-to-top duration-1000') 
                    } 
                    onMouseOver={() =>{ setHover(true)}} 
                    onMouseLeave={() => { setHover(false)} }    
                />
            </div>
            <div className="m-2 space-y-1">
                <h6 >{ project.name + hovered}</h6>
                <p className="text-primary text-md">{ project.skills }</p>
            </div>
        </div>
    )
}

{/* <div onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray"><img src="/icons/right.svg" alt=""/></div>
                    <div onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray"><img src="/icons/left.svg" alt=""/></div>
                    <img src = {'/' + images[image]}/> */}