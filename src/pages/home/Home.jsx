import { Helmet, HelmetProvider } from "react-helmet-async";

import Nav from "../../components/navbarHome/Nav";
import Main from "./section/Main";
import Reviews from "./section/Reviews";
const Home = () => {
   
  return (
    <HelmetProvider>
      <Helmet>
          <title>Home</title>
      </Helmet>
        <Nav />
        <Main />
        <Reviews />
    </HelmetProvider>
    
  );
};

export default Home;
