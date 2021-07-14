import { Button, Form, Input } from "antd";
import { addMovieBody } from "../../../Types";

export interface ModalFormProps {}

const ModalForm = () => {
  const onFinish = (values: addMovieBody) => {
    console.log("values", values);

    fetch("http://www.moviesapi.ir/api/v1/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...values, poster: btoa(values.Poster) }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input title!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="IMDB-ID"
        name="imdb_id"
        rules={[
          {
            required: true,
            message: "Please input IMDb ID!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Country"
        name="country"
        rules={[
          {
            required: true,
            message: "Please input country!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Year"
        name="year"
        rules={[
          {
            required: true,
            message: "Please input correct year!",
            min: 4,
            max: 4,
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        label="Director"
        name="director"
        rules={[
          {
            required: false,
            message: "Please input director !",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Imdb_rating"
        name="imdb_rating"
        rules={[
          {
            required: false,
            message: "Please input imdb_rating !",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Imdb_votes"
        name="imdb_votes"
        rules={[
          {
            required: false,
            message: "Please input imdb_votes !",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Poster"
        name="poster"
        rules={[
          {
            required: false,
            message: "Please input poster!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ModalForm;
