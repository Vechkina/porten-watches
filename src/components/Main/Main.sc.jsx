import { Content, MainBlock, Text } from "./styles";
import logo from './../../img/logo.svg'
import { Line } from "../Lines/styles";

const Main = () => {
  return (
    <MainBlock>
      <div>
        <Content>
          <img src={logo} alt="logo.svg"/>
          <Line />
          <p>санкт-петербург</p>
        </Content>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</Text>
      </div>
    </MainBlock>
  );
}

export default Main;