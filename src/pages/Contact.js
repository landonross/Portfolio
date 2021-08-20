import React from "react";

import { MailIcon, PhoneIcon, DocumentIcon} from '@heroicons/react/outline'

export default function Contact() {
  return (
    <div className="min-h-screen">
    <div className="relative bg-transparent">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-transparent py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-warmGray-200 sm:text-3xl fontFamily-megrim">Contact</h2>
            <p className="mt-3 text-lg leading-6 text-warmGray-200 fontFamily-jura">
              To start the journey of building your dream website you can contact me via the following forms of communication. You may also fill out the provided form and I will get back to you within 2 business days. I look forward to hearing from you!
            </p>
            <dl className="mt-8 text-base text-warmGray-200">
              {/* <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div> */}
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+1 (801) 828-6955</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">landon.w.ross@gmail.com</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Resume</dt>
                <dd className="flex">
                  <DocumentIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span href="https://drive.google.com/file/d/1Ox8BcbdUrbTuBj0Ui7iJXWyPSzOt509w/view?usp=sharing"className="ml-3">Resume: <a href="https://drive.google.com/file/d/1Ox8BcbdUrbTuBj0Ui7iJXWyPSzOt509w/view?usp=sharing" className="text-gray-400">View</a></span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-warmGray-200 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md bg-white"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}