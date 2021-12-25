import React from 'react';
import 'antd/dist/antd.css';
import sty from '../public/style/components/header.module.css'
import { Menu, Row, Col, } from 'antd';
import { MailOutlined, CoffeeOutlined, HomeOutlined, BulbOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;

class Header extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
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
                            <Menu.Item className={sty.menuitem} key="index" icon={<HomeOutlined />} id={sty.juzhong}>
                                个人主页
                            </Menu.Item>
                            <Menu.Item className={sty.menuitem} key="interviewLeetcode" icon={<BulbOutlined />} id={sty.juzhong}>
                                刷题面经
                            </Menu.Item>
                            <Menu.Item className={sty.menuitem} key="dailyLife" icon={<CoffeeOutlined />} >
                                精彩生活
                            </Menu.Item>
                            <Menu.Item className={sty.menuitem} key="contact" icon={<MailOutlined />} >
                                联系我们
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header