import React from "react";
import { useState } from "react";

const Chat = ({ socket, username, room }) => {
  const [messages, setMessages] = useState("");
  const sendMessage = async () => {
    const messageContent = {
      username: username,
      messages: messages,
      room: room,
      date:
        new Date(Date.now).getHours() + ":" + new Date(Date.now).getMinutes(),
    };
    await socket.emit("message", messageContent);
    setMessages("");
  };
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-1/3 h-[600px] bg-white relative">
        <div className="w-full h-16 bg-gray-400 flex items-center p-2">
          <div className="w-12 h-12 bg-white rounded-full"></div>
        </div>
        <div className="w-full h-[400px] overflow-y-auto">
          <div className="w-2/3 h-12 p-2 bg-blue-700 text-white m-2 rounded-xl rounded-br-none">
            <div>Deneme Mesajı</div>
            <div className="w-full flex justify-end text-xs">
              Kevser Çiçek - 12.04.2023
            </div>
          </div>

          <div className="flex justify-end">
            <div className="w-2/3 h-12 p-2 bg-green-700 text-white m-2 rounded-xl rounded-br-none">
              <div>Deneme Mesajı</div>
              <div className="w-full flex justify-end text-xs">
                Kevser Çiçek - 12.04.2023
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <input
            value={messages}
            onChange={(e) => setMessages(e.target.value)}
            className="w-3/4 h-12 border p-3 outline-none"
            type="text"
            placeholder="message send"
          />
          <button
            onClick={sendMessage}
            className="w-1/4 bg-green-600 text-white h-12 hover:opacity-70"
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
