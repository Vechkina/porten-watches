import styled from "styled-components";


export const CardBlock = styled.section`
  font-family: 'Playfair Display SC', sans-serif;
`

export const ImgWrapper = styled.div`
  margin-bottom: 25px;
  background-color: ${({theme}) => theme.colors.bgCard};

  & img {
    padding: 55px 22px;
  }
`

export const Title = styled.h4`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 400;
`

export const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
`