import React, { useEffect, useState } from "react"
import "./Homepage.scss"
import BGVDO from "../../assets/vdo/bg.mp4"
import wallpaper from "../../assets/images/wallpaper.jpg"

const Homepage = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    setInnerWidth(window.innerWidth)
  }, window.innerWidth)

  return (
    <div className="homepage">
      <div className="vdo-container">
        <video src={BGVDO} autoPlay muted loop></video>
      </div>
      {/* <img src={wallpaper} alt="" width="1536px" /> */}
    </div>
  )
}

export default Homepage
