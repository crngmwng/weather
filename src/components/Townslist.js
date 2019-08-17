import React from 'react';
import Town from './Town.js';
import Dashboard from './Dashboard.js'

const Townslist = (props) => {
    console.log(props)
    return(
        <div className="d-flex justify-content-around flex-wrap">                  
                {/* {townslist.map((town, key) =>
                    <Town key={town}
                    {...town} />
                    )
                } */}
                    <Dashboard />
            </div>
    )
}

export default Townslist