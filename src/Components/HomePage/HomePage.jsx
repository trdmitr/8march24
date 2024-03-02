import React from 'react'
import classes from "./HomePage.module.css"
import { Link } from 'react-router-dom';


export const HomePage = () => {
    const imgUrl = "https://trv-axtuba.ru/wp-content/uploads/2024/02/23-fevralya.jpg"
    // const imgUrl2 = 'https://trv-axtuba.ru/wp-content/uploads/2024/02/23-fevralya.jpg'
    const imgAlt = "Каверы Подземки"
    
    // const frontAudio = "https://drive.google.com/uc?export=download&id=1-vJh40iIqi15VGpAAaqHJuiPZ6RA6HiI";
    // const imgTzi = "https://drive.google.com/uc?export=download&id=1gsY4lPUU4pJ07s0JwDBeJjUYddkAuSr3"
    return (
      <div className="device device-iphone-x">
          <div className="device-frame">
              <div className="device-content">

                  <div>
                      <span className={classes.navLink}>Поздравления девушек!</span>
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