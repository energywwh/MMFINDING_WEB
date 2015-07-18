//存储填写结果
var TestData = AV.Object.extend("testData");
var testData = new TestData();
testData.save({
	longitude: request.params.longitude,
	latitude: request.params.latitude,
	province: request.params.province,
	city: request.params.city,
	testtime: request.params.testtime,
	sex: request.params.sex,
	age: request.params.age,
	surroundings: request.params.surroundings,
	skincolor: request.params.skincolor,
	skintype: request.params.skintype,
	facetype: request.params.facetype,
	eyebrow: request.params.eyebrow,
	eyelid: request.params.eyelid,
	nose: request.params.nose,
	lip: request.params.lip,
	haircolor: request.params.haircolor,
	hairlength: request.params.hairlength,
	bang: request.params.bang
}, {
	success: function(testData) {
		// 实例已经成功保存.
		// response.success("测试例子保存成功");
		//————根据选项得出结论————
		//获取肤质意见
		var Opinion = "";
		var SkinType = AV.Object.extend("skinType");
		var querySkinType = new AV.Query(SkinType);
		querySkinType.equalTo("optionId", request.params.skintype);
		querySkinType.first({
			success: function(object) {
				if (object.get("opinion")) {
					Opinion += object.get("opinion");
				}
				// 		 response.success(Opinion);
				//获取肤色意见
				var SkinColor = AV.Object.extend("skinColor");
				var querySkinColor = new AV.Query(SkinColor);
				querySkinColor.equalTo("optionId", request.params.skincolor);
				querySkinColor.first({
					success: function(object) {
						if (object.get("opinion")) {
							Opinion += object.get("opinion");
						}
						// response.success(Opinion);
						//获取脸型意见
						var FaceType = AV.Object.extend("faceType");
						var queryFaceType = new AV.Query(FaceType);
						queryFaceType.equalTo("optionId", request.params.facetype);
						queryFaceType.first({
							success: function(object) {
								if (object.get("opinion")) {
									Opinion += object.get("opinion");
								}
								// response.success(Opinion);
								//获取眉毛意见
								var EyeBrow = AV.Object.extend("eyeBrow");
								var queryEyeBrow = new AV.Query(EyeBrow);
								queryEyeBrow.equalTo("optionId", request.params.eyebrow);
								queryEyeBrow.first({
									success: function(object) {
										if (object.get("opinion")) {
											Opinion += object.get("opinion");
										}
										// response.success(Opinion);
										//获取眼皮意见
										var EyeLid = AV.Object.extend("eyeLid");
										var queryEyeLid = new AV.Query(EyeLid);
										queryEyeLid.equalTo("optionId", request.params.eyelid);
										queryEyeLid.first({
											success: function(object) {
												if (object.get("opinion")) {
													Opinion += object.get("opinion");
												}
												// response.success(Opinion);
												//获取鼻子意见
												var Nose = AV.Object.extend("nose");
												var queryNose = new AV.Query(Nose);
												queryNose.equalTo("optionId", request.params.nose);
												queryNose.first({
													success: function(object) {
														if (object.get("opinion")) {
															Opinion += object.get("opinion");
														}
														// response.success(Opinion);
														//获取嘴唇意见
														var Lip = AV.Object.extend("lip");
														var queryLip = new AV.Query(Lip);
														queryLip.equalTo("optionId", request.params.lip);
														queryLip.first({
															success: function(object) {
																if (object.get("opinion")) {
																	Opinion += object.get("opinion");
																}
																// 省份去重保存
																var Province = AV.Object.extend("provinceLegend");
																var queryProvince = new AV.Query(Province);
																queryProvince.equalTo("province", request.params.province);
																queryProvince.first({
																	success: function(object) {

																		var ProvinceData = new Province();
																		if (!object) {
																			//  response.success(Opinion);
																			ProvinceData.save({
																				province: request.params.province,
																				count: 1
																			}, {
																				success: function(ProvinceData) {
																					// 实例已经成功保存.
																					response.success(Opinion);
																				},
																				error: function(ProvinceData, error) {
																					// 失败了.
																					response.error("Error: " + error.code + " " + error.message);
																				}
																			});
																		} else {
																			// 获取对象
																			response.success(Opinion);
																			object.increment("count");
																			object.save();
																		}
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
	error: function(testData, error) {
		// 失败了.
		response.error("测试例子保存失败");
	}
});