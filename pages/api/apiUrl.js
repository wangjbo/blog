 let ipUrl = 'http://127.0.0.1:7001/default/'

 let servcePath = {
    getArticleById:ipUrl+'getArticleById/', // 博客首页的服务端接口
    getArticleList:ipUrl+'getArticleList/', // 文章的详细页
    getArticleListById:ipUrl+'getArticleListById/', // 文章分类获取的服务端接口 
}

 export default servcePath;