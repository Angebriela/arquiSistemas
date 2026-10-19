export type ProductStatus = "AVAILABLE" | "LOW_STOCK" | "OUT_OF_STOCK";

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}

export interface ProductWithStatus extends Product {
    status: ProductStatus;
}

/** DTO para crear un producto (lo usan el formulario web y el endpoint POST). */
export interface CreateProductDto {
    name: string;
    price: number;
    stock: number;
}
export interface ApiResponse<T> {
    ok: boolean;
    message: string;
    data: T;
    timestamp: string;
}
export interface HealthInfo {
    status: "ok";
    app: string;
    uptimeSeconds: number;
}


