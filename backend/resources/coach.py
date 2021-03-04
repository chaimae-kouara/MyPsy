import json

from flask import Response, request
from database.models import Course, Coach
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_restful import Resource


class CoachesApi(Resource):
    def get(self):
        coaches = json.loads(Coach.objects().exclude('password').to_json())
        for x in coaches:
            x["id"] = x["_id"]['$oid']
            x.pop('_id')
        coaches = json.dumps(coaches)
        return Response(coaches, mimetype="application/json", status=200)



class CoachApi(Resource):
    def get(self, id):
        coach = json.loads(Coach.objects.exclude('password').get(id=id).to_json())
        coach["id"] = coach["_id"]['$oid']
        coach.pop('_id')
        coach = json.dumps(coach)
        return Response(coach, mimetype="application/json", status=200)