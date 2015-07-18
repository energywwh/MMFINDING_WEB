var fields = ['sex', 'age', 'surroundings', 'skintype', 'skincolor', 'facetype', 'eyebrow',
	'eyelid', 'nose', 'lip', 'haircolor', 'hairlength', 'bang'
];
var resultArry = new Array();
var resultLegendArry = new Array();
var legendArry = [
	['未选择', '萝莉', 'OL', '御姐', '女王', '森女', '暖男', '酷酷哒', '美男子'], //9
	['未选择', '18岁以下', '18~22岁', '22~25岁', '25~30岁', '30~45岁', '45岁以上'], //7
	['未选择', '学校', '办公室', '室外', '熬夜'], //5
	['未选择', '有痘痘', '有干纹', '肤色不均有色斑', '脱皮', '有红血丝', '出油'], //7
	['未选择', '白', '黑', '黄', '红'], //5
	['未选择', '圆脸', '鹅蛋脸', '瓜子脸', '方脸'], //5
	['未选择', '粗眉毛', '眉毛稀疏', '交叉眉'], //4
	['未选择', '双眼皮', '内双眼皮', '单眼皮'], //4
	['未选择', '塌鼻子', '高鼻子'], //3
	['未选择', '薄嘴唇', '厚嘴唇'], //3
	['未选择', '黑', '棕', '黄', '红'], //5
	['未选择', '长发', '中长发', '短发'], //4
	['未选择', '有刘海', '无刘海'] //3
];

//获取性别数据1
var TestData = AV.Object.extend("testData");
var query = new AV.Query(TestData);
var i = 0;
var j = 0;
var k = 0;
resultArry[i] = new Array();
resultLegendArry[i] = new Array();
query.equalTo(fields[i], (j - 1)); //1
query.count({
	success: function(count) {
		if (count > 0) {
			resultArry[i][k] = count;
			resultLegendArry[i][k++] = legendArry[i][j++];
		}
		query.equalTo(fields[i], (j - 1)); //2
		query.count({
			success: function(count) {
				if (count > 0) {
					resultArry[i][k] = count;
					resultLegendArry[i][k++] = legendArry[i][j++];
				}
				query.equalTo(fields[i], (j - 1)); //3
				query.count({
					success: function(count) {
						if (count > 0) {
							resultArry[i][k] = count;
							resultLegendArry[i][k++] = legendArry[i][j++];
						}
						query.equalTo(fields[i], (j - 1)); //4
						query.count({
							success: function(count) {
								if (count > 0) {
									resultArry[i][k] = count;
									resultLegendArry[i][k++] = legendArry[i][j++];
								}
								query.equalTo(fields[i], (j - 1)); //5
								query.count({
									success: function(count) {
										if (count > 0) {
											resultArry[i][k] = count;
											resultLegendArry[i][k++] = legendArry[i][j++];
										}
										query.equalTo(fields[i], (j - 1)); //6
										query.count({
											success: function(count) {
												if (count > 0) {
													resultArry[i][k] = count;
													resultLegendArry[i][k++] = legendArry[i][j++];
												}
												query.equalTo(fields[i], (j - 1)); //7
												query.count({
													success: function(count) {
														if (count > 0) {
															resultArry[i][k] = count;
															resultLegendArry[i][k++] = legendArry[i][j++];
														}
														query.equalTo(fields[i], (j - 1)); //8
														query.count({
															success: function(count) {
																if (count > 0) {
																	resultArry[i][k] = count;
																	resultLegendArry[i][k++] = legendArry[i][j++];
																}
																query.equalTo(fields[i], (j - 1)); //9
																query.count({
																	success: function(count) {
																		if (count > 0) {
																			resultArry[i][k] = count;
																			resultLegendArry[i][k++] = legendArry[i][j++];
																		}
																		//获取年龄数据2
																		i++;
																		j = 0;
																		k = 0;
																		resultArry[i] = new Array();
																		resultLegendArry[i] = new Array();
																		query = new AV.Query(TestData);
																		query.equalTo(fields[i], (j - 1)); //1
																		query.count({
																			success: function(count) {
																				if (count > 0) {
																					resultArry[i][k] = count;
																					resultLegendArry[i][k++] = legendArry[i][j++];
																				}
																				query.equalTo(fields[i], (j - 1)); //2
																				query.count({
																					success: function(count) {
																						if (count > 0) {
																							resultArry[i][k] = count;
																							resultLegendArry[i][k++] = legendArry[i][j++];
																						}
																						query.equalTo(fields[i], (j - 1)); //3
																						query.count({
																							success: function(count) {
																								if (count > 0) {
																									resultArry[i][k] = count;
																									resultLegendArry[i][k++] = legendArry[i][j++];
																								}
																								query.equalTo(fields[i], (j - 1)); //4
																								query.count({
																									success: function(count) {
																										if (count > 0) {
																											resultArry[i][k] = count;
																											resultLegendArry[i][k++] = legendArry[i][j++];
																										}
																										query.equalTo(fields[i], (j - 1)); //5
																										query.count({
																											success: function(count) {
																												if (count > 0) {
																													resultArry[i][k] = count;
																													resultLegendArry[i][k++] = legendArry[i][j++];
																												}
																												query.equalTo(fields[i], (j - 1)); //6
																												query.count({
																													success: function(count) {
																														if (count > 0) {
																															resultArry[i][k] = count;
																															resultLegendArry[i][k++] = legendArry[i][j++];
																														}
																														query.equalTo(fields[i], (j - 1)); //7
																														query.count({
																															success: function(count) {
																																if (count > 0) {
																																	resultArry[i][k] = count;
																																	resultLegendArry[i][k++] = legendArry[i][j++];
																																}
																																//获取周围环境数据3
																																i++;
																																j = 0;
																																k = 0;
																																resultArry[i] = new Array();
																																resultLegendArry[i] = new Array();
																																query = new AV.Query(TestData);
																																query.equalTo(fields[i], (j - 1)); //1
																																query.count({
																																	success: function(count) {
																																		if (count > 0) {
																																			resultArry[i][k] = count;
																																			resultLegendArry[i][k++] = legendArry[i][j++];
																																		}
																																		query.equalTo(fields[i], (j - 1)); //2
																																		query.count({
																																			success: function(count) {
																																				if (count > 0) {
																																					resultArry[i][k] = count;
																																					resultLegendArry[i][k++] = legendArry[i][j++];
																																				}
																																				query.equalTo(fields[i], (j - 1)); //3
																																				query.count({
																																					success: function(count) {
																																						if (count > 0) {
																																							resultArry[i][k] = count;
																																							resultLegendArry[i][k++] = legendArry[i][j++];
																																						}
																																						query.equalTo(fields[i], (j - 1)); //4
																																						query.count({
																																							success: function(count) {
																																								if (count > 0) {
																																									resultArry[i][k] = count;
																																									resultLegendArry[i][k++] = legendArry[i][j++];
																																								}
																																								query.equalTo(fields[i], (j - 1)); //5
																																								query.count({
																																									success: function(count) {
																																										if (count > 0) {
																																											resultArry[i][k] = count;
																																											resultLegendArry[i][k++] = legendArry[i][j++];
																																										}
																																										//获取肤质数据4
																																										i++;
																																										j = 0;
																																										k = 0;
																																										resultArry[i] = new Array();
																																										resultLegendArry[i] = new Array();
																																										query = new AV.Query(TestData);
																																										query.equalTo(fields[i], (j - 1)); //1
																																										query.count({
																																											success: function(count) {
																																												if (count > 0) {
																																													resultArry[i][k] = count;
																																													resultLegendArry[i][k++] = legendArry[i][j++];
																																												}
																																												query.equalTo(fields[i], (j - 1)); //2
																																												query.count({
																																													success: function(count) {
																																														if (count > 0) {
																																															resultArry[i][k] = count;
																																															resultLegendArry[i][k++] = legendArry[i][j++];
																																														}
																																														query.equalTo(fields[i], (j - 1)); //3
																																														query.count({
																																															success: function(count) {
																																																if (count > 0) {
																																																	resultArry[i][k] = count;
																																																	resultLegendArry[i][k++] = legendArry[i][j++];
																																																}
																																																query.equalTo(fields[i], (j - 1)); //4
																																																query.count({
																																																	success: function(count) {
																																																		if (count > 0) {
																																																			resultArry[i][k] = count;
																																																			resultLegendArry[i][k++] = legendArry[i][j++];
																																																		}
																																																		query.equalTo(fields[i], (j - 1)); //5
																																																		query.count({
																																																			success: function(count) {
																																																				if (count > 0) {
																																																					resultArry[i][k] = count;
																																																					resultLegendArry[i][k++] = legendArry[i][j++];
																																																				}
																																																				query.equalTo(fields[i], (j - 1)); //6
																																																				query.count({
																																																					success: function(count) {
																																																						if (count > 0) {
																																																							resultArry[i][k] = count;
																																																							resultLegendArry[i][k++] = legendArry[i][j++];
																																																						}
																																																						query.equalTo(fields[i], (j - 1)); //7
																																																						query.count({
																																																							success: function(count) {
																																																								if (count > 0) {
																																																									resultArry[i][k] = count;
																																																									resultLegendArry[i][k++] = legendArry[i][j++];
																																																								}
																																																								//获取肤色数据5
																																																								i++;
																																																								j = 0;
																																																								k = 0;
																																																								resultArry[i] = new Array();
																																																								resultLegendArry[i] = new Array();
																																																								query = new AV.Query(TestData);
																																																								query.equalTo(fields[i], (j - 1)); //1
																																																								query.count({
																																																									success: function(count) {
																																																										if (count > 0) {
																																																											resultArry[i][k] = count;
																																																											resultLegendArry[i][k++] = legendArry[i][j++];
																																																										}
																																																										query.equalTo(fields[i], (j - 1)); //2
																																																										query.count({
																																																											success: function(count) {
																																																												if (count > 0) {
																																																													resultArry[i][k] = count;
																																																													resultLegendArry[i][k++] = legendArry[i][j++];
																																																												}
																																																												query.equalTo(fields[i], (j - 1)); //3
																																																												query.count({
																																																													success: function(count) {
																																																														if (count > 0) {
																																																															resultArry[i][k] = count;
																																																															resultLegendArry[i][k++] = legendArry[i][j++];
																																																														}
																																																														query.equalTo(fields[i], (j - 1)); //4
																																																														query.count({
																																																															success: function(count) {
																																																																if (count > 0) {
																																																																	resultArry[i][k] = count;
																																																																	resultLegendArry[i][k++] = legendArry[i][j++];
																																																																}
																																																																query.equalTo(fields[i], (j - 1)); //5
																																																																query.count({
																																																																	success: function(count) {
																																																																		if (count > 0) {
																																																																			resultArry[i][k] = count;
																																																																			resultLegendArry[i][k++] = legendArry[i][j++];
																																																																		}
																																																																		//获取脸型数据6
																																																																		i++;
																																																																		j = 0;
																																																																		k = 0;
																																																																		resultArry[i] = new Array();
																																																																		resultLegendArry[i] = new Array();
																																																																		query = new AV.Query(TestData);
																																																																		query.equalTo(fields[i], (j - 1)); //1
																																																																		query.count({
																																																																			success: function(count) {
																																																																				if (count > 0) {
																																																																					resultArry[i][k] = count;
																																																																					resultLegendArry[i][k++] = legendArry[i][j++];
																																																																				}
																																																																				query.equalTo(fields[i], (j - 1)); //2
																																																																				query.count({
																																																																					success: function(count) {
																																																																						if (count > 0) {
																																																																							resultArry[i][k] = count;
																																																																							resultLegendArry[i][k++] = legendArry[i][j++];
																																																																						}
																																																																						query.equalTo(fields[i], (j - 1)); //3
																																																																						query.count({
																																																																							success: function(count) {
																																																																								if (count > 0) {
																																																																									resultArry[i][k] = count;
																																																																									resultLegendArry[i][k++] = legendArry[i][j++];
																																																																								}
																																																																								query.equalTo(fields[i], (j - 1)); //4
																																																																								query.count({
																																																																									success: function(count) {
																																																																										if (count > 0) {
																																																																											resultArry[i][k] = count;
																																																																											resultLegendArry[i][k++] = legendArry[i][j++];
																																																																										}
																																																																										query.equalTo(fields[i], (j - 1)); //5
																																																																										query.count({
																																																																											success: function(count) {
																																																																												if (count > 0) {
																																																																													resultArry[i][k] = count;
																																																																													resultLegendArry[i][k++] = legendArry[i][j++];
																																																																												}
																																																																												//获取眉毛数据7
																																																																												i++;
																																																																												j = 0;
																																																																												k = 0;
																																																																												resultArry[i] = new Array();
																																																																												resultLegendArry[i] = new Array();
																																																																												query = new AV.Query(TestData);
																																																																												query.equalTo(fields[i], (j - 1)); //1
																																																																												query.count({
																																																																													success: function(count) {
																																																																														if (count > 0) {
																																																																															resultArry[i][k] = count;
																																																																															resultLegendArry[i][k++] = legendArry[i][j++];
																																																																														}
																																																																														query.equalTo(fields[i], (j - 1)); //2
																																																																														query.count({
																																																																															success: function(count) {
																																																																																if (count > 0) {
																																																																																	resultArry[i][k] = count;
																																																																																	resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																}
																																																																																query.equalTo(fields[i], (j - 1)); //3
																																																																																query.count({
																																																																																	success: function(count) {
																																																																																		if (count > 0) {
																																																																																			resultArry[i][k] = count;
																																																																																			resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																		}
																																																																																		query.equalTo(fields[i], (j - 1)); //4
																																																																																		query.count({
																																																																																			success: function(count) {
																																																																																				if (count > 0) {
																																																																																					resultArry[i][k] = count;
																																																																																					resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																				}
																																																																																				//获取眼皮数据8
																																																																																				i++;
																																																																																				j = 0;
																																																																																				k = 0;
																																																																																				resultArry[i] = new Array();
																																																																																				resultLegendArry[i] = new Array();
																																																																																				query = new AV.Query(TestData);
																																																																																				query.equalTo(fields[i], (j - 1)); //1
																																																																																				query.count({
																																																																																					success: function(count) {
																																																																																						if (count > 0) {
																																																																																							resultArry[i][k] = count;
																																																																																							resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																						}
																																																																																						query.equalTo(fields[i], (j - 1)); //2
																																																																																						query.count({
																																																																																							success: function(count) {
																																																																																								if (count > 0) {
																																																																																									resultArry[i][k] = count;
																																																																																									resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																								}
																																																																																								query.equalTo(fields[i], (j - 1)); //3
																																																																																								query.count({
																																																																																									success: function(count) {
																																																																																										if (count > 0) {
																																																																																											resultArry[i][k] = count;
																																																																																											resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																										}
																																																																																										query.equalTo(fields[i], (j - 1)); //4
																																																																																										query.count({
																																																																																											success: function(count) {
																																																																																												if (count > 0) {
																																																																																													resultArry[i][k] = count;
																																																																																													resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																												}
																																																																																												//获取鼻子数据9
																																																																																												i++;
																																																																																												j = 0;
																																																																																												k = 0;
																																																																																												resultArry[i] = new Array();
																																																																																												resultLegendArry[i] = new Array();
																																																																																												query = new AV.Query(TestData);
																																																																																												query.equalTo(fields[i], (j - 1)); //1
																																																																																												query.count({
																																																																																													success: function(count) {
																																																																																														if (count > 0) {
																																																																																															resultArry[i][k] = count;
																																																																																															resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																														}
																																																																																														query.equalTo(fields[i], (j - 1)); //2
																																																																																														query.count({
																																																																																															success: function(count) {
																																																																																																if (count > 0) {
																																																																																																	resultArry[i][k] = count;
																																																																																																	resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																}
																																																																																																query.equalTo(fields[i], (j - 1)); //3
																																																																																																query.count({
																																																																																																	success: function(count) {
																																																																																																		if (count > 0) {
																																																																																																			resultArry[i][k] = count;
																																																																																																			resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																		}
																																																																																																		//获取嘴唇数据10
																																																																																																		i++;
																																																																																																		j = 0;
																																																																																																		k = 0;
																																																																																																		resultArry[i] = new Array();
																																																																																																		resultLegendArry[i] = new Array();
																																																																																																		query = new AV.Query(TestData);
																																																																																																		query.equalTo(fields[i], (j - 1)); //1
																																																																																																		query.count({
																																																																																																			success: function(count) {
																																																																																																				if (count > 0) {
																																																																																																					resultArry[i][k] = count;
																																																																																																					resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																				}
																																																																																																				query.equalTo(fields[i], (j - 1)); //2
																																																																																																				query.count({
																																																																																																					success: function(count) {
																																																																																																						if (count > 0) {
																																																																																																							resultArry[i][k] = count;
																																																																																																							resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																						}
																																																																																																						query.equalTo(fields[i], (j - 1)); //3
																																																																																																						query.count({
																																																																																																							success: function(count) {
																																																																																																								if (count > 0) {
																																																																																																									resultArry[i][k] = count;
																																																																																																									resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																								}
																																																																																																								//获取头发颜色数据11
																																																																																																								i++;
																																																																																																								j = 0;
																																																																																																								k = 0;
																																																																																																								resultArry[i] = new Array();
																																																																																																								resultLegendArry[i] = new Array();
																																																																																																								query = new AV.Query(TestData);
																																																																																																								query.equalTo(fields[i], (j - 1)); //1
																																																																																																								query.count({
																																																																																																									success: function(count) {
																																																																																																										if (count > 0) {
																																																																																																											resultArry[i][k] = count;
																																																																																																											resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																										}
																																																																																																										query.equalTo(fields[i], (j - 1)); //2
																																																																																																										query.count({
																																																																																																											success: function(count) {
																																																																																																												if (count > 0) {
																																																																																																													resultArry[i][k] = count;
																																																																																																													resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																												}
																																																																																																												query.equalTo(fields[i], (j - 1)); //3
																																																																																																												query.count({
																																																																																																													success: function(count) {
																																																																																																														if (count > 0) {
																																																																																																															resultArry[i][k] = count;
																																																																																																															resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																														}
																																																																																																														query.equalTo(fields[i], (j - 1)); //4
																																																																																																														query.count({
																																																																																																															success: function(count) {
																																																																																																																if (count > 0) {
																																																																																																																	resultArry[i][k] = count;
																																																																																																																	resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																																}
																																																																																																																query.equalTo(fields[i], (j - 1)); //5
																																																																																																																query.count({
																																																																																																																	success: function(count) {
																																																																																																																		if (count > 0) {
																																																																																																																			resultArry[i][k] = count;
																																																																																																																			resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																																		}
																																																																																																																		//获取头发长度数据12
																																																																																																																		i++;
																																																																																																																		j = 0;
																																																																																																																		k = 0;
																																																																																																																		resultArry[i] = new Array();
																																																																																																																		resultLegendArry[i] = new Array();
																																																																																																																		query = new AV.Query(TestData);
																																																																																																																		query.equalTo(fields[i], (j - 1)); //1
																																																																																																																		query.count({
																																																																																																																			success: function(count) {
																																																																																																																				if (count > 0) {
																																																																																																																					resultArry[i][k] = count;
																																																																																																																					resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																																				}
																																																																																																																				query.equalTo(fields[i], (j - 1)); //2
																																																																																																																				query.count({
																																																																																																																					success: function(count) {
																																																																																																																						if (count > 0) {
																																																																																																																							resultArry[i][k] = count;
																																																																																																																							resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																																						}
																																																																																																																						query.equalTo(fields[i], (j - 1)); //3
																																																																																																																						query.count({
																																																																																																																							success: function(count) {
																																																																																																																								if (count > 0) {
																																																																																																																									resultArry[i][k] = count;
																																																																																																																									resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																																								}
																																																																																																																								query.equalTo(fields[i], (j - 1)); //4
																																																																																																																								query.count({
																																																																																																																									success: function(count) {
																																																																																																																										if (count > 0) {
																																																																																																																											resultArry[i][k] = count;
																																																																																																																											resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																																										}
																																																																																																																										//获取刘海数据13
																																																																																																																										i++;
																																																																																																																										j = 0;
																																																																																																																										k = 0;
																																																																																																																										resultArry[i] = new Array();
																																																																																																																										resultLegendArry[i] = new Array();
																																																																																																																										query = new AV.Query(TestData);
																																																																																																																										query.equalTo(fields[i], (j - 1)); //1
																																																																																																																										query.count({
																																																																																																																											success: function(count) {
																																																																																																																												if (count > 0) {
																																																																																																																													resultArry[i][k] = count;
																																																																																																																													resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																																												}
																																																																																																																												query.equalTo(fields[i], (j - 1)); //2
																																																																																																																												query.count({
																																																																																																																													success: function(count) {
																																																																																																																														if (count > 0) {
																																																																																																																															resultArry[i][k] = count;
																																																																																																																															resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																																														}
																																																																																																																														query.equalTo(fields[i], (j - 1)); //3
																																																																																																																														query.count({
																																																																																																																															success: function(count) {
																																																																																																																																if (count > 0) {
																																																																																																																																	resultArry[i][k] = count;
																																																																																																																																	resultLegendArry[i][k++] = legendArry[i][j++];
																																																																																																																																}

																																																																																																																																//获取省份数据
																																																																																																																																i++;
																																																																																																																																resultArry[i] = new Array();
																																																																																																																																resultLegendArry[i] = new Array();
																																																																																																																																var ProvinceLegend = AV.Object.extend("provinceLegend");
																																																																																																																																var queryProvinceLegend = new AV.Query(ProvinceLegend);
																																																																																																																																queryProvinceLegend.select("province", "count");
																																																																																																																																queryProvinceLegend.find().then(function(results) {
																																																																																																																																	// each of results will only have the selected fields available.
																																																																																																																																	for (k = 0; k < results.length; k++) {
																																																																																																																																		var object = results[k];
																																																																																																																																		resultArry[i][k] = object.get('count');
																																																																																																																																		resultLegendArry[i][k] = object.get('province');
																																																																																																																																	}
																																																																																																																																	result = {
																																																																																																																																		resultArry: resultArry,
																																																																																																																																		resultLegendArry: resultLegendArry
																																																																																																																																	}
																																																																																																																																	response.success(result);
																																																																																																																																});
																																																																																																																															},
																																																																																																																															error: function(error) {
																																																																																																																																response.error("Error: " + error.code + " " + error.message);
																																																																																																																															}
																																																																																																																														});
																																																																																																																													},
																																																																																																																													error: function(error) {
																																																																																																																														response.error("Error: " + error.code + " " + error.message);
																																																																																																																													}
																																																																																																																												});
																																																																																																																											},
																																																																																																																											error: function(error) {
																																																																																																																												response.error("Error: " + error.code + " " + error.message);
																																																																																																																											}
																																																																																																																										});
																																																																																																																									},
																																																																																																																									error: function(error) {
																																																																																																																										response.error("Error: " + error.code + " " + error.message);
																																																																																																																									}
																																																																																																																								});
																																																																																																																							},
																																																																																																																							error: function(error) {
																																																																																																																								response.error("Error: " + error.code + " " + error.message);
																																																																																																																							}
																																																																																																																						});
																																																																																																																					},
																																																																																																																					error: function(error) {
																																																																																																																						response.error("Error: " + error.code + " " + error.message);
																																																																																																																					}
																																																																																																																				});
																																																																																																																			},
																																																																																																																			error: function(error) {
																																																																																																																				response.error("Error: " + error.code + " " + error.message);
																																																																																																																			}
																																																																																																																		});
																																																																																																																	},
																																																																																																																	error: function(error) {
																																																																																																																		response.error("Error: " + error.code + " " + error.message);
																																																																																																																	}
																																																																																																																});
																																																																																																															},
																																																																																																															error: function(error) {
																																																																																																																response.error("Error: " + error.code + " " + error.message);
																																																																																																															}
																																																																																																														});
																																																																																																													},
																																																																																																													error: function(error) {
																																																																																																														response.error("Error: " + error.code + " " + error.message);
																																																																																																													}
																																																																																																												});
																																																																																																											},
																																																																																																											error: function(error) {
																																																																																																												response.error("Error: " + error.code + " " + error.message);
																																																																																																											}
																																																																																																										});
																																																																																																									},
																																																																																																									error: function(error) {
																																																																																																										response.error("Error: " + error.code + " " + error.message);
																																																																																																									}
																																																																																																								});
																																																																																																							},
																																																																																																							error: function(error) {
																																																																																																								response.error("Error: " + error.code + " " + error.message);
																																																																																																							}
																																																																																																						});
																																																																																																					},
																																																																																																					error: function(error) {
																																																																																																						response.error("Error: " + error.code + " " + error.message);
																																																																																																					}
																																																																																																				});
																																																																																																			},
																																																																																																			error: function(error) {
																																																																																																				response.error("Error: " + error.code + " " + error.message);
																																																																																																			}
																																																																																																		});
																																																																																																	},
																																																																																																	error: function(error) {
																																																																																																		response.error("Error: " + error.code + " " + error.message);
																																																																																																	}
																																																																																																});
																																																																																															},
																																																																																															error: function(error) {
																																																																																																response.error("Error: " + error.code + " " + error.message);
																																																																																															}
																																																																																														});
																																																																																													},
																																																																																													error: function(error) {
																																																																																														response.error("Error: " + error.code + " " + error.message);
																																																																																													}
																																																																																												});
																																																																																											},
																																																																																											error: function(error) {
																																																																																												response.error("Error: " + error.code + " " + error.message);
																																																																																											}
																																																																																										});
																																																																																									},
																																																																																									error: function(error) {
																																																																																										response.error("Error: " + error.code + " " + error.message);
																																																																																									}
																																																																																								});
																																																																																							},
																																																																																							error: function(error) {
																																																																																								response.error("Error: " + error.code + " " + error.message);
																																																																																							}
																																																																																						});
																																																																																					},
																																																																																					error: function(error) {
																																																																																						response.error("Error: " + error.code + " " + error.message);
																																																																																					}
																																																																																				});
																																																																																			},
																																																																																			error: function(error) {
																																																																																				response.error("Error: " + error.code + " " + error.message);
																																																																																			}
																																																																																		});
																																																																																	},
																																																																																	error: function(error) {
																																																																																		response.error("Error: " + error.code + " " + error.message);
																																																																																	}
																																																																																});
																																																																															},
																																																																															error: function(error) {
																																																																																response.error("Error: " + error.code + " " + error.message);
																																																																															}
																																																																														});
																																																																													},
																																																																													error: function(error) {
																																																																														response.error("Error: " + error.code + " " + error.message);
																																																																													}
																																																																												});
																																																																											},
																																																																											error: function(error) {
																																																																												response.error("Error: " + error.code + " " + error.message);
																																																																											}
																																																																										});
																																																																									},
																																																																									error: function(error) {
																																																																										response.error("Error: " + error.code + " " + error.message);
																																																																									}
																																																																								});
																																																																							},
																																																																							error: function(error) {
																																																																								response.error("Error: " + error.code + " " + error.message);
																																																																							}
																																																																						});
																																																																					},
																																																																					error: function(error) {
																																																																						response.error("Error: " + error.code + " " + error.message);
																																																																					}
																																																																				});
																																																																			},
																																																																			error: function(error) {
																																																																				response.error("Error: " + error.code + " " + error.message);
																																																																			}
																																																																		});
																																																																	},
																																																																	error: function(error) {
																																																																		response.error("Error: " + error.code + " " + error.message);
																																																																	}
																																																																});
																																																															},
																																																															error: function(error) {
																																																																response.error("Error: " + error.code + " " + error.message);
																																																															}
																																																														});
																																																													},
																																																													error: function(error) {
																																																														response.error("Error: " + error.code + " " + error.message);
																																																													}
																																																												});
																																																											},
																																																											error: function(error) {
																																																												response.error("Error: " + error.code + " " + error.message);
																																																											}
																																																										});
																																																									},
																																																									error: function(error) {
																																																										response.error("Error: " + error.code + " " + error.message);
																																																									}
																																																								});
																																																							},
																																																							error: function(error) {
																																																								response.error("Error: " + error.code + " " + error.message);
																																																							}
																																																						});
																																																					},
																																																					error: function(error) {
																																																						response.error("Error: " + error.code + " " + error.message);
																																																					}
																																																				});
																																																			},
																																																			error: function(error) {
																																																				response.error("Error: " + error.code + " " + error.message);
																																																			}
																																																		});
																																																	},
																																																	error: function(error) {
																																																		response.error("Error: " + error.code + " " + error.message);
																																																	}
																																																});
																																															},
																																															error: function(error) {
																																																response.error("Error: " + error.code + " " + error.message);
																																															}
																																														});
																																													},
																																													error: function(error) {
																																														response.error("Error: " + error.code + " " + error.message);
																																													}
																																												});
																																											},
																																											error: function(error) {
																																												response.error("Error: " + error.code + " " + error.message);
																																											}
																																										});
																																									},
																																									error: function(error) {
																																										response.error("Error: " + error.code + " " + error.message);
																																									}
																																								});
																																							},
																																							error: function(error) {
																																								response.error("Error: " + error.code + " " + error.message);
																																							}
																																						});
																																					},
																																					error: function(error) {
																																						response.error("Error: " + error.code + " " + error.message);
																																					}
																																				});
																																			},
																																			error: function(error) {
																																				response.error("Error: " + error.code + " " + error.message);
																																			}
																																		});
																																	},
																																	error: function(error) {
																																		response.error("Error: " + error.code + " " + error.message);
																																	}
																																});
																															},
																															error: function(error) {
																																response.error("Error: " + error.code + " " + error.message);
																															}
																														});
																													},
																													error: function(error) {
																														response.error("Error: " + error.code + " " + error.message);
																													}
																												});
																											},
																											error: function(error) {
																												response.error("Error: " + error.code + " " + error.message);
																											}
																										});
																									},
																									error: function(error) {
																										response.error("Error: " + error.code + " " + error.message);
																									}
																								});
																							},
																							error: function(error) {
																								response.error("Error: " + error.code + " " + error.message);
																							}
																						});
																					},
																					error: function(error) {
																						response.error("Error: " + error.code + " " + error.message);
																					}
																				});
																			},
																			error: function(error) {
																				response.error("Error: " + error.code + " " + error.message);
																			}
																		});
																	},
																	error: function(error) {
																		response.error("Error: " + error.code + " " + error.message);
																	}
																});
															},
															error: function(error) {
																response.error("Error: " + error.code + " " + error.message);
															}
														});
													},
													error: function(error) {
														response.error("Error: " + error.code + " " + error.message);
													}
												});
											},
											error: function(error) {
												response.error("Error: " + error.code + " " + error.message);
											}
										});
									},
									error: function(error) {
										response.error("Error: " + error.code + " " + error.message);
									}
								});
							},
							error: function(error) {
								response.error("Error: " + error.code + " " + error.message);
							}
						});
					},
					error: function(error) {
						response.error("Error: " + error.code + " " + error.message);
					}
				});
			},
			error: function(error) {
				response.error("Error: " + error.code + " " + error.message);
			}
		});
	},
	error: function(error) {
		response.error("Error: " + error.code + " " + error.message);
	}
});