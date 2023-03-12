from flask import Flask, request, render_template, redirect, url_for
import util
import os
import pymongo
from werkzeug.utils import secure_filename



application = Flask(__name__)

util.load_artifacts()

client = pymongo.MongoClient("mongodb+srv://0Tanq:Tanishq@cluster0.ujajqqe.mongodb.net/?retryWrites=true&w=majority")
db = client["waste_classification"]
collection = db["predictions"]

@application.route("/")
def home():
    return render_template("home.html")

@application.route("/classifywaste", methods=["POST"])
def classifywaste():
    image_data = request.files["file"]
    basepath = os.path.dirname(__file__)
    image_path = os.path.join(basepath, "uploads", secure_filename(image_data.filename))
    image_data.save(image_path)
    predicted_value, category, description, video_link = util.classify_waste(image_path)
    prediction = {
        "predicted_value": predicted_value,
        "category": category,
        "description": description,
        "video_link": video_link
    }
    collection.insert_one(prediction)
    os.remove(image_path)
    return redirect(url_for('show_result'))


@application.route('/show_result')
def show_result():
    predictions = collection.find().sort("_id", pymongo.DESCENDING).limit(1)

    # Pass the prediction to the template
    for prediction in predictions:
        predicted_value = prediction["predicted_value"]
        category = prediction["category"]
        description = prediction["description"]
        video_link = prediction["video_link"]
        return render_template("result.html", predicted_value=predicted_value, category=category, description=description, video_link=video_link)

    return "No predictions yet."

if __name__ == "__main__":
    application.run()
