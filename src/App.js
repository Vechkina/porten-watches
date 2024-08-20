import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";
import { theme } from "./styles/theme";
import Header from "./components/Header/Header.sc";
import Main from "./components/Main/Main.sc";
import Nav from "./components/Nav/Nav.sc";
import NewCollection from "./components/NewCollection/NewCollection.sc";
import OldCollection from "./components/OldCollection/OldCollection.sc";
import Footer from "./components/Footer/Footer.sc";
import Brands from "./components/Brands/Brands.sc";
import Products from "./components/Products/Products.sc";


function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Nav />
        <Main />
        <NewCollection />
        <OldCollection />
        <Products />
        <Brands />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;