import { Contacts, HeaderBlock, Login, Row, TimeWork } from "./styles";
import { Container } from "../Container/styles";

import phone from './../../icons/phone.png'
import signOut from './../../icons/sign_out.png'

const Header = () => {
  return (
    <HeaderBlock>
      <Container>
        <Row>
          <Contacts>
            <img src={phone} alt="phone.png" />
            <TimeWork>
              <p>8 (812) 123-45-67</p>
              <p>|</p>
              <p>Работаем 7 дней в неделю</p>
              <p>|</p>
              <p>9:00 — 18:00</p>
            </TimeWork>
          </Contacts>
          <Login>
            <img src={signOut} alt="sign_out.png" />
            <p><a href="#">Войти</a> / <a href="#">Регистрация</a></p>
          </Login>
        </Row>
      </Container>
    </HeaderBlock>
  );
}

export default Header;