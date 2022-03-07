import {Container,OverlayRoot, ModelOverlay,} from './styles'

import React, { useCallback, useRef, useState , useContext} from 'react'
import ModelsContext, { CarModel } from '../ModelsContext'




const ModelsWrapper: React.FC = ({children})=>{
  const wrapperRef = useRef<HTMLDivElement>(null)


  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])


    const registerModel = useCallback((model:CarModel)=> {
      setRegisteredModels(state=> [...state , model])
    } , [])

    const unregisterModel = useCallback((modelName:string)=> {
      setRegisteredModels(state => state.filter(model=> model.modelName != modelName))
    },[])

    const getModelByName = useCallback((modelName: string)=> {
      return registeredModels.find(item => item.modelName == modelName) || null
    } , []) 


  return(
    <ModelsContext.Provider value={{
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getModelByName

    }}>
      <Container ref={wrapperRef}>

        <OverlayRoot>
          {registeredModels.map(item=> {
            <ModelOverlay key={item.modelName}>{item.overlayNode}</ModelOverlay>
          })}
        </OverlayRoot>


        {children}
      </Container>

    </ModelsContext.Provider>
  )
}

export default ModelsWrapper