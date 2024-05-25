<template>
  <div class="container">
<div class="title">
  <p>定制服务</p>
</div>
<div class="subtitle">
  <p>个性化推荐</p>
  <p>优秀案例</p>
  <p>最近上新</p>
</div>
<div class="box-1">
  <div class="header">
    推荐选择
  </div>
  <div class="list">
    <div class="item" v-for="item in list">
    <img :src="item.imgSrc" alt="">
    <p class="title">{{ item.title }}</p>
     <p class="address">{{ item.address }}</p>
     <p class="opt">了解更多</p>
    </div>
  </div>
</div>

  </div>
</template>

<script setup>
import {ref} from 'vue'
const list=[
  {
    imgSrc:"https://img2.baidu.com/it/u=1762657131,1457713426&fm=253&fmt=auto&app=120&f=JPEG?w=530&h=500",
    title:"我不是劳大~",
    address:"洛圣都机场",
  },
  {
    imgSrc:"https://img1.baidu.com/it/u=1059271048,1373732366&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    title:"我不是劳大~",
    address:"洛圣都机场",
  },
  {
    imgSrc:"https://img2.baidu.com/it/u=48141882,438056141&fm=253&fmt=auto&app=120&f=JPEG?w=522&h=500",
    title:"我不是劳大~",
    address:"洛圣都机场",
  },
  {
    imgSrc:"https://img0.baidu.com/it/u=1262865288,3645187226&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    title:"我不是劳大~",
    address:"洛圣都机场",
  },
  {
    imgSrc:"https://img1.baidu.com/it/u=1800407563,3528854985&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
    title:"我不是劳大~",
    address:"洛圣都机场",
  },
  {
    imgSrc:"https://img0.baidu.com/it/u=4248907023,3474032383&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=380",
    title:"我不是劳大~",
    address:"洛圣都机场",
  },
]
const dateList=ref([
  "9:00",
  "9:00",
  "19:00",
  "9:00",
  "19:00",
  "9:00",
  "19:00",
  "9:00",
  "19:00",
  "9:00",
])
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 40px;
  .title{
    align-self: center;
    font-size: 30px;
    font-weight: bold;

  }
  .subtitle{
    display: flex;
    gap: 15px;
    color: #818181;
  }
  .box-1{
    display: flex;
  flex-direction: column;
  gap: 15px;
  .header{
    font-size: 20px;
    font-weight: bold;

  }
  .list{
 display: grid;
 grid-template-columns: repeat(3,1fr);
 gap: 15px;
    .item{
     width: 100%;
      padding: 15px;
      display: flex;
  flex-direction: column;
  gap: 10px;
  /* align-items: center; */
  background-color: rgb(241,241,241);
  img{
    /* align-self: center; */
    width: 200px;
    height: 150px;
    object-fit: cover;
    border-radius: 15px;
  }
  .title{
    align-self: self-start;
    font-weight: 500;
    font-size: 15px;
  }
  .address{
    font-size: 13px;
    color: #818181;
  }
  .opt{
    background-color: rgb(0,0,255);
    color: white;
    width: 50%;
    padding: 5px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
  }
    }
  }
  }
  .box-2{
    display: flex;
  flex-direction: column;
  gap: 15px;
  .header{
    font-size: 20px;
    font-weight: bold;

  }
  .date{
    display: grid;
    grid-template-columns: repeat(7,1fr);
    gap: 15px;
  }
  .list{
    display: grid;
    grid-template-columns: repeat(7,1fr);
    gap: 15px;
    .item{
      background-color: #fdf6ec;
      color: #e6a23c;
      padding: 7px 13px
    }
  }
}
.box-3{
    display: flex;
  flex-direction: column;
  gap: 15px;
  .header{
    font-size: 20px;
    font-weight: bold;

  }
}
  
}
</style>