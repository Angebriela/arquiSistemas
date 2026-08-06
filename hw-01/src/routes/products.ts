import { products } from "../data/products";
import { createRoute, z } from "@hono/zod-openapi";
import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";

const productsRouter = new OpenAPIHono();



const ProductSchema = z.object({
    id: z.number(),
    nombre: z.string(),
    precio: z.number()
});

const CreateProductSchema = z.object({

    nombre:z.string(),

    precio:z.number()

});

const createProductRoute = createRoute({

    method:"post",

    path:"/",

    summary:"Crear producto",

    request:{
        body:{
            content:{
                "application/json":{
                    schema:CreateProductSchema
                }
            }
        }
    },


    responses:{

        201:{
            description:"Producto creado",
            content:{
                "application/json":{
                    schema:ProductSchema
                }
            }
        }

    }

});


//GET general
const getProductsRoute = createRoute({

    method: "get",

    path: "/",

    summary: "Obtener todos los productos",

    responses: {
        200: {
            description: "Lista de productos",
            content: {
                "application/json": {
                    schema: z.array(ProductSchema)
                }
            }
        }
    }

});

productsRouter.openapi(getProductsRoute, (c) => {
    return c.json(products, 200);
});

//GET con id
const getProductByIdRoute = createRoute({

    method:"get",

    path:"/:id",

    summary:"Obtener producto por ID",

    request:{
        params:z.object({
            id:z.string()
        })
    },

    responses:{

        200:{
            description:"Producto encontrado",
            content:{
                "application/json":{
                    schema:ProductSchema
                }
            }
        },

        404:{
            description:"Producto no encontrado"
        }

    }

});

productsRouter.openapi(getProductByIdRoute,(c)=>{

    const id = Number(c.req.param("id"));

    const product = products.find(
        (p)=>p.id===id
    );


    if(!product){
        return c.json(
            {
                message:"Producto no encontrado"
            },
            404
        );
    }


    return c.json(product,200);

});


//POST 

productsRouter.openapi(createProductRoute,async(c)=>{

    //const body = await c.req.json();
    const body = c.req.valid("json");

    const newId =
        products.length > 0
        ? products[products.length-1].id+1
        :1;


    const newProduct={
        id:newId,
        nombre:body.nombre,
        precio:body.precio
    };


    products.push(newProduct);


    logger.info(
        `Producto creado con ID ${newProduct.id}`
    );


    return c.json(newProduct,201);

});


//PUT

const updateProductRoute=createRoute({

    method:"put",

    path:"/:id",

    summary:"Actualizar producto",

    request:{

        params:z.object({
        id:z.string()
    }),

        body:{
            content:{
                "application/json":{
                schema:CreateProductSchema
                }
            }
        }

    },


    responses:{

        200:{
            description:"Producto actualizado",
            content:{
                "application/json":{
                    schema:ProductSchema
                }
            }
        },

    404:{
        description:"Producto no encontrado"
    }

    }

});

productsRouter.openapi(updateProductRoute,async(c)=>{

    const id = Number(c.req.param("id"));
    const body = await c.req.json();

    if (!body.nombre || body.precio === undefined) {
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
        nombre: body.nombre,
        precio: body.precio
    };

    logger.info(`Producto ${id} actualizado`);
    return c.json(products[index], 200);

});


//DELETE

const deleteProductRoute=createRoute({

    method:"delete",

    path:"/:id",

    summary:"Eliminar producto",

    request:{
        params:z.object({
        id:z.string()
        })
    },


    responses:{

        204:{
            description:"Producto eliminado"
        },

        404:{
            description:"Producto no encontrado"
        }

    }

});

productsRouter.openapi(deleteProductRoute,(c)=>{

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