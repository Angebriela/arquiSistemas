import { useCallback, useEffect, useState, type FormEvent } from "react";
import {
    API_ROUTES,
    APP_NAME,
    formatPrice,
    validateCreateProduct,
    type ApiResponse,
    type CreateProductDto,
    type HealthInfo,
    type ProductStatus,
    type ProductWithStatus,
} from "@repo/common";

const STATUS_LABEL: Record<ProductStatus, string> = {
    AVAILABLE: "Disponible",
    LOW_STOCK: "Stock bajo",
    OUT_OF_STOCK: "Agotado",
};

export default function App() {
    const [health, setHealth] = useState<HealthInfo | null>(null);
    const [products, setProducts] = useState<ProductWithStatus[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [form, setForm] = useState({ name: "", price: "", stock: "" });
    const [formErrors, setFormErrors] = useState<string[]>([]);
    
    const load = useCallback(async () => {
        try {
            const [h, p] = await Promise.all([
                fetch(API_ROUTES.health).then((r) => r.json() as Promise<ApiResponse<HealthInfo>>),
                fetch(API_ROUTES.products).then((r) => r.json() as Promise<ApiResponse<ProductWithStatus[]>>),
        ]);
        setHealth(h.data);
        setProducts(p.data);
        setError(null);
        } catch {
        setHealth(null);
        setError("No se pudo conectar con la API. Ejecuta: pnpm dev:api");
        }
        }, []);

        useEffect(() => { void load();}, [load]);

        async function handleSubmit(e: FormEvent) { 
            e.preventDefault();

            const dto: CreateProductDto = {
                name: form.name,
                price: Number(form.price),
                stock: Number(form.stock),
            };

            const check = validateCreateProduct(dto); // misma validación que usa el backend
            if (!check.valid) {
                setFormErrors(check.errors);
            return;
            }

            setFormErrors([]);
            await fetch(API_ROUTES.products, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(check.data),
            });
            setForm({ name: "", price: "", stock: "" });
            await load();
        }


        
        return (
            <main className="container">
                <h1>{APP_NAME}</h1>
                <p className={health ? "badge ok" : "badge down"}>
                    {health ? `API conectada: ${health.app} (uptime ${health.uptimeSeconds}s)` : "API desconectada"}
                </p>
                {error && <p className="error">{error}</p>}

                <h2>Productos</h2>
                <table>
                    <thead>
                        <tr><th>ID</th><th>Nombre</th><th>Precio</th><th>Stock</th><th>Estado</th></tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{formatPrice(p.price)}</td>
                                <td>{p.stock}</td>
                                <td><span className={"tag " + p.status}>{STATUS_LABEL[p.status]}</span></td>
                        </tr> ))}
                    </tbody>
                </table>

                <h2>Nuevo producto</h2>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    <input placeholder="Precio" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
                    <input placeholder="Stock" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} />
                    <button type="submit">Crear</button>
                </form>
                {formErrors.map((m) => ( <p key={m} className="error">{m}</p>
                ))}
            </main>
        );

/*        
return (
    <main className="container">
        <h1>{APP_NAME}</h1>

        <p className={health ? "badge ok" : "badge down"}>
            {health
                ? `API conectada: ${health.app} (uptime ${health.uptimeSeconds}s)`
                : "API desconectada"}
        </p>

        {error && <p className="error">{error}</p>}

        <h2>Productos</h2>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Estado</th>
                </tr>
            </thead>

            <tbody>
                {products.map((p) => (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{formatPrice(p.price)}</td>
                        <td>{p.stock}</td>
                        <td>
                            <span className={"tag " + p.status}>
                                {STATUS_LABEL[p.status]}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        <h2>Nuevo producto</h2>

        <form onSubmit={handleSubmit}>
            <input
                placeholder="Nombre"
                value={form.name}
                onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                }
            />

            <input
                placeholder="Precio"
                value={form.price}
                onChange={(e) =>
                    setForm({ ...form, price: e.target.value })
                }
            />

            <input
                placeholder="Stock"
                value={form.stock}
                onChange={(e) =>
                    setForm({ ...form, stock: e.target.value })
                }
            />

            <button type="submit">Crear</button>
        </form>

        {formErrors.map((m) => (
            <p key={m} className="error">
                {m}
            </p>
        ))}
    </main>
);
*/

        
}

