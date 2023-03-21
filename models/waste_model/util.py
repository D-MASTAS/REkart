import tensorflow as tf
import numpy as np
from tensorflow.keras.models import load_model
from flask import jsonify
import cpuinfo

output_class = ["Cardboard", "E-waste", "Glass", "Medical", "Metal", "Paper", "Plastic"]
model = None
data = {
    "Cardboard":
        ["Textile",
        "Reusable"],
    "E-waste":
        ["Electronic ",
        "Recycleable",],
    "Glass":
        ["Glass",
        "Recycleable"],
    "Medical":
        ["Medical",
        "Hazardous"],
    "Metal":
        ["Metal",
        "Recycleable"],
    "Paper":
        ["Paper",
        "Recycleable"],
    "Plastic":
        ["Plastic ",
        "Reusable"],
}

def load_artifacts():
    global model
    model = tf.keras.models.load_model('waste_classification.h5', compile=False)


def classify_waste(image_path):
    global model, output_class
    test_image = tf.keras.preprocessing.image.load_img(image_path, target_size=(224, 224))
    test_image = tf.keras.preprocessing.image.img_to_array(test_image) / 255
    test_image = np.expand_dims(test_image, axis = 0)
    predicted_array = model.predict(test_image)
    predicted_value = output_class[np.argmax(predicted_array)]
    response_data = {
        "predicted_value": [predicted_value],
        "additional_data": [data[predicted_value][0], data[predicted_value][1]]
    }
    return response_data['predicted_value'], response_data['additional_data'][0], response_data['additional_data'][1]

