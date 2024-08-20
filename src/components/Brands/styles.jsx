import styled from "styled-components";


export const BrandsBlock = styled.section`
  padding: 60px 0 80px;
  background-color: ${({theme}) => theme.colors.bgBrands};
`

export const Title = styled.h2`
  color: ${({theme}) => theme.colors.font};
  margin-bottom: 40px;
  font-size: 36px;
  text-transform: uppercase;
  font-family: 'Playfair Display SC', sans-serif;
  text-align: center;
  font-weight: bold;
`

export const ImgBlock = styled.div`
  padding-top: 40px;
  display: flex;
  gap: 30px;
`