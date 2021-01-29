import React from 'react';

const CardPizza = () => {
    return (
        <div class="card mb-3 mx-1 p-0">
            <div class="row g-0">
                <div class="col-md-5">
                    <img className="card-img" src="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella.jpg" alt="Pizza" />
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <h5 class="card-title fw-bold mt-2">Pizza muzzarella</h5>
                        <p class="card-text">Salsa de tomate, muzzarella y orégano.</p>
                        <div className="row mt-5">
                            <p class="card-text col-6 fw-bold">
                                <small class="mr-3 text-muted text-uppercase">Chica</small>
                                $ 370
                            </p>
                            <p class="card-text col-6 fw-bold">
                            <small class="mr-3 text-muted text-uppercase">Grande</small>
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