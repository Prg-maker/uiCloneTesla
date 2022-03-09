import { useMotionValue } from "framer-motion";
import { useContext, useEffect } from "react";
import ModelsContext from './ModelsContext'

export default function useWrapperScrool(){

  const {wrapperRef} = useContext(ModelsContext)

  const scrollY = useMotionValue(0)
  const scrollProgress = useMotionValue(0)

  useEffect(()=> {

    const element  = wrapperRef.current

    if(element){
      const updateScroolValue = ()=>{
        if(wrapperRef.current){
          const {scrollTop , scrollHeight , offsetHeight} = element

          const fullScroll = scrollHeight - offsetHeight 


          scrollY.set(scrollTop)

          scrollProgress.set(scrollTop / fullScroll)


        }
      }

      element.addEventListener('scroll', updateScroolValue)
      return () => element.removeEventListener('scroll', updateScroolValue)
    }


  } ,[])

  return {
    scrollY,
    scrollProgress
  }
}