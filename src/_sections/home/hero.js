import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import OfficeContext from '../../_context/office-context';
import { Button } from '../../_components/buttons';
import { Input, Select } from '../../_components/inputs';
import { useWindowSize } from '../../_hooks';

const HeroCont = styled.div`
  position: relative;
  height: calc(100vh - 67px);
  overflow: hidden;
  color: ${props => props.theme.secondaryColor};
  @media(min-width: 768px){
    height: calc(100vh - 89px);
  }  
`
const HeroImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${props => props.theme.heroUrl});
  width: 100%;
  height: 100%;
  &::after{
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, .5),rgba(0, 0, 0, .5)), linear-gradient(rgba(0, 0, 0, .5),rgba(0, 0, 0, .5));
  }
  z-index: -1;
`
const HeroContent = styled.div`
  height: calc(100vh - 89px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeroTitle = styled.h1`
  font-weight: lighter;
  font-family: "open sans";
  text-align: center;
  @media(min-width: 768px){
    max-width: 50%;
    font-size: 2.5rem;
  }
`
const ButtonsCont = styled.div`
  @media(min-width: 768px){
   width: 50%;
  }  
`
const SearchForm = styled.form`
  width: 100%;
  margin: 2rem;
  @media(min-width: 768px){
   margin-top: 5rem;
  } 
`

export default ()=> {
  const hero = useContext(OfficeContext).webOffice.home.hero;
  const size = useWindowSize();

  return(
    <HeroCont>
      <HeroImg />
      <Container>
        <HeroContent>
          <HeroTitle>
            {hero.mainText}
          </HeroTitle>
          <ButtonsCont>
            <Row>
              <Col xs={6}>
                <Button outlined block>Buscar propiedad</Button>
              </Col>
              <Col xs={6}>
                <Button outlined block>Buscar por código</Button>
              </Col>              
            </Row>
          </ButtonsCont>
          <SearchForm>
            <Row>
              <Col xs={12} md={3}>
                <Input label="Operación" />
              </Col>
              <Col xs={12} md={3}>
                <Select default="Propiedad" options={["option A", "option B", "option C"]} />
              </Col>
              <Col xs={12} md={3}>
                <Select default="Comuna" options={["option A", "option B", "option C"]} />
              </Col>
              <Col xs={12} md={3}>
                <div style={{ marginTop: size.width > 768 ? 0 : '2rem' }}>
                  <Button primary block>
                    Buscar
                    <img src="/search.svg" style={{ marginLeft: 8 }} />
                  </Button>                
                </div>
              </Col>                                          
            </Row>
          </SearchForm>
        </HeroContent>
      </Container>
    </HeroCont>
  )
}