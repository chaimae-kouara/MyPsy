from flask import Response, request
from database.models import Comment, Coach, User
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_restful import Resource
from mongoengine.errors import FieldDoesNotExist, NotUniqueError, DoesNotExist, ValidationError, InvalidQueryError
from resources.errors import SchemaValidationError, CommentAlreadyExistsError, InternalServerError, \
UpdatingCommentError, DeletingCommentError, CommentNotExistsError


class CommentsApi(Resource):
    def get(self):
        comments = Comment.objects().to_json()
        return Response(comments, mimetype="application/json", status=200)

    @jwt_required()
    def post(self):
        try:
            user_id = get_jwt_identity()
            body = request.get_json()
            user = User.objects.get(id=user_id)
            comment = Comment(**body, user=user)
            comment.save()
            id = comment.id
            return {'id': str(id)}, 200
        except (FieldDoesNotExist, ValidationError):
            raise SchemaValidationError
        except NotUniqueError:
            raise CommentAlreadyExistsError
        except Exception as e:
            raise InternalServerError


class CoachesCommentsApi(Resource):
    def get(self, coach_id):
        try:
            coach = Coach.objects.get(id=coach_id)
            comments = Comment.objects(coach=coach).to_json()
            return Response(comments, mimetype="application/json", status=200)
        except DoesNotExist:
            raise CommentNotExistsError
        except Exception:
            raise InternalServerError


class CommentApi(Resource):
    @jwt_required()
    def put(self, id):
        try:
            user_id = get_jwt_identity()
            comment = Comment.objects.get(id=id, user=user_id)
            body = request.get_json()
            Comment.objects.get(id=id).update(**body)
            return '', 200
        except InvalidQueryError:
            raise SchemaValidationError
        except DoesNotExist:
            raise UpdatingCommentError
        except Exception:
            raise InternalServerError

    @jwt_required()
    def delete(self, id):
        try:
            user_id = get_jwt_identity()
            comment = Comment.objects.get(id=id, user=user_id)
            comment.delete()
            return '', 200
        except DoesNotExist:
            raise DeletingCommentError
        except Exception:
            raise InternalServerError

    def get(self, id):
        try:
            comments = Comment.objects.get(id=id).to_json()
            return Response(comments, mimetype="application/json", status=200)
        except DoesNotExist:
            raise CommentNotExistsError
        except Exception:
            raise InternalServerError
