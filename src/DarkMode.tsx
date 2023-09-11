import { useState, useEffect } from 'react'
import { IoMoonOutline } from 'react-icons/io5'
import { FaRegSun } from 'react-icons/fa'

type Props = {
  size: number
}

const DarkMode = ({ size }: Props) => {
  const isDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches
  const rootElement = document.querySelector(':root') as HTMLElement
  const [darkMode, setDarkMode] = useState<boolean>(isDarkPreferred ? true : false)

  useEffect(() => {
    rootElement.dataset.theme = isDarkPreferred ? 'dark' : 'light'
  }, [])

  const toggleTheme = () => {
    if (rootElement) rootElement.dataset.theme = darkMode ? 'light' : 'dark'
    setDarkMode(!darkMode)
  }

  if (size < 25 || !Number.isInteger(size)) return null

  const width = Math.ceil(size * 2.2)
  const padding = Math.ceil(size / 10)
  const effect = `transform ${0.5}s ease-in-out`
  const animation = `translateX(${darkMode ? width - size + 'px' : '0px'})`

  return (
    <button
      onClick={toggleTheme}
      className={`p-1 bg-bgSecondary rounded-full`}
    >
      <div
        style={{ width: width + padding * 2, height: size + padding * 2, padding: padding }}
        className={` relative ${darkMode ? 'bg-gradient-to-b from-bgPrimary to-bgTertiary' : 'bg-gradient-to-t from-bgPrimary to-bgTertiary'}  shadow-xl flex items-center rounded-full`}
      >
        <div
          style={{ width: size, height: size, transition: effect, transform: animation }}
          className={`rounded-[50%] shadow-inner bg-gradient-to-b from-primary to-primaryDark hover:opacity-80 hover:duration-300}`}
        ></div>
        <div
          className={`absolute flex justify-center items-center `}
          style={{ width: size, height: size }}
        >
          <FaRegSun
            size={size / 2}
            className={`${darkMode ? 'text-primary' : 'text-gray-200'} transition-colors duration-500`}
          />
        </div>
        <div
          className={`absolute right-0 flex justify-center items-center `}
          style={{ width: size, height: size, right: 0 + padding }}
        >
          <IoMoonOutline
            size={size / 2}
            className={`${darkMode ? 'text-gray-200' : 'text-primary'} transition-colors duration-500`}
          />
        </div>
      </div>
    </button>
  )
}

export default DarkMode
