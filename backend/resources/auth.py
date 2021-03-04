from flask import Response, request, jsonify
from flask_jwt_extended import create_access_token
from database.models import Coach, User
from flask_restful import Resource
from mongoengine.errors import FieldDoesNotExist, NotUniqueError, DoesNotExist, ValidationError, InvalidQueryError
from resources.errors import SchemaValidationError, CourseAlreadyExistsError, InternalServerError, \
    UpdatingCourseError, DeletingCourseError, CourseNotExistsError, UnauthorizedError, EmailAlreadyExistsError
import datetime

class SignupApi(Resource):
    def post(self):
        try:
            body = request.get_json()
            coach = Coach(**body)
            coach.hash_password()
            coach.save()
            id = coach.id
            return {'id': str(id)}, 200
        except FieldDoesNotExist:
            raise SchemaValidationError
        except NotUniqueError:
            raise EmailAlreadyExistsError
        except Exception as e:
            raise InternalServerError


class LoginApi(Resource):
    def post(self):
        try:
            body = request.get_json()
            coach = Coach.objects.get(email=body.get('email'))
            authorized = coach.check_password(body.get('password'))
            if not authorized:
                return {'error': 'Email or password invalid'}, 401

            expires = datetime.timedelta(days=7)
            access_token = create_access_token(identity=str(coach.id), expires_delta=expires)
            return {'token': access_token, 'email': coach.email , 'id': str(coach.id)}, 200
        except (UnauthorizedError, DoesNotExist):
            raise UnauthorizedError
        except Exception as e:
            raise InternalServerError


class SignupUserApi(Resource):
    def post(self):
        try:
            body = request.get_json()
            user = User(**body)
            user.hash_password()
            user.save()
            id = user.id
            return {'id': str(id)}, 200
        except FieldDoesNotExist:
            raise SchemaValidationError
        except NotUniqueError:
            raise EmailAlreadyExistsError
        except Exception as e:
            raise InternalServerError



class LoginUserApi(Resource):
    def post(self):
        try:
            body = request.get_json()
            user = User.objects.get(nickname=body.get('nickname'))
            authorized = user.check_password(body.get('password'))
            if not authorized:
                return {'error': 'nickname or password invalid'}, 401

            expires = datetime.timedelta(days=7)
            access_token = create_access_token(identity=str(user.id), expires_delta=expires)
            return {'token': access_token, 'nickname': user.nickname, 'id': str(user.id)}, 200
        except (UnauthorizedError, DoesNotExist):
            raise UnauthorizedError
        except Exception as e:
            raise InternalServerError
