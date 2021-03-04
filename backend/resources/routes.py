from .comment import CommentsApi, CommentApi, CoachesCommentsApi
from .course import CoursesApi, CourseApi, CoachesCoursesApi
from .coach import CoachApi, CoachesApi
from .auth import SignupApi, LoginApi, LoginUserApi, SignupUserApi


def initialize_routes(api):
    api.add_resource(CoursesApi, '/api/courses')
    api.add_resource(CourseApi, '/api/courses/<id>')
    api.add_resource(CoachesCoursesApi, '/api/coaches/<coach_id>/courses')
    api.add_resource(CoachApi, '/api/coaches/<id>')
    api.add_resource(CoachesApi, '/api/coaches')
    api.add_resource(CommentsApi, '/api/comments')
    api.add_resource(CommentApi, '/api/comments/<id>')
    api.add_resource(CoachesCommentsApi, '/api/coaches/<coach_id>/comments')


    api.add_resource(SignupApi, '/api/auth/coach/signup')
    api.add_resource(LoginApi, '/api/auth/coach/login')
    api.add_resource(SignupUserApi, '/api/auth/user/signup')
    api.add_resource(LoginUserApi, '/api/auth/user/login')