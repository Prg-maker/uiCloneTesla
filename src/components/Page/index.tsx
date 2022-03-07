import {Container} from './styles'
import {DefaultOverlayContent} from '../DefaultOverlayContent'
import { ModelsSection, ModelsWrapper } from '../Model'

export function Page(){
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

                <ModelsSection
                key={modelName}
                className="colored"
                modelName= {modelName}
                overlayNode = {
                <DefaultOverlayContent
                  label={modelName}
                  description='Order Online for Delivery'
                />
  
                }
              />
                
              )

            })}
          
        </div>
      </ModelsWrapper>
    </Container>
  )
}