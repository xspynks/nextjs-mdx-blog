import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import Header from "../components/header";

const Home = (props) => {
  return (
    <>
      <Header />
      <Head>
        <title>Rafael de Paula | Full-stack developer</title>
        <meta name="title" content="Rafael de Paula | Full-stack developer" />
        <meta
          name="description"
          content="I'm a full-stack developer with a passion for learning and sharing knowledge."
        />
        <meta
          name="keywords"
          content="developer, full stack, react, ruby on rails, dotnet"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Portuguese" />
        <meta name="author" content="@rafaeldepauladj" />
      </Head>
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
