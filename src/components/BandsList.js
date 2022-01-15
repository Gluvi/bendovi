import React from 'react';
import Band from './Band';

const BandsList = ({bands, changeCurrentBand}) => {
    const sviBendovi = bands.map(band => {
        return(
            <div className='col-sm-6' key={band.id}>
                <Band band={band} changeCurrentBand={changeCurrentBand} />
            </div>
        )
    })
    
    return(
        <div className='bandList container-fluid mt-3'>
            <div className='row'>
                <div className='col-10 offset-1'>
                    <div className='row'>
                        {sviBendovi}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BandsList;