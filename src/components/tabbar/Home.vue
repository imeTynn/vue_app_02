<template>
  <div class="app-home">
     <!--第一个：顶部导航条 学子商城-->

     <!--第二个：轮播图-->
     <mt-swipe :auto="2500">
        <mt-swipe-item v-for="item in list" :key="item.id">
            <img :src="item.img_url" />
        </mt-swipe-item>
     </mt-swipe>
     <!--第三个：九宫格-->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/NewsList">
		<img src="../../img/menu1.png" />
		            <div class="mui-media-body">
                 新闻资讯</div>
                 </router-link>
                </li>


		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/GoodsList">
                        <img src="../../img/menu2.png" />
		                    <div class="mui-media-body">
                        商品</div>
                 </router-link>
                 </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/ShopList">
		                    <img src="../../img/menu3.png" />
		                    <div class="mui-media-body">
                        购物车</div>
                 </router-link>
                 </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu4.png" />
		                    <div class="mui-media-body">
                        支付</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../img/menu5.png" />
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu6.png" />
		                    <div class="mui-media-body">Phone</div></a></li>
		        </ul>
     <!--第四个：底部导航栏tabbar-->
  </div>  
</template>
<script>
 export default {
   created() {
      //当组件对象创建成功后即可发送ajax请求
      this.getImages();
   },
   methods:{
     getImages(){
       //完成一个功能,获取服务器端轮播图片
       //1:发送ajax请求
       var url = "http://127.0.0.1:3000/getImages";
       this.axios.get(url).then(result=>{
         this.list = result.data;
       })
       //2:获取返回数据保存list
     }
   },
   data(){
     return {
       list:[]
     }
   }
 }  
</script>
<style>
/*轮播图设置父元素高度*/
.app-home .mint-swipe{
  height:200px;
}
.app-home .mint-swipe img{
  width:100%;
}
/*九宫格 图片大小 dpr 2*/
.app-home .mui-grid-9 img{
  width:60px;
  height:60px;
}
/*九宫格  背景白色*/
.app-home .mui-grid-view.mui-grid-9{
  background-color:#fff;
}
.app-home .mui-grid-view.mui-grid-9 li{
  border:0;
}
</style>