from flask import Flask

api = Flask(__name__)

@api.route('/events')
def get_ku_events():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body