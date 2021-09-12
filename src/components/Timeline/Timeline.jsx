import React, { useEffect } from "react"
import "./Timeline.scss"
import { items } from "./constants"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Timeline = () => {
  const animateFromTo = (elem, direction) => {
    const offset = 1000
    let x = 0
    let y = direction * offset

    direction = direction | 1

    if (elem.classList.contains("slide_from_left")) {
      x = -offset
      y = 0
    } else if (elem.classList.contains("slide_from_right")) {
      x = offset
      y = 0
    }

    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: elem.classList.contains("slide_from_left") ? -150 : 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    )
  }

  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 })
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray(".animate").forEach(function (elem) {
      hide(elem)

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFromTo(elem)
        },
        onEnterBack: function () {
          animateFromTo(elem, -1)
        },
      })
    })
  }, [])

  return (
    <div className="timeline-container">
      <ul className="timelines">
        {items.map((te, idx) => {
          return (
            <li key={`${te.title}_${te.date}`} className="timeline-item">
              <div className={`time animate ${idx % 2 !== 0 ? "slide_from_left" : "slide_from_right"}`}>
                <h4>{te.date}</h4>
              </div>
              <div className={`animate ${idx % 2 === 0 ? "slide_from_left" : "slide_from_right"}`}>
                <h3>{te.title}</h3>
                <p>{te.description}</p>
              </div>
            </li>
          )
        })}
        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  )
}

export default Timeline
