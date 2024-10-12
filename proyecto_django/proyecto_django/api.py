from django.http import JsonResponse

def api_response(req):
    data={
        "tipo_repsuesta": "JSON",
        "menaje": "HOLA MUNDO",

    }

    return JsonResponse(data)