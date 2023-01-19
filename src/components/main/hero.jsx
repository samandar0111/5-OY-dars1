import { useState } from "react"
import hero from "./hero.module.scss"
import heroImg from "./img/hero.png"
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"

const HeroFunc = ()=>{
  const [count1,setcount1] = useState(0)
  const [count2,setcount2] = useState(0)
  const [count3,setcount3] = useState(0)
  
  return(
    <div className={hero.container}>
      <div className={hero.bloc}>
        <div className={hero.imgBox}>
          <img src={heroImg} alt="" />
          <h2 className={hero.title}>Super Flash Sale
            50% Off</h2>
        </div>
        <ul className={hero.list}>
          <li className={hero.bbox}>
            <h2 className={hero.title1}>Nike Air Max 270 React</h2>
            <img className={hero.img1} src={img1} alt="" />
           <div className={hero.count_box}> 
            <button onClick={()=>{setcount1(count1 > 0 ? count1 - 1 : count1)}} className={hero.btn}>-</button>
            <p className={hero.count}>{count1}</p>
            <button  onClick={()=>{setcount1(count1 + 1)}}  className={hero.btn}>+</button>
            </div>
          </li>
          <li className={hero.bbox}>
            <h2 className={hero.title1}>Nike Air Max 270 React</h2>
            <img className={hero.img1} src={img2} alt="" />
           <div className={hero.count_box}> 
           <button onClick={()=>{setcount2(count2 > 0 ? count2 - 1 : count2)}} className={hero.btn}>-</button>
            <p className={hero.count}>{count2}</p>
            <button  onClick={()=>{setcount2(count2 + 1)}}  className={hero.btn}>+</button>
            </div>
          </li>
          <li className={hero.bbox}>
            <h2 className={hero.title1}>Nike Air Max 270 React</h2>
            <img className={hero.img1} src={img3} alt="" />
           <div className={hero.count_box}> 
           <button onClick={()=>{setcount3(count3 > 0 ? count3 - 1 : count3)}} className={hero.btn}>-</button>
            <p className={hero.count}>{count3}</p>
            <button  onClick={()=>{setcount3(count3 + 1)}}  className={hero.btn}>+</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
export {HeroFunc}