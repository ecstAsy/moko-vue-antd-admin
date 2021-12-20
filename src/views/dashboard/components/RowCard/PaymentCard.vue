<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 11:33:14
 * @LastEditTime: 2021-12-09 13:54:41
 * @LastEditors: ecstAsy
-->

<template>
  <a-card>
    <row-title
      title="支付笔数"
      value="6,560"
      tooltip="支付笔数"
    />
    <div class="content">
      <div
        ref="chartDom"
        style="width: 90%;height: 54px;"
      />
    </div>
    <a-row class="footer">
      转化率60%
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  GridComponent,
  DataZoomComponent,
} from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import RowTitle from "./RowTitle.vue";

echarts.use([
  TitleComponent,
  GridComponent,
  DataZoomComponent,
  BarChart,
  CanvasRenderer,
]);

const chartDom = ref<Ref | null>(null);
const myChart = ref<any>(null);

const setInit = () => {
  myChart.value = echarts.init(chartDom.value);

  // prettier-ignore
  const dataAxis = ["点", "击", "柱", "子", "或", "者", "两", "指", "在", "触", "屏", "上", "滑", "动", "能", "够", "自", "动", "缩", "放"];
  // prettier-ignore
  const data = [
    220, 182, 191, 234, 290, 330, 310,
    123, 442, 321, 90, 149, 210, 122, 133, 334,
    198, 123, 125, 220,
  ];
  const yMax = 500;
  const dataShadow = [];
  for (let i = 0; i < data.length; i += 1) {
    dataShadow.push(yMax);
  }
  const option = {
    xAxis: {
      data: dataAxis,
      axisLabel: {
        inside: true,
        color: "#fff",
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      z: 10,
      show: false,
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#999",
      },
      show: false,
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
    series: [
      {
        type: "bar",
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" },
            ]),
          },
        },
        data,
      },
    ],
  };
  // Enable data zoom when user click bar.
  const zoomSize = 6;
  myChart.value.on("click", (params:any) => {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart.value.dispatchAction({
      type: "dataZoom",
      startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      endValue:
        dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)],
    });
  });

  if (!option) return;
  myChart.value.setOption(option);
};

onMounted(() => setInit());
</script>
