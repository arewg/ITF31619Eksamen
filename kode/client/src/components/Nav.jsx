import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { TitleContext } from '../contexts/TitleProvider.jsx'


const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const NavMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: right;
`;

const NavMenuItem = styled.li`
  padding: 0 20px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    background-color: blue;
       
  }

  & > a {
    color: #333;
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 0;
    text-decoration: none;

    &.active {
      color: #007b5f;
      border-bottom: 4px solid #007b5f;
    }
  }
`;

  const NavLogInButton = styled.button`
  color: #fff;
  display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 0;
    text-decoration: none;
  `;


const Nav = () => {

    const { updateState } = useContext(TitleContext);

    const updateTitle = (title) => {
        updateState(title);
    } 

    return(
    <StyledNav>
        <NavMenu>
            <NavMenuItem onClick={() => updateTitle("Velkommen til FG Rørleggerservice AS")}>
                <NavLink exact to="/" activeClassName="active" >
                    Hjem
                </NavLink>
            </NavMenuItem>
            <NavMenuItem onClick={() => updateTitle("Våre kontorer")}>
                <NavLink exact to="/kontorer" activeClassName="active" >
                    Kontorer
                </NavLink>
            </NavMenuItem>
            <NavMenuItem onClick={() => updateTitle("Fagartikler")}>
                <NavLink exact to="/fagartikler" activeClassName="active">
                    Fagartikler
                </NavLink>
            </NavMenuItem>
            <NavMenuItem onClick={() => updateTitle("Kontakt oss")}>
                <NavLink exact to="/kontakt" activeClassName="active">
                    Kontakt
                </NavLink>
            </NavMenuItem>
            <NavMenuItem>
                <NavLogInButton exact to="/login" activeClassName="active">
                    Logg Inn
                </NavLogInButton>
            </NavMenuItem>
        </NavMenu>
  </StyledNav>
    )
};

export default Nav;