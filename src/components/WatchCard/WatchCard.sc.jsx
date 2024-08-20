import { CardBlock, ImgWrapper, Price, Title } from "./styles";


const WatchCard = ({imageLink}) => {
  return (
    <CardBlock>
      <ImgWrapper>
        <a href="#"><img src={imageLink} alt='watch.png'/></a>
      </ImgWrapper>
      <a href="#"><Title>Louis XVI ATHOS</Title></a>
      <Price>165 000 руб.</Price>
    </CardBlock>
  );
}

export default WatchCard;