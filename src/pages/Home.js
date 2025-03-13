import React from "react";
import TransactionsList from "../components/TransactionsList";
import "../styles.css";

const Home = () =>{
    return(
        <div className="home">
            <h1>
                Welcome to your personal Finance tracker
            </h1>
            <TransactionsList/>
        </div>
    );
}; 

export default Home; 