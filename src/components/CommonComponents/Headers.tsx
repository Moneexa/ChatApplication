import { useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import chatStore from '../../shared/store/chat'

export default function Headers({ match }: any) {
    const { Header } = Layout;
    const [user, setUser] = useState(chatStore.initialState)
    useLayoutEffect(() => {
        chatStore.subscribe(setUser);
        chatStore.init();
    }, []);

    return (<>
        {
            user.loggedIn && <Header>
                <div className="d-flex justify-content-between align-items-center ">
                    <div className="text-white">Chat app</div>
                    <div className="d-flex">
                        <Link to="/login" className="mx-5" >Login</Link>
                        <Link to="/chat" className="mx-5">Chat</Link>
                    </div>
                </div>
            </Header>
        }

    </>)
}