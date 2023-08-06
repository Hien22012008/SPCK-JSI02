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

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        // const phoneRegex = /^\d{9}$/;
        if (!emailRegex.test(value?.email)) {
            alert("Please enter a valid email address")
            // return false;
            // openNotification('top')
        }
        // else if (!phoneRegex.test(value?.phoneNumber)) {
        //     alert("Please enter a valid phone number")
        //     return false;
        // } 
        else if (value?.password.length < 6) {
            alert("Please enter a password of 6 characters or more")
            return false;
        }
        else if (value?.confirmPassword !== value?.password) {
            alert("Passwords do not match")
            return false;
        } else {
            try {
                const result = await firebase.auth().createUserWithEmailAndPassword(value?.email, value?.password);

                // Cập nhật thông tin người dùng với tên đăng nhập
                await result.user.updateProfile({
                    displayName: value?.username,
                    // photoURL
                });
                history.push("/login")
                notificationLogin('success', 'Register success !')
                console.log('Thông tin người dùng:', result.user.displayName);
            } catch (error) {
                console.log(error.message);
            }
        }
    }




    return (
        <div style={{ width: '300px', paddingLeft: '34%', paddingTop: '50px' }}>
            <div>
                <Form name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 'none',
                        width: 500,
                        height: '600px'
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handleSignUp}
                    autoComplete="off"
                    className='form-register'
                >
                    <div style={{ paddingLeft: '16%', width: '100%', paddingTop: '80px' }}>
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
                            offset: 0.5,
                        }}
                        style={{
                            paddingBottom: '20px'
                        }} >
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default Register;