from flask import Flask, request, render_template, jsonify
import util
import os
from werkzeug.utils import secure_filename

application = Flask(__name__)

util.load_artifacts()

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
    os.remove(image_path)

    return render_template("result.html", predicted_value=predicted_value, category=category, description=description, video_link=video_link)

if __name__ == "__main__":
    application.run()
