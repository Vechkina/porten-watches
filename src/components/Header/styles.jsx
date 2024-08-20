import styled from "styled-components";

export const HeaderBlock = styled.header`
  background-color: ${({theme}) => theme.colors.bg};

  font-family: 'PT Sans', sans-serif;
  color: ${({theme}) => theme.colors.fontGrey};

  & a {
    color: #969696;
  }
`
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 44px;

  font-size: 12px;
`

export const Contacts = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`

export const TimeWork = styled.div`
    display: flex;
    column-gap: 10px;
`

export const Login = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`