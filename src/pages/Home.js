import React from "react";
import TransactionsList from "../components/TransactionsList";
import "../styles.css";

const Home = () =>{
    return(
        <div className="home">
            <h1 className="title">
                WELCOME TO YOUR PERSONAL FINANCE TRACKER
            </h1>
            <TransactionsList/>
        </div>
    );
}; 

export default Home; 