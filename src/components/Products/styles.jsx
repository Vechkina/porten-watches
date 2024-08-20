import styled from "styled-components";


export const ProductsBlock = styled.section`
  padding-top: 120px;
  padding-bottom: 150px;
  background-color: ${({theme}) => theme.colors.bg};
  color: ${({theme}) => theme.colors.font};
  text-align: center;
`

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  text-transform: uppercase;
  font-family: 'Playfair Display SC', sans-serif;
`

export const Items = styled.div`
  margin-top: 81px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`