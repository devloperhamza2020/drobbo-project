import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavMenu from './components/NabMenu/NavMenu';
import Banner from './components/NabMenu/Banner/Banner';
import Product from './components/Products/Product';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <NavMenu />
      <Banner />
      <Product />
      <Footer />

    </div>
  );
}

export default App;
