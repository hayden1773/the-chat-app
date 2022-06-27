import { useState } from 'react';
import axios from 'axios';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const Modal = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // username | pasword => chatengine > give messages
        // worksout > logged in
        // error > try with new username

        const authObject = { 'Project-ID': "45c6878e-6189-4835-a9dc-60cd9969e6db", 'User-Name': username, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        } catch (err) {
            setError('Oh No!!! Wrong Information, please try again.');
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>

                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />

                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />

                    <div align="center">

                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>

    );
};

export default Modal;