import { useState, useLayoutEffect } from 'react'
import Chat from './Chat/Chat'
import Login from './Login/Login'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css';

import chatStore from '../../shared/store/chat'

export default function Contents() {
    const { Sider, Content } = Layout;
    const [user, setUser] = useState(chatStore.initialState)
    useLayoutEffect(() => {
        chatStore.subscribe(setUser);
        chatStore.init();
    }, []);
    return (
        <Layout>
            {
                
                user.loggedIn &&
                <Sider>
                    <div className="d-flex flex-column text-center text-white">
                        {
                            user.users.map(value => {
                                <div>{value.userName}</div>
                            })
                        }
                        <div>User</div>
                    </div>
                </Sider>
            }

            <Content>
                <Switch>
                    <Redirect exact from="/" to="/login" />
                    <Route path="/login" component={Login} />
                    <Route path="/chat" component={Chat} />
                </Switch>
            </Content>
        </Layout>

    )
}