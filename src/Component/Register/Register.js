import React from 'react';
import { LockOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '../../Css/RegisterCss.css'
import { useHistory } from 'react-router-dom'

const Register = ({ notificationLogin }) => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const history = useHistory()

    const handleSignUp = async (value) => {
        console.log("🚀 ~ file: Register.js:12 ~ handleSignUp ~ value:", value)
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(value?.email, value?.password);

            // Cập nhật thông tin người dùng với tên đăng nhập
            await result.user.updateProfile({
                displayName: value?.username,
                // photoURL
            });
            history.push("/")
            notificationLogin('success', 'Register success !')
            console.log('Thông tin người dùng:', result.user.displayName);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='container-register'>
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
                onFinish={handleSignUp}
                autoComplete="off"
            >
                <div style={{paddingLeft: '20%', width: '100%'}}>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your User Name!',
                            },
                        ]} >
                        <Input placeholder='Username' />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}>
                        <Input placeholder='Email' />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]} >
                        <Input.Password placeholder='Password' />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Confirm your password!',
                            },
                        ]} >
                        <Input.Password placeholder='Confirm Password' />
                    </Form.Item>
                </div>
                <Form.Item
                    wrapperCol={{
                        offset: 2,
                    }} >
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Register;