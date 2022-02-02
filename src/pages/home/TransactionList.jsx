import styles from "./Dashboard.module.css";
import { useFirestore } from "../../hooks/useFirestore";
import {BsTrash} from 'react-icons/bs'
const TransactionList = ({documents}) => {
  const { deleteDocs } = useFirestore('transactions')

  return (
    <ul className={styles.transactions}>
      {documents.map((docs) => (
          <li key={docs.id}>
              <p className={styles.name}>{docs.name}</p>
              <p className={styles.amount}>${docs.amount}</p>
              <BsTrash className="cursor-pointer text-red-500 -mt-8" onClick={() => deleteDocs(docs.id)} />
          </li>
      ))}
    </ul>
  )
}

export default TransactionList;
