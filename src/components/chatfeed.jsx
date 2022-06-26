import MessageForm from "./MessageForm";
import TheirMessage from "./TheirMessage";
import MyMessage from "./MyMessage";
import { act } from "react-dom/test-utils";

const ChatFeed = (props) => {
    // structure of props
    const { chats, activeChat, userName, messages } = props;
    // Looking for specific active chat
    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        // fetch all messages
        const keys = Object.keys(messages);
        // console.log(keys);
        // render messages
        return keys.map((key, index) => {
            // loop over messages with specific key
            const message = messages[key];
            // Last message sent - if there are messages, find the last one > if else
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            // Is this the same message?
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={'msg_${index}'} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                                // Passing one prop into my message
                                ? <MyMessage message={message} />
                                // Passing two props into their message
                                : <TheirMessage message={message} lastMessage={message[lastMessageKey]} />
                        }

                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>

                    </div>
                </div>
            )

        })
    }



    // console.log(chat, userName, messages)
    // console.log(props);

    if (!chat) return 'Loading...';

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>

            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>

        </div>
    )

}

export default ChatFeed;