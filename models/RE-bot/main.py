from Chatapp import Chat
import pickle

def get_response(message):
    chat_instance=Chat()
    response= (chat_instance.Chat_process(prompt=message))
    return response


pickle.dump(get_response,open('model.pkl','wb'))
    



    


        
