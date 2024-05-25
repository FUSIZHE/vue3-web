<template>
  <div class="container">
    <div class="title">智能位置选择</div>
    <div class="chart">
      <div class="header">位置智能分析</div>
      <div class="desc">
        <div class="left">
          <div class="box-1">
            <div class="item">
              <div class="top">
                <p>环境</p>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-weixin"></use>
                </svg>
              </div>
              <div class="center">来源</div>
              <div class="opt" @click="handleRouter('/selection')">导出报表</div>
            </div>
            <div class="item">
              <div class="top">
                <p>环境</p>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-weixin"></use>
                </svg>
              </div>
              <div class="center">来源</div>
              <div class="opt"  @click="handleRouter('/selection')">导出报表</div>
            </div>
          </div>
          <div class="box-2">
            <div class="content-3" ref="chartRef_3"></div>
          </div>
          <div class="box-3">
            <div class="header">
              <p>任务分类</p>
              <p>探索</p>
            </div>
            <div class="list">
              <div class="item" v-for="item in list">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="item.icon"></use>
                </svg>
                <p>{{ item.title }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="content-1" ref="chartRef_1"></div>
          <div class="content-2" ref="chartRef_2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref ,onMounted} from "vue";
// 导入echarts模块
import * as echarts from "echarts";
import { useRouter } from "vue-router";
const router = useRouter();
const handleRouter = (path) => {
  router.push(`${path}`);
};
const list = ref([
  {
    icon: "#icon-weixin",
    title: "分析",
  },
  {
    icon: "#icon-weixin",
    title: "遥感",
  },
  {
    icon: "#icon-weixin",
    title: "智选",
  },
  {
    icon: "#icon-weixin",
    title: "反馈",
  },
]);
let chartRef_1=ref(null)
let chartRef_2=ref(null)
let chartRef_3=ref(null)
onMounted(()=>{
    //绘图
    draw_1();
    draw_2();
    draw_3();
})
// 绘图
const draw_1 = () => {
  // 获取Mycharts实例
  const mycharts = echarts.init(chartRef_1.value);
  // 构建options配置对象(渲染核心)
  const options = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "各市区旅游推荐",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "北部湾" },
          { value: 735, name: "天安门广场" },
          { value: 580, name: "红石峡" },
          { value: 484, name: "兵马俑" },
          { value: 300, name: "波浪屿" },
        ],
      },
    ],
  };
  // 利用mycharts.setoption配置option
  mycharts.setOption(options);
};
const draw_2 = () => {
  // 获取Mycharts实例
  const mycharts = echarts.init(chartRef_2.value);
  // 构建options配置对象(渲染核心)
  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {
      data: ["四月出行推荐", "五月出行推荐"],
    },
    xAxis: [
      {
        type: "category",
        data: ["一月", "二月", "三月", "四月", "五月", "六月"],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "人次",
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        type: "value",
        name: "热度",
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: [
      {
        name: "出行人数",
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " 万";
          },
        },
        data: [
          22.0, 40.9, 70.0, 230.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 60.4,
          30.3,
        ],
      },
      {
        name: "车次数",
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " 万";
          },
        },
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
      },
      {
        name: "reduce",
        type: "line",
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + " 万";
          },
        },
        data: [
          2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
        ],
      },
    ],
  };
  // 利用mycharts.setoption配置option
  mycharts.setOption(options);
};
const draw_3= () => {
  // 获取Mycharts实例
  const mycharts = echarts.init(chartRef_3.value);
  // 构建options配置对象(渲染核心)
 const  options = {
  title: {
    text: 'Stacked Area Chart'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
  // 利用mycharts.setoption配置option
  mycharts.setOption(options);
};
</script>

<style lang="scss" scoped>
.container {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  .title {
    align-self: center;
    font-size: 30px;
    font-weight: bold;
  }
  .chart {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .desc{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 15px;
      .left{
        display: flex;
    flex-direction: column;
    gap: 25px;
        .box-1{
          display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 15px;
      .item{
        background-color: rgb(241,241,241);
        padding: 15px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        .top{
          display: flex;
          justify-content: space-between;
          svg{
            width: 20px;
            height: 20px;
          }
          font-weight: bold;

        }
        .center{
          font-size: 25px;

        }
        .opt{
          text-align: center;
          background-color: #f0f9eb;
          color: #67c23a;
          padding: 7px 13px;
          border-radius: 15px;
          cursor: pointer;
        }

      }
        }
        .box-2{
          width: 100%;
          height: 400px;
          .content-3{
            width: 100%;
            height: 400px;
          }
        }
        .box-3{
          display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: rgb(241,241,241);
    padding: 15px;
    border-radius: 15px;
    .header{
      display: flex;
      justify-content: space-between;
    }
    .list{
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 15px;

      .item{
        background-color: rgb(227,241,205);
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 15px;
        align-items: center;
        justify-content: center;
        svg{
          width: 40px;
          height: 40px;
        }
      }
    }
        }
      }
      .right{
        width: 100%;
        display: grid;
        grid-template-rows: repeat(2,400px);
        .content-1{
          width: 100%;

        }
        .content-2{
          width: 100%;

        }
      }
    }
  }
}
</style>
