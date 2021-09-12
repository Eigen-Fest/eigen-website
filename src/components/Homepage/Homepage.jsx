import React from "react"
import "./Homepage.scss"
import BGVDO from "../../assets/vdo/bg.mp4"
import wallpaper from "../../assets/images/wallpaper.jpg"

const Homepage = () => {
  return (
    <div>
      {/* <video src={BGVDO} autoPlay muted loop width="1536px"></video> */}
      <img src={wallpaper} alt="" width="1536px" />
    </div>
  )
}

export default Homepage
