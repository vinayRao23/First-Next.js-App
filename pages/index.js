import NextHead from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import NextLink from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <NextHead>
        <title>{siteTitle}</title>
      </NextHead>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Vinay. I am a middle school student who codes React, React
          Native, Graphql, Node.js, Typescript, and Next.js.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            our Next.js tutorial
          </a>
          .)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <NextLink href={`/posts/${id}`}>
                <a>{title}</a>
              </NextLink>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
