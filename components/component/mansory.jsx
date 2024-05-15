/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/vvgyAypxfhq
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
import Image from "next/image";
import pic from "./bgimg.jpg";
export function Mansory() {
  return (
    <div
      id="man"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 py-12"
    >
      <div className="row-span-2">
        <Image
          alt="Image 1"
          className="w-full h-full object-cover rounded-lg"
          height="400"
          src={pic}
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width="600"
        />
      </div>
      <div>
        <Image
          alt="Image 2"
          className="w-full h-full object-cover rounded-lg"
          height="300"
          src="/placeholder.svg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
      <div className="row-span-2">
        <Image
          alt="Image 3"
          className="w-full h-full object-cover rounded-lg"
          height="500"
          src="/placeholder.svg"
          style={{
            aspectRatio: "400/500",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
      <div className="row-span-2">
        <Image
          alt="Image 4"
          className="w-full h-full object-cover rounded-lg"
          height="450"
          src="/placeholder.svg"
          style={{
            aspectRatio: "600/450",
            objectFit: "cover",
          }}
          width="600"
        />
      </div>
      <div>
        <Image
          alt="Image 5"
          className="w-full h-full object-cover rounded-lg"
          height="250"
          src="/placeholder.svg"
          style={{
            aspectRatio: "350/250",
            objectFit: "cover",
          }}
          width="350"
        />
      </div>
      <div>
        <Image
          alt="Image 6"
          className="w-full h-full object-cover rounded-lg"
          height="350"
          src="/placeholder.svg"
          style={{
            aspectRatio: "500/350",
            objectFit: "cover",
          }}
          width="500"
        />
      </div>
      <div className="row-span-2">
        <Image
          alt="Image 1"
          className="w-full h-full object-cover rounded-lg"
          height="400"
          src={pic}
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width="600"
        />
      </div>
      <div>
        <Image
          alt="Image 2"
          className="w-full h-full object-cover rounded-lg"
          height="300"
          src="/placeholder.svg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
      <div className="row-span-2">
        <Image
          alt="Image 3"
          className="w-full h-full object-cover rounded-lg"
          height="500"
          src="/placeholder.svg"
          style={{
            aspectRatio: "400/500",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
      <div className="row-span-2">
        <Image
          alt="Image 4"
          className="w-full h-full object-cover rounded-lg"
          height="450"
          src="/placeholder.svg"
          style={{
            aspectRatio: "600/450",
            objectFit: "cover",
          }}
          width="600"
        />
      </div>
      <div>
        <Image
          alt="Image 5"
          className="w-full h-full object-cover rounded-lg"
          height="250"
          src="/placeholder.svg"
          style={{
            aspectRatio: "350/250",
            objectFit: "cover",
          }}
          width="350"
        />
      </div>
      <div>
        <Image
          alt="Image 6"
          className="w-full h-full object-cover rounded-lg"
          height="350"
          src="/placeholder.svg"
          style={{
            aspectRatio: "500/350",
            objectFit: "cover",
          }}
          width="500"
        />
      </div>
    </div>
  );
}
