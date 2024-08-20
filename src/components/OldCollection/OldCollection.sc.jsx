import { Content, OldCollectionBlock, Text, Title } from "./styles";

import collectionImg from './../../img/collection.png'
import { Line120 } from "../Lines/styles";

const OldCollection = () => {
  return (
    <OldCollectionBlock>
      <img src={collectionImg} alt="collection.png" />
      <Content>
        <Title>коллекция 2018</Title>
        <Line120 />
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam.</Text>
        <a href="#">посмотреть коллекцию</a>
      </Content>
    </OldCollectionBlock>
  );
}

export default OldCollection;