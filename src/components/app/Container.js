export default function Container(props){
    return(
        <div className="max-w-[1920px] m-auto lap:px-[128px] px-[24px]">
            { props.children }
        </div>
    )
   
}