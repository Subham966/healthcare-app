from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains

# Mock database for demonstration
patients_db = []

# Route to get all patients
@app.route('/patients', methods=['GET'])
def get_patients():
    try:
        return jsonify(patients_db), 200
    except Exception as e:
        return jsonify({"message": f"Error fetching patients: {str(e)}"}), 500

# Route to add a new patient
@app.route('/patients', methods=['POST'])
def add_patient():
    data = request.get_json()

    if not data or 'name' not in data or 'age' not in data or 'condition' not in data:
        return jsonify({"message": "Invalid input, missing name, age, or condition"}), 400

    try:
        # Add the new patient to the mock database
        new_patient = {
            "name": data["name"],
            "age": data["age"],
            "condition": data["condition"],
        }
        patients_db.append(new_patient)
        
        return jsonify({"message": "Patient added successfully"}), 201
    except Exception as e:
        return jsonify({"message": f"Error adding patient: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
