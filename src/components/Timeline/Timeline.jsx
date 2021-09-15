import React, { useEffect } from "react";
import "./Timeline.scss";
import { items } from "./constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Timeline = () => {
  const animateFromTo = (elem, direction) => {
    const offset = 1000;
    let x = 0;
    let y = direction * offset;

    direction = direction | 1;

    if (elem.classList.contains("slide_from_left")) {
      x = -offset;
      y = 0;
    } else if (elem.classList.contains("slide_from_right")) {
      x = offset;
      y = 0;
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
    );
  };

  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".animate").forEach(function (elem) {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFromTo(elem);
        },
        onEnterBack: function () {
          animateFromTo(elem, -1);
        },
      });
    });
  }, []);

  return (
    <div className="timeline-container">
      <ul className="timelines">
        <div class="wrapper">
          {items.map((te, idx) => {
            return (
              <li key={`${te.title}_${te.date}`} className="timeline-item">
                <div
                  className={`time animate ${
                    idx % 2 !== 0 ? "slide_from_left" : "slide_from_right"
                  }`}
                >
                  <h4>{te.date}</h4>
                </div>
                <div
                  className={`animate ${
                    idx % 2 === 0 ? "slide_from_left" : "slide_from_right"
                  }`}
                >
                  <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></img>
                    <div class="descriptions">
                      <h1>John Wick 3</h1>
                      <p>
                        After gunning down a member of the High Table -- the
                        shadowy international assassin's guild -- legendary hit
                        man John Wick finds himself stripped of the
                        organization's protective services. Now stuck with a $14
                        million bounty on his head, Wick must fight his way
                        through the streets of New York as he becomes the target
                        of the world's most ruthless killers.
                      </p>
                      <button>
                        <i class="fab fa-youtube"></i>
                        Play trailer on YouTube
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  );
};

export default Timeline;
