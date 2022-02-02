import { useEffect, useState } from "react"
import { useFirestore } from "../../hooks/useFirestore"

const TransactionForm = ({uid}) => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [message, setMessage] = useState('')
    const { addDocs, response } = useFirestore('transactions')

    const formSubmit = (e) => {
        e.preventDefault()
        addDocs({ uid ,name, amount})
    }

    useEffect(() => {
        if(response.success) {
            setName('')
            setAmount('')
        }if(response.error) {
            setMessage('Fail to add data')
        }
    },[response.success, response.error])
    
    return ( 
        <div className="font-sans">
            <h3 className="text-2xl font-semibold capitalize text-center">Add transaction</h3>
            {message && <p className="text-center text-red-500">{message}</p>}
            <form onSubmit={formSubmit}>
                <label>
                    <span>Transaction Name:</span>
                    <input type="text" required onChange={(e) => setName(e.target.value)} value={name}/>
                </label>
                
                <label>
                    <span>Amount:</span>
                    <input type="number" required onChange={(e) => setAmount(e.target.value)} value={amount}/>
                </label>
                
                <button className="w-full text-white border-2 border-white font-semibold rounded-md py-2 hover:bg-white hover:text-black " type="submit">Submit</button>
            </form>
        </div>
     )
}
 
export default TransactionForm