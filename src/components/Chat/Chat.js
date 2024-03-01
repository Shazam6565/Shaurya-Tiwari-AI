import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Title = styled.h1`
  color: purple; // Sets the title color to purple
  text-align: center; // Centers the title
`;


const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/Users/shauryatiwari/Desktop/Shaurya-Tiwari-AI/src/Assets/Projects/sentiment.gif') no-repeat center center fixed;
  background-size: cover;
`;

const ChatBox = styled.div`
  width: 1050px;
  height: 600px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: black;
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
  max-width: 50%;
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




// function Chat() {
//     return (
//       <ChatContainer>
//         <ChatBox>
//           {/* Display the message indicating the model training is ongoing */}
//           <p>The chatbot is currently undergoing training. Kindly visit back soon!</p>
//         </ChatBox>
//       </ChatContainer>
//     );
//   }
  

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { text: input, user: 'You' };
//     setMessages([...messages, userMessage]);

//     try {
//       const response = await axios.post('https://api.openai.com/v1/completions', {
//         model: 'ft:babbage-002:personal:shazam2:8x1RcwpO',
//         prompt: input,
//         max_tokens: 50,
//         temperature: 0.5,

//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer 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`
//         }
//       });

//       console.log(response);
//       setMessages(messages => [...messages, { user: 'bot', text: response.data.choices[0].text.trim() }]);
//     } catch (error) {
//       console.error('Error sending message:', error);
//       // Handle error (e.g., show an error message)
//     }

//     setInput('');
//   };

//   const handleSendMessage = async () => {
//     await sendMessage();
//   };

//   return (
//     <ChatContainer>
//       <ChatBox>
//         <MessageList>
//           {messages.map((message, index) => (
//             <Message key={index} isUser={message.user === 'You'}>
//               {message.text}
//             </Message>
//           ))}
//         </MessageList>
//         <InputArea>
//           <Input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your message here..."
//             onKeyDown={async (e) => e.key === 'Enter' && await handleSendMessage()}
//           />
//           <SendButton onClick={handleSendMessage}>Send</SendButton>
//         </InputArea>
//       </ChatBox>
//     </ChatContainer>
//   );
// }


function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
  
    const sendMessage = () => {
      if (!input.trim()) return;
  
      const userMessage = { text: input, user: 'You' };
      // Instead of making an API call, we directly add a message indicating the training notice.
      const trainingNotice = { text: "Shaurya's LLM is going under training right now, please re-visit in a while", user: 'bot' };
  
      setMessages([...messages, userMessage, trainingNotice]);
  
      setInput(''); // Clear the input after sending the message
    };
  
    const handleSendMessage = () => {
      sendMessage();
    };
  
    return (
      <ChatContainer>
              <Title>Chatbot with Shaurya's consciousness</Title> {/* Add the title here */}
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
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <SendButton onClick={handleSendMessage}>Send</SendButton>
          </InputArea>
        </ChatBox>
      </ChatContainer>
    );
  }

export default Chat;
