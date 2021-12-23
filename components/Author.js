import { Divider } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { Component } from 'react';
import { GithubFilled, QqCircleFilled, WeiboCircleFilled, WechatOutlined } from '@ant-design/icons'
import sty from '../public/style/components/Author.module.css'

const Author = () => {
    return (
        <div className={sty.mainBody}>
            <div >
                { /* 直接用public下面的路径去访问*/}
                <Avatar size={150}
                    // src="http://localhost:3000/image/avator.JPG"
                    src='/image/avator.JPG'
                    style={{ justifyContent:'center', marginTop: '2rem' }}
                />
            </div>
            <Divider style={{ marginTop: '100px', color: '#2e5985', fontSize: '.3rem' }} > 社交方式 </Divider>
            <div className={sty.socialMedium}>
                <a href='https://github.com/wangjbo' >
                    <GithubFilled />
                </a>
                <QqCircleFilled />
                <WechatOutlined />
                <WeiboCircleFilled />
            </div>
        </div>
    )
}

export default Author;