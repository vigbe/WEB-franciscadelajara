import React, { useContext, useState, Fragment } from 'react';
import context from '../context';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Link from "../components/link";

import RateBar from './ratebar';
import Logo from './logo';
import { NavLink, NavButton } from '../styled-components';

const Header = styled.header`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`
const Navigation = styled.nav`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #fff;
`
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${props => props.horizontal ? "flex" : "block"};
  text-align: center;
`
const NavItem = styled.li`
  
`

export default ({ dark })=> {
  const state = useContext(context);

  return(
    <Header className="d-none d-lg-block">
      <RateBar />
      <Container>
        <Navigation>
          <Link to="/">
            <Logo dark={dark} light={!dark} />
          </Link>
          <NavList horizontal>
            <NavItem>
              <Link to="/properties">
                <NavLink dark>
                  Propiedades
                </NavLink>
              </Link>            
            </NavItem>
            <NavItem>
              <Link to="/about">
                <NavLink dark>
                  Nosotros
                </NavLink>
              </Link>            
            </NavItem>
            <NavItem>
              <Link to="/contact">
                <NavLink dark>
                  Contacto
                </NavLink>
              </Link>                                    
            </NavItem>
          </NavList>
        </Navigation>
      </Container>
    </Header>    
  )
}