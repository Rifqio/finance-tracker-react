import styles from "./Dashboard.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import TransactionForm from "./TransactionForm";

function Dashboard() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.content}>
          Transaction List
        </div>

        <div className={styles.sidebar}>
          <TransactionForm />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Dashboard;
