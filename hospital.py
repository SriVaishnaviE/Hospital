from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import ObjectId

app = Flask(__name__)
CORS(app)


app.config["MONGO_URI"] = "mongodb://localhost:27017/"
mongo = PyMongo(app)


if mongo.db is None:
    print("MongoDB connection failed!")
else:
    print("MongoDB connected successfully!")


@app.route('/patients', methods=['POST'])
def add_patient():
    data = request.json
    patient_id = mongo.db.patients.insert_one(data).inserted_id
    return jsonify({"message": "Patient added", "id": str(patient_id)})

@app.route('/patients', methods=['GET'])
def get_patients():
    patients = list(mongo.db.patients.find())
    for patient in patients:
        patient["_id"] = str(patient["_id"])
    return jsonify(patients)



@app.route('/doctors', methods=['POST'])
def add_doctor():
    data = request.json
    doctor_id = mongo.db.doctors.insert_one(data).inserted_id
    return jsonify({"message": "Doctor added", "id": str(doctor_id)})

@app.route('/doctors', methods=['GET'])
def get_doctors():
    doctors = list(mongo.db.doctors.find())
    for doctor in doctors:
        doctor["_id"] = str(doctor["_id"])
    return jsonify(doctors)



@app.route('/appointments', methods=['POST'])
def add_appointment():
    data = request.json
    appointment_id = mongo.db.appointments.insert_one(data).inserted_id
    return jsonify({"message": "Appointment booked", "id": str(appointment_id)})

@app.route('/appointments', methods=['GET'])
def get_appointments():
    appointments = list(mongo.db.appointments.find())
    for appointment in appointments:
        appointment["_id"] = str(appointment["_id"])
    return jsonify(appointments)



@app.route('/bills', methods=['POST'])
def add_bill():
    data = request.json
    bill_id = mongo.db.bills.insert_one(data).inserted_id
    return jsonify({"message": "Bill created", "id": str(bill_id)})

@app.route('/bills', methods=['GET'])
def get_bills():
    bills = list(mongo.db.bills.find())
    for bill in bills:
        bill["_id"] = str(bill["_id"])
    return jsonify(bills)


@app.route('/stock', methods=['POST'])
def add_stock():
    data = request.json
    stock_id = mongo.db.stock.insert_one(data).inserted_id
    return jsonify({"message": "Stock item added", "id": str(stock_id)})

@app.route('/stock', methods=['GET'])
def get_stock():
    stock_items = list(mongo.db.stock.find())
    for item in stock_items:
        item["_id"] = str(item["_id"])
    return jsonify(stock_items)



if __name__ == '__main__':
    app.run(debug=True)
