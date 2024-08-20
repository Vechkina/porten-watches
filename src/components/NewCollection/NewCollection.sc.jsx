import WatchCard from "../WatchCard/WatchCard.sc";
import { Btn, Cards, Catalogue, Content, CurrentSeason, NameSeason, NewCollectionBlock, Title, Wrapper } from "./styles";

import catalogueImg from './../../img/catalogue.png'
import imageLink from './../../img/watch.png'
import { Line120 } from "../Lines/styles";

const NewCollection = () => {
  return (
    <NewCollectionBlock>
      <CurrentSeason>
        <NameSeason>СЕЗОН 2020/21</NameSeason>
        <Line120 />
        <Cards>
          <WatchCard imageLink={imageLink}/>
          <WatchCard imageLink={imageLink}/>
          <WatchCard imageLink={imageLink}/>
        </Cards>
      </CurrentSeason>
      <Catalogue>
        <Wrapper>
          <img src={catalogueImg} alt="catalogue.png"/>
          <Content>
            <Title>Новая коллекция</Title>
            <Line120 />
            <Btn>Каталог</Btn>
          </Content>
        </Wrapper>
      </Catalogue>
    </NewCollectionBlock>
  );
}

export default NewCollection;