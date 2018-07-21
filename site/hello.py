from flask import Flask, render_template, jsonify
app = Flask(__name__)

@app.route('/')
def load_app():
    return render_template('index.html')

cities = [
    {
        'name': 'Vestisland',
        'settlements': ['Skalholt', 'Borg', 'Alftanes', 'Kjalarnes', 'Hlidarendi', 'Reykjavik', 'Hvamm', 'Pingvellir'],
        'culture': 'norse'
    },
    {
        'name': 'Kildare',
        'settlements': ['Clonard', 'Knockaulin', 'Kildare', 'Durrow', 'Rathangan', 'Athlone', 'St Brigit', 'Maynooth'],
        'culture': 'irish'
    },
]
    

@app.route('/api/v1.0/cities', methods=['GET'])
def get_cities():
    return jsonify({'cities': cities})