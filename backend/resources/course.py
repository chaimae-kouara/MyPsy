from flask import Response, request
from database.models import Course, Coach
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_restful import Resource

class CoursesApi(Resource):
    def get(self):
        query = Course.objects()
        courses = Course.objects().to_json()
        return Response(courses, mimetype="application/json", status=200)

    @jwt_required()
    def post(self):
        print("hhhhhhhhhhhhhh         ", 45)
        coach_id = get_jwt_identity()
        body = request.get_json()
        coach = Coach.objects.get(id=coach_id)
        course = Course(**body, added_by=coach)
        course.save()
        coach.update(push__courses=course)
        coach.save()
        id = course.id
        return {'id': str(id)}, 200
        
class CourseApi(Resource):
    @jwt_required()
    def put(self, id):
        coach_id = get_jwt_identity()
        course = Course.objects.get(id=id, added_by=coach_id)
        body = request.get_json()
        Course.objects.get(id=id).update(**body)
        return '', 200
    
    @jwt_required()
    def delete(self, id):
        coach_id = get_jwt_identity()
        course = Course.objects.get(id=id, added_by=coach_id)
        course.delete()
        return '', 200

    def get(self, id):
        courses = Course.objects.get(id=id).to_json()
        return Response(courses, mimetype="application/json", status=200)
