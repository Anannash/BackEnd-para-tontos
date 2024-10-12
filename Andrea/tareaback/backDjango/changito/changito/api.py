from django.http import JsonResponse

def api_response(request):
    data = {
        "TipoRespuesta":"JSON",
        "Mejor SHIP": "yukito x touya",
        "MejorSHIPx2": "SONIC X SHERK",
        "MejorPersonajeSMASH": "Corrin Hombre"
    }

    response = JsonResponse(data)

    response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "GET,POST,DELETE, PUT"
    response["Access-Control-Allow-Headers"] = "Content-Type"

    return response