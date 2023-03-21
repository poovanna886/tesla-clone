import React from 'react'
import styled from 'styled-components'
import Section from '../Section/Section'

const Home = () => {
  return (
  <Container>
    
    <Section 
    title= "Model S"
    description="Order Online for Contactless Delivery"
    backgroundImg = "model-s.jpg"
    leftBtnTxt="CUSTOM ORDER"
    rightBtnTxt="EXISTING INVENTORY"
    />
    <Section 
    title= "Model X"
    description="Order Online for Contactless Delivery"
    backgroundImg = "model-x.jpg"
    leftBtnTxt="CUSTOM ORDER"
    rightBtnTxt="EXISTING INVENTORY"
    />
    <Section 
    title= "Lowest Cost Solar Panels in India"
    description="Money-back guarantee"
    backgroundImg = "solar-panel.jpg"
    leftBtnTxt="ORDER NOW"
    rightBtnTxt="LEARN MORE"
    />
    <Section 
    title= "Solar for New Roofs"
    description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
    backgroundImg = "solar-roof.jpg"
    leftBtnTxt="ORDER NOW"
    rightBtnTxt="LEARN MORE"
    />
    <Section 
    title= "Accessories"
    description=""
    backgroundImg = "accessories.jpg"
    leftBtnTxt="SHOP NOW"
    rightBtnTxt=""
    />
  </Container>
    )
}

export default Home

const Container = styled.div`
    heigth: 100vh;
`