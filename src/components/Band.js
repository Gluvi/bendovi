import React from 'react';

const Band = ({band, changeCurrentBand}) => {
    return(
        <div className='card mt-3'>
            <div className='card-header'>
                <h3>{band.name}</h3>
            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-6'>
                        <img style={{width: '250px'}} src={band.img_url} alt='' />
                    </div>
                    <div className='col-6'>
                        <p>{band.info.substr(0, 400)}...</p>
                    </div>
                </div>
                <div className='card-footer'>
                    <button onClick={() => {changeCurrentBand(band)}} className='btn btn-info float-right' style={{float: 'right'}} >Read more</button>
                </div>
            </div>
        </div>
    );
}

export default Band;