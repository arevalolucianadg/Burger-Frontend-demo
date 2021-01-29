import React from 'react';

import CardPizza from '../components/CardPizza';

const Home = () => {
    return (
        <>
            <p className="h4 mb-5 text-uppercase text-center">Menú</p>
            <div className="col-12 mt-3 d-flex flex-wrap justify-content-evenly row">
                <CardPizza />
                <CardPizza />
                <CardPizza />
                <CardPizza />
            </div>
        </>
    );
}
 
export default Home;