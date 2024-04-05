import React, { useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function App() {
  const ref = useRef();

  useGSAP(() => {

    var tl1 = gsap.timeline({
      scrollTrigger:{
        trigger: ".main",
        start: "top 50%",
        end: "top -300%", 
        scrub: 1,
      }
    })

    tl1.to("#nav .box",{
      scale: "0.2",
      top: "-17vw",
      left: "-13vw",
    })


    var tl = gsap.timeline({
      scrollTrigger:{
        trigger: "#page2",
        start:  "50% 50%",
        end: "250% top",
        scrub: true,
        pin: true,
       // markers: true
      }
    })

    tl.to(".svg",{
      maskSize: "170%"
    },"a")
    tl.to(".img",{
      backgroundSize: "100%"
    },"a")
    tl.to("#nav",{
      color: "#ffff"
    },"a")

    tl.to(".svg2",{
      maskSize: "170%"
    },"b")
    tl.to(".img2",{
      backgroundSize: "100%"
    },"b")

  }, {scope: ref})

  return (
    <div className='main-div' ref = {ref}>
      <div id="nav">
        <div className="box">
        <h1>AXEL <br />VANHESSCHE</h1>
        </div>
        <div className="left">
          <h6>PHOTOGRAPHER FROM <br /> FRANCE BASED IN PARIS</h6>
          <h6>LAST UPDATE <br /> FEB 2024</h6>
        </div>
        <div className="right">
          <h6>INDEX <span>,</span></h6>
          <h6>WORK <span>,</span></h6>
          <h6>GALLERY <span>,</span></h6>
          <h6>ABOUT</h6>
        </div>
      </div>
      <div className='main'>
        <div id="page1">
          <div className="img1">
            <img src="https://axelvanhessche.com/images/ELECTRICK-1.webp" alt="" />
          </div>
          <div className="img2">
            <img src="https://axelvanhessche.com/images/portraits-5_danibumba.webp" alt="" />
          </div>
          <div className="img3">
            <img src="https://axelvanhessche.com/images/peugeot_153.webp" alt="" />
          </div>
          <div className="img4">
            <img src="https://axelvanhessche.com/images/3g0a9005.webp" alt="" />
          </div>
          <div className="img5">
            <img src="https://axelvanhessche.com/images/denzelcurry14822.webp" alt="" />
          </div>
          <div className="img6">
            <img src="https://axelvanhessche.com/images/LARELEVE-1.webp" alt="" />
          </div>
          <div className="img7">
            <img src="https://axelvanhessche.com/images/AVE20231220_18444255_0090.webp" alt="" />
          </div>
          <div className="img8">
            <img src="https://axelvanhessche.com/images/portraits-11_benoitmagimel.webp" alt="" />
          </div>
          <div className="img9">
            <img src="https://axelvanhessche.com/images/LARELEVE-5.webp" alt="" />
          </div>
        </div>
         <div id="page2">
         <div className="svg">
            <div className="img">
            <div className="svg2">
            <div className="img2"></div>
          </div>
            </div>
          </div>
         </div>
         <div id="footer">
          <div className="top">
            <button className='insta'>INSTAGRAM <span><img src="data:image/svg+xml,%3Csvg%20width%3D%2259%22%20height%3D%2259%22%20viewBox%3D%220%200%2059%2059%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.98271%2058.7959L0.0332029%2053.8459L46.8746%207L6.00029%207L6.00029%203.55387e-06L52.0003%201.54314e-06L59.0003%201.23716e-06L59.0003%207L59.0003%2053L52.0003%2053L52.0003%2011.7738L4.98271%2058.7959Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E%0A" alt="" /></span></button>
            <button className='email'>EMAIL <span><img src="data:image/svg+xml,%3Csvg%20width%3D%2259%22%20height%3D%2259%22%20viewBox%3D%220%200%2059%2059%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.98271%2058.7959L0.0332029%2053.8459L46.8746%207L6.00029%207L6.00029%203.55387e-06L52.0003%201.54314e-06L59.0003%201.23716e-06L59.0003%207L59.0003%2053L52.0003%2053L52.0003%2011.7738L4.98271%2058.7959Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E%0A" alt="" /></span></button>
          </div>
          <div className="btm">
            <h6>©️AXEL VANHESSCHE</h6>
            <img src="data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M23.9985%200C13.6487%205.75593%2010.3483%205.75593%201.90735e-06%20-1.04907e-06C6.2773%209.48652%206.2773%2012.5135%209.45698e-07%2022C10.3498%2016.2455%2013.6502%2016.2455%2024%2022C17.7212%2012.5135%2017.7212%209.4879%2023.9985%200Z%22%20fill%3D%22black%22%20%2F%3E%0A%3C%2Fsvg%3E" alt="" />
            <h6>LAST UPDATE : FEB 2024</h6>
          </div>
         </div>

      </div>
      
    </div>
  )
}

export default App
