import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import DragAndDrop from './components/dragAndDrop/DragAndDrop'
function App() {


  const [theme, setTheme] = useState('light')
  const [link_image, setLink_image] = useState('src/assets/Moon_fill.svg')


  const handlerChange = () => {
    if (theme === 'light') {
      setTheme('dark')
      setLink_image('src/assets/Sun_fill.svg')
    } else {
      setTheme('light')
      setLink_image('src/assets/Moon_fill.svg')
    }
  }

  return (
    <>
      <Header onclick={handlerChange} link_image={link_image} />
      <div className='page'>
        <DragAndDrop />
      </div>

    </>
  )
}

export default App
