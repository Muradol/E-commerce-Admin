<template>
  <div class="box8">
    <div class="title">
      <p>数据统计</p>
      <img src="../../images/dataScreen-title.png" alt="">
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
//获取DOM节点
let charts = ref();
//组件挂载完毕
onMounted(() => {
  //一个容器可以同时展示多种类型的图形图标
  let mychart = echarts.init(charts.value);
  let option = {
    title: {
      text: '访客消费统计',
      textStyle:{
        color:'white'
      }
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: '健康用品', max: 6500 },
        { name: '家具', max: 16000 },
        { name: '服装', max: 30000 },
        { name: '个人化妆品', max: 38000 },
        { name: '家用电器', max: 52000 },
        { name: '电子产品', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: '购物'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: '吃饭'
          }
        ]
      }
    ]
  };
  //设置配置项
  mychart.setOption(option)
})
</script>

<style scoped lang="scss">
.box8 {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 20px;

  .title {
    p {
      color: white;
      font-size: 18px;
    }
  }

  .charts {
    height: calc(100% - 30px);
  }

}
</style>