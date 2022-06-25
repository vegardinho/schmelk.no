from flask import Flask
from flask import request
import arrow
import ku_scrape

api = Flask(__name__)


@api.route('/events', methods=['POST'])
def get_events():
    print(request.json['fromDate'])
    from_arg = arrow.get(request.json['fromDate']).format('DD-MM-YY')
    to_arg = arrow.get(request.json['toDate']).format('DD-MM-YY')
    event_type = request.json['eventType']

    ku_scrape.main([event_type, from_arg, to_arg])
    with open('arr.txt', 'r') as fp:
        text = fp.read()

    return {'text': text}
