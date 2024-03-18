/* eslint-disable react/prop-types */

import styled from "styled-components"
import Logout from "./Logout";
import ChatInput from "./ChatInput";
import Messages from "./Messages";

export default function ChatContainer({currentChat,currentUser}) {

    const handleSendMsg = async(msg)=>{
        fetch("http://localhost:8000/addmsg",{
          method:"POST",
          body:JSON.stringify(msg),
          headers:{
            "content-type": 'application/json'
          }
        })
        .then((response)=>response.json())
        .then((data)=>{
          console.log(data)
        })
        .catch((err)=>{
          console.log(err)
        })
    }

  return (
    <Container>
        <div className="chat-header">
            <div className="chat-details">
                <div className="avatar">
                    <img 
                      src={`data:image/svg+xml;base64,${currentChat.avatarImage}`} 
                      alt="" 
                    />
                </div>
                <div className="username">
                    <h3>{currentChat.name}</h3>
                </div>
            </div>
            <Logout />
        </div>
        <Messages/>
        <ChatInput handleSendMsg={handleSendMsg} />
    </Container>
  )
}

const Container = styled.div`
  padding-top:1rem;
  .chat-header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 2rem;
    .user-details{
        display: flex;
        align-items:center;
        gap:1rem;
        .avatar{
            img{
                height:3rem;
            }
        }
        
    }
  }
  h3{color:white}
`;
