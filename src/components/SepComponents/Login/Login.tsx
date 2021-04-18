import { useEffect, useLayoutEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import chatStore from '../../../shared/store/chat'
import 'antd/dist/antd.css';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export default function Login() {
    const [user, setUser] = useState(chatStore.initialState)
    const history = useHistory()
    useLayoutEffect(() => {
        chatStore.subscribe(setUser);
        chatStore.init();
    }, []);
    const onFinish = (values: any) => {
        console.log('Success:', values);
        chatStore.addUser({ userName: values.username })
        chatStore.login(true)
        history.push("/chat")
    };
    useEffect(()=>{
        chatStore.login(false)
    },[])


    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (<div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="m-5" style={{ fontFamily: "Rubik", fontSize: "2rem" }}>Form</div>
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="w-50"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
                className="w-100"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                className="w-100"
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>

    </div>)
}