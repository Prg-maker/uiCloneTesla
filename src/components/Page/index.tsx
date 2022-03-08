import React from 'react'

import {Container} from './styles'
import DefaultOverlayContent from '../DefaultOverlayContent'
import { ModelsSection, ModelsWrapper } from '../Model'



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
      </ModelsWrapper>
    </Container>
  )
}

export default Page