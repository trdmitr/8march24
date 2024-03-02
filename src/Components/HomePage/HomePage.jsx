import React from 'react'
import classes from "./HomePage.module.css"
import { Link } from 'react-router-dom';


export const HomePage = () => {
    const imgUrl = "https://sun9-38.userapi.com/impg/aG4rTmMa0sKD5SefYkinhGpOAbYqyGIi9js1fg/fCY6QR2_AAU.jpg?size=768x1152&quality=96&sign=570e29395de39a9bb08f60395d72796d&type=album"
    // const imgUrl2 = 'https://trv-axtuba.ru/wp-content/uploads/2024/02/23-fevralya.jpg'
    const imgAlt = "Каверы Подземки"
    
    // const frontAudio = "https://drive.google.com/uc?export=download&id=1-vJh40iIqi15VGpAAaqHJuiPZ6RA6HiI";
    // const imgTzi = "https://drive.google.com/uc?export=download&id=1gsY4lPUU4pJ07s0JwDBeJjUYddkAuSr3"
    return (
      <div className="device device-iphone-x">
          <div className="device-frame">
              <div className="device-content">

                  <div>
                      <span className={classes.navLink}>Парни поздравляют с 8 марта 2024!</span>
                      {/* <Link to="/cavers21"  className={classes.navLink21}>2021</Link>
                      <Link to="/cavers22"  className={classes.navLink22}>2022</Link> */}
                      <Link to="/cavers23"  className={classes.navLink23}>Слушаем!</Link>
      
                     {/* <Link to={`/cavers21`} className={classes.navLink21}>Слушаем!</Link> */}
                      {/* <Link to={`/cavers${yearTrib22}`} className={classes.navLink22}>2022</Link>
                      <Link to={`/cavers${yearTrib23}`} className={classes.navLink23}>2023</Link> */}
                      <div className={classes.main}>
                      
                          {/* <div className={classes.article}><p >С НОВЫМ 2024 ГОДОМ!</p></div> */}
                          <div className={classes.article}><img fetchpriority="high" role="presentation"  src={imgUrl} width={100} alt={imgAlt} /></div>
                          {/* <p className={classes.nameAudio}>Медоманы. Время Луны</p> */}
                          {/* <audio controls 
          src={frontAudio} type="audio/mpeg" /> */}
      
                          {/* <div className={classes.article}><img fetchpriority="high" role="presentation"  src={imgUrl2} width={100} alt={imgAlt} /></div> */}
                      </div>
                  </div>
              </div>
          </div>
          <div className="device-stripe"></div>
          <div className="device-header">
              <div className="device-sensors"></div>
          </div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
      </div>
  )
}