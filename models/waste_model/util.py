import tensorflow as tf
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.optimizers import Adam
import cpuinfo

output_class = ["cardboard", "e-waste", "glass", "medical", "metal", "paper", "plastic"]
model = None
data = {
    "cardboard":
        ["Textile r",
        "Bhi7S06pwv4", "IHPBJySIXZw"],
    "e-waste":
        ["Electronic ",
        "aUwFXDLOFO0","w0ikFMTuS9c"],
    "glass":
        ["Glass recycling ",
        "bYVih298o1Y", "6R8YObQbE88"],
    "medical":
        ["",
        "GbE9C2tTW2k", "PkfX4sZwrQ4"],
    "metal":
        ["S",
        "qAGCI0-pQ3E", "rgEEXhbar3A"],
    "paper":
        ["Papers",
        "jAqVxsEgWIM", "xhW0RTg8kRI"],
    "plastic":
        ["Plastic ",
        "rYwBL_6hB2I", "I_fUpP-hq3A"]
}


cpu_info = cpuinfo.get_cpu_info()
missing_instructions = []

if 'avx' not in cpu_info['flags']:
    missing_instructions.append("AVX")
if 'avx2' not in cpu_info['flags']:
    missing_instructions.append("AVX2")

if missing_instructions:
    instructions_str = ", ".join(missing_instructions)
    print("This TensorFlow binary is optimized with "
          "oneAPI Deep Neural Network Library (oneDNN) "
          f"to use the following CPU instructions in performance-critical operations: {instructions_str}."
          "\nTo enable them in other operations, rebuild TensorFlow with the appropriate compiler flags.")

# Define the custom optimizer
# class CustomAdam(Adam):
#     pass

# # Register the custom optimizer
# tf.keras.utils.get_custom_objects().update({'custom_optimizer': CustomAdam})
# models.load_model('myModel.h5', compile=False)


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
    print(predicted_value, data[predicted_value][0], data[predicted_value][1], data[predicted_value][2])
    return predicted_value, data[predicted_value][0], data[predicted_value][1], data[predicted_value][2]
