import React, {useState, useEffect} from 'react';
import {fetchCountries} from '../../api/index';

const CountryPicker = ({handleCountryChange}) =>{
   
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
        
    },[setFetchedCountries]);


    return(
        <select className="form-control col-md-6 col-8 mx-auto mt-3 mb-3" id="select-country" onChange={(e)=>handleCountryChange(e.target.value)}>
           <option value="">Global</option>
           {fetchedCountries.map((country,index)=> {
               return <option key={country+index} value={country}>{country}</option>
           })}
       </select>
     )
    
}

export default CountryPicker;
