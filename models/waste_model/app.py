from flask import Flask, request, render_template, redirect, url_for
import util
import os
import pymongo
from werkzeug.utils import secure_filename



application = Flask(__name__)

util.load_artifacts()

# client = pymongo.MongoClient("mongodb+srv://0Tanq:Tanishq@cluster0.ujajqqe.mongodb.net/?retryWrites=true&w=majority")
# db = client["waste_classification"]
# collection = db["predictions"]

@application.route("/")
def home():
    return render_template("home.html")




@application.route("/classifywaste", methods=["POST"])
def classifywaste():
    image_data = request.files["file"]
    image_path = secure_image_upload(image_data)
    predicted_value, category, description = util.classify_waste(image_path)
    os.remove(image_path)
    return {"Data": ["predicted_value", "category", "description"]}

def secure_image_upload(image_data):
    filename = secure_filename(image_data.filename)
    image_path = os.path.join(get_image_directory_path(), filename)
    image_data.save(image_path)
    return image_path

def get_image_directory_path():
    return os.path.join(os.getcwd(), "uploads")


if __name__ == "__main__":
    application.run(port=3000)
