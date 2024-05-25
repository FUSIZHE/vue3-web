<template>
  <div class="containers">
    <div class="left">
      <div class="user">
        <div class="img">
          <img
            src="https://img0.baidu.com/it/u=178612712,36487532&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            alt=""
          />
        </div>
        <div class="info">
          <p>用户数据</p>
          <p class="subtitle">一行征雁向南飞</p>
          <div class="other">
            <div class="item">
              <p class="num">0</p>
              <p class="title">粉丝</p>
            </div>
            <div class="item">
              <p class="num">10</p>
              <p class="title">关注</p>
            </div>
            <div class="item">
              <p class="num">200</p>
              <p class="title">分享</p>
            </div>
          </div>
        </div>
      </div>
      <div class="statistics">
        <div class="item">
          <div class="top">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiaoxi1"></use>
            </svg>
          </div>
          <div class="bottom">
            <p>编辑数</p>
            <p>3</p>
          </div>
        </div>
        <div class="item">
          <div class="top">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-QQ"></use>
            </svg>
          </div>
          <div class="bottom">
            <p>编辑数</p>
            <p>3</p>
          </div>
        </div>
        <div class="item">
          <div class="top">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jiaose"></use>
            </svg>
          </div>
          <div class="bottom">
            <p>编辑数</p>
            <p>3</p>
          </div>
        </div>
      </div>
      <div class="accomp">
        <div class="item">
          <div class="left">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiaoxi"></use>
            </svg>
          </div>
          <div class="right">
            <p>数据探索</p>
            <div class="line">
              <p class="inner"></p>
            </div>
            <p class="more">探索更多数据</p>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gengduo"></use>
            </svg>
          </div>
          <div class="right">
            <p>数据探索</p>
            <div class="line">
              <p class="inner"></p>
            </div>
            <p>探索更多数据</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="box-1">
        <div class="header">编辑信息</div>
        <div class="info">
          <div class="list">
            <div class="item">
              <p>数据管理</p>
              <svg class="icon icon-1" aria-hidden="true">
                <use xlink:href="#icon-daipingjia"></use>
              </svg>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shanchu1"></use>
              </svg>
            </div>
            <div class="item">
              <p>数据管理</p>
              <svg class="icon icon-1" aria-hidden="true">
                <use xlink:href="#icon-daipingjia"></use>
              </svg>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shanchu1"></use>
              </svg>
            </div>
          </div>
          <div class="opt">编辑信息</div>
        </div>
      </div>
      <div class="box-1">
        <div class="header">编辑信息</div>
        <div class="info">
          <div class="list">
            <div class="item">
              <p>数据管理</p>
              <svg class="icon icon-1" aria-hidden="true">
                <use xlink:href="#icon-daipingjia"></use>
              </svg>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shanchu1"></use>
              </svg>
            </div>
            <div class="item">
              <p>数据管理</p>
              <svg class="icon icon-1" aria-hidden="true">
                <use xlink:href="#icon-daipingjia"></use>
              </svg>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shanchu1"></use>
              </svg>
            </div>
          </div>
          <div class="opt">编辑信息</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.containers {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 40px;
  .left {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 55px;
    .user {
      display: flex;
      align-items: center;
      gap: 10px;
      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        gap: 15px;
        .subtitle {
          font-size: 15px;
          color: #818181;
        }
        .other {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background-color: rgb(241, 241, 241);
          place-items: center;
          width: 100%;
          border-radius: 15px;
          .item {
            padding: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
    .statistics {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 200px;
      gap: 15px;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        border-radius: 20px;
        padding: 8px;
        background-color: rgb(241, 241, 241);
        .top {
          padding: 10px;
          width: 100%;
          height: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgb(227, 240, 225);
          svg {
            width: 30px;
            height: 30px;
          }
        }
        .bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
    .accomp {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .item {
        display: flex;
        background-color: rgb(241, 241, 241);
        padding: 5px;
        gap: 15px;
        align-items: center;
        border-radius: 10px;
        height: 150px;
        .left {
          background-color: rgb(227, 240, 225);
          width: 180px;
          height: 100%;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          svg {
            width: 30px;
            height: 30px;
          }
        }
        .right {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
          .more {
            color: #818181;
            font-size: 12px;
          }
        }
      }
    }
  }
  .right {
    display: flex;
      flex-direction: column;
      gap: 15px;
    .box-1 {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .info {
        display: flex;
          flex-direction: column;
          gap: 25px;
          background-color: rgb(241,241,241);
          padding: 15px;
          border-radius: 15px;
        .list {
          display: flex;
          flex-direction: column;
          gap: 25px;
          .item {
            display: flex;
            gap: 20px;
            svg {
              width: 20px;
              height: 20px;
            }
            .icon-1 {
              margin-left: auto;
            }
          }
        }
        .opt{
          background-color: #ecf5ff;
          color: #409eff;
          padding: 7px 13px;
          width:fit-content;
        }
      }
    }
  }
}
</style>
