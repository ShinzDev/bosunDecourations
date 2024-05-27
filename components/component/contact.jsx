/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/2UtgUzwZrIN
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    (<main id="contact" 
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="space-y-6">
        <div className="text-center">
          <h1
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Get in Touch
          </h1>
          <p
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-100 dark:text-gray-400 sm:mt-4">
            Have a question or want to work together? Fill out the form below or contact us directly.
          </p>
        </div>
        <div
          className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          <div className="bg-white dark:bg-black rounded-lg shadow-lg p-6 space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg
                  className="h-5 w-5 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2} />
                  <path
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2} />
                </svg>
                <span className="text-gray-700 dark:text-gray-400">12 Macurly</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="h-5 w-5 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2} />
                </svg>
                {/* <input type="number" name="" id="" /> */}
                <span className="text-gray-700 dark:text-gray-400"> +2348085123238</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="h-5 w-5 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2} />
                </svg>
                <span className="text-gray-700 dark:text-gray-400">bosundecorations@gmail.com</span>
              </div>
            </div>
          </div>
          <div
            className="bg-white dark:bg-black rounded-lg shadow-lg p-6 col-span-1 sm:col-span-2 lg:col-span-2 space-y-4">
            <h3 className="text-lg font-medium text-green-700 dark:text-gray-100">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" type="text" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="john@example.com" type="email" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={4} />
              </div>
              <Button className="w-full bg-black text-red-800 font-extrabold" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>)
  );
}


// text-[#e1018a