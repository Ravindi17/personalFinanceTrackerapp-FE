import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/finance";

export const getAllIncome = () => axios.get(`${API_BASE_URL}/income`);
export const getAllExpenses = () => axios.get(`${API_BASE_URL}/expense`);
export const addIncome = (data) => axios.post(`${API_BASE_URL}/income`, data);
export const addExpense = (data) => axios.post(`${API_BASE_URL}/expense`, data);
export const updateIncome = (id, data) => axios.put(`${API_BASE_URL}/income/${id}`, data);
export const updateExpense = (id, data) => axios.put(`${API_BASE_URL}/expense/${id}`, data);
export const deleteIncome = (id) => axios.delete(`${API_BASE_URL}/income/${id}`);
export const deleteExpense = (id) => axios.delete(`${API_BASE_URL}/expense/${id}`);
