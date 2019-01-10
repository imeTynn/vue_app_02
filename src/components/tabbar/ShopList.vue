<template>
   <div class="app-cart">
			<div class="mui-card">
				<div class="mui-card-header">
           <h3>购物车列表</h3>
        </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
             <!--商品项目 start-->
  <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="">
						<div class="mui-media-body">
							  {{item.name}}
							<p class='mui-ellipsis'>
                 {{item.price}}
               	<div class="mui-numbox">
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="cartSub" :data-id="item.id">-</button>
					<input class="mui-input-numbox" type="number" :value="item.count"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button"
          @click="cartAdd" :data-id="item.id">+</button>
				</div>
        </div>
       </p>
					</a>
				</li>
         </ul>
             <!--商品项目 end-->
					</div>
				</div>
				<div class="mui-card-footer">
           小计:0.00
        </div>
        </div>
   </div>  
</template>
<script>
   //练习1:创建元素
   //练习2:发送请求获取购物车列表中数据
   //练习3:小计
  export default {
    created() {
      this.getList();
    },
    data(){
      return {
        list:[]
      }
    },
    methods:{
      updateItemCount(id,count){
        //同步购物车中数量
        //id    购物车id
        //count 购物车中数量
        var url = "http://127.0.0.1:3000/";
        url+="updateCart?id="+id;
        url+="&count="+count;
        this.axios.get(url).then(result=>{
            console.log(result);
        });
      },
      cartSub(e){
        var id = e.target.dataset.id;
        for(var item of this.list){
           if(item.id == id && item.count > 1){
             item.count--;
             //同步数据
             this.updateItemCount(item.id,item.count);
             break;
           }
        }
      },
      //练习1：数量加判断不能小于1
      //练习2: 购物车数量同步操作 2->3 3
      cartAdd(e){
        //1:获取当前按钮绑定购物车id
        var id = e.target.dataset.id
        //2:创建循环购物车数组内容
        for(var item of this.list){
        //3:判断当前元素id是否与元素id
          if(item.id == id){
            //4:修改数据
            item.count++;
            //同步数据 40
            this.updateItemCount(item.id,item.count)
            break;
          }
        }
      },
      getList(){
        var url = "http://127.0.0.1:3000/";
        url +="getCartList";
        this.axios.get(url).then(result=>{
          //console.log(result);
          this.list = result.data.data
        })
      }
    }
  }  
</script>
<style> 
</style>