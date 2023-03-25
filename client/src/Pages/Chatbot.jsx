import { useState } from "react"; 

function Chatbot() {
    const [messages, setMessages] = useState([]);
  
    function handleSubmit(event) {
      event.preventDefault();
      const input = event.target.elements.message.value.trim();
      if (input.length === 0) return;
  
      // Add user's question to messages array
      setMessages((prevMessages) => [...prevMessages, { sender: 'You', message: input }]);
  
      event.target.elements.message.value = '';
      fetch('http://ec2-13-239-6-44.ap-southeast-2.compute.amazonaws.com:5050/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Add bot's response to messages array
          setMessages((prevMessages) => [...prevMessages, { sender: 'Bot', message: data.message }]);
  
          // If bot's response contains a question, add it to messages array
          if (data.question) {
            setMessages((prevMessages) => [...prevMessages, { sender: 'Bot', message: data.question }]);
          }
        });
    }
  
    return (
      <div className="h-screen w-200 flex flex-col justify-between p-4 bg-green-100">
        <h1 className="text-2xl font-bold mb-4 text-green-800">Eco Chatbot</h1>
        <ul className="flex-1 overflow-auto">
          {messages.map((message, index) => (
            <li key={index} className={`my-2 ${message.sender === 'You' ? 'text-right' : 'text-left'}`}>
              <span className="font-bold text-green-800">{message.sender}: </span>
              {message.message}
            </li>
          ))}
        </ul>
        <form className="flex" onSubmit={handleSubmit}>
          <input type="text" id="input-message" name="message" placeholder="Type your message..." className="flex-1 p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-green-500" />
          <button type="submit" className="px-4 rounded-r-lg bg-green-500 text-white hover:bg-green-600 focus:outline-none">Send</button>
        </form>
      </div>
    );
  }
  
  export default Chatbot