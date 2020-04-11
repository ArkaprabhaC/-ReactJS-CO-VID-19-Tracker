import React from 'react';
import './Cards.css';
import CountUp from 'react-countup';

const Cards = ({data: {confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return "Loading Charts..";
    }
    
    return(
        <div className="row justify-content-center my-5">
            <div className="col-md-3 col-9 mb-3">
                <div className="card">
                    <div className="card-body confirmed">
                        <h5 className="card-title text-primary font-weight-light">Confirmed</h5>
                        <p className="card-text m-0">
                            <CountUp 
                                className="text-primary"
                                start={0} 
                                end={confirmed.value} 
                                duration={2.5}
                                separator=","
                            />
                        </p>
                        <p className="text-secondary m-0">{new Date(lastUpdate).toDateString()}</p> 
                        <p className="text-secondary m-0">Number of act cases of COVID19</p>                       
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-9 mb-3">
                <div className="card">
                    <div className="card-body recovered">
                        <h5 className="card-title text-success font-weight-light">Recovered</h5>
                        <p className="card-text m-0">
                            <CountUp 
                                className="text-success"
                                start={0} 
                                end={recovered.value} 
                                duration={2.5}
                                separator=","
                            />
                        </p>
                        <p className="text-secondary m-0">{new Date(lastUpdate).toDateString()}</p> 
                        <p className="text-secondary m-0">Number of act cases of COVID19</p>   
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-9 mb-0">
                <div className="card">
                    <div className="card-body deaths">
                        <h5 className="card-title text-danger font-weight-light">Deaths</h5>
                        <p className="card-text m-0">
                            <CountUp 
                                className="text-danger"
                                start={0} 
                                end={deaths.value} 
                                duration={2.5}
                                separator=","
                            />
                        </p>
                        <p className="text-secondary m-0">{new Date(lastUpdate).toDateString()}</p> 
                        <p className="text-secondary m-0">Number of act cases of COVID19</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;
