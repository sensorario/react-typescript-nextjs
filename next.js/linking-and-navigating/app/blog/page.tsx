import PostList from "@/src/components/PostList";

export default function Page() {
  return (
    <>
      <PostList
        posts={[
          {
            title: "Hello world!!",
          },
          {
            title: "Secondo articolo...",
          },
        ]}
      />
    </>
  );
}
