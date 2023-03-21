import React from 'react'
import styled from 'styled-components'
import downArrow from '../../../public/images/down-arrow.svg'
import Fade from 'react-reveal/Fade'
const Section = ({title, description, backgroundImg, leftBtnTxt, rightBtnTxt}) => {
  return (
    <Wrap bgImage = {backgroundImg}>
        <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom> 
        <ButtonGroup>
            <LeftButton>
                {leftBtnTxt}
            </LeftButton>
    {rightBtnTxt && 
            <RightButton>
                {rightBtnTxt}
            </RightButton>}
        </ButtonGroup>
        </Fade>
        <DownArrow src={downArrow} />

        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat : no-repeat;
    background-image : ${props => `url("/images/${props.bgImage}")`};
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 10
`

const ItemText = styled.div`
padding-top : 15vh;
text-align: center;
`
const Buttons = styled.div``

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    font-size: 12px;
    cursor:pointer;
    margin: 8px;
    `

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity : 0.65;
    color: black;
    `

const DownArrow = styled.img`
   
    height: 40px;
    animation: animateDown infinite 1.5s;

`