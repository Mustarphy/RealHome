import Chat from "../../components/chat/Chat";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

const Messages = () => {
  const { id } = useParams(); // chatId from URL
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await apiRequest.get("/chats");
        setChats(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchChats();
  }, []);

  return <Chat chats={chats} selectedChatId={id} />;
};

export default Messages;
