from .db import db
from flask_bcrypt import generate_password_hash, check_password_hash


class Course(db.Document):
    title = db.StringField(required=True, unique=True)
    url = db.StringField(required=True)
    idCoach = db.ReferenceField('Coach')



class Address(db.EmbeddedDocument):
    street = db.StringField(required=True)
    city = db.StringField(required=True)
    state = db.StringField(required=True)
    country = db.StringField(required=True)
    clinic_name = db.StringField(required=True)


class Coach(db.Document):
    email = db.EmailField(required=True, unique=True)
    phone = db.StringField(required=True, min_length=10)
    name = db.StringField(required=True)
    speciality = db.StringField(required=True)
    password = db.StringField(required=True, min_length=6)
    #courses = db.ListField(db.ReferenceField('Course', reverse_delete_rule=db.PULL))
    address = db.EmbeddedDocumentField(Address)

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, password):
        return check_password_hash(self.password, password)


class User(db.Document):
    nickname = db.StringField(required=True, unique=True)
    password = db.StringField(required=True, min_length=6)

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, password):
        return check_password_hash(self.password, password)


class Comment(db.Document):
    coach = db.ReferenceField('Coach', reverse_delete_rule=db.PULL)
    user = db.ReferenceField('User', reverse_delete_rule=db.PULL)
    comment = db.StringField(required=True)


Coach.register_delete_rule(Course, 'idCoach', db.CASCADE)
Coach.register_delete_rule(Comment, 'coach', db.CASCADE)
User.register_delete_rule(Comment, 'coach', db.CASCADE)