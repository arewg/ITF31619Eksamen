import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { TitleContext } from '../contexts/TitleProvider.jsx'
import { useAuthContext } from '../contexts/AuthProvider.jsx'
import { logout } from '../utils/authService'

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
    background-color: #127275;
       
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
      color: #127275;
      border-bottom: 4px solid #127275;
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

  const CreateUserButton = styled.button `
  color: #fff;
  display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 0;
    text-decoration: none;
  `


const Nav = () => {

    const { isLoggedIn, isAdmin, isSuperadmin } = useAuthContext();
    const { updateState } = useContext(TitleContext);

    const updateTitle = (title) => {
        updateState(title);
    };

    const handleLogout = () => {
      logout();
      window.location.reload(false);
    }

    return(
    <StyledNav>
        <NavMenu>
            <NavMenuItem >
                <NavLink exact to="/" activeClassName="active" onClick={() => updateTitle("Velkommen til FG Rørleggerservice AS")}>
                    Hjem
                </NavLink>
            </NavMenuItem>
            <NavMenuItem >
                <NavLink exact to="/kontorer" activeClassName="active" onClick={() => updateTitle("Våre kontorer")}>
                    Kontorer
                </NavLink>
            </NavMenuItem>
            <NavMenuItem >
                <NavLink exact to="/fagartikler" activeClassName="active" onClick={() => updateTitle("Fagartikler")}>
                    Fagartikler
                </NavLink>
            </NavMenuItem>
            <NavMenuItem >
                <NavLink exact to="/kontakt" activeClassName="active" onClick={() => updateTitle("Kontakt oss")}>
                    Kontakt
                </NavLink>
            </NavMenuItem>
            {!isLoggedIn &&
            <NavMenuItem>
            <NavLink exact to="/register" activeClassName="active" onClick={() => updateTitle("Opprett bruker")}>
                  Opprett bruker
                </NavLink>
            </NavMenuItem>}
            {isLoggedIn && isAdmin &&
            <NavMenuItem>
              <NavLink exact to="/report" activeClassName="active" onClick={() => updateTitle("Rapport over hendvendelser")}>
                Rapport
              </NavLink>
            </NavMenuItem>
            }
            {isLoggedIn && isSuperadmin &&
            <NavMenuItem>
              <NavLink exact to="superadmin" activeClassName="active" onClick={() => updateTitle("Superadmin")}>
                Superadmin
              </NavLink>
            </NavMenuItem>
            }
          {!isLoggedIn &&
            <NavMenuItem>
              <NavLink exact to="/login" activeClassName="active" onClick={() => updateTitle("Logg inn")}>
                <NavLogInButton>
                    Logg Inn
                </NavLogInButton>
                </NavLink>
            </NavMenuItem>
          || isLoggedIn &&
          <NavMenuItem >
              <NavLink exact to="/" activeClassName="active">
                <NavLogInButton onClick={() => {updateTitle("Velkommen til FG Rørleggerservice AS"); handleLogout()}}>
                    Logg Ut
                </NavLogInButton>
                </NavLink>
            </NavMenuItem>}
        </NavMenu>
  </StyledNav>
    )
};

export default Nav;