import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

const mdxComponents = {
  h1: (props) => <h1 style={{ background: "red" }}>{props.children}</h1>,
};

const BlogPost = (props) => {
  const Body = useMDXComponent(props.post.body.code, mdxComponents);

  return (
    <>
      <h1>{props.post.title}</h1>
      <Body components={mdxComponents} />
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);
  return {
    props: {
      post,
    },
  };
}

export default BlogPost;
