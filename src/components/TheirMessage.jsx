const TheirMessage = ({lastMessage, message}) => {
    // Find out if it is the first message by the user - boolean value

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div>
            TheirMessage
        </div>
    )
}

export default TheirMessage;