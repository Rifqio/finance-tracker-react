import styles from "./Home.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
    </HelmetProvider>
  );
}

export default Home;
