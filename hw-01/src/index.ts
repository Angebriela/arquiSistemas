import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();
import productsRouter from "./routes/products";

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
        console.log("Servidor ejecutandose en http://localhost:3000");
    }

);