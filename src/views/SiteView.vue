<template>
  <div class="container">
    <div class="title">智能位置选择</div>
    <div class="box-1">
      <div class="header">
        <p>地理位置</p>
      </div>
      <img
        src="https://img1.baidu.com/it/u=2733763745,331532563&fm=253&fmt=auto&app=138&f=JPEG?w=828&h=500"
        alt=""
      />
    </div>
    <div class="box-1">
      <div class="header">
        <p>地理位置</p>
      </div>
      <el-slider v-model="value1" />
      <div class="header">
        <p>登陆位置</p>
      </div>
      
      <el-slider v-model="value2" />
      <div class="header">
        <p>资源装备</p>
      </div>
      <div class="select">
        <div class="item" v-for="item in list">
          <input type="checkbox">
          <label for="">{{ item.label }}</label>
        </div>
      </div>
      <div class="header">
        <p>其他控制</p>
      </div>
      <el-slider v-model="value3" />
      <p>位置：200米</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const value1 = ref(0);
const value2 = ref(50);
const value3 = ref(100);
const list=ref([
 {
  label:"水"
 },{
  label:"帐篷"
 }
 ,{
  label:"小刀"
 }

])
</script>

<style lang="scss" scoped>
.container {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  .title {
    font-size: 30px;
    font-weight: bold;
    align-self: center;
  }
  .box-1{
    display: flex;
    flex-direction: column;
    gap: 15px;
    img{
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 15px
    }
    .select{
      display: flex;
      gap: 15px;
      .item{
        display: flex;
      gap: 15px;
      }
    }
  }
}
</style>
