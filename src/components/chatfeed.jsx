import MessageForm from "./MessageForm";
import TheirMessage from "./TheirMessage";
import MyMessage from "./MyMessage";

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
            const lastMessageKey = index ===0 ? null : keys[index -1];
            // Is this the same message?
            const isMyMessage = userName === message.sender.username;

            return(
                <div key={'msg_${index}'} style={{width: '100%'}}>
                    <div className="message-block">
                        {
                           isMyMessage
                           ? <MyMessage />
                           : <TheirMessage />
                        }

                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                        
                    </div>
                </div>
            )

        })
    }

    // console.log(chat, userName, messages)
    // console.log(props);

    return(
        <div>
            ChatFeed
        </div>
    )

}

export default ChatFeed;