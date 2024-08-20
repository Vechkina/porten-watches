import styled from "styled-components";

export const NewCollectionBlock = styled.section`
  display: flex;  
  justify-content: space-between;  
  column-gap: 5px;
  align-items: center;         
  background-color: ${({theme}) => theme.colors.bg};
  color: ${({theme}) => theme.colors.font};

  font-family: 'Playfair Display SC', sans-serif;
`

export const CurrentSeason = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`

export const NameSeason = styled.h2`
  text-align: center;
  font-size: 36px;
`

export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  column-gap: 10px;
`

export const Catalogue = styled.div`
  background-size: contain;
  background-repeat: no-repeat;

  font-family: 'PT Sans', sans-serif;
`

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 30px;

  text-transform: uppercase;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  font-family: 'Playfair Display SC', sans-serif;
`

export const Btn = styled.a.attrs ({
  href: "#",
})`
  padding: 12px 28px;
  width: 138px;
  margin: 0 auto;

  border: 1px #fff solid;

  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
`