import { TextInput, Textarea, Button, Group, Box } from "@mantine/core";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import useBoundStore from "../../store/Store.js";

function CreatePostPage() {
  const navigate = useNavigate();
  const { logoutService, user } = useBoundStore((state) => state);
  const form = useForm({
    initialValues: {
      title: "",
      category: "",
      image: "",
      content: "",
    },
  });

  const handleSubmit = async (values) => {
    const res = await axios.post(`${DOMAIN}/api/posts`, {'data': values, 'userId': user.id});
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
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default CreatePostPage;
