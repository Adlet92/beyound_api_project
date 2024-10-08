import { Button, Card, Flex, Form, Input } from "antd";
import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { BaseLayout } from "../../shared/components/BaseLayout/index";
import { routes } from "../../shared/config/routes";
import { $post, getPostFx, updatePostFx } from "./model";

export const PostPage = () => {
  const [post, postPending, updatePending] = useUnit([
    $post,
    getPostFx.pending,
    updatePostFx.pending,
  ]);

  return (
    <BaseLayout>
      <Flex justify="center" align="middle" style={{ height: "100%" }}>
        <Card
          title="Edit Post"
          loading={postPending}
          style={{ width: "300px" }}
          extra={<Link to={routes.private.posts}>Back</Link>}
        >
          {post && (
            <Form
              initialValues={post || undefined}
              onFinish={updatePostFx}
              layout="vertical"
            >
              <Form.Item hidden name="id"></Form.Item>
              <Form.Item hidden name="total"></Form.Item>
              <Form.Item hidden name="userId"></Form.Item>
              <Form.Item name="title" label="Title">
                <Input />
              </Form.Item>
              <Form.Item name="body" label="Body">
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={updatePending}
                >
                  Save
                </Button>
              </Form.Item>
            </Form>
          )}
        </Card>
      </Flex>
    </BaseLayout>
  );
};
