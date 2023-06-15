import DOMAIN from "../../services/endpoint";
import axios from "axios";
import {Link, useLoaderData} from "react-router-dom";
import {Container, SimpleGrid, Text, Image, Stack, Button, createStyles, rem} from "@mantine/core";
import useBoundStore from "../../store/Store";

const useStyles = createStyles((theme) => ({
    category: {
        fontWeight: 700,
        textTransform: "uppercase",
    },
}));



function PostDetailsPage() {
    const { classes } = useStyles();
    const { logoutService, user } = useBoundStore((state) => state);
    const currentUserId = user.email.split("@")[0];
    const postDetails = useLoaderData();
    return (
    <>
        <Container>
            <SimpleGrid cols={2}>
                <Stack>
                <Text fz="xs">Posted by: {postDetails.user}</Text>
                <Text fz="xl" fw={700}>{postDetails.post.title}</Text>
                <Text className={classes.category}>{postDetails.post.category}</Text>
                <Text>{postDetails.post.content}</Text>
                    {currentUserId===postDetails.user ? <Button component={Link} to={'/posts/edit/' + postDetails.post.id}>Edit</Button> : null}
                </Stack>
                <Image maw={240} mx="auto" radius="md" src={postDetails.post.image} />
            </SimpleGrid>
        </Container>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
    const res = await axios.get(`${DOMAIN}/api/posts/${params.id}`);
    return res.data;
};




export default PostDetailsPage;

