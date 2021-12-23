import React, { Component } from 'react';
import sty from '../public/style/components/Footer.module.css'

const Footer = () => {
    return (
        <div className={sty.footer}>
            <div>本系统由 React + Antd + EggJs 驱动</div>
        </div>
    )
}

export default Footer