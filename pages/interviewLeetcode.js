
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button, Row, Col, List } from 'antd'
import Header from '../components/Header'
import {CalendarTwoTone ,FolderOpenTwoTone,FireTwoTone} from '@ant-design/icons'
import  sty from '../public/style/pages/index.module.css'
import Author from '../components/Author'
import MySkill from '../components/Myskills'
import Footer from '../components/Footer'
import axios from 'axios'
import servcePath from './api/apiUrl'


const Home = (list) => {
  const [myList,setMyList] = useState(list.data)
  console.log(list.data);
  return (
    <>
      <Head>
        <title>王健博的个人博客</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <List 
            header={<div style={{color:'#4D80E6'}}>刷题面经</div>}
            itemLayout='vertical'
            dataSource={myList}
            renderItem={(item) => {
                return (
                  <List.Item>
                    <Link href={{pathname:'/Detailed',query:{id:item.id}}}>
                      <a>
                        <div className={sty.listtitle}>{item.title}</div>
                      </a>
                    </Link>
                    <div className={sty.listicon}>
                      <span><CalendarTwoTone  color/> {item.addTime}  </span>
                      <span><FolderOpenTwoTone  color/> {item.typeName} </span>
                      <span><FireTwoTone color/>{item.view_count}</span>
                    </div>
                    <div className={sty.listcontext}>{item.introduce}</div>
                  </List.Item>
                ) 
            } }
          />
          <Footer></Footer>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          {/* 右侧介绍作者，做成一个单独的组件，更便于复用 */}
          <Author />
          <MySkill/>
        </Col>
      </Row>
    </>
  )
}


Home.getInitialProps = async()=>{
    const promise = new Promise((resolve) => {
        axios(servcePath.getArticleList).then(
          (res) => {
              resolve(res.data)  
          }
        )
    })
    return await promise
}

export default Home

