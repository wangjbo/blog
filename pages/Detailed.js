
import React, { useState } from 'react'
import Head from 'next/head'
import { Button, Row, Col, List, Breadcrumb, Divider, Affix } from 'antd'
import Header from '../components/Header'
import { CalendarTwoTone, FolderOpenTwoTone, FireTwoTone } from '@ant-design/icons'
import sty from '../public/style/pages/detailed.module.css'
import Author from '../components/Author'
import MySkill from '../components/Myskills'
import Footer from '../components/Footer'
import ReactMarkdown from 'react-markdown'
import MarkdownNavbar from 'markdown-navbar'
import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css';


const Detailed = (props) => {
  console.log(props)
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

  let html = marked(props.content)

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
              <Breadcrumb.Item><a href='/List'>博文列表</a> </Breadcrumb.Item>
              <Breadcrumb.Item>xxxx文章标题 </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className={sty.title}>王健博的第一篇博客</div>
          <div className={sty.listicon}>
            <span><CalendarTwoTone color /> 2021-12-23</span>
            <span><FolderOpenTwoTone color /> html</span>
            <span><FireTwoTone color />10000</span>
          </div>
          <div dangerouslySetInnerHTML={{__html:html}}>

          </div>
          <Footer></Footer>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          {/* <Author /> */}
          <Affix offsetTop={50}>
            <div className={sty.navigation}>
              <div className={sty.navTitle}>文章目录</div>
              <Divider></Divider>
              <MarkdownNavbar
                source={html}
                ordered={false}
                className={sty.navContent}
              />
              <div className={sty.navDiv}></div>
            </div>
          </Affix>
        </Col>
      </Row>
    </>
  )
}
Detailed.getInitialProps = async (context) => {
  console.log(context.query.id)
  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/default/getArticleById/' + id).then(
      (res) => {
        console.log(res)
        resolve(res.data.data[0])
      }
    )
  })

  return await promise
}

export default Detailed

