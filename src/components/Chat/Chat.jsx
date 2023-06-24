import { Configuration, OpenAIApi } from "openai";
import { useState } from 'react'
import './Chat.scss'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
const systemMessage = { 
  "role": "system", 
  "content": "Act as an autoparts expert for an autoparts website. You should be able to answer questions related to various car makes, models, and autoparts. You should provide accurate and helpful information about different types of autoparts, their compatibility with specific vehicles, installation procedures, common issues, troubleshooting tips, and recommendations for quality autopart brands. You should also be knowledgeable about maintenance schedules, warranty information, and any specific requirements or considerations for different car models. The goal is to provide users with reliable autoparts advice and support, helping them make informed decisions and solve autoparts-related problems effectively."
}
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
        await processMessageToChatGPT(newMessages);
    };
    async function processMessageToChatGPT(chatMessages) { 
  
      
      let apiMessages = chatMessages.map((messageObject) => {
        let role = "";
        if (messageObject.sender === "ChatGPT") {
          role = "assistant";
        } else {
          role = "user";
        }
        return { role: role, content: messageObject.message}
      });
      const apiRequestBody = {
        "model": "gpt-3.5-turbo",
        "messages": [
          systemMessage,  
          ...apiMessages 
        ]
      }
  
      await fetch("https://api.openai.com/v1/chat/completions", 
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      }).then((data) => {
        return data.json();
      }).then((data) => {
        console.log(data);
        setMessages([...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]);
        setIsTyping(false);
      });
    }
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
    return (
      <div className="floating-button-container">
        <div className={`floating-button ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <span className="button-icon">{isOpen ? <i class="fa-solid fa-circle-xmark text-6xl"></i> : <i class="fa-sharp fa-solid fa-comments"></i>}</span>
    </div>
    {isOpen && (
      <div className='chat'>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="AutoGPT is typing" /> : null}
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
      )}
      </div>
    );
  };
  
  export default Chat;