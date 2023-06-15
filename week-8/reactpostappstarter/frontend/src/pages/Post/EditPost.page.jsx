import { TextInput, Textarea, Button, Group, Box } from "@mantine/core";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { useForm } from "@mantine/form";
import {useLoaderData, useNavigate} from "react-router-dom";
import useBoundStore from "../../store/Store.js";

function EditPostPage() {
  const navigate = useNavigate();
  const { logoutService, user } = useBoundStore((state) => state);

  const postDetails = useLoaderData();
  const form = useForm({
    initialValues: {
      id: postDetails.post.id,
      title: postDetails.post.title,
      category: postDetails.post.category,
      image: postDetails.post.image,
      content: postDetails.post.content,
    },
  });

  const handleSubmit = async (values) => {
    const res = await axios.patch(`${DOMAIN}/api/posts`, values);
    if (res?.data.success) {
      navigate("/posts");
    }
  };

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Title"
          placeholder="Enter a Title"
          {...form.getInputProps("title")}
        />

        <TextInput
          label="Category"
          placeholder="Enter a Category"
          {...form.getInputProps("category")}
        />

        <TextInput
          label="Image"
          placeholder="Enter an Image"
          {...form.getInputProps("image")}
        />

        <Textarea
            autosize
          label="Content"
          placeholder="Enter some content"
          {...form.getInputProps("content")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Save Updated Post</Button>
        </Group>
      </form>
    </Box>
  );
}


export const postEditDetailsLoader = async ({ params }) => {
  const res = await axios.get(`${DOMAIN}/api/posts/${params.id}`);
  return res.data;
};

export default EditPostPage;
