import styled from "styled-components";

export const OldCollectionBlock = styled.section`
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.colors.bg};

  font-family: 'PT Sans', sans-serif;
  color: ${({theme}) => theme.colors.font};
  text-align: center;

  & a {
    padding: 12px 28px;
    text-transform: uppercase;
    border: 1px #fff solid;
  }
`

export const Content = styled.div`
  max-width: 471px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`

export const Title = styled.h3`
  font-family: 'Playfair Display SC', sans-serif;
  font-size: 36px;
  text-transform: uppercase;
`

export const Text = styled.p`
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
  line-height: 1.5;
`
