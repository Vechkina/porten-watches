import styled from "styled-components";
import bg from './../../img/bg.png'


export const MainBlock = styled.main`
  padding-top: 160px;
  padding-bottom: 154px;

  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;

  font-family: 'PT Sans', sans-serif;
  color: #fff;
`

export const Content = styled.div`
  padding: 93px 68px;
  margin: 0 auto 80px;

  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 320px;
  border: 4px #fff solid;

  text-transform: uppercase;
  text-align: center;
  font-size: 21px;
`

export const Text = styled.p`
  max-width: 730px;
  margin: 0 auto;

  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
`