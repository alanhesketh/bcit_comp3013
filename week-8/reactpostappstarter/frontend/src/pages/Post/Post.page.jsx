import DOMAIN from "../../services/endpoint";
import axios from "axios";
import {Container, Loader, SimpleGrid, Center} from "@mantine/core";
import { useLoaderData, Await, defer } from "react-router-dom";
import { Suspense } from "react";
import { ArticleCardImage } from "../../components/misc/ArticleCardImage.jsx";

export const postsLoader = async (props) => {
    const res = axios.get(`${DOMAIN}/api/posts`);
    return defer({data: res});
};

export function PostGrid (posts) {
console.log(posts.items);
return (
    <SimpleGrid cols={3}>
        {posts.items.map((post) => (
            <ArticleCardImage key={post.title} {...post} />
        ))}
    </SimpleGrid>
)

}


export const PostPage = () => {
    const postPromise = useLoaderData();

  return (
    <Container>
        <Suspense fallback={<Center><Loader /></Center>}>
            <Await resolve={postPromise.data}>
                {(posts)=>(<PostGrid items={posts.data} />)}
            </Await>
        </Suspense>
    </Container>
  );
};

