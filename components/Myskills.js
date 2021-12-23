import React, { Component } from 'react';
import sty from '../public/style/components/Myskills.module.css'
import { Divider } from 'antd';


const MySkill=() => {
    return(
        <div className={sty.main}>
            {/* <Divider className={sty.js}>技术栈</Divider> */}
            <Divider style={{ paddingTop:'1rem',  color: '#2e5985', fontSize: '.3rem' }} > 技术栈 </Divider>
            <div>react + redux + antd </div>
            <div>react Hookers + nextJs</div>
            <div>Vue + Vuex</div>
            <div>Node.js + mysql</div>
            <div></div>
        </div>
    )
}

export default MySkill