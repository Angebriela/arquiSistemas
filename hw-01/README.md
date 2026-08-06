# API de Productos - HW-01
## Descripción

Este proyecto consiste en una API REST desarrollada con **TypeScript** 
utilizando el framework **Hono**. La API implementa las operaciones básicas 
de un CRUD sobre un recurso llamado **Product**, almacenando la información en memoria,
por lo que no requiere una base de datos.

## Tecnologías utilizadas

* TypeScript
* Hono
* Node.js
* Pino (Logger)
* tsx

## Requisitos

Antes de ejecutar el proyecto, asegúrese de tener instalado:

* Node.js (versión 18 o superior recomendada)
* npm

## Instalación

Clone el repositorio:
git clone https://github.com/Angebriela/arquiSistemas.git

Ingrese a la carpeta del proyecto:
cd arquiSistemas/hw-01

Instale las dependencias:
npm install

## Ejecución

Inicie el servidor con el siguiente comando:
npm run dev

Si todo se ejecuta correctamente, la API estará disponible en:

http://localhost:3000

## Endpoints disponibles

### Obtener todos los productos

**GET**

GET /products

Respuesta:

* 200 OK

---

### Obtener un producto por ID

**GET**

GET /products/:id

Respuestas:

* 200 OK
* 404 Not Found

---

### Crear un producto

**POST**

POST /products

Body:

```json
{
    "name": "Monitor",
    "price": 1200
}
```

Respuestas:

* 201 Created
* 400 Bad Request

---

### Actualizar un producto

**PUT**

PUT /products/:id

Body:

```json
{
    "name": "Monitor Gamer",
    "price": 1500
}
```

Respuestas:

* 200 OK
* 400 Bad Request
* 404 Not Found

---

### Eliminar un producto

**DELETE**

```http
DELETE /products/:id
```

Respuestas:

* 204 No Content
* 404 Not Found

## Estructura del proyecto

```text
hw-01/
│
├── src/
│   ├── data/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

## Notas

* La información se almacena únicamente en memoria.
* Al reiniciar el servidor, los datos creados o modificados se perderán.
* La API fue desarrollada como parte de la tarea **HW-01** de la asignatura de Arquitectura de Sistemas.
