<template>
<h2>echarts 代码参考 https://echarts.apache.org/examples/zh/index.html</h2>
<el-row>
    <el-button-group>
        <el-button plain type="primary" @click="addEChart()">添加图表</el-button>
    </el-button-group>
</el-row>
<Source src="/code/EChart.vue"></Source>
<Editor doc="https://www.x-emr.cn/doc/asdf1.html"  @DocLoaded="onDocLoaded" style="margin: 10px 0;"></Editor>

</template>


<script setup>
import Editor from '@/components/Editor.vue'
import Source from '@/components/Source.vue'
import * as echarts from 'echarts';

let editor = null
//文档加载完成
const onDocLoaded = function(e) {
     editor =  e.editor
}

//添加日常病程
const addEChart = function() {
    debugger
    var _body = editor.document.getElementById('_body')
    let chart =  editor.document.createElement('p')
    chart.style.width = '100%'
    chart.style.height = '500px'
    _body.appendChild(chart)

    var myChart = echarts.init(chart);
    var option;

    option = {
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