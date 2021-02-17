from .course import CoursesApi, CourseApi, CoachesCoursesApi
from .coach import CoachApi, CoachesApi
from .auth import SignupApi, LoginApi

def initialize_routes(api):
    api.add_resource(CoursesApi, '/api/courses')
    api.add_resource(CourseApi, '/api/courses/<id>')
    api.add_resource(CoachesCoursesApi, '/api/coaches/<coach_id>/courses')
    api.add_resource(CoachApi, '/api/coaches/<id>')
    api.add_resource(CoachesApi, '/api/coaches')

    api.add_resource(SignupApi, '/api/auth/signup')
    api.add_resource(LoginApi, '/api/auth/login')
