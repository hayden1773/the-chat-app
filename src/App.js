import './App.css'
import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import  ChatFeed  from './components/chatfeed';

const App = () => {
	return (
		<ChatEngine
			height='100vh'
			userName='hayden1773'
			userSecret='password'
			projectID='45c6878e-6189-4835-a9dc-60cd9969e6db'
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
		/>
	);
}

export default App;