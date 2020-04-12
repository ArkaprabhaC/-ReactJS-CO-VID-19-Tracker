import React, { Fragment} from 'react';

import { Cards, Charts, CountryPicker } from './components/index';
import {fetchData} from './api/index';
import './App.module.css';

class App extends React.Component {
    state = {
        data: {},
        countries: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({
            data: fetchedData
        });
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);
        this.setState({
            data: fetchedData,
            country: country
        });
    }


    render() {

        const {data,country} = this.state; 

        return (
            <Fragment> 
                <h2 class="text-center text-uppercase text-weight-bold ">Coronavirus Tracker</h2>
                <div className="container">
                    <div className="row justify-content-center">
                        <Cards data={data}/>
                    </div>
                    <div className="row justify-content-center mb-4">
                        <CountryPicker handleCountryChange={this.handleCountryChange}/>
                    </div>
                    <Charts data={data} country={country}/>  
                </div>
                <footer className="mt-5 footer">
                    <div className="container pt-3">
                        <p className="text-center font-weight-light mb-0">By <span style={{"border-bottom":"2px solid black"}}>Arkaprabha Chatterjee</span></p>
                        <p className="text-center font-weight-light mt-2">Drop a mail <a href="mailto:arkaprabha.chatterjee31@gmail.com">
                            here</a> if you wish to collaborate.</p>
                    </div>
                </footer>
            </Fragment>
        )
    }
}

export default App;