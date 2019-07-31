import React from 'react';
import Town from './Town.js';
import Dashboard from './Dashboard.js'

const Townslist = ({ townslist=[] }) => {
    console.log(townslist);
    return(
            <div className="d-flex justify-content-around flex-wrap">
                {townslist.map(town =>                     
                    <Town key={town.data.city_name}
                    {...town} />
                    )
                }
                            <Dashboard />
            </div>
    )
}


export default Townslist