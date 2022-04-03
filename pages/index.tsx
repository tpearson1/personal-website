import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="px-40">
      <Head>
        <title>Thomas Pearson | Software Developer</title>
        <meta name="description" content="About me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen grid place-items-center">
        <div>
          <h1 className="text-6xl">Hi, I&rsquo;m Thomas Pearson</h1>
          <h2 className="text-3xl text-gray-500">I make software</h2>

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
        <span className="text-xl">
          Contact:{' '}
          <a href="mailto:hello@thomaspearson.me">hello@thomaspearson.me</a>
        </span>
      </footer>
    </div>
  );
};

export default Home;
