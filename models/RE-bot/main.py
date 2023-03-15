import openai
import pickle

openai.api_key = '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'
prompt_list: list[str] = ['You are a environmental friendly bot helping people to know about eco-freindly ways to decompose wastes and recommend them eco-friendly product as alternatives of hazardous products.']

def get_api_response(prompt: str) -> str | None:
    text: str | None = None

    try:
        response: dict = openai.Completion.create(
            model='text-davinci-003',
            prompt=prompt,
            temperature=0.6,
            max_tokens=50,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0.6,
            stop=[' Human:', ' AI:']
        )

        choices: dict = response.get('choices')[0]
        text = choices.get('text')

    except Exception as e:
        print('ERROR:', e)

    return text


def update_list(message: str, pl: list[str]):
    pl.append(message)


def create_prompt(message: str, pl: list[str]) -> str:
    p_message: str = f'\nHuman: {message}'
    update_list(p_message, pl)
    prompt: str = ''.join(pl)
    return prompt


def get_bot_response(message: str, pl: list[str]) -> str:
    prompt: str = create_prompt(message, pl)
    bot_response: str = get_api_response(prompt)

    if bot_response:
        update_list(bot_response, pl)
        pos: int = bot_response.find('AI: ')
        bot_response = bot_response[pos+2:]
    else:
        bot_response = 'Something went wrong...'

    return bot_response


def app():
    Initializer='Bot: Hello,I am RE-bot,I am here to help with issues relate dto waste material and its management.'
    print(f'{Initializer}')
    while True:
        user_input: str = input('You: ')
        response: str = get_bot_response(user_input, prompt_list)
        print(f'RE-bot : {response}')


if __name__=="__main__":
    app()






    


        
