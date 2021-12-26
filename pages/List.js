
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Button, Row, Col, List, Breadcrumb } from 'antd'
import Header from '../components/Header'
import { CalendarTwoTone, FolderOpenTwoTone, FireTwoTone } from '@ant-design/icons'
import sty from '../public/style/pages/list.module.css'
import Author from '../components/Author'
import MySkill from '../components/Myskills'
import Footer from '../components/Footer'
import axios from 'axios'
import servcePath from '../pages/api/apiUrl'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import marked from 'marked'
import Link from 'next/link'


const MyList = (list) => {
  const [myList, setMylist] = useState(list.data)
  // 这里的query.id可能是空
  const [nowItemId, setNowItemId] = useState(list.data[0].id)
  const setNowItem = ['全部文章', '刷题面经', '精彩生活', '联系我们']
  useEffect(() => {
    setMylist(list.data)
    setNowItemId(list.data[0].id)
  })
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });


  return (
    <>
      <Head>
        <title>王健博的个人博客</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div className={sty.breadDdiv}>
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item>{setNowItem[nowItemId - 1]}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <List
            // header={<div style={{ color: '#4D80E6' }}>欢迎来到我的博客</div>}
            itemLayout='vertical'
            dataSource={myList}
            renderItem={(item) => {
              return (
                <List.Item>
                  {/* 要给title设置可以跳转的连接，要全部沙墟页面，不用ajax，因为是不同的同级路由下的 */}
                  <div className={sty.listtitle}><Link href={{ pathname: '/Detailed', query: { id: item.id } }}>
                    <a>
                      {item.title}
                    </a>
                  </Link> </div>
                  <div className={sty.listicon}>
                    <span><CalendarTwoTone color />{item.addTime}</span>
                    <span><FolderOpenTwoTone color /> {item.typeName} </span>
                    <span><FireTwoTone color />{item.view_count}</span>
                  </div>
                  <div className={sty.listContext}
                    dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}
                  ></div>
                </List.Item>
              )
            }}
          />
          <Footer></Footer>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <MySkill />
        </Col>
      </Row>
    </>
  )
}

MyList.getInitialProps = async (context) => {
  let id = context.query.id
  console.log(id)
  const promise = new Promise((resolve) => {
    axios(servcePath.getArticleListById + id).then(
      (res) => {
        console.log(res.data)
        resolve(res.data)
      }
    )
  })
  return await promise
}


export default MyList

