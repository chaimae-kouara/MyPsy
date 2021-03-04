from flask import Response, request
import json
from database.models import Course, Coach
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_restful import Resource
from mongoengine.errors import FieldDoesNotExist, NotUniqueError, DoesNotExist, ValidationError, InvalidQueryError
from resources.errors import SchemaValidationError, CourseAlreadyExistsError, InternalServerError, \
UpdatingCourseError, DeletingCourseError, CourseNotExistsError


class CoursesApi(Resource):
    def get(self):
        courses = json.loads(Course.objects().to_json())
        for x in courses:
            x["id"] = x["_id"]['$oid']
            x["idCoach"] = x["idCoach"]['$oid']
            x.pop('_id')
    
        courses = json.dumps(courses)
        return Response(courses, mimetype="application/json", status=200)


    @jwt_required()
    def post(self):
        try:
            coach_id = get_jwt_identity()
            body = request.get_json()
            coach = Coach.objects.get(id=coach_id)
            course = Course(**body, idCoach=coach)
            course.save()
            coach.update(push__courses=course)
            coach.save()
            id = course.id
            return {'id': str(id)}, 200
        except (FieldDoesNotExist, ValidationError):
            raise SchemaValidationError
        except NotUniqueError:
            raise CourseAlreadyExistsError
        except Exception as e:
            raise InternalServerError

class CoachesCoursesApi(Resource):
    def get(self, coach_id):
        try:
            coach = Coach.objects.get(id=coach_id)
            courses = json.loads(Course.objects()(idCoach=coach).to_json())
            for x in courses:
                x["id"] = x["_id"]['$oid']
                x["idCoach"] = x["idCoach"]['$oid']
                x.pop('_id')
                
            courses = json.dumps(courses)
            return Response(courses, mimetype="application/json", status=200)
        except DoesNotExist:
            raise CourseNotExistsError
        except Exception:
            raise InternalServerError



class CourseApi(Resource):
    @jwt_required()
    def put(self, id):
        try:
            coach_id = get_jwt_identity()
            course = Course.objects.get(id=id, idCoach=coach_id)
            body = request.get_json()
            Course.objects.get(id=id).update(**body)
            return '', 200
        except InvalidQueryError:
            raise SchemaValidationError
        except DoesNotExist:
            raise UpdatingCourseError
        except Exception:
            raise InternalServerError
    
    @jwt_required()
    def delete(self, id):
        try:
            coach_id = get_jwt_identity()
            course = Course.objects.get(id=id, idCoach=coach_id)
            course.delete()
            return '', 200
        except DoesNotExist:
            raise DeletingCourseError
        except Exception:
            raise InternalServerError


    def get(self, id):
        try:
            courses = json.loads(Course.objects()(id=id).to_json())
            for x in courses:
                x["id"] = x["_id"]['$oid']
                x["idCoach"] = x["idCoach"]['$oid']
                x.pop('_id')
                x["id"] = x["_id"]['$oid']
                x.pop('_id')

            courses = json.dumps(courses)
            return Response(courses, mimetype="application/json", status=200)
        except DoesNotExist:
            raise CourseNotExistsError
        except Exception:
            raise InternalServerError
