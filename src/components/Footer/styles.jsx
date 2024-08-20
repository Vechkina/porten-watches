import styled from "styled-components";

import bg from './../../img/footer_bg.png'

export const FooterBlock = styled.footer`
  height: 400px;
  background-image: url(${bg});
  color: ${({theme}) => theme.colors.font};
  font-family: 'PT Sans', sans-serif;
`

export const Wrapper = styled.div`
  padding-top: 80px;
  display: grid;
  column-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`

export const Title = styled.h3`
  font-family: 'Playfair Display SC', sans-serif;
  text-transform: uppercase;
  font-size: 24px;
  margin-bottom: 40px;
`

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.5;
`

export const Links = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`

export const Link = styled.a.attrs({
  href: "#",
})`
  padding: 10px 20px;
  background-color: ${({theme}) => theme.colors.bgGreyLink};
  color: ${({theme}) => theme.colors.fontLiteGrey};
  font-size: 14px;
  line-height: 1.5;
`

export const Btn = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  line-height: 1.5;
  text-transform: uppercase;
  background-color: ${({theme}) => theme.colors.button};
`

export const Form = styled.form`
  margin-top: 37px;
  display: flex;
`

export const Input = styled.input`
  padding: 10px;
  height: 42px;
  background-color: #ffffff33;
`