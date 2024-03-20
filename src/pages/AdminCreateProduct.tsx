import { Form, Input } from "antd";
import React from "react";

const AdminCreateProduct = () => {
  const onFinish = () => {};
  return (
    <Form name="vertical" onFinish={onFinish}>
      <Form.Item
        label={
          <label className="w-full font-medium leading-6 text-[#cfddeb]">
            Title
          </label>
        }
        rules={[{ required: true, message: "Please enter title" }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default AdminCreateProduct;
