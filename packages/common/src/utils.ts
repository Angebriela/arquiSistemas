import { LOW_STOCK_THRESHOLD } from "./constants";
import type { ApiResponse, CreateProductDto, ProductStatus } from "./types";

export function getProductStatus(stock: number): ProductStatus {
    if (stock <= 0) return "OUT_OF_STOCK";
    if (stock <= LOW_STOCK_THRESHOLD) return "LOW_STOCK";
    return "AVAILABLE";
}

export function formatPrice(value: number, currency = "GTQ", locale = "es-GT"): string {
    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(value);
}

export function buildResponse<T>(data: T, message = "OK", ok = true): ApiResponse<T> {
    return { ok, message, data, timestamp: new Date().toISOString() };
}


export type ValidationResult =
    | { valid: true; data: CreateProductDto }
    | { valid: false; errors: string[] };

export function validateCreateProduct(input: unknown): ValidationResult {
    const errors: string[] = [];
    const body = (input ?? {}) as Record<string, unknown>;

    if (typeof body.name !== "string" || body.name.trim().length < 2) {
        errors.push("name debe ser texto de al menos 2 caracteres");
    }

    if (typeof body.price !== "number" || !Number.isFinite(body.price) || body.price <= 0) {
        errors.push("price debe ser un número mayor que 0");
    }

    if (typeof body.stock !== "number" || !Number.isInteger(body.stock) || body.stock < 0) {
        errors.push("stock debe ser un entero mayor o igual a 0");
    }
    
    if (errors.length > 0) return { valid: false, errors };

    return {
        valid: true,
        data: {
            name: (body.name as string).trim(),
            price: body.price as number,
            stock: body.stock as number,
        },
    };
}