import openai
import pickle
from typing import Union

openai.api_key = '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'


def get_api_response(prompt: str) -> Union[str, None]:
    text: Union[str, None] = None
    # function body


    try:
        response: dict = openai.Completion.create(
            model='text-davinci-003',
            prompt=prompt,
            temperature=0.6,
            max_tokens=200,
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







    


        
