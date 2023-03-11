from Chatapp import Chat

def get_response():
    message=input("Hello Earth Lover !! How can I help you ?\n")
    chat_instance=Chat()
    response= (chat_instance.Chat_process(prompt=message))
    return response


if __name__=='__main__':
    get_response()
    


        
