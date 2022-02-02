import styles from "./Dashboard.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import TransactionForm from "./TransactionForm";
import { useAuthContext } from "../../hooks/useAuthContext"
import { useCollection } from "../../hooks/useCollection";
import TransactionList from "./TransactionList";

function Dashboard() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'transactions',
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
    )

  return (
    <HelmetProvider>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.content}>
          {error && <p>{error}</p>}
          {documents && <TransactionList documents={documents} />}
        </div>

        <div className={styles.sidebar}>
          <TransactionForm uid={user.uid} />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Dashboard;
