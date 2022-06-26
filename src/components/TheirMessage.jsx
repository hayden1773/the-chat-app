const TheirMessage = ({ lastMessage, message }) => {
    // Find out if it is the first message by the user - boolean value

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{ backroundImage: `url(${message?.sender?.avatar})` }}
                />
            )}
            {
                message?.attachments?.length > 0
                    ? (
                        <img
                            src={message.attachments[0].file}
                            alt="message-attachment"
                            className="message-image"
                            style={{ marginLeft: isFirstMessageByUser ? '4px': '48px' }}
                        />
                    ) : (
                        <div className="message" style={{ flaot: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px': '48px'  }}>
                            {message.text}
                        </div>
                    )

            }
            
        </div>
    )
}

export default TheirMessage;