import { OpenAPIHono } from '@hono/zod-openapi';
import { serve } from "@hono/node-server";
import logger from "./utils/logger";
import { apiReference } from '@scalar/hono-api-reference';
import { openApiConfig } from "./openapi";




const app = new OpenAPIHono()
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

app.get(
  "/docs",
  apiReference({
    spec: {
      url: "/openapi"
    }
  })
);

app.doc("/openapi", openApiConfig);


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