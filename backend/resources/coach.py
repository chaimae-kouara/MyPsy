from flask import Response, request
from database.models import Course, Coach
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_restful import Resource


class CoachesApi(Resource):
    def get(self):
        coaches = Coach.objects().exclude('password').to_json()
        return Response(coaches, mimetype="application/json", status=200)



class CoachApi(Resource):
    def get(self, id):
        coach = Coach.objects.exclude('password').get(id=id).to_json()
        return Response(coach, mimetype="application/json", status=200)