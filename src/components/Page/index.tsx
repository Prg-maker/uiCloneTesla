import React from 'react'

import {Container , Spacer} from './styles'
import DefaultOverlayContent from '../DefaultOverlayContent'
import { ModelsSection, ModelsWrapper  } from '../Model'


import UniqueOverlay from '../UniqueOverlay' 


const Page: React.FC = () => {
  return(
    <Container>
      <ModelsWrapper>
        <div>
            {[
              "Model One",
              "Model Two",
              "Model Three",
              "Model Four",
              "Model Five",
              "Model Six",
              "Model Seven",

            ].map(modelName =>{
              return(
                <>

                  <ModelsSection

                  key={Math.random()}
                  className="colored"
                  modelName= {modelName}
                  overlayNode={
                    <DefaultOverlayContent
                      label={modelName}
                      description="Order Online for Delivery"
                    />
                  }
                />

           
                </>

              )

            })}
          
        </div>

        <Spacer/>

        <UniqueOverlay/>
      </ModelsWrapper>


    </Container>
  )   
}

export default Page