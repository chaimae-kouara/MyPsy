from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager

from database.db import initialize_db
from flask_restful import Api
from resources.routes import initialize_routes
from resources.errors import errors

app = Flask(__name__)
app.config.from_object('config')


api = Api(app, errors=errors)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb+srv://root:root@cluster0.utp83.mongodb.net/mypsy?retryWrites=true&w=majority'
}

initialize_db(app)
initialize_routes(api)
if __name__ == "__main__":
    app.run(debug=True)