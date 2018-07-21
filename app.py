from flask import Flask, render_template, jsonify, send_file
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
    

@app.route('/api/v1.0/cities', methods=['GET'])
def get_cities():
    return jsonify(not_constantinople.generate_for_json(input["culture"]))