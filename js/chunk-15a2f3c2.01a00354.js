(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15a2f3c2"],{1148:function(t,a,e){"use strict";var s=e("da84"),r=e("5926"),i=e("577e"),o=e("1d80"),l=s.RangeError;t.exports=function(t){var a=i(o(this)),e="",s=r(t);if(s<0||s==1/0)throw l("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(a+=a))1&s&&(e+=a);return e}},"408a":function(t,a,e){var s=e("e330");t.exports=s(1..valueOf)},b680:function(t,a,e){"use strict";var s=e("23e7"),r=e("da84"),i=e("e330"),o=e("5926"),l=e("408a"),n=e("1148"),c=e("d039"),d=r.RangeError,h=r.String,p=Math.floor,f=i(n),C=i("".slice),b=i(1..toFixed),u=function(t,a,e){return 0===a?e:a%2===1?u(t,a-1,e*t):u(t*t,a/2,e)},m=function(t){var a=0,e=t;while(e>=4096)a+=12,e/=4096;while(e>=2)a+=1,e/=2;return a},g=function(t,a,e){var s=-1,r=e;while(++s<6)r+=a*t[s],t[s]=r%1e7,r=p(r/1e7)},v=function(t,a){var e=6,s=0;while(--e>=0)s+=t[e],t[e]=p(s/a),s=s%a*1e7},x=function(t){var a=6,e="";while(--a>=0)if(""!==e||0===a||0!==t[a]){var s=h(t[a]);e=""===e?s:e+f("0",7-s.length)+s}return e},y=c((function(){return"0.000"!==b(8e-5,3)||"1"!==b(.9,0)||"1.25"!==b(1.255,2)||"1000000000000000128"!==b(0xde0b6b3a7640080,0)}))||!c((function(){b({})}));s({target:"Number",proto:!0,forced:y},{toFixed:function(t){var a,e,s,r,i=l(this),n=o(t),c=[0,0,0,0,0,0],p="",b="0";if(n<0||n>20)throw d("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return h(i);if(i<0&&(p="-",i=-i),i>1e-21)if(a=m(i*u(2,69,1))-69,e=a<0?i*u(2,-a,1):i/u(2,a,1),e*=4503599627370496,a=52-a,a>0){g(c,0,e),s=n;while(s>=7)g(c,1e7,0),s-=7;g(c,u(10,s,1),0),s=a-1;while(s>=23)v(c,1<<23),s-=23;v(c,1<<s),g(c,1,1),v(c,2),b=x(c)}else g(c,0,e),g(c,1<<-a,0),b=x(c)+f("0",n);return n>0?(r=b.length,b=p+(r<=n?"0."+f("0",n-r)+b:C(b,0,r-n)+"."+C(b,r-n))):b=p+b,b}})},b854:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("PageHeader",{attrs:{title:t.title,items:t.items}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Line With Data Labels")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"380",type:"line",dir:"ltr",series:t.linewithDataChart.series,options:t.linewithDataChart.chartOptions}})],1)])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Dashed Line")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"380",type:"line",dir:"ltr",series:t.dashedLineChart.series,options:t.dashedLineChart.chartOptions}})],1)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Spline Area")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"area",dir:"ltr",series:t.splineAreaChart.series,options:t.splineAreaChart.chartOptions}})],1)])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Column Charts")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"bar",dir:"ltr",series:t.columnChart.series,options:t.columnChart.chartOptions}})],1)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Column With Data Labels")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"bar",dir:"ltr",series:t.columnDatalabelChart.series,options:t.columnDatalabelChart.chartOptions}})],1)])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Bar Chart")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"bar",dir:"ltr",series:t.barChart.series,options:t.barChart.chartOptions}})],1)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Line, Column & Area Chart")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"line",dir:"ltr",series:t.mixedChart.series,options:t.mixedChart.chartOptions}})],1)])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Radial Chart")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"350",type:"radialBar",dir:"ltr",series:t.radialChart.series,options:t.radialChart.chartOptions}})],1)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Pie Chart")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"320",type:"pie",dir:"ltr",series:t.pieChart.series,options:t.pieChart.chartOptions}})],1)])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title mb-4"},[t._v("Donut Chart")]),e("apexchart",{staticClass:"apex-charts",attrs:{height:"320",type:"donut",dir:"ltr",series:t.donutChart.series,options:t.donutChart.chartOptions}})],1)])])])],1)},r=[],i=(e("a4d3"),e("e01a"),e("5658")),o=e("2579"),l=e("c2a4"),n=(e("b680"),{chartOptions:{chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:["#556ee6","#34c38f"],dataLabels:{enabled:!0},stroke:{width:[3,3],curve:"straight"},title:{text:"Average High & Low Temperature",align:"left"},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f1f1"},markers:{style:"inverted",size:6},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month"}},yaxis:{title:{text:"Temperature"},min:5,max:40},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]},series:[{name:"High - 2018",data:[26,24,32,36,33,31,33]},{name:"Low - 2018",data:[14,11,16,12,17,13,12]}]}),c={series:[{name:"Session Duration",data:[45,52,38,24,33,26,21,20,6,8,15,10]},{name:"Page Views",data:[36,42,60,42,13,18,29,37,36,51,32,35]},{name:"Total Visits",data:[89,56,74,98,72,38,64,46,84,58,46,49]}],chartOptions:{chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:["#556ee6","#f46a6a","#34c38f"],dataLabels:{enabled:!1},stroke:{width:[3,4,3],curve:"straight",dashArray:[0,8,5]},title:{text:"Page Statistics",align:"left"},markers:{size:0,hover:{sizeOffset:6}},xaxis:{categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]},tooltip:{y:[{title:{formatter:function(t){return t+" (mins)"}}},{title:{formatter:function(t){return t+" per session"}}},{title:{formatter:function(t){return t}}}]},grid:{borderColor:"#f1f1f1"}}},d={series:[{name:"series1",data:[34,40,28,52,42,109,100]},{name:"series2",data:[32,60,34,46,34,52,41]}],chartOptions:{dataLabels:{enabled:!1},stroke:{curve:"smooth",width:3},colors:["#556ee6","#34c38f"],xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},grid:{borderColor:"#f1f1f1"},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}},h={series:[{name:"Net Profit",data:[46,57,59,54,62,58,64,60,66]},{name:"Revenue",data:[74,83,102,97,86,106,93,114,94]},{name:"Free Cash Flow",data:[37,42,38,26,47,50,54,55,43]}],chartOptions:{chart:{toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},colors:["#5664d2","#1cbb8c","#fcb92c"],xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},grid:{borderColor:"#f1f1f1"},fill:{opacity:1},tooltip:{y:{formatter:function(t){return"$ "+t+" thousands"}}}}},p={series:[{name:"Inflation",data:[2.5,3.2,5,10.1,4.2,3.8,3,2.4,4,1.2,3.5,.8]}],chartOptions:{chart:{toolbar:{show:!1}},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(t){return t+"%"},offsetY:-20,style:{fontSize:"12px",colors:["#304758"]}},colors:["#556ee6"],grid:{borderColor:"#f1f1f1"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],position:"top",labels:{offsetY:-18},axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0,offsetY:-35}},fill:{gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[50,0,100,100]}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(t){return t+"%"}}},title:{text:"Monthly Inflation in Argentina, 2002",floating:!0,offsetY:320,align:"center",style:{color:"#444"}}}},f={series:[{data:[380,430,450,475,550,584,780,1100,1220,1365]}],chartOptions:{chart:{toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},colors:["#34c38f"],grid:{borderColor:"#f1f1f1"},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]}}},C={series:[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}],chartOptions:{chart:{stacked:!1,toolbar:{show:!1}},stroke:{width:[0,2,4],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},colors:["#1cbb8c","#fcb92c","#5664d2"],fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},legend:{offsetY:-10},xaxis:{type:"datetime"},yaxis:{title:{text:"Points"}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(t){return"undefined"!==typeof t?t.toFixed(0)+" points":t}}},grid:{borderColor:"#f1f1f1"}}},b={series:[44,55,67,83],chartOptions:{plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(t){return 249}}}}},labels:["Computer","Tablet","Laptop","Mobile"],colors:["#5664d2","#fcb92c","#1cbb8c","#ff3d60"]}},u={series:[44,55,41,17,15],chartOptions:{labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],colors:["#1cbb8c","#5664d2","#fcb92c","#4aa3ff","#ff3d60"],legend:{show:!0,position:"bottom",horizontalAlign:"center",verticalAlign:"middle",floating:!1,fontSize:"14px",offsetX:0,offsetY:-10},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]}},m={series:[44,55,41,17,15],chartOptions:{labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],colors:["#1cbb8c","#5664d2","#fcb92c","#4aa3ff","#ff3d60"],legend:{show:!0,position:"bottom",horizontalAlign:"center",verticalAlign:"middle",floating:!1,fontSize:"14px",offsetX:0,offsetY:-10},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]}},g={page:{title:"Apex Chart",meta:[{name:"description",content:l.description}]},components:{Layout:i["a"],PageHeader:o["a"]},data:function(){return{linewithDataChart:n,dashedLineChart:c,splineAreaChart:d,columnChart:h,columnDatalabelChart:p,barChart:f,mixedChart:C,radialChart:b,pieChart:u,donutChart:m,title:"Apex charts",items:[{text:"Charts",href:"/"},{text:"Apex charts",active:!0}]}}},v=g,x=e("2877"),y=Object(x["a"])(v,s,r,!1,null,null,null);a["default"]=y.exports}}]);
//# sourceMappingURL=chunk-15a2f3c2.01a00354.js.map