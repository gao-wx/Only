<template>
    <div>
        <div id="LineChart" ref="LineChart" style="height: 500px" >
    </div>
</div>
</template>

<script>
import echarts from "echarts";
export default {
    name:'LineChart',
    props: {
        value: {
            type: Array,
            default: []
        },
        // typeName: {
        //     default: ''
        // }
    },
    data() {
        return {
            LineChart: null,
            arrayX:[],
            arrayY:[],
            options: {},
            color:['#5470c6', '#91cc75',  '#fac858', '#ee6666', '#73c0de', '#3ba272',  '#fc8452',  '#9a60b4', '#ea7ccc'],
            gradientColor:['#f6efa6', '#d88273', '#bf444c']
        }
    },
    watch: {
        value(newV, oldV){
            this.options.series[0].data = newV;
            // this.LineChart.setOption(this.options);
        }
    },
    mounted() {
        for(let temp in this.value){
            this.arrayX.push(this.value[temp][0])
            this.arrayY.push(this.value[temp][1])
        }
        this.LineChart = echarts.init(this.$refs.LineChart, "macarons");
        this.options = {
            // backgroundColor: 'auto',
            title: {
                text: '',
                show: true,
                id: 'LineChart',
                target: 'blank',
                subtext: '',
                subtarget: 'blank',
                left: 0,
                top: 0,
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#ccc',
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
            },

            darkMode:'auto',
            colorBy:'data',  //按照系列分配调色盘中的颜色，同一系列中的所有数据都是用相同的颜色；

            texrStyle: {
                fontFamily:'Microsoft YaHei',
                fontWeight:'normal',
                fontStyle:'normal',
                fontSize: 12,
                textBorderColor: "#0000FF"
            },
            //状态切换的动画配置，支持在每个系列里设置单独针对该系列的配置。
            stateAnimation:{
                duration: 300, //状态切换的动画时长，设为 0 则关闭状态动画。
                easing: 'cubicOut' //状态切换的动画缓动。
            },


            animation: 'auto',
            animationDuration: 1000,
            animationDurationUpdate: 500,
            animationEasing: 'cubicInOut',
            animationEasingUpdate: 'cubicInOut',
            animationThreshold: 2000,
            progressiveThreshold: 3000,
            progressive: 400,
            hoverLayerThreshold: 3000,
            useUTC: false,
            // legend: {
            //     data: typeName,
            // },
             xAxis: {
                type: 'category',
                // data: ['12:56','12:57'],
                // type: 'time',
                boundaryGap: false,
                splitLine: {
                    show: false,
                    color: '#E0E6F1',
                    width: 1,
                    type: 'solid'
                },
                scale: true,
                splitNumber: 6,
                axisLine: {
                    show: 'auto',
                    onZero: true,
                    onZeroAxisIndex: null,
                    lineStyle:{
                        color: '#6E7079',
                        width: 1,
                        type: 'solid',
                    },
                    symbol:['none','none'],
                    symbolSize:[10,15],
                },
                axisTick:{
                    show: 'auto',
                    inside: false,
                    length: 5,
                    lineStyle:{
                        width: 1,
                    }
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: ['#E0E6F1'],
                        with: 1,
                        type: 'solid'
                    },
                },
                axisLine: {
                    show: 'auto',
                    onZero: true,
                    onZeroAxisIndex: null,
                    lineStyle:{
                        color: '#6E7079',
                        width: 1,
                        type: 'solid',
                    },
                    symbol: ['none', 'none'],
                    symbolSize: [10, 15]
                },
                offset: 0
            },
            grid:{
                show: false,
                zlevel: 0,
                z: 0,
                left: '10%',
                top: 60,
                right: '10%',
                bottom: 70,
                containLabel: false,
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                borderColor: '#ccc',
            },
            tooltip:{
                trigger:'axis',
                axisPointer:{
                    animation: false,
                    type:'line',
                    axis:'auto',
                    animationDurationUpdate: 200,
                    animationEasingUpdate:'exponentialOut',
                    crossStyle:{
                        color:'#999',
                        width:1,
                        type:'dashed'
                    }
                },
                zlevel: 0,
                z: 60,
                show: true,
                showContent: true,
                triggerOn: 'mousemove|click',
                alwaysShowContent: false,
                displayMode: 'single',
                renderMode: 'auto',
                confine: null,
                showDelay: 0,
                hideDelay: 100,
                transitionDuration: 0.4,
                enterable: false,
                backgroundColor:' #fff',
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, .2)',
                shadowOffsetX: 1,
                shadowOffsetY: 2,
                borderRadius: 4,
                borderWidth: 1,
                padding: null,
                extraCssText: '',
                textStyle:{
                    color: '#666',
                    fontSize: 14,
                }
            },
            dataZoom: [
                {
                startValue: '2014-06-01'
                },
                {
                type: 'inside'
                }
            ],
            series: [
                {
                    data: this.value,
                    // data: [0,0.004],
                    type: 'line',
                    lineStyle:{
                        width:2,//折线宽度
                        // color:"#0000FF",//折线颜色
                        type:'solid'
                    },
                    legendHoverLink: true,
                    clip: true,
                    label:{
                        position: 'top',
                    },
                    endLabel:{
                        show: false,
                        valueAnimation: true,
                        distance: 8,
                    },
                    emphasis:{
                        scale: true,//是否开启 hover 在拐点标志上的放大效果。
                        lineStyle:{
                            width: 'bolder'
                        }
                    },
                    symbol: 'emptyCircle',//拐点样式
                    itemStyle:{
                        normal:{
                            color:'red',
                            borderColor:'red',  //拐点边框颜色
                        }
                    },
                    // symbol: 'star',
                    symbolSize: 4,//拐点大小
                    // symbolRotate: null,
                    // showAllSymbol: 'auto',
                    // connectNulls: false,
                    // sampling: 'none',
                    // animationEasing: 'linear',
                    // progressive: 0,
                    // hoverLayerThreshold: Infinity,

                    universalTransition:{
                        divideShape: 'clone'
                    }
                }
            ],
            visualMap: [
                {
                    type: 'piecewise',
                    top: 50,
                    left:5,
                    show:true,
                    dimension: 4,  //默认取 data 中最后一个维度。
                    pirces: [{
                        lte: 0.001,
                        color: '#5470c6'
                    },{
                        gt: 0.001,
                        lt: 0.002,
                        color: '#91cc75'
                    },
                    {
                        gt: 0.002,
                        lt: 0.003,
                        color: '#fac858'
                    },{
                        gt: 0.003,
                        lt: 0.004,
                        color: '#ee6666'
                    },
                    {
                        gt: 0.004,
                        lt: 0.005,
                        color: '#3ba272'
                    }],
                    // outOfRange: {
                    //     color: '#CCC'
                    // },
                    zlevel:0,
                    z:4,
                    itemWidth: 20,
                    itemHeight: 20,
                    seriesIndex: 'all',
                    // backgroundColor: 'rgba(0,0,0,0)',
                    // borderColor: '#ccc',
                    // contentColor: '#5793f3',
                    // inactiveColor: '#aaa',
                    categories: [
                        '0.001-0.002', '0.002-0.003', '0.003-0.004', '0.004-0.005', '0.005-0.006'
                    ],
                    inRange:{
                        color: this.color,
                    },
                    align: 'auto',
                    selectedMode: 'multiple',
                    padding:5,
                    itemGap: 10,
                    hoverLink: true,
                    orient: 'vertical',
                    // controller:{
                    //     inRange:{
                    //         color: ['#f6efa6','#d88273','#bf444c'],
                    //         symbol: ['roundRect'],
                    //         symbolSize: [20,10]
                    //     },

// outOfRange:
// color: #999
// symbol: 
// 0: roundRect
// symbolSize: 
// 0: 20
// 1: 20
                    // }
                }
            ]
        }
        this.LineChart.setOption(this.options);
    }
}
</script>

<style>
</style>