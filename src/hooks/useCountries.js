import { useEffect, useState } from 'react';
import useOtionsList from './useOptionsList';

import axios from 'axios';

const API = axios.create({
    baseURL:'https://restcountries.com/v2/'
});
const fixedData = (data) => {
    return data.trim().toLowerCase();
}
const useCountries = () => {
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [countries, setCountries] = useState([]);
    const {getOption} = useOtionsList();
    const getAll = async () =>{
        try {
            const response = await API.get('/all');
            setCountries(response.data);
            setFilteredCountries(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    const filter = (k, o) => {
        let cl = [];
        let reg = getOption(o);
        if(fixedData(k) === ""){
            cl = countries;
        }
        else{
            cl = countries.filter(c =>
                fixedData(c.name).indexOf(fixedData(k)) > -1
                )
        }
        if(cl.length > 0){
            if(fixedData(reg) !== "all"){
                cl = cl.filter(c=>
                    fixedData(c.region) === fixedData(reg)
                    )
                }
            }
        setFilteredCountries(cl)
    }
    useEffect(()=>{
        getAll();
    },[]);

    return {countries, filteredCountries, filter}
}

export default useCountries;