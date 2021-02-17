from flask import Response, request, jsonify
from flask_jwt_extended import create_access_token
from database.models import Coach
from flask_restful import Resource
import datetime

class SignupApi(Resource):
    def post(self):
        body = request.get_json()
        coach = Coach(**body)
        coach.hash_password()
        coach.save()
        id = coach.id
        return {'id': str(id)}, 200

class LoginApi(Resource):
    def post(self):
        body = request.get_json()
        coach = Coach.objects.get(email=body.get('email'))
        authorized = coach.check_password(body.get('password'))
        if not authorized:
            return {'error': 'Email or password invalid'}, 401

        expires = datetime.timedelta(days=7)
        access_token = create_access_token(identity=str(coach.id), expires_delta=expires)
        return {'token': access_token}, 200