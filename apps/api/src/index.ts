import cors from "cors";
import express from "express";
import {
    API_ROUTES,
    APP_NAME,
    buildResponse,
    getProductStatus,
    validateCreateProduct,
    type HealthInfo,
    type Product,
    type ProductWithStatus,
} from "@repo/common";

const app = express();
const PORT = Number(process.env.PORT) || 3001;
app.use(cors());

app.use(express.json());
const products: Product[] = [
    { id: 1, name: "Teclado mecánico", price: 49.9, stock: 25 },
    { id: 2, name: "Mouse inalámbrico", price: 19.5, stock: 4 },
    { id: 3, name: "Monitor 24 pulgadas", price: 129, stock: 0 },
];

function withStatus(product: Product): ProductWithStatus {
    return { ...product, status: getProductStatus(product.stock) };
}

app.get(API_ROUTES.health, (_req, res) => {
    const info: HealthInfo = {
        status: "ok",
        app: APP_NAME,
        uptimeSeconds: Math.round(process.uptime()),
    };
    res.json(buildResponse(info, "API funcionando"));
});


app.get(API_ROUTES.products, (_req, res) => {
    res.json(buildResponse(products.map(withStatus), "Lista de productos"));
});

app.post(API_ROUTES.products, (req, res) => {
    const result = validateCreateProduct(req.body);
    if (!result.valid) {
        res.status(400).json(buildResponse(result.errors, "Datos inválidos", false));
        return;
    }
    const product: Product = { id: products.length + 1, ...result.data };
    products.push(product);
    res.status(201).json(buildResponse(withStatus(product), "Producto creado"));
});


app.listen(PORT, () => {
    console.log(`[api] ${APP_NAME} escuchando en http://localhost:${PORT}`);
});