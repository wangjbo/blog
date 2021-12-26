import React from 'react';
import 'antd/dist/antd.css';
import sty from '../public/style/components/header.module.css'
import { Menu, Row, Col, } from 'antd';
import { CoffeeOutlined, HomeOutlined, TagsOutlined, BulbOutlined} from '@ant-design/icons';
import Link from 'next/link'
import Router from 'next/router';


class Header extends React.Component {
    state = {
        current: 'mail',
    };



    render() {
        const { current } = this.state;
        return (
            <div className={sty.header}>
                <Row type="flex" justify='center' >
                    <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                        <a href='/'>
                            <span className={sty.headerlogo}>王健博</span>
                        </a>
                        <span className={sty.headertxt}>大龄双非渣硕的个人空间</span>
                    </Col>
                    <Col xs={0} sm={0} md={14} lg={8} xl={8}>
                        <Menu className={sty.menu} mode='horizontal'>
                            <Menu.Item className={sty.menuitem} onClick={() => {
                                Router.push('/List?id=1')
                            }} key="index" icon={<HomeOutlined />} id={sty.juzhong}>
                                个人主页
                            </Menu.Item>
                            <Menu.Item className={sty.menuitem} onClick={() => {
                                Router.push('/List?id=2')
                            }} key="interviewLeetcode" icon={<BulbOutlined />} id={sty.juzhong}>
                                刷题面经
                            </Menu.Item>
                            <Menu.Item className={sty.menuitem} onClick={() => {
                                Router.push('/List?id=3')
                            }}  key="dailyLife" icon={<CoffeeOutlined />} >
                                精彩生活
                            </Menu.Item>
                            <Menu.Item className={sty.menuitem} onClick={() => {
                                Router.push('/List?id=4')
                            }}  key="contact" icon={<TagsOutlined />} >
                                项目实战
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        );
    }
    handleClick(id) {
    }
}

export default Header