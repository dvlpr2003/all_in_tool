export const LeftSlide = ({isLeftOpen})=>{
    return(
        <div className={`fixed top-0 left-0 z-50 h-full w-72 bg-white text-white transform ${
            isLeftOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out`}>

    </div> 
    )
}