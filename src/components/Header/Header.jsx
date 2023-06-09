import React, {useState} from 'react'
import styled from 'styled-components'
import headerLogo from '../../../public/images/logo.svg'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../../features/carSlice/carSlice';
import { useSelector } from 'react-redux';
const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const cars = useSelector(selectCars)
  console.log(cars)
  return (
    <Container>
      <a>
       <img src={headerLogo} alt="" />
        </a>
      <Menu>
        {cars && cars.map((car, index) => (
            <a key={index} href="#">{car}</a>
        ))}
        </Menu>

      <RightMenu>
          <a href='#'>Shop</a>
          <a href='#'>Tesla Account</a>
          <CustomMenu onClick={() => setMenuStatus(!menuStatus)} />
          <BurgerNav show={menuStatus}>
            <CloseWrapper onClick={() => setMenuStatus(!menuStatus)}>
            <CustomClose />
            </CloseWrapper>
            { cars && cars.map((car, index) => (
              <li><a key={index} href='#'>{car}</a></li>
            ))}
            <li><a href='#'>Existing Inventory</a></li>
            <li><a href='#'>Used Inventory</a></li>
            <li><a href='#'>Trade-In</a></li>
            <li><a href='#'>Cybertruck</a></li>
            <li><a href='#'>Roadster</a></li>
            <li><a href='#'>Test Drive</a></li>
          </BurgerNav>
      </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display : flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  `

const Menu = styled.div`
  display:flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  
    @media (max-width: 768px) {
      display: none;
    }
`
const RightMenu = styled.div`
display: flex;
align-items: center;
a {
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px; 
} 
`
const CustomMenu = styled(MenuIcon)`
cursor: pointer
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width : 300px;
  z-index: 100;  
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.2s;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0.2);
  }
  a {
    font-weight: 600;

  }
  `
const CloseWrapper = styled.div`
  display:flex;
  justify-content: flex-end
`
  const CustomClose = styled(CloseIcon)`
  cursor: pointer`