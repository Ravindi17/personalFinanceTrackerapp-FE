import { useEffect , useState} from "react"
import { getAllIncome, getAllExpenses , deleteExpense, deleteIncome , updateExpense , updateIncome } from "../api"

const TransactionsList= () =>{
    const[income , setIncome] = useState([]); 
    const[expense , setExpense] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, []
    )

    const fetchTransactions = async () => {
        const incomeList = await getAllIncome(); 
        const expenseList = await getAllExpenses(); 

        setIncome(incomeList.data); 
        setExpense(expenseList.data);
    }; 

    const handleDeleteIncome = async (id) =>{
        await deleteIncome(id); 
        fetchTransactions();
    }; 

    const handleDeleteExpense = async (id) => {
        await deleteExpense(id); 
        fetchTransactions();
    };

    const handleUpdateIncome = async (id) => {
        try{    
            const newSource = prompt("Enter new source : "); 
            const newAmount = prompt("Enter new amount : "); 
            const newDate = prompt("Enter new date: (YYYY-MM-DD)");

            if(!newSource || !newAmount || !newDate) {
                alert("All fields required"); 
                return;
            } 

            const updatedData = {
                source : newSource , 
                amount : parseFloat(newAmount) , 
                date: newDate 
            }; 

            const response = await updateIncome(id , updatedData);
            console.log("updated" , response); 

            fetchTransactions();
        }catch(error){
            console.error("failed to update", error);
            alert("failed to update");    
        }   
    }; 

    const handleUpdateExpense = async (id) => {
        try{
            const newCategory = prompt("Enter new category : "); 
            const newAmount = prompt("Enter new amount"); 
            const newDate = prompt("Enter new date"); 

            if(!newCategory || !newAmount || !newDate) {
                alert("All fields required"); 
                return;
             }  


            const updatedData = {
                category : newCategory , 
                amount : parseFloat(newAmount) , 
                date : newDate
            };

            const response = await updateExpense(id , updatedData);
            console.log("updated" , response); 
            fetchTransactions();

        }catch(error){
            console.error("failed to update", error);
            alert("failed to update");   
        }  
    }

    return (
        <div>
            <h2 className="categories">Incomes List</h2>

            <ul>
                {income.map((inc) =>(
                    <li key = {inc.id} >
                        {inc.source} - ${inc.amount} ({inc.date})
                        <button className="button" onClick={() => handleDeleteIncome(inc.id)}>Delete</button>
                        <button className="button" onClick={() => handleUpdateIncome(inc.id)}>Update</button>
                    </li>
                ) )
                
                }
            </ul>


            <h2 className="categories">Expenses List</h2>

            <ul>
                {expense.map((exp) => (
                    <li key = {exp.id} >
                        {exp.category} - ${exp.amount} ({exp.date})
                        <button className="button" onClick={() => handleDeleteExpense(exp.id)}>Delete</button>
                        <button className="button" onClick={() => handleUpdateExpense(exp.id)}>Update</button>
                    </li>

                ))}
            </ul>   

        </div>

    )  
}; 

export default TransactionsList; 