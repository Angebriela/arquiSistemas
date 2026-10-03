# Django API - HW-03

API desarrollada con Django y Django REST Framework 

## Tecnologías

* Python
* Django
* Django REST Framework
* djangorestframework-simplejwt (JWT)
* SQLite

## Requisitos

* Python 3.x
* pip
* Git

## Instalación
Clonar el repositorio:

```bash
git clone https://github.com/Angebriela/arquiSistemas.git
```

Ingresar al proyecto:

```bash
cd arquiSistemas
```

Crear el ambiente virtual:

```bash
python -m venv venv
```

Activar el ambiente virtual en Windows:

```powershell
.\venv\Scripts\Activate.ps1
```

Instalar las dependencias:

```bash
pip install -r requirements.txt
```

## Migraciones

Crear las migraciones:

```bash
python manage.py makemigrations
```

Aplicar las migraciones:

```bash
python manage.py migrate
```

Para consultar el estado de las migraciones, y como van aumentando:

```bash
python manage.py showmigrations
```

## Ejecutar el proyecto

```bash
python manage.py runserver
```

La API estará disponible en:

```text
http://127.0.0.1:8000/
```

## Autenticación JWT

Todos los endpoints de las entidades requieren un token JWT. Crear primero un usuario de Django:

```bash
python manage.py createsuperuser
```

Solicitar el par de tokens con las credenciales del usuario:

```http
POST http://127.0.0.1:8000/api/token/
Content-Type: application/json

{
  "username": "admin",
  "password": "tu_contraseña"
}
```

La respuesta contiene `access` y `refresh`. En las siguientes solicitudes se debe enviar el token de acceso:

```http
Authorization: Bearer <access>
```

Cuando expire el token de acceso, obtener uno nuevo:

```http
POST http://127.0.0.1:8000/api/token/refresh/
Content-Type: application/json

{
  "refresh": "<refresh>"
}
```

El token de acceso dura 30 minutos y el de renovación dura 1 día.

## API y endpoints

Todas las entidades tienen `GET` (listado y detalle), `POST`, `PUT`, `PATCH` y `DELETE`. El identificador de detalle es un UUID y `DELETE` realiza soft delete cambiando `is_deleted` a `true`.

La ruta base es `http://127.0.0.1:8000/api/` y los endpoints disponibles son:

| Aplicación | Entidades y rutas |
| --- | --- |
| usuarios | `/usuarios/`, `/perfiles/`, `/direcciones/` |
| peliculas | `/peliculas/`, `/productoras/`, `/ejemplares/` |
| directores | `/directores/`, `/biografias/`, `/nacionalidades/` |
| generos | `/generos/`, `/subcategorias/`, `/etiquetas/` |
| prestamos | `/prestamos/`, `/detalles-prestamo/`, `/multas/` |

Ejemplos:

```text
GET /api/peliculas/
GET /api/peliculas/<uuid>/
POST /api/peliculas/
PUT /api/peliculas/<uuid>/
PATCH /api/peliculas/<uuid>/
DELETE /api/peliculas/<uuid>/
```

Los campos de relación (`director`, `genero`, `usuario`, etc.) reciben el UUID de la entidad relacionada.

## Aplicaciones

El proyecto contiene las siguientes aplicaciones:

* usuarios
* peliculas
* prestamos
* directores
* generos

Cada aplicación contiene al menos tres modelos; en total se exponen las 15 entidades mediante la API.

## Modelos

Los modelos utilizan:

* UUID como identificador.
* Soft delete mediante `is_deleted`.
* Fecha de creación mediante `created_at`.
* Fecha de modificación mediante `updated_at`.
* Diferentes tipos de datos.
* Relaciones entre modelos.

## Migraciones

El proyecto incluye las migraciones generadas durante el desarrollo.

Se realizaron cambios sobre los modelos para demostrar el flujo:

```text
Modelo
   ↓
makemigrations
   ↓
Migración
   ↓
migrate
   ↓
Base de datos
```

## Rama

La implementación correspondiente a esta tarea se encuentra en:

```text
hw-03
```
