import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/header'
import DragAndDrop from './components/dragAndDrop/DragAndDrop'
import Loader from './components/loader/loader'
import ImageReader from './components/imageReader/imageReader'


const MAX_FILE_SIZE = 2e+6

function App() {


  const [theme, setTheme] = useState('light')
  const [link_image, setLink_image] = useState("src/assets/Moon_fill.svg")

  const [image, setImage] = useState(null)
  const [flag_ImageReader, setflags_ImageReader] = useState(false)
  const [flag_Loader, setflags_Loader] = useState(false)
  const [flag_DragAndDrop, setflags_DragAndDrop] = useState(true)


  useEffect(() => {
    document.getElementById("browse_files").addEventListener("change", handleFile, false);
  }, [])

  const handlerChange = () => {
    if (theme === 'light') {
      setTheme('dark')
      setLink_image('src/assets/Sun_fill.svg')
    } else {
      setTheme('light')
      setLink_image('src/assets/Moon_fill.svg')
    }
  }


  const send_file = async (file) => {
    setflags_DragAndDrop(false)
    setflags_Loader(true)
    setflags_ImageReader(false)

    const formData = new FormData()
    formData.append('image', file)
    try {
      const res = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        setImage("http://localhost:3000"+data.filePath)
      } else {
        console.log('error')
      }
    }
    catch (error) 
    {
      console.log(error)
    }
    finally{
      setTimeout(() => {
        setflags_Loader(false)
        setflags_ImageReader(true)
      }, 3000)
    }
  }

  const check_size_file = (file) => {
    if (file.size > MAX_FILE_SIZE) {
      alert('File size is too large')
      return false
    }
    return true
  }

  const check_format_file = (file) => {
    if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif') {
      return true
    }
    alert('File format is not supported')
    return false
  }

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!check_size_file(file) || !check_format_file(file)) {
      file.value = null
      return
    }
    console.log(file);
    send_file(file);
  }

  const handle_drop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    console.log(check_format_file(file));
    if (!check_size_file(file) || !check_format_file(file)) {
      file.value = null
      return
    }
    console.log(file);
    send_file(file);
  }

  return (
    <>
      <Header onclick={handlerChange} link_image={link_image} theme={theme}/>
      <div id='page' className={theme === 'dark'? "page_dark": ""}>
        {flag_DragAndDrop && <DragAndDrop ondrop={handle_drop} theme={theme} />}
        {flag_ImageReader && <ImageReader image={image}/>}
        {flag_Loader && <Loader />}
      </div>
    </>
  )
}

export default App
