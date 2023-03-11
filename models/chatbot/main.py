from Chatapp import Chat

def get_response(message):
    chat_instance=Chat()
    response= (chat_instance.Chat_process(message))
    return response


if __name__=='__main__':
    prompt=input("Hello Earth Lover !! How can I help you ?\n")
    print(get_response(prompt))
    


        
