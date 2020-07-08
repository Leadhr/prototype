from flask import flash, redirect, url_for
from app import app

@app.route('/api/login', methods=['GET', 'POST'])
def login():
    return 'hello world'