import { Container } from "../Container/styles";
import { Icons, Link, Links, Logo, NavBar, NavBlock, Wrapper } from "./styles";

import logo from './../../img/logo.svg'
import cart from './../../icons/cart.png'
import search from './../../icons/search.png'

const Nav = () => {
  return (
    <NavBlock>
      <Container>
        <Wrapper>
          <Logo>
            <a href="#"><img src={logo} alt='logo.svg'/></a>
          </Logo>
          <NavBar>
            <Links>
              <Link>
                <a href="#">понравилось</a>
              </Link>
              <Link>
                <a href="#">личный кабинет</a>
              </Link>
              <Link>
                <a href="#">настройки</a>
              </Link>
            </Links>
            <Icons>
              <a href="#"><img src={cart} alt="cart.png"/></a>
              <img src={search} alt="search.png"/>
            </Icons>
          </NavBar>
        </Wrapper>
      </Container>
    </NavBlock>
  );
}

export default Nav;