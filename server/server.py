from flask import Flask, request, jsonify
import util

app = Flask(__name__)


@app.route('/get_artifacts', methods=['GET'])
def get_artifacts():
    locations, area_types = util.get_categorical()
    print(area_types)
    response = jsonify({
        'locations': locations,
        'area_types': area_types
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


@app.route('/predict_home_price', methods=['GET', 'POST'])
def predict_home_price():

    area_type = request.form['area_type']
    total_sqft = float(request.form['total_sqft'])
    bathrooms = int(request.form['bathrooms'])
    location = request.form['location']
    balcony = int(request.form['balcony'])
    bhk = int(request.form['bhk'])

    estimated_price = util.estimate_price(area_type, location, total_sqft, bathrooms, balcony, bhk)
    estimated_price = float(round(estimated_price, 2))

    print(area_type)

    response = jsonify({
        'estimated_price': estimated_price
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


if __name__ == '__main__':
    print("Starting Server")
    util.load_artifacts()
    app.run(debug=True)
