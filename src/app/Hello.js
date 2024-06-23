import { Container } from "@/components"

export default () => {
    return(
        <div>
        <div className="space-y-[32px]">
            <div>
                <span className="text-primary text-sm">{'<h1>'}</span>
                <h2 className="lap:leading-[67px] tablet:text-xlg text-lg ps-[16px]">
                    Hey, <br />
                    I am <span className="text-primary">Alkhatim</span> <br />
                    A Front-end developer <br />
                </h2>
                <span className="text-primary text-sm">{'</h1>'}</span>
            </div>
            <div className="space-y-[16px]">
                <span className="text-primary text-sm inline-block">{'<p>'}</span>
                <h2 className="text-medium ps-[16px]">
                    I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,
                </h2>
                <span className="text-primary text-sm inline-block">{'</p>'}</span>
                <h3 className="text-lg text-primary text-bold">let’s talk <span className="inline-flex items-center justify-center bg-gray w-[40px] h-[40px] rounded-full "><img src = "/message.png" className="inline"/></span></h3>
            </div>
        </div>
        </div>
    )
}