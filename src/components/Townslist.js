import React from 'react';
import Town from './Town.js';
import Dashboard from './Dashboard.js'

const Townslist = ({ towns=[] }) => {
    return(
            <div className="d-flex justify-content-around flex-wrap">
                {towns.map(town =>
                            <Town key={town.id}
                            {...town} />
                    )
                }
                            <Dashboard />
            </div>
    )
}

export default Townslist