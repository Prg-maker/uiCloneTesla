
  
import { useTransform } from 'framer-motion'
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { CarModel } from '../ModelsContext'
import useWrapperScrool from '../useWrapperScroll'
import { Container } from './styles'

interface Props {
  model: CarModel
}


type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC<Props> = ({children, model}) => {


  
  const getSectionDimensions = useCallback(()=> {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight,
    } as SectionDimensions
  },[])
  

  const [dimensions , setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  )

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(()=> setDimensions(getSectionDimensions()))
    }

    window.addEventListener('rezise' , onResize)

    return () =>  window.removeEventListener('rezise' , onResize)
  } , [])


  const {scrollProgress, scrollY}  = useWrapperScrool()


  const sectionScrollProgress = useTransform(scrollY , y => (y - dimensions.offsetTop)/ dimensions.offsetHeight)

  const opacity = useTransform(
    sectionScrollProgress, 
    [-0.45, -0.05, 0.05, 0.45],
    [0, 1, 1, 0]
  ) 

    const pointerEvents = useTransform(opacity, value => {
      value > 0 ? 'auto' : 'none'
    })


  return(
    <Container style={{opacity , pointerEvents}}>
      {children}
    </Container>
  )
}

export default ModelOverlay