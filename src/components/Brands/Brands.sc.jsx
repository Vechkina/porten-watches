import { Line120 } from "../Lines/styles";
import { BrandsBlock, ImgBlock, Title } from "./styles";
import { Container } from "../Container/styles";

import brandsImg from './../../img/brands.svg'

const Brands = () => {
  return (
    <BrandsBlock>
      <Container>
        <Title>наши бренды</Title>
        <Line120 />
        <ImgBlock>
          <a href="#"><img src={brandsImg} alt="brands.svg"/></a>
          <a href="#"><img src={brandsImg} alt="brands.svg"/></a>
          <a href="#"><img src={brandsImg} alt="brands.svg"/></a>
          <a href="#"><img src={brandsImg} alt="brands.svg"/></a>
        </ImgBlock>
      </Container>
    </BrandsBlock>
  );
}

export default Brands;