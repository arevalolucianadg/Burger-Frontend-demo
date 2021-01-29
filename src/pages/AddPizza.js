import React from 'react';

const AddPizza = () => {
    return (
        <>
            <p className="h4 mb-5 text-uppercase text-center">Agregar Pizza</p>
            <form className="col-6 offset-3 mt-3">
                <div class="mb-3">
                    <label for="name" class="form-label">Nombre pizza</label>
                    <input type="text" class="form-control" id="name" aria-describedby="name" />
                </div>
                <div className="mb-3">
                    <label for="description">Descripción</label>
                    <textarea class="form-control" placeholder="Ingresa descripción de la pizza, ingredientes" id="description"></textarea>
                </div>
                <div class="mb-3">
                    <label for="image" class="form-label">URL Imagen</label>
                    <input type="url" class="form-control" id="image" />
                </div>
                <div className="row">
                    <div class="mb-3 col-6">
                        <label for="precioChica" class="form-label">Precio CHICA</label>
                        <input type="text" class="form-control" id="precioChica" />
                    </div>
                    <div class="mb-3 col-6">
                        <label for="precioGrande" class="form-label">Precio GRANDE</label>
                        <input type="text" class="form-control" id="precioGrande" />
                    </div>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="stock" />
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