from django.http import JsonResponse


def api_home(request):
    """Endpoint público de bienvenida y referencia rápida de la API."""
    return JsonResponse({
        'message': 'API de biblioteca funcionando correctamente.',
        'authentication': {
            'token': '/api/token/',
            'refresh': '/api/token/refresh/',
        },
        'resources': [
            '/api/usuarios/',
            '/api/perfiles/',
            '/api/direcciones/',
            '/api/peliculas/',
            '/api/productoras/',
            '/api/ejemplares/',
            '/api/directores/',
            '/api/biografias/',
            '/api/nacionalidades/',
            '/api/generos/',
            '/api/subcategorias/',
            '/api/etiquetas/',
            '/api/prestamos/',
            '/api/detalles-prestamo/',
            '/api/multas/',
        ],
    })
