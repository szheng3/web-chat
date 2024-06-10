import React, { useState } from 'react';
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
} from "@chatscope/chat-ui-kit-react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

const ChatApp = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            message: "Hello my friend",
            sentTime: "just now",
            sender: "Joe",
            direction: "incoming"
        }
    ]);

    const handleSend = (text) => {
        const newMessage = {
            id: messages.length + 1,
            message: text,
            sentTime: "just now",
            sender: "You",
            direction: "outgoing"
        };
        setMessages([...messages, newMessage]);
        simulateResponse(text);
    };

    const simulateResponse = (text) => {
        setTimeout(() => {
            const response = {
                id: messages.length + 1,
                message: `Echo: ${text}`,
                sentTime: "just now",
                sender: "Bot",
                direction: "incoming"
            };
            setMessages(messages => [...messages, response]);
        }, 1000);
    };

    return (
        <div style={{ position: "relative", height: "500px" }}>
            <MainContainer>
                <ChatContainer>
                    <MessageList>
                        {messages.map(msg => (
                            <Message
                                key={msg.id}
                                model={{
                                    message: msg.message,
                                    sentTime: msg.sentTime,
                                    sender: msg.sender,
                                    direction:msg.direction
                                }}
                            />
                        ))}
                    </MessageList>
                    <MessageInput onSend={handleSend} placeholder="Type message here" />
                </ChatContainer>
            </MainContainer>
        </div>
    );
};

export default ChatApp;
