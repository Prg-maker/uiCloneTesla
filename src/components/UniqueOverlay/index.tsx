

import { useTransform } from 'framer-motion'
import React from 'react'
import useWrapperScrool from '../Model/useWrapperScroll'

import {
  Container,
  Header,
  Logo,
  Bunger,
  Footer,

} from './styles'

const UniqueOverlay: React.FC = () => {

  const {scrollProgress} = useWrapperScrool()

  const opacity = useTransform(scrollProgress, [0.9 , 1], [0 , 1])

  return(
    <Container>
      <Header>

        <Logo/>
        <Bunger/>

      </Header>


      <Footer style={{opacity}}>
        <ul>
          <li>
            <a href="#">Ui-Clone</a>
          </li>

          <li>
            <a href="#">made with ♥</a>
          </li>


          <li>
            <a href="#">by Daniel F. Silva</a>
          </li>


        </ul>
      </Footer>
    </Container>
  )   
}

export default UniqueOverlay