<!--src/components/sub/comment.vue-->
<template>
   <div class="app-comment">
        <h3>评论子组件</h3>
        <!--发表评论区域-->
        <textarea placeholder="请吐槽最多120个字" maxlength="120" v-model="msg"></textarea>
        <mt-button size="large" @click="addComment">发表评论</mt-button>
        <!--显示评论区域 comment.vue-->
        <div class="cmt-list">
          <div class="cmt-item" v-for="(item,i) in list" :key="item.id">
           第 {{i+1}} 楼:发表时间{{item.ctime | datetimeFilter}}
           <div class="cmt-body">
               {{item.content}}
           </div>
          </div>
        </div>
        <mt-button size="large" @click="getMore">加载更多</mt-button>
   </div>
</template>
<script>
 //独立引入mintui库中一个组件
 import {Toast} from "mint-ui"

 export default {
   data(){
     return {
       msg:"",
       pageIndex:0,   //当前页码
       pageSize:7,    //页大小
       pageCount:1,   //总页数
       list:[]        //当前页内容
     }
   },
   methods:{
     getMore(){
       //1:获取新闻编号 nid pno pageSize
       //2:当前页码自增
       var nid = this.id;
       this.pageIndex++;
       var pno = this.pageIndex;
       var ps = this.pageSize;
       //3:创建变量 url
       var url = "http://127.0.0.1:3000";
       url +="/getComments?pno="+pno;
       url +="&nid="+nid+"&pageSize="+ps;
       //4:发送ajax请求
       this.axios.get(url).then(result=>{
          //5:获取返回数据 追加
          var rows = this.list.concat(result.data.data);
          this.list = rows;
       })
      
     },
     addComment(){
        //1:获取二个参数nid content
        var nid = this.id;      //获取新闻编号
        var content = this.msg; //获取评论内容
        var size = content.trim().length;//内容长度
        if(size == 0){          //如果长度为0
          Toast("评论内容不能为空");//显示消息
          return;
        }
        //2:发送ajax请求
        var url = "http://127.0.0.1:3000/addComment";
            url+= "?nid="+nid+"&content="+content;
        //3:接收返回数据
        this.axios.get(url).then(result=>{
              if(result.data.code == 1){
                Toast(result.data.msg);
                this.msg = ""; //清空发表内容
                //获取最新评论结果分页
                //comment.vue
                this.list = [];    //清空原数据
                this.pageIndex = 0;//清空页码
                this.getMore();    //加载更多
              }else{
                Toast(result.data.msg);
              }
        });
        //4:Toast()
     }
   },
   props:["id"],
   created() {
       //console.log(this.id);
       this.getMore();
   },
 }
</script>
<style>
   .app-comment h3{
     font-size:18px;
   }
   .app-comment textarea{   /*发表评论区域*/
     font-size:14px;
     height:60px;           /*评论区域高度*/
     margin:0;
   }
   /*评论列表*/
   .app-comment .cmt-list{
     margin:5px 0;
   }
   .app-comment .cmt-list .cmt-item{
     border:1px solid #aaa;
     margin-top:15px;
   }
</style>
