import React, { useState } from 'react';

const AddPizza = () => {

    const [valuesPizza, setValuesPizza] = useState({
       name: '',
       description: '',
       image: '',
       priceSmall: '',
       priceLarge: '',
       stock: true 
    });

    const { name, description, image, priceSmall, priceLarge, stock } = valuesPizza;


    return (
        <>
            <p className="h4 mb-5 text-uppercase text-center">Agregar Pizza</p>
            <form className="col-6 offset-3 mt-3">
                <div class="mb-3">
                    <label for="name" class="form-label">Nombre pizza</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="name" 
                        aria-describedby="name"
                        value={name} 
                    />
                </div>
                <div className="mb-3">
                    <label for="description">Descripción</label>
                    <textarea 
                        class="form-control" 
                        placeholder="Ingresa descripción de la pizza, ingredientes" 
                        id="description"
                        value={description}
                    ></textarea>
                </div>
                <div class="mb-3">
                    <label for="image" class="form-label">URL Imagen</label>
                    <input 
                        type="url" 
                        class="form-control" 
                        id="image"
                        value={image}
                    />
                </div>
                <div className="row">
                    <div class="mb-3 col-6">
                        <label for="priceSmall" class="form-label">Precio CHICA</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="priceSmall"
                            value={priceSmall}
                        />
                    </div>
                    <div class="mb-3 col-6">
                        <label for="priceLarge" class="form-label">Precio GRANDE</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="priceLarge"
                            value={priceLarge}
                        />
                    </div>
                </div>
                <div class="form-check">
                    <input 
                        class="form-check-input" 
                        type="checkbox" 
                        value="" 
                        id="stock" 
                        checked={stock}
                    />
                    <label class="form-check-label" for="stock">
                        Producto en stock?
                    </label>
                </div>
                <button type="submit" class="btn btn-warning mt-3">Agregar pizza</button>
            </form>
        </>
    );
}
 
export default AddPizza;