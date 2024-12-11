import { Button, Form, Input, Modal, Rate } from "antd";

const ReviewModal = ({ open, setOPen }) => {
  const [reviewForm] = Form.useForm();
  const handleCancel = () => {
    setOPen(false);
  };
  const onFinish = () => {};
  return (
    <Modal
      title="What do you think of Tomiwa Paul?"
      open={open}
      onCancel={handleCancel}
      footer={() => <></>}
    >
      <Form
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
        form={reviewForm}
      >
        <Form.Item
          label="How Would You Rate It?"
          rules={[{ required: true, message: "Please choose rating" }]}
        >
          <Rate />
        </Form.Item>
        <Form.Item
          label="Title of Experience"
          rules={[{ required: true, message: "Please enter title" }]}
        >
          <Input size="large" placeholder="Enter a title" />
        </Form.Item>
        <Form.Item
          label="Describe Your Experience"
          rules={[{ required: true, message: "Please enter experience" }]}
        >
          <Input.TextArea
            size="large"
            autoSize={{ maxRows: 4, minRows: 4 }}
            placeholder="Tell others about your experience with Tomiwa Paul."
          />
        </Form.Item>
        <Form.Item>
          <div className="flex items-center w-full justify-end gap-2 lg:gap-3">
            <Button size="large" onClick={handleCancel}>
              Cancel
            </Button>
            <Button size="large" type="primary" htmlType="submit">
              Submit Review
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ReviewModal;
