
import './App.css';
import { useState, useEffect } from 'react'
import Gallery from './gallery/gallery'
import Buttons from './gallery/buttons'


function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  
  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }
  useEffect(() => {
      document.title='Welcome to Artworld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])

const displayImage = () => {
  if(!data.primaryImage) {
    return (
      <h2>No Image!</h2>
    )
  }

  return (
    <Gallery objectImg={data.primaryImage} title={data.title} />
  )
}
  return (
    <><div className='App'>
      <h1>{data.title}</h1>
      {displayImage()}
    </div><div>
        <Buttons handleIterate={handleIterate} />
      </div></>
  );
}

export default App