"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import os

api = Blueprint('api', __name__)
# Setup the Flask-JWT-Extended extension


@api.route("/login", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    has_user = User.query.filter_by(email=email,password=password).first()
    if has_user is None:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route("/token", methods=["POST"])
@jwt_required()
def validate_token():
    identity = get_jwt_identity()
    return jsonify(email=identity)

@api.route("/signup", methods=["POST"])
def create_account():
    b_email = request.json.get("email", None)
    b_password = request.json.get("password", None)
    has_user = User.query.filter_by(email=b_email).first()
    if has_user is not None:
        return jsonify({"msg": "Email already exsist"}), 401
    new_user = User(email=b_email,password=b_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "User created"}), 201
