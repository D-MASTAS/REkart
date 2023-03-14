from API_setup import ChatApp

class Chat:
    def Chat_process(self,prompt):
        response=""
        keep_prompting=True
        while keep_prompting:
            if prompt in ["Bye","exit","Good Night"]:
                keep_prompting=False
                response= "Bye,Thankyou for helping earth to improve with us."
            new_chat=ChatApp()
            result=new_chat.get_response(prompt=prompt)
            response=result
            print(response)
  