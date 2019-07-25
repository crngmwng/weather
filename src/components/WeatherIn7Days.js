import React from 'react';

const WeatherIn7Days = () => {
    return(
    <div className="container">
        <h2>Weather</h2>
        <div id="accordion">
            <div className="card">
            <div className="card-header">
                <a className="card-link" data-toggle="collapse" href="#collapseOne">
                Collapsible Group Item #1
                </a>
            </div>
            <div id="collapseOne" className="collapse show" data-parent="#accordion">
                <div className="card-body">
                    <div className="row">
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                    </div>
                </div>
            </div>
            </div>
            <div className="card">
            <div className="card-header">
                <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                Collapsible Group Item #2
            </a>
            </div>
            <div id="collapseTwo" className="collapse" data-parent="#accordion">
                <div className="card-body">
                    <div className="row">
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                    </div>
                </div>
            </div>
            </div>
            <div className="card">
            <div className="card-header">
                <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                Collapsible Group Item #3
                </a>
            </div>
            <div id="collapseThree" className="collapse" data-parent="#accordion">
                <div className="card-body">
                    <div className="row">
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                        <div className="col">meh</div>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    </div>
    )
}

export default WeatherIn7Days