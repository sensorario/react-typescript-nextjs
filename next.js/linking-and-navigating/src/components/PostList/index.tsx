import { Post } from "@/src/components/PostList/types";
import Link from "next/link";

export default function PostList({ posts }: { posts: Post[] }) {
  return posts.map((post) => (
    <Link href={`/blog/foo/${post.id}`}>title: {post.title}</Link>
  ));
}
