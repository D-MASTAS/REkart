from flask import Flask, request, jsonify
from flask_cors import CORS
from main import get_bot_response

app = Flask(__name__)
CORS(app)

@app.route("/chatbot", methods=['POST'])
def talk():
    Initializer='Bot: Hello,I am RE-bot,I am here to help with issues relate to waste material and its management.'
    prompt_list: list[str] = ['You are a knowledged bot helping people to know about eco-freindly ways to decompose wastes and recommend them eco-friendly product as alternatives of hazardous products.']
    while True:
        prompt_list: list[str] = ['You are a environmental friendly bot helping people to know about eco-freindly ways to decompose wastes and recommend them eco-friendly product as alternatives of hazardous products.']
        user_input = request.json['message']
        response = get_bot_response(user_input, prompt_list)
        return jsonify({'message': response})

if __name__ == "__main__":
    app.run(debug=True)