<template>
  <div>
    <div id="LineChart" ref="LineChart" style="height: 550px"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "LineChart",
  props: {
    value: {
      type: Array,
      default: [],
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      LineChart: null,
      arrayX: [],
      arrayY: [],
      options: {},
      color: [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc",
      ],
      gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
    };
  },
  watch: {
    value(newV, oldV) {
      this.options.series[0].data = newV;
      this.LineChart.setOption(this.options);
    },
    title(newTitle) {
      this.options.title.text = newTitle;
      this.LineChart.setOption(this.options);
    }
  },
  mounted() {
    for (let temp in this.value) {
      this.arrayX.push(this.value[temp][0]);
      this.arrayY.push(this.value[temp][1]);
    }
    this.LineChart = echarts.init(this.$refs.LineChart, "macarons");
    this.options = {
      title: {
        text: this.title,
        show: true,
        id: "LineChart",
        target: "blank",
        subtext: "",
        subtarget: "blank",
        left: 50,
        top: 0,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "#ccc",
        borderWidth: 0,
        padding: 5,
        itemGap: 10,
      },
      //   colorBy: "series", //按照系列分配调色盘中的颜色，同一系列中的所有数据都是用相同的颜色；
      textStyle: {
        fontFamily: "Microsoft YaHei",
        fontWeight: "normal",
        fontStyle: "normal",
        fontSize: 12,
      },
      //状态切换的动画配置，支持在每个系列里设置单独针对该系列的配置。
      stateAnimation: {
        duration: 300, //状态切换的动画时长，设为 0 则关闭状态动画。
        easing: "cubicOut", //状态切换的动画缓动。
      },
      //是否使用UTC时间
      useUTC: false,
      //分类
      legend: {},
      //X轴
      xAxis: {
        // type: "category",
        // data: ['12:56','12:57'],
        type: "time",
        boundaryGap: false,
        splitLine: {
          show: false,
          color: "#E0E6F1",
          width: 1,
          type: "solid",
        },
        scale: true,
        splitNumber: 6,
        axisLine: {
          show: "auto",
          onZero: true,
          onZeroAxisIndex: null,
          lineStyle: {
            color: "#6E7079",
            width: 1,
            type: "solid",
          },
          symbol: ["none", "none"],
          symbolSize: [10, 15],
        },
        axisTick: {
          show: "auto",
          inside: false,
          length: 5,
          lineStyle: {
            width: 1,
          },
        },
      },
      //Y轴
      yAxis: {
        type: "value",
        boundaryGap: [0, "50%"],
        axisLabel: {
          formatter: "{value} 单位",
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ["#E0E6F1"],
            with: 1,
            type: "solid",
          },
        },
        offset: 0,
      },
      //
      tooltip: {
        trigger: "axis",
        zlevel: 0,
        z: 60,
        show: true,
        showContent: true,
        triggerOn: "mousemove|click",
        alwaysShowContent: false,
        displayMode: "single",
        renderMode: "auto",
        confine: null,
        showDelay: 0,
        hideDelay: 100,
        transitionDuration: 0.4,
        enterable: false,
        backgroundColor: " #fff",
        //背景
        // shadowBlur: 10,
        // shadowColor: "rgba(40, 10, 99, .2)",
        shadowOffsetX: 1,
        shadowOffsetY: 2,
        //边框
        borderRadius: 4,
        borderWidth: 1,

        axisPointer: {
          type: "cross", //line
          axis: "auto",
          animationDurationUpdate: 200,
          animationEasingUpdate: "exponentialOut",
          crossStyle: {
            color: "#999",
            width: 1,
            type: "dashed",
          },
        },
        textStyle: {
          color: "#666",
          fontSize: 14,
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "6%",
        containLabel: true,
      },
      //时间条
      dataZoom: [
        {
          bottom: 0,
          startValue: "2014-06-01",
        },
        {
          type: "inside",
          // 最大的放大是图形的2%
          maxSpan: 2,
        },
      ],
      //映射
      // visualMap: {
      //   name: "item19",
      //   //  type: "continuous",
      //   top: 50,
      //   left: 0,
      //   show: true,
      //   dimension: 2, //默认取 data 中最后一个维度。
      //   hoverLink: true,
      //   pirces: [
      //     {
      //       lte: 1,
      //       color: "#5470c6",
      //     },
      //     {
      //       gt: 1,
      //       lt: 10,
      //       color: "#91cc75",
      //     },
      //     {
      //       gt: 10,
      //       lt: 13,
      //       color: "#fac858",
      //     },
      //     {
      //       gt: 13,
      //       lt: 15,
      //       color: "#ee6666",
      //     },
      //     {
      //       gt: 15,
      //       lt: 17,
      //       color: "#3ba272",
      //     },
      //   ],
      //   realtime: true, //拖拽时，是否实时更新
      //   outOfRange: {
      //     color: "#5470c6",
      //   },
      //   zlevel: 0,
      //   z: 4,
      //   itemWidth: 20,
      //   itemHeight: 20,
      //   // seriesIndex: "all",
      //   minOpen: true, //界面上会额外多出一个『< min』的选块
      //   maxOpen: true, //界面上会额外多出一个『> max』的选块。
      //   categories: [
      //     "0.01-0.02",
      //     "0.02-0.03",
      //     "0.03-0.04",
      //     "0.04-0.05",
      //     "0.05-0.06",
      //   ],
      //   inRange: {
      //     color: this.color,
      //   },
      //   align: "auto",
      //   selectedMode: "multiple",
      // },
      //数据
      series: [
        {
          // name: "item19",
          data: this.value,
          markArea: {
            itemStyle: {
              color: "rgba(255, 173, 177, 0.4)",
            },
            data: [
              [
                {
                  name: "Morning Peak",
                  xAxis: "2021-10-13 12:51:37",
                },
                {
                  xAxis: "2021-10-13 12:52:37",
                },
              ],
              [
                {
                  name: "Evening Peak",
                  xAxis: "17:30",
                },
                {
                  xAxis: "21:15",
                },
              ],
            ],
          },
          type: "line",
          lineStyle: {
            width: 3, //折线宽度
            color: "#5470c6", //折线颜色
            type: "solid",
          },
          legendHoverLink: true,
          clip: true,
          endLabel: {
            show: false,
            valueAnimation: true,
            distance: 8,
          },
          emphasis: {
            scale: true, //是否开启 hover 在拐点标志上的放大效果。
            lineStyle: {
              width: "bolder",
            },
          },
          symbol: "emptyCircle", //拐点样式
          itemStyle: {
            normal: {
              color: "red", //分割线颜色
              borderColor: "#000fff", //拐点边框
            },
          },
          markPoint: {
            data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
            symbol: "pin",
            symbolSize: 50,
            tooltip: {
              trigger: "item",
            },
            label: {
              show: true,
              position: "inside",
            },
            itemStyle: {
              borderWidth: 2,
            },
            emphasis: {
              label: {
                show: true,
              },
            },
          },
          markLine: {
            data: [
              { type: "average", name: "Avg" },
              [
                {
                  symbol: "none",
                  x: "90%",
                  yAxis: "max",
                },
                {
                  symbol: "circle",
                  label: {
                    position: "start",
                    formatter: "Max",
                  },
                  type: "max",
                  name: "最高点",
                },
              ],
            ],
          },
          symbolSize: 4, //拐点大小
          universalTransition: {
            divideShape: "clone",
          },
        },
      ],
    };
    this.LineChart.setOption(this.options);
  },
};
</script>

<style>
</style>
