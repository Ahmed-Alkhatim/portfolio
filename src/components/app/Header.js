export default function Header() {
    
    return(
        <div className="container py-[24px] border-b-2 border-gray">
            <h1 className="text-sm text-[#FFF] flex justify-between">
                <div className="space-x-1">
                    <span className="text-primary">{'<C/>'}</span>
                    <span>Ahmed alkhatim</span>
                </div>
                <ul className="flex space-x-3">
                    <li className="text-primary">Home</li>
                    <li>Blogs</li>
                </ul>
            </h1>
        </div>
    )
}