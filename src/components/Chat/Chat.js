import React, { useState } from 'react';
import styled from 'styled-components';
import Animationtype from '../Home/Type'; // Adjust the path according to your file structure
import Typewriter from "typewriter-effect";
import axios from 'axios';


const Title = styled.h1`
  text-align: center; // Centers the title
  margin-top: 20px; // Adds a top margin of 40px
  font-size: 36px; // Sets the font size to 36px
  font-weight: 700; // Sets the font weight to 700
  line-height: 1.1; // Sets the line height to 1.1
  margin-bottom: 20px; // Adds a bottom margin of 20px
  color: #fff; // Sets the color to white

`;


const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/Users/shauryatiwari/Desktop/Shaurya-Tiwari-AI/src/Assets/Projects/sentiment.gif') no-repeat center center fixed;
  background-size: cover;
  padding: 10px; /* Add some padding around the container */
`;

const ChatBox = styled.div`
  width: 90%; /* Use a percentage for the width to make it responsive */
  max-width: 1050px; /* Maximum width to ensure it doesn't get too wide on large screens */
  height: auto; /* Adjust height automatically */
  max-height: 600px; /* Maximum height */
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: black;
  @media (max-width: 768px) { /* Adjustments for smaller screens */
    width: 100%; /* Use full width for small devices */
    border-radius: 0; /* Optional: remove border-radius for a full-width look */
  }
`;

const MessageList = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Message = styled.div`
  background: ${(props) => (props.isUser ? '#dcf8c6' : '#fff')};
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 10px;
  max-width: 80%; /* Allow messages to take more width on smaller screens */
  @media (max-width: 768px) {
    max-width: 90%; /* Increase max width for very small devices */
  }
`;

const InputArea = styled.div`
  border-top: 1px solid #ddd;
  padding: 10px;
  display: flex;
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  padding: 10px;
  border-radius: 20px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;






function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, user: 'You' };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('https://api.openai.com/v1/completions', {
        model: 'ft:babbage-002:personal:shazam2:8x1RcwpO',
        prompt: input,
        max_tokens: 50,
        temperature: 0.5,

      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`
        }
      });

      console.log(response);
      setMessages(messages => [...messages, { user: 'bot', text: response.data.choices[0].text.trim() }]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error (e.g., show an error message)
    }

    setInput('');
  };

  const handleSendMessage = async () => {
    await sendMessage();
  };

  return (
    <ChatContainer>
      <ChatBox>
        <MessageList>
          {messages.map((message, index) => (
            <Message key={index} isUser={message.user === 'You'}>
              {message.text}
            </Message>
          ))}
        </MessageList>
        <InputArea>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            onKeyDown={async (e) => e.key === 'Enter' && await handleSendMessage()}
          />
          <SendButton onClick={handleSendMessage}>Send</SendButton>
        </InputArea>
      </ChatBox>
    </ChatContainer>
  );
}


// function Chat() {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
  
//     const sendMessage = () => {
//       if (!input.trim()) return;
  
//       const userMessage = { text: input, user: 'You' };
//       // Instead of making an API call, we directly add a message indicating the training notice.
//       const trainingNotice = { text: "Shaurya's LLM is going under training right now, please re-visit in a while", user: 'bot' };
  
//       setMessages([...messages, userMessage, trainingNotice]);
  
//       setInput(''); // Clear the input after sending the message
//     };
  
//     const handleSendMessage = () => {
//       sendMessage();
//     };
  
//     return (
//       <ChatContainer>
//               <Title>Chatbot with <strong className="purple">Shaurya's consciousness </strong></Title> {/* Add the title here */}
//         <ChatBox>
          
//             {messages.map((message, index) => (
//               <Message key={index} isUser={message.user === 'You'}>
              
//               <Typewriter
//               options={{
//                 strings: [
//                   message.text
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 deleteSpeed: 50,
//               }}
//             />

//               </Message>
              
              

//             ))}
          
//           <InputArea>
//             <Input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type your message here..."
//               onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
//             />
//             <SendButton onClick={handleSendMessage}>Send</SendButton>
//           </InputArea>
//         </ChatBox>
//       </ChatContainer>
//     );
//   }

export default Chat;
