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
* tsx
* scalar

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

# Documentación

http://localhost:3000/docs

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



