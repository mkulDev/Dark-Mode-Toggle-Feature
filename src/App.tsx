import DarkMode from './DarkMode'
function App() {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col'>
      <div className=' flex flex-1 gap-10 flex-col justify-center items-center'>
        <DarkMode size={25} />
        <DarkMode size={139} />
        <DarkMode size={60} />
        <DarkMode size={40} />
        <p className='text-primary'>read the doc from github for more info</p>
      </div>

      <div className='bg-bgSecondary w-full h-[100px]'></div>
      <div className='bg-bgTertiary w-full h-[100px]'></div>
    </div>
  )
}

export default App
