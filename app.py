from flask import Flask, render_template, jsonify, send_file, request
from json import loads
app = Flask(__name__, template_folder='site/templates')
import not_constantinople

@app.route('/')
def load_app():
    return render_template('index.html')

@app.route('/bundle')
def get_bundle():
    return send_file('site/static/js/index.bundle.js')

input = {
    "culture": {
        "visigothic": 3,
        "saxon": 3,
        "suebi": 3
    },
    "name": "lyria"
}
    
@app.route('/api/v1.0/allowed_cultures')
def get_allowed_cultures():
    return send_file('site/static/data/allowed_cultures.json')

@app.route('/api/v1.0/cities', methods=['GET', 'POST'])
def get_cities():
    content = request.get_json(silent=True)
    print(content)
    print(content["cultures"])
    print("cities?")
    return jsonify(not_constantinople.generate_for_json(content["cultures"]))