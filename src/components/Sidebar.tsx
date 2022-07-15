import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Sidebar = () => {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Image
        src="https://sumitdey.netlify.app/static/media/max.9d3a6d3e.jpg"
        alt="avatar"
        className=" mx-auto rounded-full border "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="font-kaushan my-4 text-3xl font-medium tracking-wider">
        <span className="text-green ">Sumit</span> Dey
      </h3>
      <p className="dark:bg-dark-200 dark:bg-black-500 my-3 rounded-full bg-gray-200 px-2 py-1">
        Web Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/Sumit Dey Resume.pdf"
        download="Sumit Dey Resume.pdf"
        className="dark:bg-dark-200 dark:bg-black-500 my-2 flex cursor-pointer items-center justify-center rounded-full bg-gray-200 px-2 py-1"
      >
        <GiTie className="h-6 w-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="text-green mx-auto my-5 flex w-9/12 justify-around md:w-full ">
        <a href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A">
          <AiFillYoutube className="h-8 w-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/sumit-dey-4a04431a9/">
          <AiFillLinkedin className="h-8 w-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/_sumax__/">
          <AiFillGithub className="h-8 w-8 cursor-pointer" />{' '}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="dark:bg-dark-200 dark:bg-black-500 my-5 bg-gray-200 py-4"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Kolkata,India </span>
        </div>
        <p className="my-2 "> code.sumax@gmail.com </p>
        <p className="my-2"> 8514961665 / 8640960375 </p>
      </div>

      {/* Email Button */}

      <button
        className="from-green w-8/12 cursor-pointer rounded-full bg-black bg-gradient-to-r to-blue-500 px-5 py-2 text-white hover:scale-105 focus:outline-none"
        onClick={() => window.open('mailto:code.sumax@gmail.com')}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="from-green my-4 w-8/12 cursor-pointer rounded-full bg-black bg-gradient-to-r to-blue-500 px-5 py-2 text-white hover:scale-105 focus:outline-none "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  )
}

export default Sidebar
