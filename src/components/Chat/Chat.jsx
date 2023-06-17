import { Configuration, OpenAIApi } from "openai";
import { useState } from 'react'
import './Chat.scss'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const Chat = () => {
    // const configuration = new Configuration({
    //     organization: "org-XMwLR8diXbhut99v1UOqA3Ga",
    //     apiKey: "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",
    // });
    // const openai = new OpenAIApi(configuration);
    // const response = await openai.listEngines();
    const [messages, setMessages] = useState([
        {
          message: "Hello, I'm PartGPT! Ask me anything!",
          sentTime: "just now",
          sender: "ChatGPT"
        }
      ]);
      const [isTyping, setIsTyping] = useState(false);
    
      const handleSend = async (message) => {
        const newMessage = {
          message,
          direction: 'outgoing',
          sender: "user"
        };
    
        const newMessages = [...messages, newMessage];
        
        setMessages(newMessages);
    
        setIsTyping(true);
    };
    return (
      <div className='chat'>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>
    );
  };
  
  export default Chat;