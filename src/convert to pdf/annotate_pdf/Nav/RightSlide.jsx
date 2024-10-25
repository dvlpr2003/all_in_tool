export const RightSlide =({isRightOpen})=>{
    
    return(
        <div className={`fixed top-0 right-0 h-full w-72 z-40 bg-white text-white transform ${
            isRightOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out`}>

            </div>
    )
}