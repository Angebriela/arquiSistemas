import { Hono } from "hono";
import { products } from "../data/products";

const productsRouter = new Hono();

//GET general
productsRouter.get("/", (c) => {
    return c.json(products, 200);
});

//GET con id
productsRouter.get("/:id", (c) => {
    const id = Number(c.req.param("id"));

    const product = products.find((p) => p.id === id);

    if (!product) {
        return c.json(
            {
                message: "Producto no encontrado"
            },
            404
        );
    }

    return c.json(product, 200);
});

//POST 
productsRouter.post("/", async (c) => {

    const body = await c.req.json();

    if (!body.name || body.price === undefined) {
        return c.json(
            {
                message: "Nombre y precio son obligatorios."
            },
            400
        );
    }

    const newId =
        products.length > 0
            ? products[products.length - 1].id + 1
            : 1;

    const newProduct = {
        id: newId,
        name: body.name,
        price: body.price
    };

    products.push(newProduct);

    logger.info(`Producto creado con ID ${newProduct.id}`);
    return c.json(newProduct, 201);

});

//PUT
productsRouter.put("/:id", async (c) => {

    const id = Number(c.req.param("id"));
    const body = await c.req.json();

    if (!body.name || body.price === undefined) {
        return c.json(
            {
                message: "Nombre y precio son obligatorios."
            },
            400
        );
    }

    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
        return c.json(
            {
                message: "Producto no encontrado."
            },
            404
        );
    }

    products[index] = {
        id,
        name: body.name,
        price: body.price
    };

    logger.info(`Producto ${id} actualizado`);
    return c.json(products[index], 200);

});

//DELETE
productsRouter.delete("/:id", (c) => {

    const id = Number(c.req.param("id"));

    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
        logger.warn(`Intento de eliminar un producto inexistente: ${id}`);
        return c.json(
            {
                message: "Producto no encontrado."
            },
            404
        );
    }

    products.splice(index, 1);

    logger.info(`Producto ${id} eliminado`);
    return c.body(null, 204);

});


export default productsRouter;