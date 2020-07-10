from flask import flash, redirect, url_for, request
from flask_cors import CORS
from flask_login import current_user, login_user
from app.models import User
from app import app

# CORS
CORS(app, resources=r'/api/*')


@app.route('/api/login', methods=['GET', 'POST'])
def login():
    # print("request: ", request.json)
    response = request.json
    user = User.query.filter_by(username=response["email"]).first()
    if user is None or not user.check_password(response["password"]):
        print('no user with that name')
        return 'no user with that name'
    login_user(user)
    return "success, logged in"
