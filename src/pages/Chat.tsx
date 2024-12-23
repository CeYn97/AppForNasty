import React from "react";
import "../styles/Chats.css";
import "../styles/reset.css";
import searchIcon from "../assets/SearchIcon.svg";
import firstAvatar from "../assets/Avatar1.svg";
import secondAvatar from "../assets/Avatar2.svg";
import thridAvatar from "../assets/Avatat3.svg";
import someChatImage from "../assets/someChatIcon.svg";


const chats = [
  {
    name: "Сергей",
    lastMessage: "Мне нравится, когда ты говори...",
    time: "13:50",
    avatar: firstAvatar,
  },
  {
    name: "Александр Петров",
    lastMessage: "Если говорить честно, то я не ...",
    time: "11:01",
    avatar: secondAvatar,
  },
  {
    name: "Артём Васильев",
    lastMessage: "Какой областью своей жизни...",
    time: "09:17",
    avatar: thridAvatar,
  },
];

const ChatListScreen: React.FC = () => {
  return (
    <div className="container">
      <header className="searchBarContainer">
        <div className="searchBarWrapper">
          <img src={searchIcon} alt="search-icon" className="searchIcon" />
          <input type="text" placeholder="Поиск" className="searchBar" />
        </div>
        <div className="addButton">
          <span className="plus">+</span>
        </div>
      </header>

      <main className="chatList">
        {chats.map((chat, index) => (
          <div key={index} className="chatItem">
            <div className="avatar">
              <img src={chat.avatar} alt={chat.name} className="avatarImage" />
            </div>
            <div className="chatDetails">
              <p className="chatName">{chat.name}</p>
              <p className="chatMessage">{chat.lastMessage}</p>
            </div>
            <div className="chatImageWrapper">
              <p className="chatTime">{chat.time}</p>
              <img src={someChatImage} alt="Chat" className="chatImage" />
            </div>
          </div>
        ))}
      </main>

      <div className="footer">
        <button className="inviteButton"><span className="inviteText">Пригласить нового игрока</span></button>
      </div>
    </div>
  );
};

export default ChatListScreen;
