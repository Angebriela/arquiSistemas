# Django API - HW-03

API desarrollada con Django y Django REST Framework 

## Tecnologías

* Python
* Django
* Django REST Framework
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
cd django-hw-03
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

## API

Ejemplo de endpoint:

```text
GET /api/libros/
```

También se pueden utilizar las operaciones:

```text
GET
POST
PUT
DELETE
```

## Aplicaciones

El proyecto contiene las siguientes aplicaciones:

* usuarios
* peliculas
* prestamos
* directores
* generos

Cada aplicación contiene al menos tres modelos.

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
