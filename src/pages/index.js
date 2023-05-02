import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Image from 'next/image';

import python from '../../public/python.png';
import javascript from '../../public/javascript.png';
import rust from '../../public/rust.png';

import joke from '../../public/bytes_joke.png';


import socialmedia from "../../public/socialmedia.png";
import glasses from "../../public/glasses.png";
import names from "../../public/names.png";

import rocket from "../../public/rocket.png";
import tauri from "../../public/tauri.png";

import pokemon from "../../public/pokemon.png";

import opencvcpp from "../../public/opencvcpp.png";

import csharp from "../../public/csharp.png";

import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jesus Flores portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10  dark:bg-gray-900 md:px-20 lg:px-40' >
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>JesusCreations</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill color={darkMode ? 'white':'black'} onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' /></li>
<<<<<<< HEAD
              <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://github.com/55jflores/55jflores/files/11369388/jflores_resume.pdf">Resume</a></li>
=======
              <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://github.com/55jflores/55jflores/files/10939124/jflores_resume.pdf">Resume</a></li>
>>>>>>> 9cfeaffb792ef448aa5945e4de0d155700ef96f5
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Jesus Flores</h2>
            <h3 className='text-2xl py-2 md-3xl dark:text-white'>Software Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-400 md:text-xl max-w-lg mx-auto'>I develop the software and make it do the stuff</p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
           <a href='https://github.com/55jflores'>
            <AiFillGithub/>
          </a> 
          <a href='https://www.linkedin.com/in/jesus-flores-0487ba125'>
            <AiFillLinkedin/>
          </a> 
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={joke} fill style={{objectFit:'cover'}} />
          </div>

        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-400'>Little bit about programming me</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Graduated with a B.S. in Computer Science and a Minor in Mathematics</p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Dove into various fields of programming, as well as programming languages. Below are my <span className='text-teal-500'>top 3 favorite programming languages</span>, as well as projects done using each language</p>
          </div>

          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image className='mx-auto' src={python} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Python</h3>
              <p className='py-2'>A staple amongst most programmers. Used Python mainly for Computer vision, deep learning, webdev and automation projects</p>

              <h4 className='py-4 text-teal-600'>Favorite frameworks/libraries used</h4>
              <p className='text-gray-800 py-1'>Flask</p>
              <p className='text-gray-800 py-1'>OpenCV</p>
              <p className='text-gray-800 py-1'>PyTorch</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image className='mx-auto' src={javascript} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Javascript</h3>
              <p className='py-2'>Since I cannot hide from Javascript I decided to embrace it. Used to create websites {"(such as this one),"}  as well as applications for phones</p>

              <h4 className='py-4 text-teal-600'>Favorite frameworks/libraries used</h4>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>React-native</p>
              <p className='text-gray-800 py-1'>NodeJS</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image className='mx-auto' src={rust} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Rust</h3>
              <p className='py-2'>Wanted to learn a compiled programming language to have alongside C++. Used for simple console applications, desktop and web applications</p>

              <h4 className='py-4 text-teal-600'>Favorite frameworks/libraries used</h4>
              <p className='text-gray-800 py-1'>Tauri</p>
              <p className='text-gray-800 py-1'>Rocket</p>
              <p className='text-gray-800 py-1'>Yew</p>
            </div>
          </div>
        </section>

        <section>
            <h3 className='text-3xl py-1 dark:text-gray-400'>Projects</h3>
            <div className='text-center p-10'>
              <h3 className='text-3xl py-1 dark:text-gray-400'>Projects in action</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Below are some of my favorite projects that I have done. C++ and C# add to my favorite programming languages list to make it a top 5</p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>Click on each picture to take you to its respective github repository</p>

            </div>

            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

              <div className='basis-1/3 flex-1'>
                <h1 className='dark:text-gray-400'>Python: Flask website using PyTorch to categorize cat and dog pictures into seperate paths </h1>
                <a href='https://github.com/55jflores/PyTorchWeb-Development/tree/main/deeplearning_website'>
                <Image className='rounded-lg object-cover'width={'100%'} height={'100%'} responsive = "true" src={socialmedia}  />
                </a>
              </div>

              <div className='basis-1/3 flex-1'>
                <h1 className='dark:text-gray-400'>Python: Used Pytorch and OpenCV to detect if I have glasses on using the webcam </h1>
                <a href='https://github.com/55jflores/PyTorch_webcam'>
                <Image className='rounded-lg object-cover'width={'100%'} height={'100%'} responsive = "true" src={glasses}  />
                </a>
              </div>

              <div className='basis-1/3 flex-1'>
                <h1 className='dark:text-gray-400'>Python: Used Pytorch and Gradio to classify last names into languages of origin</h1>
                <a href='https://github.com/55jflores/NameClassifier'>
                <Image className='rounded-lg object-cover'width={'100%'} height={'100%'} responsive = "true" src={names}  />
                </a>
              </div>
             
              <div className='basis-1/3 flex-1'>
                <h1 className='dark:text-gray-400'>Rust: Used the Rocket framework to create an API to return car parts that the user asks for</h1>
                <a href='https://github.com/55jflores/rocketrust'>
                <Image className='rounded-lg object-cover'width={'100%'} height={'100%'} responsive = "true" src={rocket}  />
                </a>
              </div>

              <div className='basis-1/3 flex-1'>
                <h1 className='dark:text-gray-400'>Rust: Tauri app that uses React as a front end and Rust as a backend to display the NASA APOD</h1>
                <a href='https://github.com/55jflores/tauri_app'>
                <Image className='rounded-lg object-cover'width={'100%'} height={'100%'} responsive = "true" src={tauri} />
                </a>
              </div>

              <div className='basis-1/3 flex-1'>
                <h1 className='dark:text-gray-400'>Javascript: Created a Pokedex using react-native</h1>
                <a href='https://github.com/55jflores/mypokedex'>
                <Image className='rounded-lg object-cover'width={'100%'} height={'100%'} responsive = "true" src={pokemon} />
                </a>
              </div>

              <div className='basis-1/3 flex-1'>
                <h1 className='dark:text-gray-400'>C#: To-do app written with ASP.Net MVC .net </h1>
                <a href='https://github.com/55jflores/FirstMVCApp'>
                <Image className='rounded-lg object-cover'width={'100%'} height={'100%'} responsive = "true" src={csharp}  />
                </a>
              </div>

              <div className='basis-1/3 flex-1'>
               <h1 className='dark:text-gray-400'>C++: Used OpenCV with C++ and threads to apply filters to images concurrently</h1>
                <a href='https://github.com/55jflores/OpenCV-Cpp'>
                <Image className='rounded-lg object-cover'width={'100%'} height={'100%'} responsive = "true" src={opencvcpp} />
                </a>
              </div>

            </div>

        </section>
      </main>
    </div>
  )
}
