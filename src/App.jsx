import { useState } from "react"
import { useEffect } from "react"
import Footer from "./components/Footer.jsx"
import Main from "./components/Main.jsx"
import SideBar from "./components/SideBar.jsx"


function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY // saving the API key as a var
    async function fetchAPIData(params) {
      const url = 'https://api.nasa.gov/planetary/apod' + 
      `?api_key=${NASA_KEY}`   

      const today = (new Date()).toDateString()
      const localKey = `NASA-${NASA_KEY}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        return
      }
      localStorage.clear()

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Data\n', apiData)
      } 
      catch (err) {
        console.log(err.message)
      }  
    }
    fetchAPIData()
  }, [])

 function handleToggalModal() {
    setShowModal((prev) => !prev)
  }

  return (
    <>
      {data ? (<Main data={data}/>) : 
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
        }
      {showModal && ( <SideBar data={data} handleToggalModal={handleToggalModal} />)}
      {data && (<Footer data={data} handleToggalModal={handleToggalModal}/>)}
    </>
  )
}

export default App
