import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

interface Book {
  id: number;
  titulo: string;
  autor: string;
  prestado: boolean;
}

const books: Book[] = [
  {
    id: 1,
    titulo: "Indigno de Ser Humano",
    autor: "Dazai Osamu",
    prestado: false
  },
  {
    id: 2,
    titulo: "Crimen y Castigo",
    autor: "Fyodor Dostoyevsky",
    prestado: true
  },
  {
    id: 3,
    titulo: "Soy un Gato",
    autor: "Natsume Souseki",
    prestado: true
  }
];

app.get("/", (c) => {
  return c.json({
    message: "API Biblioteca Digital funcionando"
  });
});

app.get("/books", (c) => {
  return c.json(books);
});

app.post("/books", async (c) => {
  const contentType = c.req.header("Content-Type");

  if (!contentType?.includes("application/json")) {
    return c.json(
      {
        error: "El cuerpo debe ser JSON"
      },
      415
    );
  }

  const body = await c.req.json();

  const newBook: Book = {
    id: books.length + 1,
    titulo: body.titulo,
    autor: body.autor,
    prestado: body.prestado ?? false
  };

  books.push(newBook);

  return c.json(newBook, 201);
});

app.get("/health/fitness", (c) => {
  const totalBooks = books.length;

  const borrowedBooks = books.filter(
    (book) => book.prestado
  ).length;

  const borrowedRatio =
    totalBooks === 0
      ? 0
      : borrowedBooks / totalBooks;

  const capacityOK = totalBooks <= 100;
  const loanRatioOK = borrowedRatio < 0.8;

  const healthy = capacityOK && loanRatioOK;

  return c.json(
    {
      status: healthy
        ? "Healthy"
        : "Degradacion de Calidad",

      metrics: {
        totalBooks,
        borrowedBooks,
        borrowedRatio: `${(borrowedRatio * 100).toFixed(2)}%`
      },

      restrictions: {
        capacity: {
          limit: 100,
          passed: capacityOK
        },
        loanRatio: {
          limit: "80%",
          passed: loanRatioOK
        }
      }
    },
    healthy ? 200 : 503
  );
});

//Esto para probar y colocar 100 libros y comprobar healty
app.post("/test/capacity", (c) => {
  while (books.length <= 100) {
    books.push({
      id: books.length + 1,
      titulo: "Libro de prueba",
      autor: "Autor de prueba",
      prestado: false
    });
  }

  return c.json({
    message: "Datos de prueba agregados",
    totalBooks: books.length
  });
});


serve({
  fetch: app.fetch,
  port: 3000
});

console.log("Servidor ejecutándose en http://localhost:3000");