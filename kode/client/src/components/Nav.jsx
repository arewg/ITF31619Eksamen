/**
 * Navigasjonsbaren er hentet fra Marius Wallins' forelesning
 * 'Leksjon 11' og Are Warlo Gulliksen og Elise Dalane Mellegårds'
 * oblig for leksjon 11, og har blitt modifisert for dette prosjektet.
 */

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthProvider.jsx';
import { logout } from '../utils/authService';

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
    @media screen and (max-width: 800px) {
      display: none;
    }
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
    @media screen and (max-width: 800px) {
    font-size: 10px;
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
  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`;

const Nav = () => {
  const { isLoggedIn, isAdmin } = useAuthContext();

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <StyledNav>
      <NavMenu>
        <NavMenuItem>
          <NavLink exact to="/" activeClassName="active">
            Hjem
          </NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink exact to="/kontorer" activeClassName="active">
            Kontorer
          </NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink exact to="/fagartikler" activeClassName="active">
            Fagartikler
          </NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink exact to="/kontakt" activeClassName="active">
            Kontakt
          </NavLink>
        </NavMenuItem>
        {!isLoggedIn && (
          <NavMenuItem>
            <NavLink exact to="/register" activeClassName="active">
              Opprett bruker
            </NavLink>
          </NavMenuItem>
        )}
        {isLoggedIn && isAdmin && (
          <NavMenuItem>
            <NavLink exact to="/report" activeClassName="active">
              Henvendelser
            </NavLink>
          </NavMenuItem>
        )}
        {(!isLoggedIn && (
          <NavMenuItem>
            <NavLink exact to="/login" activeClassName="active">
              <NavLogInButton>Logg Inn</NavLogInButton>
            </NavLink>
          </NavMenuItem>
        )) ||
          (isLoggedIn && (
            <NavMenuItem>
              <NavLink exact to="/" activeClassName="active">
                <NavLogInButton
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logg Ut
                </NavLogInButton>
              </NavLink>
            </NavMenuItem>
          ))}
      </NavMenu>
    </StyledNav>
  );
};

export default Nav;
