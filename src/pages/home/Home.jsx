import { Helmet, HelmetProvider } from "react-helmet-async";

import Nav from "../../components/navbarHome/Nav";
import Main from "./section/Main/Main";
import Pricing from "./section/Pricing/Pricing";
import Reviews from "./section/Reviews/Reviews";
import { ReviewsData } from "./section/Reviews/ReviewsData";
const Home = () => {
   
  return (
    <HelmetProvider>
      <Helmet>
          <title>Home</title>
      </Helmet>
        <Nav />
        <Main />
        <Reviews items={ReviewsData} />
        <Pricing />
    </HelmetProvider>
    
  );
};

export default Home;
