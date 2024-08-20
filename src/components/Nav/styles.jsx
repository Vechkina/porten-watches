import styled from "styled-components";

export const NavBlock = styled.nav`
  height: 80px;
  background-color: ${({theme}) => theme.colors.bgNav};
  color: ${({theme}) => theme.colors.fontGrey};

  & a {
    color: ${({theme}) => theme.colors.fontGrey};
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  width: 104px;
`

export const NavBar = styled.div`
  display: flex;
  column-gap: 60px;
`

export const Links = styled.div`
  display: flex;

  font-size: 14px;
  text-transform: uppercase;
`

export const Link = styled.div`
  padding: 31px 20px;

  &:hover {
    background-color: ${({theme}) => theme.colors.bgLink};
  }
`

export const Icons = styled.div`
  display: flex;
  column-gap: 40px;
  align-items: center;
`