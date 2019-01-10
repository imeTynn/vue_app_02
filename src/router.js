import Vue from 'vue'
import Router from 'vue-router'
import testContainer from "./components/testContainer.vue"
import Home from "./components/tabbar/Home.vue"
import NewsList from "./components/home/NewsList.vue"
import NewsInfo from "./components/home/NewsInfo.vue"
import goodsList from "./components/goods/GoodsList.vue"
import goodsInfo from  "./components/goods/GoodsInfo.vue"
import Register from  "./components/tabbar/Register.vue"
import Login from "./components/tabbar/Login.vue"
import ShopList from "./components/tabbar/ShopList.vue"
Vue.use(Router)
export default new Router({
  routes: [
    /*用户访问 / 重新定位 /Home Home显示*/
    {path:'/Register',component:Register},
    {path:'/',redirect:"/Home"},
    {path:'/test',component:testContainer},
    {path:'/Home',component:Home},
    {path:'/NewsList',component:NewsList},
    {path:"/NewsInfo",component:NewsInfo},
    {path:"/GoodsList",component:goodsList},
    {path:"/GoodsInfo/:id",component:goodsInfo},
    {path:"/Login",component:Login},
    {path:"/ShopList",component:ShopList}
  ]
})
