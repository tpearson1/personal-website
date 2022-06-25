import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="px-10 md:px-40">
      <Head>
        <title>Thomas Pearson | Software Developer</title>
        <meta name="description" content="About me" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="min-h-screen grid place-items-center">
        <div>
          <h1 className="text-2xl md:text-6xl">Hi, I&rsquo;m Thomas Pearson</h1>
          <h2 className="text-xl md:text-3xl text-gray-500">I make software</h2>

          <div>
            <ul className="border-l-4 border-gray-400 ml-8 mt-8 pl-10">
              <li>
                <a href="https://github.com/tpearson1" className="text-xl">
                  GitHub
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://www.linkedin.com/in/thomas-pearson-8a5a33191"
                  className="text-xl"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-8 right-8">
        <span className="text-lg md:text-xl">
          Contact:{' '}
          <a href="mailto:hello@thomaspearson.me">hello@thomaspearson.me</a>
        </span>
      </footer>
    </div>
  );
};

export default Home;
