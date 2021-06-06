import NextHead from "next/head";
import NextImage from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import NextLink from "next/link";

const name = "Vinay Rao";
export const siteTitle = "Vinay's Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <NextHead>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </NextHead>
      <header className={styles.header}>
        {home ? (
          <>
            <NextImage
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <NextLink href="/">
              <a>
                <NextImage
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </NextLink>
            <h2 className={utilStyles.headingLg}>
              <NextLink href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </NextLink>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <NextLink href="/">
            <a>← Back to home</a>
          </NextLink>
        </div>
      )}
    </div>
  );
}
