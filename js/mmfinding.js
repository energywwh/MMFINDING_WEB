//数据初始化
if (typeof(Storage) !== "undefined") {
	//			localStorage.clear();
	if (!localStorage.testtime) {
		//初始化工作
		localStorage.testtime = 0;
		localStorage.sex = -1;
		localStorage.age = -1;
		localStorage.surroundings = -1;
		localStorage.skincolor = -1;
		localStorage.skintype = -1;
		localStorage.facetype = -1;
		localStorage.eyebrow = -1;
		localStorage.eyelid = -1;
		localStorage.nose = -1;
		localStorage.lip = -1;
		localStorage.haircolor = -1;
		localStorage.hairlength = -1;
		localStorage.bang = -1;
	} else {
		localStorage.testtime++;
		//		alert(localStorage.testtime);
	}

	//被编辑的标记
	localStorage.agechecked = 0;
	localStorage.surroundingschecked = 0;
	localStorage.skincolorchecked = 0;
	localStorage.skintypechecked = 0;
	localStorage.facetypechecked = 0;
} else {
	// Sorry! No web storage support..
	alert("Sorry! No web storage support..");
};

var longitude = 0;
var latitude = 0;
var province = "拒绝获取位置";
var city = "拒绝获取位置";

//获取经纬度
function getLocation() {
	//				alert("Ok");
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		alert("该浏览器不支持获取地理位置。");
	}
};
//解析城市
function showPosition(position) {
	//alert(position.coords.latitude + "  " + position.coords.longitude);
	longitude = position.coords.longitude;
	latitude = position.coords.latitude;
	//弹幕
	// 百度地图API功能
	var point = new BMap.Point(position.coords.longitude, position.coords.latitude);
	var geoc = new BMap.Geocoder();
	geoc.getLocation(point, function(rs) {
		var addComp = rs.addressComponents;
		province = addComp.province;
		city = addComp.city;
		//		alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
	});
};
window.onload = function() {
	getLocation();
};

var si;

function tangmu(text) {
	clearInterval(si);
	//	var text = document.getElementById("text");
	var tangmu = document.getElementById("tangmu");
	var textStyle = "<font id=\"textStyle\">" + text + "</font>";
	//	var textStyle = "<font id=\"textStyle\">" + text.value + "</font>";
	mathHeight = Math.round(Math.random() * tangmu.offsetHeight) + "px";
	var textLeft = tangmu.offsetWidth + "px";
	tangmu.innerHTML = textStyle;
	var textStyleObj = document.getElementById("textStyle");
	textStyleObj.style.left = textLeft;
	textStyleObj.style.width = "1000px";
	textStyleObj.style.top = mathHeight;
	var x = parseInt(textStyleObj.style.left);
	si = setInterval("xunhuan(" + x + ")", 30);
};

function xunhuan(left) {
	var textStyleObj = document.getElementById("textStyle");
	textStyleObj.style.left = left;
	var x = parseInt(textStyleObj.style.left);
	if (x < (textStyleObj.style.width - 1000)) {
		document.getElementById("tangmu").innerHTML = "";
		clearInterval(si);
	} else {
		x -= 2;
	}
	textStyleObj.style.left = x + "px";
};

function checkpage2param() {
	//	alert(localStorage.agechecked + localStorage.skincolorchecked + localStorage.surroundingschecked + localStorage.skintypechecked + localStorage.facetypechecked);
	if ((localStorage.agechecked + localStorage.skincolorchecked + localStorage.surroundingschecked + localStorage.skintypechecked + localStorage.facetypechecked) >= 11111) {
		$.fn.fullpage.moveSectionDown();
	}
};

function hiddeoldface(oldtype) {
	var type = localStorage.facetype;
	if (type != oldtype) {
		if (type == 0) {
			$("#facetype0").attr("src", "img/yuanlian.png");
		} else if (type == 1) {
			$("#facetype1").attr("src", "img/changlian.png");
		} else if (type == 2) {
			$("#facetype2").attr("src", "img/guazilian.png");
		} else if (type == 3) {
			$("#facetype3").attr("src", "img/fanglian.png");
		}
	}
};

var legendArry = [
	['萝莉', 'OL', '御姐', '女王', '森女', '暖男', '酷酷哒', '美男子'], //9
	['18岁以下', '18~22岁', '22~25岁', '25~30岁', '30~45岁', '45岁以上'], //7
	['学校', '办公室', '室外', '熬夜'], //5
	['有痘痘', '有干纹', '肤色不均有色斑', '脱皮', '有红血丝', '出油'], //7
	['肤色白', '肤色黑', '肤色黄', '肤色红'], //5
	['圆脸', '鹅蛋脸', '瓜子脸', '方脸'], //5
	['粗眉毛', '眉毛稀疏', '交叉眉'], //4
	['双眼皮', '内双眼皮', '单眼皮'], //4
	['塌鼻子', '高鼻子'], //3
	['薄嘴唇', '厚嘴唇'], //3
	['黑', '棕', '黄', '红'], //5
	['长发', '中长发', '短发'], //4
	['有刘海', '无刘海'] //3
];

$(document).ready(function() {

	//	alert("OK");
	//设置性别初始值
	if (localStorage.sex > -1) {
		$("#sex" + localStorage.sex).html("&nbsp;&nbsp;" + legendArry[0][localStorage.sex] + " <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>");
	};
	//设置年龄初始值
	if (localStorage.age > -1) {
		$("#age").html(legendArry[1][localStorage.age] + " <span class=\"caret\"></span>");
	};
	//设置生活环境初始值
	if (localStorage.surroundings > -1) {
		$("#surroundings").html(legendArry[2][localStorage.surroundings] + " <span class=\"caret\"></span>");
	};
	//设置肤质初始值
	if (localStorage.skintype > -1) {
		//		alert(legendArry[3][localStorage.skintype]);
		$("#skintype").html(legendArry[3][localStorage.skintype] + " <span class=\"caret\"></span>");
	};
	//设置肤色初始值
	if (localStorage.skincolor > -1) {
		$("#skincolor").html(legendArry[4][localStorage.skincolor] + " <span class=\"caret\"></span>");
	};
	//设置脸型初始值
	if (localStorage.facetype > -1) {
		var type = localStorage.facetype;
		if (type == 0) {
			$("#facetype0").attr("src", "img/yuanlian_selected.png");
		} else if (type == 1) {
			$("#facetype1").attr("src", "img/changlian_selected.png");
		} else if (type == 2) {
			$("#facetype2").attr("src", "img/guazilian_selected.png");
		} else if (type == 3) {
			$("#facetype3").attr("src", "img/fanglian_selected.png");
		}
	};
	//设置眉毛初始值
	if (localStorage.eyebrow > -1) {
		$("#eyebrow").html(legendArry[6][localStorage.eyebrow] + " <span class=\"caret\"></span>");
	};
	//设置眼皮初始值
	if (localStorage.eyelid > -1) {
		$("#eyelid").html(legendArry[7][localStorage.eyelid] + " <span class=\"caret\"></span>");
	};
	//设置鼻子初始值
	if (localStorage.nose > -1) {
		$("#nose").html(legendArry[8][localStorage.nose] + " <span class=\"caret\"></span>");
	};
	//设置嘴唇初始值
	if (localStorage.lip > -1) {
		$("#lip").html(legendArry[9][localStorage.lip] + " <span class=\"caret\"></span>");
	};
	//设置发色初始值
	if (localStorage.haircolor > -1) {
		$("#haircolor").html(legendArry[10][localStorage.haircolor] + " <span class=\"caret\"></span>");
	};
	//设置发长初始值
	if (localStorage.hairlength > -1) {
		$("#hairlength").html(legendArry[11][localStorage.hairlength] + " <span class=\"caret\"></span>");
	};
	//设置刘海初始值
	if (localStorage.bang > -1) {
		$("#bang").html(legendArry[12][localStorage.bang] + " <span class=\"caret\"></span>");
	};

	$("#sex0").click(function() {
		//			alert("haha!");
		localStorage.sex = 0;
		$("#sex0").html("&nbsp;&nbsp;萝莉 <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>");
		$("#sex1").html("&nbsp;&nbsp;&nbsp;OL&nbsp;&nbsp;&nbsp;");
		$("#sex2").html("&nbsp;&nbsp;御姐&nbsp;&nbsp;");
		$("#sex3").html("&nbsp;&nbsp;女王&nbsp;&nbsp;");
		$("#sex4").html("&nbsp;&nbsp;森女&nbsp;&nbsp;");
		$("#sex5").html("&nbsp;&nbsp;暖男&nbsp;&nbsp;");
		$("#sex6").html("&nbsp;&nbsp;酷酷哒&nbsp;&nbsp;");
		$("#sex7").html("&nbsp;&nbsp;美男子&nbsp;&nbsp;");
		$.fn.fullpage.moveSectionDown();
	});
	$("#sex1").click(function() {
		//			alert("haha!");
		localStorage.sex = 1;
		$("#sex0").html("&nbsp;&nbsp;萝莉&nbsp;&nbsp;");
		$("#sex1").html("&nbsp;&nbsp;&nbsp;OL <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>");
		$("#sex2").html("&nbsp;&nbsp;御姐&nbsp;&nbsp;");
		$("#sex3").html("&nbsp;&nbsp;女王&nbsp;&nbsp;");
		$("#sex4").html("&nbsp;&nbsp;森女&nbsp;&nbsp;");
		$("#sex5").html("&nbsp;&nbsp;暖男&nbsp;&nbsp;");
		$("#sex6").html("&nbsp;&nbsp;酷酷哒&nbsp;&nbsp;");
		$("#sex7").html("&nbsp;&nbsp;美男子&nbsp;&nbsp;");
		$.fn.fullpage.moveSectionDown();
	});
	$("#sex2").click(function() {
		//			alert("haha!");
		localStorage.sex = 2;
		$("#sex0").html("&nbsp;&nbsp;萝莉&nbsp;&nbsp;");
		$("#sex1").html("&nbsp;&nbsp;&nbsp;OL&nbsp;&nbsp;&nbsp;");
		$("#sex2").html("&nbsp;&nbsp;御姐 <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>");
		$("#sex3").html("&nbsp;&nbsp;女王&nbsp;&nbsp;");
		$("#sex4").html("&nbsp;&nbsp;森女&nbsp;&nbsp;");
		$("#sex5").html("&nbsp;&nbsp;暖男&nbsp;&nbsp;");
		$("#sex6").html("&nbsp;&nbsp;酷酷哒&nbsp;&nbsp;");
		$("#sex7").html("&nbsp;&nbsp;美男子&nbsp;&nbsp;");
		$.fn.fullpage.moveSectionDown();
	});
	$("#sex3").click(function() {
		//			alert("haha!");
		localStorage.sex = 3;
		$("#sex0").html("&nbsp;&nbsp;萝莉&nbsp;&nbsp;");
		$("#sex1").html("&nbsp;&nbsp;&nbsp;OL&nbsp;&nbsp;&nbsp;");
		$("#sex2").html("&nbsp;&nbsp;御姐&nbsp;&nbsp;");
		$("#sex3").html("&nbsp;&nbsp;女王 <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>");
		$("#sex4").html("&nbsp;&nbsp;森女&nbsp;&nbsp;");
		$("#sex5").html("&nbsp;&nbsp;暖男&nbsp;&nbsp;");
		$("#sex6").html("&nbsp;&nbsp;酷酷哒&nbsp;&nbsp;");
		$("#sex7").html("&nbsp;&nbsp;美男子&nbsp;&nbsp;");
		$.fn.fullpage.moveSectionDown();
	});
	$("#sex4").click(function() {
		//			alert("haha!");
		localStorage.sex = 4;
		$("#sex0").html("&nbsp;&nbsp;萝莉&nbsp;&nbsp;");
		$("#sex1").html("&nbsp;&nbsp;&nbsp;OL&nbsp;&nbsp;&nbsp;");
		$("#sex2").html("&nbsp;&nbsp;御姐&nbsp;&nbsp;");
		$("#sex3").html("&nbsp;&nbsp;女王&nbsp;&nbsp;");
		$("#sex4").html("&nbsp;&nbsp;森女 <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>");
		$("#sex5").html("&nbsp;&nbsp;暖男&nbsp;&nbsp;");
		$("#sex6").html("&nbsp;&nbsp;酷酷哒&nbsp;&nbsp;");
		$("#sex7").html("&nbsp;&nbsp;美男子&nbsp;&nbsp;");
		$.fn.fullpage.moveSectionDown();
	});
	$("#sex5").click(function() {
		//			alert("haha!");
		localStorage.sex = 5;
		$("#sex0").html("&nbsp;&nbsp;萝莉&nbsp;&nbsp;");
		$("#sex1").html("&nbsp;&nbsp;&nbsp;OL&nbsp;&nbsp;&nbsp;");
		$("#sex2").html("&nbsp;&nbsp;御姐&nbsp;&nbsp;");
		$("#sex3").html("&nbsp;&nbsp;女王&nbsp;&nbsp;");
		$("#sex4").html("&nbsp;&nbsp;森女&nbsp;&nbsp;");
		$("#sex5").html("&nbsp;&nbsp;暖男  <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>");
		$("#sex6").html("&nbsp;&nbsp;酷酷哒&nbsp;&nbsp;");
		$("#sex7").html("&nbsp;&nbsp;美男子&nbsp;&nbsp;");
		$.fn.fullpage.moveSectionDown();
	});
	$("#sex6").click(function() {
		//			alert("haha!");
		localStorage.sex = 6;
		$("#sex0").html("&nbsp;&nbsp;萝莉&nbsp;&nbsp;");
		$("#sex1").html("&nbsp;&nbsp;&nbsp;OL&nbsp;&nbsp;&nbsp;");
		$("#sex2").html("&nbsp;&nbsp;御姐&nbsp;&nbsp;");
		$("#sex3").html("&nbsp;&nbsp;女王&nbsp;&nbsp;");
		$("#sex4").html("&nbsp;&nbsp;森女&nbsp;&nbsp;");
		$("#sex5").html("&nbsp;&nbsp;暖男&nbsp;&nbsp;");
		$("#sex6").html("&nbsp;&nbsp;酷酷哒 <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>");
		$("#sex7").html("&nbsp;&nbsp;美男子&nbsp;&nbsp;");
		$.fn.fullpage.moveSectionDown();
	});
	$("#sex7").click(function() {
		//			alert(localStorage.sex+"haha!");
		localStorage.sex = 7;
		$("#sex0").html("&nbsp;&nbsp;萝莉&nbsp;&nbsp;");
		$("#sex1").html("&nbsp;&nbsp;&nbsp;OL&nbsp;&nbsp;&nbsp;");
		$("#sex2").html("&nbsp;&nbsp;御姐&nbsp;&nbsp;");
		$("#sex3").html("&nbsp;&nbsp;女王&nbsp;&nbsp;");
		$("#sex4").html("&nbsp;&nbsp;森女&nbsp;&nbsp;");
		$("#sex5").html("&nbsp;&nbsp;暖男&nbsp;&nbsp;");
		$("#sex6").html("&nbsp;&nbsp;酷酷哒&nbsp;&nbsp;");
		$("#sex7").html("&nbsp;&nbsp;美男子 <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>");
		$.fn.fullpage.moveSectionDown();
	});
	//年龄
	$("#age0").click(function() {
		//			alert(localStorage.age);
		localStorage.age = 0;
		localStorage.agechecked = 1;
		checkpage2param();
		$("#age").html("18岁以下 <span class=\"caret\"></span>");
	});
	$("#age1").click(function() {
		localStorage.age = 1;
		//			localStorage.agechecked = 1;
		//			checkpage2param();
		$("#age").html("18~22岁 <span class=\"caret\"></span>");
		localStorage.agechecked = 1;
		checkpage2param();
	});
	$("#age2").click(function() {
		localStorage.age = 2;
		//			localStorage.agechecked = 1;
		//			checkpage2param();
		$("#age").html("22~25岁 <span class=\"caret\"></span>");
		localStorage.agechecked = 1;
		checkpage2param();
	});
	$("#age3").click(function() {
		localStorage.age = 3;
		$("#age").html("25~30岁 <span class=\"caret\"></span>");
		localStorage.agechecked = 1;
		checkpage2param();
	});
	$("#age4").click(function() {
		localStorage.age = 4;
		//			localStorage.agechecked = 1;
		//			checkpage2param();
		$("#age").html("30~45岁 <span class=\"caret\"></span>");
		localStorage.agechecked = 1;
		checkpage2param();
	});
	$("#age5").click(function() {
		localStorage.age = 5;
		//			localStorage.agechecked = 1;
		//			checkpage2param();
		$("#age").html("45岁以上 <span class=\"caret\"></span>");
		localStorage.agechecked = 1;
		checkpage2param();
	});
	//生活环境
	$("#surroundings0").click(function() {
		localStorage.surroundings = 0;
		//			localStorage.surroundingschecked = 1;
		//			checkpage2param();
		$("#surroundings").html("学校 <span class=\"caret\"></span>");
		localStorage.surroundingschecked = 1;
		checkpage2param();
	});
	$("#surroundings1").click(function() {
		localStorage.surroundings = 1;
		//			localStorage.surroundingschecked = 1;
		//			checkpage2param();
		$("#surroundings").html("办公室 <span class=\"caret\"></span>");
		localStorage.surroundingschecked = 1;
		checkpage2param();
	});
	$("#surroundings2").click(function() {
		localStorage.surroundings = 2;
		//			localStorage.surroundingschecked = 1;
		//			checkpage2param();
		$("#surroundings").html("室外 <span class=\"caret\"></span>");
		localStorage.surroundingschecked = 1;
		checkpage2param();
	});
	$("#surroundings3").click(function() {
		localStorage.surroundings = 3;
		//			localStorage.surroundingschecked = 1;
		//			checkpage2param();
		$("#surroundings").html("熬夜 <span class=\"caret\"></span>");
		localStorage.surroundingschecked = 1;
		checkpage2param();
	});
	//肤色
	$("#skincolor0").click(function() {
		//			alert(localStorage.skincolor);
		localStorage.skincolor = 0;
		//			localStorage.skincolorchecked = 1;
		//			checkpage2param();
		$("#skincolor").html("肤色白 <span class=\"caret\"></span>");
		localStorage.skincolorchecked = 1;
		//			tangmu("干性肌肤");
		checkpage2param();
	});
	$("#skincolor1").click(function() {
		localStorage.skincolor = 1;
		//			localStorage.skincolorchecked = 1;
		//			checkpage2param();
		$("#skincolor").html("肤色黑 <span class=\"caret\"></span>");
		localStorage.skincolorchecked = 1;
		//			tangmu("油性肌肤选用深色号粉底");
		checkpage2param();
	});
	$("#skincolor2").click(function() {
		localStorage.skincolor = 2;
		//			localStorage.skincolorchecked = 1;
		//			checkpage2param();
		$("#skincolor").html("肤色黄 <span class=\"caret\"></span>");
		localStorage.skincolorchecked = 1;
		//			tangmu("绿色隔离调节肤色");
		checkpage2param();
	});
	$("#skincolor3").click(function() {
		localStorage.skincolor = 3;
		//			localStorage.skincolorchecked = 1;
		//			checkpage2param();
		$("#skincolor").html("肤色红 <span class=\"caret\"></span>");
		localStorage.skincolorchecked = 1;
		//			tangmu("用紫色隔离调节肤色");
		checkpage2param();
	});
	//肤质
	$("#skintype0").click(function() {
		localStorage.skintype = 0;
		//			localStorage.skintchecked = 1;
		//			checkpage2param();
		$("#skintype").html("有痘痘 <span class=\"caret\"></span>");
		localStorage.skintypechecked = 1;
		//			tangmu("油性肌肤易长痘，水杨酸成分的护肤品会有消炎功效");
		checkpage2param();
	});
	$("#skintype1").click(function() {
		localStorage.skintype = 1;
		$("#skintype").html("有干纹 <span class=\"caret\"></span>");
		localStorage.skintypechecked = 1;
		//			if (localStorage.age <= 3) {
		//				tangmu("干性肌肤因缺水易出现干纹，多敷面膜哟");
		//			} else {
		//				tangmu("肌肤发出缺水警报，另外胶原蛋白此刻也在流失~女人要对自己好一点");
		//			}
		checkpage2param();
	});
	$("#skintype2").click(function() {
		localStorage.skintype = 2;
		$("#skintype").html("肤色不均有斑 <span class=\"caret\"></span>");
		localStorage.skintypechecked = 1;
		//			if (localStorage.age <= 3) {
		//				tangmu("紫外线造成的色斑可通过美白产品淡化，注意防晒哟");
		//			} else {
		//				tangmu("新陈代谢变慢导致色素堆积~除使用美白产品定期给身体排毒很重要");
		//			}
		checkpage2param();
	});
	$("#skintype3").click(function() {
		localStorage.skintype = 3;
		$("#skintype").html("脱皮 <span class=\"caret\"></span>");
		localStorage.skintypechecked = 1;
		//			tangmu("皮肤如此干燥，水乳精华面霜统统擦起来~除了补充水分含有油脂可帮助解决这个问题,底妆不服帖····");
		checkpage2param();
	});
	$("#skintype4").click(function() {
		localStorage.skintype = 4;
		$("#skintype").html("有红血丝 <span class=\"caret\"></span>");
		localStorage.skintypechecked = 1;
		//			tangmu("角质层薄易敏感~~");
		checkpage2param();
	});
	$("#skintype5").click(function() {
		localStorage.skintype = 5;
		$("#skintype").html("出油 <span class=\"caret\"></span>");
		localStorage.skintypechecked = 1;
		//			tangmu("角质层薄易敏感~~");
		checkpage2param();
	});
	//脸型
	$("#facetype0").click(function() {
		$("#facetype0").attr("src", "img/yuanlian_selected.png");
		hiddeoldface(0);
		localStorage.facetype = 0;
		localStorage.facetypechecked = 1;
		tangmu("小妞有福气呦");
		checkpage2param();
	});
	$("#facetype1").click(function() {
		$("#facetype1").attr("src", "img/changlian_selected.png");
		hiddeoldface(1);
		localStorage.facetypechecked = 1;
		localStorage.facetype = 1;
		tangmu("你脸小你全家脸都小");
		checkpage2param();
	});
	$("#facetype2").click(function() {
		$("#facetype2").attr("src", "img/guazilian_selected.png");
		hiddeoldface(2);
		localStorage.facetype = 2;
		localStorage.facetypechecked = 1;
		tangmu("天生的美人胚子");
		checkpage2param();
	});
	$("#facetype3").click(function() {
		$("#facetype3").attr("src", "img/fanglian_selected.png");
		hiddeoldface(3);
		localStorage.facetype = 3;
		localStorage.facetypechecked = 1;
		checkpage2param();
	});
	//眉毛
	$("#eyebrow0").click(function() {
		localStorage.eyebrow = 0;
		$("#eyebrow").html("粗眉毛 <span class=\"caret\"></span>");
	});
	$("#eyebrow1").click(function() {
		localStorage.eyebrow = 1;
		$("#eyebrow").html("眉毛稀疏 <span class=\"caret\"></span>");
	});
	$("#eyebrow2").click(function() {
		localStorage.eyebrow = 2;
		$("#eyebrow").html("交叉眉 <span class=\"caret\"></span>");
	});
	//眼皮eyelid
	$("#eyelid0").click(function() {
		localStorage.eyelid = 0;
		$("#eyelid").html("双眼皮 <span class=\"caret\"></span>");
	});
	$("#eyelid1").click(function() {
		localStorage.eyelid = 1;
		$("#eyelid").html("内双眼皮 <span class=\"caret\"></span>");
		tangmu("每一个内双的妹纸都是潜力股");
	});
	$("#eyelid2").click(function() {
		localStorage.eyelid = 2;
		$("#eyelid").html("单眼皮 <span class=\"caret\"></span>");
		tangmu("大地色眼影单眼皮必须的哟");
	});
	//鼻子
	$("#nose0").click(function() {
		localStorage.nose = 0;
		$("#nose").html("塌鼻子 <span class=\"caret\"></span>");
		tangmu("高光修容必备~");
	});
	$("#nose1").click(function() {
		localStorage.nose = 1;
		$("#nose").html("高鼻子 <span class=\"caret\"></span>");
		tangmu("羡煞旁人");
	});
	//嘴唇
	$("#lip0").click(function() {
		localStorage.lip = 0;
		$("#lip").html("薄嘴唇 <span class=\"caret\"></span>");
		tangmu("80%的女人都会羡慕你");
	});
	$("#lip1").click(function() {
		localStorage.lip = 1;
		$("#lip").html("厚嘴唇 <span class=\"caret\"></span>");
	});
	//		$("#lip2").click(function() {
	//			localStorage.lip = 2;
	//			$("#lip").html("上厚下薄 <span class=\"caret\"></span>");
	//		}),
	//		$("#lip3").click(function() {
	//			localStorage.lip = 3;
	//			$("#lip").html("上薄下厚 <span class=\"caret\"></span>");
	//		}),
	//头发颜色
	$("#haircolor0").click(function() {
		localStorage.haircolor = 0;
		$("#haircolor").html("黑头发 <span class=\"caret\"></span>");
	});
	$("#haircolor1").click(function() {
		localStorage.haircolor = 1;
		$("#haircolor").html("棕头发 <span class=\"caret\"></span>");
	});
	$("#haircolor2").click(function() {
		localStorage.haircolor = 2;
		$("#haircolor").html("黄头发 <span class=\"caret\"></span>");
	});
	$("#haircolor3").click(function() {
		localStorage.haircolor = 3;
		$("#haircolor").html("红头发 <span class=\"caret\"></span>");
	});
	//头发长度
	$("#hairlength0").click(function() {
		localStorage.hairlength = 0;
		$("#hairlength").html("长发 <span class=\"caret\"></span>");
	});
	$("#hairlength1").click(function() {
		localStorage.hairlength = 1;
		$("#hairlength").html("中长发 <span class=\"caret\"></span>");
	});
	$("#hairlength2").click(function() {
		localStorage.hairlength = 2;
		$("#hairlength").html("短发 <span class=\"caret\"></span>");
	});
	//刘海
	$("#bang0").click(function() {
		localStorage.bang = 0;
		$("#bang").html("有刘海 <span class=\"caret\"></span>");
	});
	$("#bang1").click(function() {
		localStorage.bang = 1;
		$("#bang").html("无刘海 <span class=\"caret\"></span>");
	});
	$("#check").click(function() {
		//进行Ajax请求
		var params = '{' +
			'"longitude":' + longitude + ',' +
			'"latitude":' + latitude + ',' +
			'"province":"' + province + '",' +
			'"city":"' + city + '",' +
			'"testtime":' + localStorage.testtime + ',' +
			'"sex":' + localStorage.sex + ',' +
			'"age":' + localStorage.age + ',' +
			'"surroundings":' + localStorage.surroundings + ',' +
			'"skincolor":' + localStorage.skincolor + ',' +
			'"skintype":' + localStorage.skintype + ',' +
			'"facetype":' + localStorage.facetype + ',' +
			'"eyebrow":' + localStorage.eyebrow + ',' +
			'"eyelid":' + localStorage.eyelid + ',' +
			'"nose":' + localStorage.nose + ',' +
			'"lip":' + localStorage.lip + ',' +
			'"haircolor":' + localStorage.haircolor + ',' +
			'"hairlength":' + localStorage.hairlength + ',' +
			'"bang":' + localStorage.bang +
			'}';
		//			alert(params);
		$.ajax({
			url: "https://api.leancloud.cn/1.1/functions/getresult",
			type: "POST",
			dataType: "text",
			headers: {
				"X-AVOSCloud-Application-Id": "blog97f16j29o7es3az6kdawqcn84kfbc77fmegvb3bzqpyx",
				"X-AVOSCloud-Application-Key": "hx13ud0oqyzyiw2gchlxa7sw27mhfj2ydvy5tfe8dj85i2cf",
				"Content-Type": "application/json"
			},
			//			contentType: "application/json",
			data: params,
			// 请求成功时执行		
			success: function(result, textStatus, jqXHR) {
				var jsonData = eval("(" + result + ")");
				dispalymodal(jsonData.result);
			},
			// 请求失败时执行				
			error: function(jqXHR, textStatus, errorMsg) {
				alert("请求失败：" + errorMsg);
			}
		});
	});

	function dispalymodal(result) {
		if (result == "") {
			alert("哎呀，您填的资料太少了，完善下再查看结果吧。");
		} else {
			//设置弹出框文字
			$('#modal-body').text(result);
			//弹出模态框
			$('#myModal').modal('show');
		}
	};

});