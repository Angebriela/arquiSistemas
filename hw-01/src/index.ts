import { Hono } from "hono";
import { serve } from "@hono/node-server";
import logger from "./utils/logger";

const app = new Hono();
import productsRouter from "./routes/products";

app.use("*", async (c, next) => {

    logger.info(
        `${c.req.method} ${c.req.path}`
    );

    await next();

});

app.route("/products", productsRouter);

app.get("/", (c) => {
    return c.json({
        message: "Api con Hono y TypeScript :)"
    });
});


serve(
    {
        fetch: app.fetch,
        port: 3000
    },
    () => {
        //console.log("Servidor ejecutandose en http://localhost:3000");
        logger.info("Servidor ejecutándose en http://localhost:3000");
    }

);