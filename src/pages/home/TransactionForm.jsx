import { useState } from "react";

const TransactionForm = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const formSubmit = (e) => {
        e.preventDefault()
        console.log({name, amount})
    }
    return ( 
        <>
            <h3 className="text-2xl font-semibold capitalize text-center">Add transaction</h3>
            <form onSubmit={formSubmit}>
                <label>
                    <span>Transaction Name:</span>
                    <input type="text" required onChange={(e) => setName(e.target.value)} value={name}/>
                </label>
                
                <label>
                    <span>Amount:</span>
                    <input type="number" required onChange={(e) => setAmount(e.target.value)} value={amount}/>
                </label>
                
                <button>Submit</button>
            </form>
        </>
     );
}
 
export default TransactionForm;