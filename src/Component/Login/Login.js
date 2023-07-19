import '../../Css/LoginCss.css'
import React from 'react';
import { LockOutlined, UserOutlined, GoogleOutlined } from '@ant-design/icons';
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

    const handleGoogleLogin = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider);
            history.push("/")
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className='container'>

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
                <div style={{paddingLeft: '30%', width: '100%'}}>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                </div>

                <div style={{paddingLeft: '30%', width: '100%'}}>
                    <Form.Item
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
                </div>

                <Form.Item wrapperCol={{ offset: 6 }}>
                    <Button
                        style={{ margin: '10px', marginRight: 10 }}
                        onClick={handleGoogleLogin}>
                        <icon style={{ padding: '5px' }}><GoogleOutlined /></icon>
                        Google
                    </Button>
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