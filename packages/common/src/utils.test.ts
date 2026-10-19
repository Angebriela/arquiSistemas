import { describe, expect, it } from "vitest";
import { buildResponse, formatPrice, getProductStatus, validateCreateProduct } from "./utils";


describe("getProductStatus", () => {
    it("clasifica el stock", () => {
        expect(getProductStatus(0)).toBe("OUT_OF_STOCK");
        expect(getProductStatus(3)).toBe("LOW_STOCK");
        expect(getProductStatus(50)).toBe("AVAILABLE");
    });
});


describe("validateCreateProduct", () => {
    it("acepta un DTO válido", () => {
        const result = validateCreateProduct({ name: "Mouse Logitech", price: 10.5, stock: 4 });
        expect(result.valid).toBe(true);
    });

    it("rechaza un DTO inválido", () => {
        const result = validateCreateProduct({ name: "", price: -1, stock: 1.5 });
        expect(result.valid).toBe(false);
        if (!result.valid) expect(result.errors).toHaveLength(3);
    });
});


describe("formatPrice y buildResponse", () => {
    it("formatea a moneda", () => {
        const resultado = formatPrice(1234.5);

        const normalizado = resultado.replace(/\u00A0|\u202F/g, " ");

        expect(normalizado).toBe("Q 1,234.50");
    });
    it("arma la respuesta estándar", () => {
        const res = buildResponse([1, 2, 3], "listo");
        expect(res.ok).toBe(true);
        expect(res.data).toHaveLength(3);
    });
});