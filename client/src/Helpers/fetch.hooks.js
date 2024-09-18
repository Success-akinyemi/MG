import { useEffect, useState } from "react";
import axios from 'axios'

//axios.defaults.baseURL = 'https://subssum-server.onrender.com/api/web'
axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL

//FETCH ALL DATA PLANS
export function useFetchDataPlans(query){
    const [ dataPlans, setDataPlans] = useState({ isFetchingDataPlans: true, dataPlans: null, dataPlansStatus: null, dataPlansServerError: null, })
    useEffect(() => {
        const fetchDataPlans = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/data/fetAllDataPlans`, {withCredentials: true}) : await axios.get(`/data/fetAllDataPlans/${query}`, {withCredentials: true})
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setDataPlans({ isFetchingDataPlans: false, dataPlans: data, dataPlansStatus: status, dataPlansServerError: null})
                } else{
                    setDataPlans({ isFetchingDataPlans: false, dataPlans: null, dataPlansStatus: status, dataPlansServerError: null})
                }
            } catch (error) {
                setDataPlans({ isFetchingDataPlans: false, dataPlans: null, dataPlansStatus: null, dataPlansServerError: error})
            }
        }
        fetchDataPlans()
    }, [query])

    return dataPlans
}

//FETCH ALL TRANSACTION OF A USER
export function useFetchUserTransaction(query){
    const [ transactionData, setTransactionData ] = useState({ isFetchingUserTransction: true, userTransaction: null, userTransactionStatus: null, userTransactionServerError: null, })
    useEffect(() => {
        const fetchUserTransaction = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/transactions/fetchAllUserTransactions`, {withCredentials: true}) : await axios.get(`/transactions/fetchAUserTransaction/${query}`, {withCredentials: true})
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setTransactionData({ isFetchingUserTransction: false, userTransaction: data, userTransactionStatus: status, userTransactionServerError: null})
                } else{
                    setTransactionData({ isFetchingUserTransction: false, userTransaction: null, userTransactionStatus: status, userTransactionServerError: null})
                }
            } catch (error) {
                setTransactionData({ isFetchingUserTransction: false, userTransaction: null, userTransactionStatus: null, userTransactionServerError: error})
            }
        }
        fetchUserTransaction()
    }, [query])

    return transactionData
}