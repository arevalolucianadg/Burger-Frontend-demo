import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ReactLoading from 'react-loading';

import CardPizza from '../components/CardPizza';

const GET_PIZZAS = gql`
    query getPizzas {
        getPizzas {
            id
            name
            description
            image
            priceSmallSize
            priceLargeSize
            stock
        }
    }
`;

const Home = () => {

    const { data, loading } = useQuery(GET_PIZZAS);
    
    const { getPizzas } = data;

    return (
        <>
            <p className="h4 mb-5 text-uppercase text-center">Menú</p>
            {
                loading 
                ? (
                    <div className="container d-flex justify-content-center mt-3">
                        <ReactLoading type="spin" color="#2d3e50" height={'5%'} width={'5%'} />
                    </div>
                )
                : (
                    <div className="col-12 mt-3 d-flex flex-wrap justify-content-evenly row">
                        { getPizzas && getPizzas.map( pizza => <CardPizza key={ pizza.id } pizza={ pizza } /> ) }
                    </div>
                )
            }
        </>
    );
}
 
export default Home;