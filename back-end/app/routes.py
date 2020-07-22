import json
from flask import flash, redirect, url_for, request, Response, jsonify
from flask_cors import CORS
from flask_login import current_user, login_user, logout_user, login_required
from werkzeug.urls import url_parse
from app.models import User
from app import app, db

# CORS
CORS(app, resources=r'/api/*')


@app.route('/api/login', methods=['GET', 'POST'])
def login():
    # print("request: ", request.json)
    data = request.json
    user = User.query.filter_by(email=data["email"]).first()
    if user is None or not user.check_password(data["password"]):
        print('no user with that name')
        return Response(status=204)
    else:
        login_user(user)
        return Response(status=200)

#finish implementing once registration has been implemented
@app.route('/api/logout')
def logout():
    logout_user()
    return Response(status=200)

@app.route('/api/register', methods=['GET', 'POST'])
def register():
    data = request.json
    #validate
    #if validated
    user = User(email=data["email"], username = None)
    user.set_password(data["password"])
    db.session.add(user)
    db.session.commit()
    return Response(status=200)

@app.route('/api/questions', methods=['GET'])
def questions():
    with open('/home/hunter/dev/leadhr/prototype/back-end/app/questions/questions.json', 'r') as f:
        data = f.read()
        return data

@app.route('/api/responses', methods=['POST'])
def responses():
    data = request.json
    print(data)
    return Response(status=200)