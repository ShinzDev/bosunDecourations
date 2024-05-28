/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/SSc3DHt0pFq
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Image from 'next/image'
import profilic from './profile.jpg'
import './talk.css'
export function Bodytalk() {
  return (
    (<section id="me" 
      className="flex flex-col items-center     justify-center px-10 py-20 md:py-20 lg:py-20">
      <div
        className="container  border-black border try bg-black py-20 px-4 md:px-6 flex flex-col  md:flex-row items-center justify-center text-center md:text-left">
        <div className="max-w-2xl space-y-4 md:mr-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
          <p className="text-black-500 md:text-xl  dark:text-black-400">
          Welcome to Bosun Decorations, where we transform your visions into unforgettable experiences. Specializing in bespoke event decorations, we pride ourselves on creating stunning, personalized settings for every occasion. Whether you’re planning an intimate gathering or a grand celebration, our team of dedicated professionals is here to bring your dream event to life.
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <Image
            alt="Team Photo"
            className="rounded-full w-40 h-40 object-cover"
            height={160}
            src={profilic}
            style={{
              aspectRatio: "160/160",
              objectFit: "cover",
            }}
            width={160} />
        </div>
      </div>
    </section>)
  );
}
