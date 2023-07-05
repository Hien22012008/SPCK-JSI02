import React from 'react';
import { LockOutlined} from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '../../Css/RegisterCss.css'

const Register = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const handleSignUp = async (value) => {
        console.log("🚀 ~ file: Register.js:12 ~ handleSignUp ~ value:", value)
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(value?.email, value?.password);

            // Cập nhật thông tin người dùng với tên đăng nhập
            await result.user.updateProfile({
                displayName: value?.username,
                phoneNumber: value?.phoneNumber
                // photoURL
            });

            console.log('Đăng ký thành công!');
            console.log('Thông tin người dùng:', result.user.displayName);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div class='container'>
            <div class='form-register'>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handleSignUp}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Username"
                        />
                    </Form.Item>

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

                    <Form.Item
                        name="confirm-password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Confirm Password!',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Confirm-Password"
                        />
                    </Form.Item>


                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Sign up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default Register;