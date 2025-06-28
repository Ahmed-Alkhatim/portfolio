export default function Container(props){
    return(
        <div className="max-w-[1920px] m-auto px-[16px] tablet:px-[24px] lap:px-[64px] desk:px-[128px]">
            { props.children }
        </div>
    )
   
}