import { Container } from "../Container/styles";
import { Line120 } from "../Lines/styles";
import { Items, ProductsBlock, Title } from "./styles";
import WatchCard from "../WatchCard/WatchCard.sc";

import imageLink from './../../img/watch.png'

const Products = () => {
  return (
    <ProductsBlock>
      <Container>
        <div>
          <Title>новые поступления</Title>
          <Line120 />
          <Items>
            <WatchCard imageLink={imageLink}></WatchCard>
            <WatchCard imageLink={imageLink}></WatchCard>
            <WatchCard imageLink={imageLink}></WatchCard>
            <WatchCard imageLink={imageLink}></WatchCard>
            <WatchCard imageLink={imageLink}></WatchCard>
            <WatchCard imageLink={imageLink}></WatchCard>
            <WatchCard imageLink={imageLink}></WatchCard>
            <WatchCard imageLink={imageLink}></WatchCard>
          </Items>
        </div>
      </Container>
    </ProductsBlock>
  );
}

export default Products;