import React from "react";
// import ArticleContext from "../../utils/ArticleContext.js";
import "./style.css"

const posts = [
    {
      title: 'BTR Realtors',
      href: 'https://www.btrrealty.com',
      category: { name: 'Website', href: 'https://www.btrrealty.com' },
      description:
        'Full Stack web page developed fully by myself for a realtor couple to facilitate simple description of partnership and means of contact for home buyers and sellers alike.',
      date: 'June, 2021',
      datetime: '2021-06-15',
      imageUrl:
        'images/btr.png',
      author: {
        name: 'Landon Ross',
        href: 'https://github.com/landonross/parents_page',
        imageUrl:
          'images/profile.jpg',
      },
    },
    {
      title: 'Garden Overflow',
      href: 'https://garden-overflow.herokuapp.com/',
      category: { name: 'Website', href: 'https://garden-overflow.herokuapp.com/' },
      description:
        'A social media network that allows users to create a profile and save plants that thrive in the area where they reside. Responsibilities included: React.js, CSS, bootstrap.',
      date: 'May, 2021',
      datetime: '2021-05-12',
      imageUrl:
        'images/garden.png',
      author: {
        name: 'Landon Ross',
        href: 'https://github.com/arianaw15/Garden-Overflow',
        imageUrl:
          'images/profile.jpg',
      },
    },
    {
      title: 'Barkle',
      href: 'https://barkle.herokuapp.com/',
      category: { name: 'Website', href: 'https://barkle.herokuapp.com/' },
      description:
        'A social media network designed for dog owners that allows users to create events and meetups to allow their dogs to play together. Responsibilities included: CSS, mySQL, react.js.',
      date: 'April, 2021',
      datetime: '2021-04-10',
      imageUrl:
        'images/barkle.png',
      author: {
        name: 'Landon Ross',
        href: 'https://github.com/Jpeyton-hub/Barkle',
        imageUrl:
          'images/profile.jpg',
      },
    },
    {
        title: 'Employee Directory',
        href: 'https://empoyee-directory.herokuapp.com/',
        category: { name: 'Website', href: 'https://empoyee-directory.herokuapp.com/' },
        description:
          'MongoDB database storage that stores Employees and allows user to search by name to find specific employees and their information.',
        date: 'March, 2021',
        datetime: '2021-03-15',
        imageUrl:
          'images/employee.png',
        author: {
          name: 'Landon Ross',
          href: 'https://github.com/Jpeyton-hub/Barkle',
          imageUrl:
            'images/profile.jpg',
        },
      }
  ]
  
  export default function ProjectCard() {
    return (
      <div className="relative bg-transparent pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-transparent h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-bold fontFamily-jura text-warmGray-200 sm:text-4xl">Recent Projects</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-warmGray-200 sm:mt-4 fontFamily-jura">
              Full stack webpages developed in part or in full by myself.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex-1 bg-warmGray-200 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true"></span>
                        <span>{post.readingTime} </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }