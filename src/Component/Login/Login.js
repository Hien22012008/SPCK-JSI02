import '../../Css/LoginCss.css'
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useHistory } from 'react-router-dom'


const Login = ({ notificationLogin }) => {
    const history = useHistory()

    const handleLogin = async (values) => {
        console.log("🚀 ~ file: Login.js:14 ~ handleLogin ~ values:", values);

        try {
            await firebase.auth().signInWithEmailAndPassword(values?.email, values?.password);

            notificationLogin('success', "Login success");
            history.push("/");
        } catch (error) {
            notificationLogin('error', error.code);
        }
    }


    return (
        <div class='container'>
            <Form name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 'none',
                    width: 500
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={handleLogin}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6 }}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
};

export default Login;