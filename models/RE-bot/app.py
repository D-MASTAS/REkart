from flask import Flask,request,render_template,jsonify
from main import get_bot_response

app=Flask(__name__)

@app.route("/")
def Home():
    return render_template("index.html")


@app.route("/chatbot",methods=['POST'])
def talk():
    Initializer='Bot: Hello,I am RE-bot,I am here to help with issues relate to waste material and its management.'
    prompt_list: list[str] = ['You are a environmental friendly bot helping people to know about eco-freindly ways to decompose wastes and recommend them eco-friendly product as alternatives of hazardous products.']
    while True:
        user_input: str = request.form.values()
        response: str = get_bot_response(user_input, prompt_list)
        return render_template("index.html",prediction_text=response)

if __name__=="__main__":
    app.run(debug=True)

    

