from API_setup import ChatApp

class Chat:
    def Chat_process(self,prompt):
        keep_prompting=True
        while keep_prompting:
            if prompt in ["Bye","exit","Good Night"]:
                keep_prompting=False
                return "Bye,Thankyou for helping earth to improve with us."
            else:
                new_chat=ChatApp()
                result=new_chat.get_response(prompt=prompt)
                return ("{}\n".format(result))