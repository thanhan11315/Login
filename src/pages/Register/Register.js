import "./Register.css"
import TabTitle from "../TapTitle";
import SuperShipLogo from "../../assets/images/SuperShip-Logo.png"
import { Link } from "react-router-dom";
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Form,
    Input,
    Select,
} from 'antd';
import React, { useState } from 'react';
const { Option } = Select;

const residences = [
    {
        value: 'tphcm',
        label: 'TPHCM',
        children: [
            {
                value: 'GV',
                label: 'QV',
                children: [
                    {
                        value: 'phường7',
                        label: 'Phường7',
                        children: [
                            {
                                value: 'khu Phố 1',
                                label: 'Khu Phố 1',
                            }
                        ]
                    },
                    {
                        value: 'Phường5',
                        label: 'Phường5',
                        children: [
                            {
                                value: 'Khu Phố 2',
                                label: 'thanhan',
                            }
                        ]
                    },
                ]
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        children: [
                            {
                                value: 'xihu',
                                label: 'thanhan',
                            }
                        ]
                    },
                ],
            },
        ],
    },
];

const Register = () => {

    TabTitle('Register');

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };

    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));
    return (
        <>
            <div className="Register-align-box">
                <div className="box">
                    <div className="img">
                        <img src={SuperShipLogo} alt="img not load" style={{ width: '80px', height: '80px' }} />
                    </div>
                    <h2 className="title">Register</h2>
                    <Form
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{
                            residence: ['zhejiang', 'hangzhou', 'xihu'],
                            prefix: '86',
                        }}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="company"
                            label="Company"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your company!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="residence"
                            label="Habitual Residence"
                            rules={[
                                {
                                    type: 'array',
                                    required: true,
                                    message: 'Please select your habitual residence!',
                                },
                            ]}
                        >
                            <Cascader options={residences} />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input
                                addonBefore={prefixSelector}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="website"
                            label="Website"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input website!',
                                },
                            ]}
                        >
                            <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                                <Input />
                            </AutoComplete>
                        </Form.Item>

                        <Form.Item
                            name="gender"
                            label="Gender"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select gender!',
                                },
                            ]}
                        >
                            <Select placeholder="select your gender">
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>


                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                },
                            ]}
                        >
                            <Checkbox>
                                I have read the <Link to="/Register">agreement</Link>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item >
                            <Button className="Register-button" type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                    <h6 className="Login"><Link to="/" className="link">Login</Link></h6>
                </div>
            </div>
        </>
    );
};

export default Register;