import React, { useState } from 'react';
import axios from 'axios';
import {Form, Input, Button, Row, Col, message, PageHeader} from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();

  const onFinish = async () => {
    setIsLoading(true);
    try {
      await axios.get('https://60dff0ba6b689e001788c858.mockapi.io/token').then(response => {
        setIsLoading(false);
        localStorage.setItem("user-id", response.data.userId);
        message.info('Login success !')
        history.push('/');
      });
    } catch (error) {
      console.log(error)
      setIsLoading(false);
    }
  };

  return (
    <div id="login-page" className="page-content">
      <PageHeader
        className="page-header"
        title="Login"
      />
      <Row>
        <Col span={8} offset={8}>
          <Form
            name="login-form"
            className="login-form"
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid Email',
                },
                {
                  required: true,
                  message: 'Please input your Email',
                },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password'
                },
                {
                  min: 8,
                  message: 'Password must be at least 8 characters long'
                }
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-button"
                loading={isLoading}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
