import React, { useEffect, useState } from 'react'
import './MainBanner.css'
import BannerImage from '../asset/BannerImage.png'
import { LocalPhone } from '@mui/icons-material'
import BannerMan from '../asset/bannerMan.png'
import BannerImageMobile from '../asset/BannerImageMobile.png'

export default function MainBanner() {
    const [bg,setBg] = useState(BannerImage)
    useEffect(() => {
        if(window.innerWidth < 500){
            setBg(BannerImageMobile)
        }
    },[])
    return (
        <div className="main-banner-container" style={{ backgroundImage: `url(${bg})` }}>
            <div className="content-section">
                <div className="banner-content-card">
                    <h1>Ritz Floor and Decore</h1>
                    <h3>Give an exotic look to your home</h3>
                    <h2>45690 YALE RD, Chilliwack, BC, Canada V2P2N3</h2>
                    <div className="Btn-row">
                        <span>
                            <LocalPhone />
                        </span>
                        <a href="tel:+ 604-702-2233">+ 604-702-2233</a>
                    </div>
                    <a
                        href="mailto:ritzfloor@gmail.com"
                        className="banner-email"
                    >
                        Email : ritzfloor@gmail.com
                    </a>
                </div>
            </div>

            <div className="image-section">
                <img src={BannerMan} alt="" />
            </div>
        </div>
    )
}