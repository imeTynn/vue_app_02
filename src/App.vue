<!--App.vue-->
<template>
 <div class="app-container">
    <!--1:顶部导航栏-->
    <mt-header fixed title="商城"></mt-header>
    <!--2:router-view-->
    <router-view>
    </router-view>
    <!--3:tabbar-->
         	<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<router-link to="/Login" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/ShopList" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
         <span class="mui-badge">0</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">
        搜索</span>
			</a>
		</nav>
 </div>
</template>

<style>
/*App.vue 顶部和底部导航栏*/
.app-container{
   padding-top:40px;
   padding-bottom:50px;
   overflow-x:hidden;
}

 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>
