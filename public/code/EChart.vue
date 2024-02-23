<template>
  <h2>echarts 代码参考 https://echarts.apache.org/examples/zh/index.html</h2>
  <el-row>
    <el-button-group>
      <el-button plain type="primary" @click="addSvgEChart()">添加图表(SVG)</el-button>
      <el-button plain type="primary" @click="addCanvasEChart()">添加图表(Canvas)</el-button>
    </el-button-group>
  </el-row>
  <Source src="/code/EChart.vue"></Source>
  <Editor doc="https://www.x-emr.cn/doc/asdf1.html" @DocLoaded="onDocLoaded" style="margin: 10px 0;"></Editor>
</template>


<script setup>
import * as echarts from 'echarts';

let editor = null
//文档加载完成
const onDocLoaded = function (e) {
  editor = e.editor
  addCanvasEChart()
}

//添加图表
const addSvgEChart = function () {
  var _body = editor.document.getElementById('_body')
  let chartDom = editor.document.createElement('div')
  chartDom.style.width = '100%'
  chartDom.style.height = '500px'
  _body.appendChild(chartDom)

  var myChart = echarts.init(chartDom, null, { renderer: 'svg' });
  var option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  option && myChart.setOption(option);
}

//添加图表
const addCanvasEChart = function () {
  var _body = editor.document.getElementById('_body')
  let chartDom = editor.document.createElement('div')
  chartDom.style.width = '100%'
  chartDom.style.height = '500px'
  _body.appendChild(chartDom)

  var myChart = echarts.init(chartDom, null, { renderer: 'canvas' });
  var option = {
    title: {
      text: 'Rainfall vs Evaporation',
      subtext: 'Fake Data'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Rainfall', 'Evaporation']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        // prettier-ignore
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Rainfall',
        type: 'bar',
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
        ],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      },
      {
        name: 'Evaporation',
        type: 'bar',
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        ],
        markPoint: {
          data: [
            { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
            { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }
    ]
  };


  option && myChart.setOption(option);
}

</script>