import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import io from 'socket.io-client';

const ChatScreen = ({route}) => {
  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const senderName=route.params.test
  const recive =route.params.item
  useEffect(() => {
    const socketConnection = io('http://localhost:5000'); 
    setSocket(socketConnection);

    return () => {
      socketConnection.disconnect();
    };
  }, []);
  let alldata=''
  useEffect(() => {
    if (!socket) return;

    socket.on('message', data => {
    
            
            if(data.senderName==route.params.item){
                console.log("sender ff"+data.senderName)
                console.log("rec ff "+route.params.item)
                alldata=data.senderName
                setMessages(prevMessages => [ ...prevMessages,`${route.params.item}: ${data.message}`]);
                setMessage(null)
                console.log("IN")
            }
            else{
                console.log("OUT")
                return
            }
            //console.log("recive "+route.params.item)
    });

    // socket.on('user-joined', newUser => {
        
    //   setMessages(prevMessages => [...prevMessages, `${newUser} has joined the chat!`]);
    // });

    return () => {
      socket.off('message');
      socket.off('user-joined');
    };
  }, [socket]);

  const sendMessage = () => {
    if (message.trim() === '') return;

    socket.emit('send-message', message,senderName);
    // if(senderName!=recive) return
    console.log("in 2 "+senderName)
    console.log(" in 2 tow "+recive)
    setMessages(prevMessages => [...prevMessages, `You: ${message}`]);
    setMessage('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat With {route.params.item}</Text>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        {messages.map((msg, index) => (
          <Text key={index}>{msg}</Text>
        ))}
      </ScrollView>
      <TextInput
        style={{ width: '80%', borderWidth: 1, marginTop: 10, padding: 5 }}
        value={message}
        onChangeText={setMessage}
        placeholder="Type your message here..."
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default ChatScreen;
