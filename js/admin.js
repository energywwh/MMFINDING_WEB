function drawPie(legendData, legendData, funnelMax, seriesData, seriesName, charId, titleText, titlesubText) {
	// 路径配置
	require.config({
		paths: {
			echarts: 'http://echarts.baidu.com/build/dist'
		}
	});
	//	 使用
	require(
		[
			'echarts',
			'echarts/chart/pie',
			'echarts/chart/funnel'
		],
		function(ec) {
			// 基于准备好的dom，初始化echarts图表
			var myChart = ec.init(document.getElementById(charId));
			option = {
				title: {
					text: titleText,
					subtext: titlesubText,
					x: 'center'
				},
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					x: 'left',
					data: legendData
				},
				toolbox: {
					show: true,
					feature: {
						mark: {
							show: false
						},
						dataView: {
							show: true,
							readOnly: false
						},
						magicType: {
							show: true,
							type: ['pie', 'funnel'],
							option: {
								funnel: {
									x: '25%',
									width: '60%',
									funnelAlign: 'left',
									max: funnelMax
								}
							}
						},
						restore: {
							show: true
						},
						saveAsImage: {
							show: true
						}
					}
				},
				calculable: true,
				series: [{
					name: seriesName,
					type: 'pie',
					radius: '55%',
					center: ['50%', '60%'],
					data: seriesData
				}]
			};
			// 为echarts对象加载数据 
			myChart.setOption(option);
		}
	);
};

//alert("ok");
$(document).ready(function() {
	//设置样本总数
	function setTitle(count) {
		$("#totalcount").text("共收到" + count + "份测试样本");
	};
	$.ajax({
		url: "https://api.leancloud.cn/1.1/functions/getTestDataCount",
		type: "POST",
		dataType: "text",
		headers: {
			"X-AVOSCloud-Application-Id": "blog97f16j29o7es3az6kdawqcn84kfbc77fmegvb3bzqpyx",
			"X-AVOSCloud-Application-Key": "hx13ud0oqyzyiw2gchlxa7sw27mhfj2ydvy5tfe8dj85i2cf",
			"Content-Type": "application/json"
		},
		//			contentType: "application/json",
		data: '{}',
		// 请求成功时执行		
		success: function(result, textStatus, jqXHR) {
			var jsonData = eval("(" + result + ")");
			setTitle(jsonData.result);
		},
		// 请求失败时执行				
		error: function(jqXHR, textStatus, errorMsg) {
			alert("请求失败：" + errorMsg);
		}
	});

	//获取图表数据，绘制图形
	$.ajax({
		url: "https://api.leancloud.cn/1.1/functions/getTestData",
		type: "POST",
		dataType: "text",
		headers: {
			"X-AVOSCloud-Application-Id": "blog97f16j29o7es3az6kdawqcn84kfbc77fmegvb3bzqpyx",
			"X-AVOSCloud-Application-Key": "hx13ud0oqyzyiw2gchlxa7sw27mhfj2ydvy5tfe8dj85i2cf",
			"Content-Type": "application/json"
		},
		//			contentType: "application/json",
		data: '{}',
		// 请求成功时执行		
		success: function(result, textStatus, jqXHR) {
			var jsonData = eval("(" + result + ")");
			analyseDataAndDrawPie(jsonData.result);
		},
		// 请求失败时执行				
		error: function(jqXHR, textStatus, errorMsg) {
			alert("请求失败：" + errorMsg);
		}
	});

	//绘图数据解析并绘制图形
	function analyseDataAndDrawPie(resultdata) {
		//
//		alert("ok");
		var fields = ['sex', 'age', 'surroundings', 'skintype', 'skincolor', 'facetype', 'eyebrow',
			'eyelid', 'nose', 'lip', 'haircolor', 'hairlength', 'bang', 'province'
		];
		var titleTextArray = ['性别', '年龄', '周围环境', '肤质', '肤色', '脸型', '眉毛',
			'眼皮', '鼻子', '嘴唇', '头发颜色', '头发长度', '刘海情况', '省份'
		];
		var titlesubTextArray = ['性别数据', '年龄数据', '周围环境数据', '肤质数据', '肤色数据', '脸型数据', '眉毛数据',
			'眼皮数据', '鼻子数据', '嘴唇数据', '头发颜色数据', '头发长度数据', '刘海情况数据', '省份分布情况'
		];

		for (var i = 0; i < resultdata.resultArry.length; i++) {
//			alert("ok");
//			var legendData = ['萝莉', 'OL', '御姐', '女王', '森女'];
			var legendData = resultdata.resultLegendArry[i];
//			var seriesData = [{
//				value: 335,
//				name: legendData[0]
//			}, {
//				value: 310,
//				name: legendData[1]
//			}, {
//				value: 234,
//				name: legendData[2]
//			}, {
//				value: 135,
//				name: legendData[3]
//			}, {
//				value: 1548,
//				name: legendData[4]
//			}];
			var seriesData = new Array();
			var funnelMax = 0;
			for (var j=0; j<legendData.length; j++) {
				seriesData[j] = {
					value: resultdata.resultArry[i][j],
					name: legendData[j]
				}
				funnelMax = (resultdata.resultArry[i][j]>funnelMax)?resultdata.resultArry[i][j]:funnelMax;
			}

			var seriesName = '样本情况';
			var titleText = titleTextArray[i];
			var titlesubText = titlesubTextArray[i];
			drawPie(legendData, legendData, funnelMax, seriesData, seriesName, fields[i], titleText, titlesubText);
		}
	}
});