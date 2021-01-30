import React from 'react';

const CardPizza = ({ pizza }) => {

    const { name, description, image, priceSmallSize, priceLargeSize } = pizza;

    return (
        <div className="card mb-3 mx-1 p-0">
            <div className="row g-0">
                <div className="col-md-5">
                    <img className="card-img" src={image} alt={name} />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title fw-bold mt-2">Pizza {name}</h5>
                        <p className="card-text">{description}</p>
                        <div className="row mt-5">
                            <p className="card-text col-6 fw-bold">
                                <small className="mr-3 text-muted text-uppercase">Chica</small>
                                $ {priceSmallSize}
                            </p>
                            { 
                                priceLargeSize && (<p className="card-text col-6 fw-bold">
                                    <small className="mr-3 text-muted text-uppercase">Grande</small>
                                    $ {priceLargeSize}
                                </p>)

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CardPizza;