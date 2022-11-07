import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

const Home = (props) => {
  return (
    <>
      <h1>Home</h1>
      {props.posts.map((post) => {
        return (
          <Link legacyBehavior href={"/blog/" + post.slug}>
            <a>{post.title}</a>
          </Link>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const posts = allPosts;

  return {
    props: {
      posts,
    },
  };
}

export default Home;
