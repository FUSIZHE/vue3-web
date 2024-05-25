<template>
  <div class="container">
    <div class="header">
      <p>推荐</p>
    </div>
    <div class="input">
      <input type="text" placeholder="快来搜索吧~" />
    </div>
    <div class="content">
      <div class="left">
        <div class="item-1">
          <div class="header">最新速递</div>
          <div class="list">
            <img v-for="item in imgList" :src="item" alt="" />
          </div>
        </div>
        <div class="item-2">
          <div class="header">标签</div>
          <div class="list">
            <p v-for="item in tagList">{{ item }}</p>
          </div>
        </div>
        <div class="item-3">
          <div class="header">交互式地图操作</div>
          <div class="list">
            <div class="item" v-for="item in optList">
              <img :src="item.imgSrc" alt="" />
              <p>{{ item.title }}</p>
            </div>
          </div>
        </div>
        <div class="item-4">
          <div class="list">
            <div class="item" v-for="item in commendList">
              <img :src="item.imgSrc" alt="" />
              <p class="title">{{ item.title }}</p>
              <p class="desc">{{ item.desc }}</p>
              <div class="btn">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-weixin"></use>
                </svg>
                <p>{{ item.likeCount }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="list">
          <div class="item" v-for="item in commendList_2">
           <p class="more">...</p>
            <img :src="item.imgSrc" alt="" />
            <p class="title">{{ item.title }}</p>
            <p class="desc">{{ item.desc }}</p>
            <div class="btn">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin"></use>
              </svg>
              <p>{{ item.likeCount }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const imgList = ref([
  "https://img0.baidu.com/it/u=151543960,287440438&fm=253&fmt=auto&app=120&f=JPEG?w=1099&h=618",
  "https://img0.baidu.com/it/u=2172527057,2694714744&fm=253&fmt=auto&app=138&f=JPEG?w=496&h=279",
  "https://img1.baidu.com/it/u=3234854213,2504394495&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=327",
  "https://img0.baidu.com/it/u=3866039541,3946049422&fm=253&fmt=auto&app=138&f=PNG?w=282&h=500",
]);
const tagList = ref(["地图", "区域", "美食", "推荐", "搜索", "附近"]);
const optList = ref([
  {
    imgSrc:
      "https://img2.baidu.com/it/u=3104884569,397032763&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
    title: "虚拟地图",
  },
  {
    imgSrc:
      "https://img2.baidu.com/it/u=3104884569,397032763&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
    title: "全检地图",
  },
  {
    imgSrc:
      "https://img0.baidu.com/it/u=3032158670,229293163&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1084",
    title: "3D地图",
  },
]);
const commendList = ref([
  {
    imgSrc:
      "https://img2.baidu.com/it/u=1402292373,3484449590&fm=253&fmt=auto&app=138&f=JPEG?w=630&h=354",
    title: "热点地图",
    desc: "人口聚集地图",
    likeCount: 20,
  },
  {
    imgSrc:
      "https://img0.baidu.com/it/u=3885633357,2837796719&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1056",
    title: "热点地图",
    desc: "人口聚集地图",
    likeCount: 20,
  },
]);
const commendList_2 = ref([
  {
    imgSrc:
      "https://img0.baidu.com/it/u=3032158670,229293163&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1084",
    title: "热点地图",
    desc: "人口聚集地图",
    likeCount: 20,
  },
  {
    imgSrc:
      "https://img2.baidu.com/it/u=2880700027,3273805978&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=450",
    title: "热点地图",
    desc: "人口聚集地图",
    likeCount: 20,
  },
  {
    imgSrc:
      "https://img1.baidu.com/it/u=3556758140,3230575870&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375",
    title: "热点地图",
    desc: "人口聚集地图",
    likeCount: 20,
  },
  {
    imgSrc:
      "https://img2.baidu.com/it/u=2565525785,445629306&fm=253&fmt=auto&app=138&f=JPEG?w=783&h=500",
    title: "热点地图",
    desc: "人口聚集地图",
    likeCount: 20,
  },
]);
</script>

<style lang="scss" scoped>
.container {
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  .header {
    font-size: 18px;
  }
  .input {
    input[type="text"] {
      all: unset;
      background-color: rgb(241, 241, 241);
      width: 800px;
      padding: 10px 15px;
      border-radius: 10px;
    }
  }
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;

    .left {
      background-color: rgb(240, 240, 240);
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      overflow: hidden;
      padding: 20px;
      .item-1 {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .header {
          color: #818181;
          font-size: 15px;
        }
        .list {
          width: 100%;
          display: grid;
          gap: 15px;
          grid-template-columns: repeat(4, 1fr);
          img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 20px;
          }
        }
      }
      .item-2 {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .header {
          color: #818181;
          font-size: 15px;
        }
        .list {
          width: 100%;
          /* display: grid; */
          display: flex;
          gap: 15px;
          /* grid-template-columns: repeat(5,1fr); */
          p {
            padding: 7px 13px;
            background-color: black;
            color: white;
            border-radius: 20px;
            width: fit-content;
          }
        }
      }
      .item-3 {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .header {
          color: #818181;
          font-size: 15px;
        }
        .list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
          .item {
            display: flex;
            align-items: center;
            gap: 15px;
            img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              object-fit: cover;
            }
          }
        }
      }
      .item-4 {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .header {
          color: #818181;
          font-size: 15px;
        }
        .list {
          width: 100%;
          display: grid;
          gap: 15px;
          grid-template-columns: repeat(2, 1fr);
          .item {
            width: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            gap: 10px;
            img {
              width: 100%;
              height: 300px;
              border-radius: 0 0 20px 20px;
            }
            .title {
              font-weight: bold;
              padding: 0 10px;
            }
            .desc {
              padding: 0 10px;
            }
            .btn {
              display: flex;
              justify-content: end;
              gap: 10px;
              padding: 0 10px;
              svg {
                width: 20px;
                height: 20px;
              }
            }
          }
        }
      }
    }
    .right {
     
      display: grid;
      /* grid-template-columns: repeat(2,1fr); */
      gap: 15px;
      /* grid-template-rows: repeat(2, 1fr); */

      .list {
        width: 100%;
        display: grid;
        gap: 25px;
        grid-template-columns: repeat(2, 1fr);
        .item {
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 20px;
          background-color: rgb(240, 240, 240);
border-radius: 20px;
          .more{
            align-self: flex-end;
          }
          img {
            width: 100%;
            height: 300px;
            border-radius:20px;
          }
          .title {
            font-weight: bold;
            padding: 0 10px;
          }
          .desc {
            padding: 0 10px;
          }
          .btn {
            display: flex;
            justify-content: end;
            gap: 10px;
            padding: 0 10px;
            svg {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
