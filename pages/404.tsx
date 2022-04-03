import type { NextPage } from 'next';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <main>
        <div className="flex items-center flex-col md:flex-row">
          <span className="text-6xl mb-4 md:text-8xl md:mb-6">
            <span>4</span>
            <span className="relative">
              0{/* Sad face in the 0 of the 404 */}
              <div className="absolute left-0 [bottom:20px]">
                <div className="[transform:scale(0.5)_translate(-23px,38px)] md:transform-none">
                  <svg
                    height="60"
                    width="60"
                    className="hover:rotate-180 transition-transform"
                  >
                    <circle cx="26" cy="17" r="4" />
                    <circle cx="36" cy="17" r="4" />
                    <line
                      x1="19"
                      y1="31"
                      x2="39"
                      y2="41"
                      stroke="black"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
              </div>
            </span>
            <span>4</span>
          </span>
          <div className="text-center md:text-left md:pl-8 md:text-xl">
            <span className="text-slate-600">This page does not exist</span>
            <Link href="/">
              <a className="block mt-1">Back home</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;

// <svg
//   className="absolute left-0 [bottom:20px] hover:rotate-180 transition-transform"
//   height="60"
//   width="60"
// >
//   <circle cx="26" cy="16" r="4" />
//   <circle cx="36" cy="16" r="4" />
//   <line
//     x1="19"
//     y1="30"
//     x2="39"
//     y2="40"
//     stroke="black"
//     strokeWidth="4"
//   />
// </svg>
