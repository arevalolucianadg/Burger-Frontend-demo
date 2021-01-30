import React from 'react';

const CardPizza = () => {
    return (
        <div className="card mb-3 mx-1 p-0">
            <div className="row g-0">
                <div className="col-md-5">
                    <img className="card-img" src="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella.jpg" alt="Pizza" />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title fw-bold mt-2">Pizza muzzarella</h5>
                        <p className="card-text">Salsa de tomate, muzzarella y orégano.</p>
                        <div className="row mt-5">
                            <p className="card-text col-6 fw-bold">
                                <small className="mr-3 text-muted text-uppercase">Chica</small>
                                $ 370
                            </p>
                            <p className="card-text col-6 fw-bold">
                            <small className="mr-3 text-muted text-uppercase">Grande</small>
                            $ 470
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CardPizza;