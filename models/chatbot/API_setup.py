import openai
import os

API_KEY="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"
os.environ['OPENAI_Key']=API_KEY

class ChatApp:
    def __init__(self):
        openai.api_key=os.environ['OPENAI_Key']
        self.messages = [
            {"role": "system", "content":"You are kind and knowledgeable environmentalist having understanding of earth and nature."},
        ]
    def get_response(self,prompt):
        self.messages.append({"role":"user","content":prompt})
        response=openai.ChatCompletion.create(model="gpt-3.5-turbo",messages=self.messages)
        self.messages.append({"role":"assistant","content":response["choices"][0]["message"].content})  
        output=response['choices'][0]['message']["content"]
        return output    
    


