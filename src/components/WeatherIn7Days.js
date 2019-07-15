import React from 'react';

const WeatherIn7Days = () => {
    return(
    <div class="container">
        <h2>Weather</h2>
        <div id="accordion">
            <div class="card">
            <div class="card-header">
                <a class="card-link" data-toggle="collapse" href="#collapseOne">
                Collapsible Group Item #1
                </a>
            </div>
            <div id="collapseOne" class="collapse show" data-parent="#accordion">
                <div class="card-body">
                    <div className="row">
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                    </div>
                </div>
            </div>
            </div>
            <div class="card">
            <div class="card-header">
                <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                Collapsible Group Item #2
            </a>
            </div>
            <div id="collapseTwo" class="collapse" data-parent="#accordion">
                <div class="card-body">
                    <div className="row">
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                    </div>
                </div>
            </div>
            </div>
            <div class="card">
            <div class="card-header">
                <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                Collapsible Group Item #3
                </a>
            </div>
            <div id="collapseThree" class="collapse" data-parent="#accordion">
                <div class="card-body">
                    <div className="row">
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                        <div className="col">mew</div>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    </div>
    )
}

export default WeatherIn7Days