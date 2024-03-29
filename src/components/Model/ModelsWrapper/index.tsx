import {Container,OverlaysRoot,} from './styles'

import React, { useCallback, useRef, useState , useContext} from 'react'
import ModelsContext, { CarModel } from '../ModelsContext'
import ModelOverlay from '../ModelOverlay'

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

    registeredModels.map(item => {
      console.log(item.modelName)
    })
    

  return(
    <ModelsContext.Provider value={{
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getModelByName

    }}>
      <Container ref={wrapperRef}>

        <OverlaysRoot>
            {registeredModels.map(item=> {

              return(
                <ModelOverlay key={item.modelName} model={item}>
                  {item.overlayNode}
                </ModelOverlay>
                
              )

            })}
        </OverlaysRoot>


          {children}

      </Container>

    </ModelsContext.Provider>
  )
}

export default ModelsWrapper