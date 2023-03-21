import React, { useEffect } from 'react';
import { Button, Col, Divider, Form, Input, Modal, Row } from 'antd';
import { EditUserProps } from '@/components/constants/types';

const EditUser = ({ open, setOpen, user, editUserItem }: EditUserProps) => {

  useEffect(() => {
    setOpen(open)
  }, [open, setOpen])

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onFinish = (values: any) => {
    editUserItem(user?.id, values);
    setOpen(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Modal
        title="Edit User"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ ...user }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Website"
            name="website"
            rules={[{ required: true, message: 'Please input your website name!' }]}
          >
            <Input />
          </Form.Item>

          <Divider key="divide" />

          <Row  justify="end">
            <Col span={4}><Button key="back" onClick={handleCancel}>
              Cancel
            </Button></Col>
            <Col span={4}>
              <Form.Item>
              <Button key="submit" htmlType="submit" type="primary" onClick={handleOk}>
                Save
              </Button>
            </Form.Item></Col>
          </Row>


        </Form>
      </Modal>
    </>
  );
};

export default EditUser;
