
importClass(android.content.Context);
ui.layout(
	<vertical bg="#f5f5f5" textSize="15sp">
		<appbar >
			<toolbar title="视频号自动点赞 " />
		</appbar>

		<vertical margin="10" bg="#ffffff" padding="10 5" radius="20">
			<horizontal layout_gravity="center" gravity="center">
				<text textColor="#353535" text="脚本卡密:"></text>
				<input margin="10 0 0 0" w="150sp" textSize="15sp" text="" gravity="center" hint="请输入" id="password" />
				<text id="passworderrortip" textColor="#fa5151" alpha="0" gravity="right" margin="0" >卡密错误</text>
			</horizontal>

			<horizontal layout_gravity="center" gravity="center" margin="0 -5 0 0" >
				<text>👉️</text>
				<text textColor="#00bcd4" textSize="10sp" text="登录“视蘋号下载神器”微信小程序, 获取当天免费脚本卡密"></text>
			</horizontal>

		</vertical>

		<vertical margin="10" bg="#ffffff" padding="10" radius="20">
			<Switch id="autoService" text="{{auto.service != null ? '已打开无障碍服务' : '请打开无障碍服务' }}" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp" />

			<Switch id="floatService" text="悬浮窗权限" checked="{{false}}" padding="8 8 8 8" textSize="15sp" />


			<horizontal margin="10">
				<text text="每分钟点赞次数:"></text>
				<input text="100" gravity="center" hint="默认点赞100次" w="100" marginLeft="10" inputType="number" id="dianzanTime" />
			</horizontal>

			<button bg="#009788" textColor="#ffffff" textSize="58px" layout_gravity="center" gravity="center" h="180px" w="800px" id="start" marginTop="50px" text="开始运行" />

			<text margin="10 20" textColor="#999999" textSize="10sp" text="温馨提示: 当直播点赞量大于2000而且比当场观看人数多时，会默认延迟5分钟再执行脚本点赞。"></text>

		</vertical>
	</vertical>
);



function createFloatWindow() {
	w = floaty.rawWindow(
		<vertical gravity="center" padding="10" bg="#000000" alpha="0.5">

			<text w="auto" id="windowDianZan" gravity="center" textColor="#ffffff">点赞次数：0</text>

			<button id="closeScript" bg="#009788" textColor="#ffffff" textSize="15" gravity="center" h="40" w="80" marginTop="10" text="停止"></button>

		</vertical>
	);
	w.setPosition(device.width - 400, 300);
	w.closeScript.on('click', function () {
		exit();
		engines.stopAllAndToast();
		threads.shutDownAll();
		toast('脚本停止运行了');
	});
}

var livePage = {};//直播页面
var w = null;//浮窗对象
var globalData = {
	api: 'https://luokem.github.io/',
	vipDianZanTime: 0,//vip增加点赞数
};

ui.autoService.on("click", function () {
	// 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
	if (auto.service == null) {
		toast('请在该页面查找并开启无障碍功能服务')
	}

	app.startActivity({
		action: "android.settings.ACCESSIBILITY_SETTINGS"
	});
});




// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
	// 此时根据服务的开启状况，同步开关的状态
	checkService();
});

// 检查权限是否开启
function checkService() {
	if(auto.service != null) {
		ui.autoService.checked = true;
		ui.autoService.setText('已打开无障碍服务');
		
	}else {
		ui.autoService.checked = false;
		ui.autoService.setText('请打开无障碍服务');
		return {value: false, text: '请打开无障碍服务'}
	}

	if(android.provider.Settings.canDrawOverlays(context)) {
		ui.floatService.checked = true;
		ui.floatService.setText('已打开悬浮窗权限');
	}else {
		
		ui.floatService.checked = false;
		ui.floatService.setText('请打开悬浮窗权限');
		return {value: false, text: '请打开悬浮窗权限'}
	}
}

checkService();



ui.floatService.on("click", function () {
	app.startActivity({
		packageName: "com.android.settings",
		className: "com.android.settings.Settings$AppDrawOverlaySettingsActivity",
		data: "package:" + context.getPackageName().toString()
	});
});




ui.start.on("click", function () {
	//程序开始运行以前判断无障碍服务
	if (checkService()) {
		toast(checkService().text);
		return;
	}

	threads.start(function () {
		
		if (!getPassword()) return;
		if (!checkValue()) return;
		
		app.launchPackage('com.tencent.mm');
		sleep(3000);
		var weixin = text('微信').className('TextView').findOne(4000);
		if (weixin) {
			click(weixin.bounds().centerX(), weixin.bounds().centerY());
			sleep(2000);
		}
		createFloatWindow();
		onLoad();
	});


});



function getPassword() {
	var password = ui.password.text();
	if (!password) {
		ui.passworderrortip.alpha = 1;
		ui.run(function () {
			ui.passworderrortip.setText('不能为空');
		});

		return false;
	}

	ui.run(function () {
		ui.passworderrortip.setText('确认中...');
	});

	var shipinhaokami = '';
	var r = http.get("https://luokem.github.io//-_/");
	var html = r.body.string();

	if (r.statusCode == 200 && html) {
		var regexp = new RegExp('<div id="shipinhao-kami">(.+)</div>');
		if (regexp.test(html)) {
			console.log(RegExp.$1)
			shipinhaokami = RegExp.$1;
		}

	} else {
		toast('服务异常, 请稍后重试');
		return false;
	}

	if (password != shipinhaokami) {
		click(100, 100);
		ui.run(function () {
			ui.passworderrortip.alpha = 1;
			ui.passworderrortip.setText('卡密错误');
		});
		toast('脚本卡密输入错误');
		return false;
	}

	toast('登录成功');
	sleep(500);
	ui.run(function () {
		ui.passworderrortip.setText('');
		ui.passworderrortip.alpha = 0;
	});


	return true;
}

function checkValue() {
	var dianzanTime = ui.dianzanTime.text();
	if (dianzanTime > 360) {
		toast('点赞次数设置太大');
		ui.dianzanTime.setText(180);
		return false;
	}

	return true;
}

function onLoad() {
	observeKey();
	safeModeToYanger();
	dianzan();
}

/*
 * 按音量键下键就停止脚本 
*/
function observeKey() {
	events.observeKey();
	events.onKeyDown("volume_down", function (event) {
		// threadSwipeVideo && threadSwipeVideo.interrupt();
		exit();
		engines.stopAllAndToast();
		threads.shutDownAll();
		device.cancelKeeping();
		toast('脚本停止运行了');
	});
}



// 青少年模式弹窗
function safeModeToYanger() {
	if (text('为呵护未成年人健康成长，微信推出青少年模式。该模式下部分功能将受限制使用，请监护人主动设置。').className('TextView').exists()) {
		className('Button').clickable(true).text('我知道了').click();
		sleep(1500);
	}
}



// 点赞
function dianzan() {
	toast('请打开正在直播页面');
	var dianzan = id('dpb').findOne();
	var dianzanTime = Number(ui.dianzanTime.text());
	var centerX = dianzan.bounds().centerX();
	var centerY = dianzan.bounds().centerY();
	var time = Math.floor(60000 / dianzanTime) - 200;
	console.log("time", time)
	var t = 0;
	parseLivePage();
while(livePage.LiveRoomLikeNum === undefined || livePage.LiveRoomWatchNum === undefined  ) {
	sleep(5000);
	parseLivePage();
}

	if (livePage.LiveRoomLikeNum > 2000 && livePage.LiveRoomLikeNum >= livePage.LiveRoomWatchNum + globalData.vipDianZanTime) {
		toast('点赞数量大于观看量, 5分钟后继续点赞');
		sleep(60000 * 5);
	}
	toast('开始点赞');
	var runDisable = true;

	while (runDisable) {
		t++;
		ui.run(function () {
			w.windowDianZan.setText('点赞次数: ' + t);
		});


		console.log(livePage.LiveRoomLikeNum, livePage.LiveRoomWatchNum, t, dianzanTime, t % (dianzanTime * 2))
		click(centerX, centerY);
		if (t > 100 & t % (dianzanTime * 2) == 0) {
			parseLivePage();
			if (livePage.LiveRoomLikeNum >= livePage.LiveRoomWatchNum) {
				toast('点赞数量大于观看量, 5分钟后继续点赞');
				sleep(60000 * 5);
			}
		}

		sleep(time);
		safeModeToYanger();
	}
}

// 解析直播页面
function parseLivePage() {
	var LiveRoomWatchDom = textContains('人看过').drawingOrder(1).focusable(false).findOne();//多少人看过
	if (LiveRoomWatchDom) {
		var LiveRoomWatchDomTexts = LiveRoomWatchDom.text().split(' · ');
		livePage.LiveRoomWatchNum = LiveRoomWatchDomTexts[0].replace('人看过', '').trim();
		console.log("LiveRoomWatchNum", livePage.LiveRoomWatchNum)
		if (livePage.LiveRoomWatchNum.indexOf('万') != -1) {
			livePage.LiveRoomWatchNum = livePage.LiveRoomWatchNum.replace('万', '');
			livePage.LiveRoomWatchNum = Number(livePage.LiveRoomWatchNum) * 10000;
		} else {
			livePage.LiveRoomWatchNum = Number(livePage.LiveRoomWatchNum);
		}

		if (LiveRoomWatchDomTexts.length > 1) {
			livePage.LiveRoomHotNum = LiveRoomWatchDomTexts[1].replace('热度', '').trim();

			if (livePage.LiveRoomHotNum.indexOf('万') != -1) {
				livePage.LiveRoomHotNum = livePage.LiveRoomHotNum.replace('万', '');
				livePage.LiveRoomHotNum = Number(livePage.LiveRoomHotNum) * 10000;
			} else {
				livePage.LiveRoomHotNum = Number(livePage.LiveRoomHotNum);
			}

		}
	}

	var likeBtn = id('dpb').findOne();
	var num = 0;
	if (likeBtn) {
		var numTextDom = likeBtn.find(textMatches(".*\\d+.*"));
		console.log("numTextDom",numTextDom)
		if (numTextDom.length > 0) {
			if (numTextDom[0].text().indexOf('万') != -1) {
				num = numTextDom[0].text().replace('万', '');
				num = num * 10000;
			} else {
				num = Number(numTextDom[0].text());
			}
			livePage.LiveRoomLikeNum = num;
		}
	}

	console.log("livePage.LiveRoomLikeNum",LiveRoomWatchDom, livePage.LiveRoomLikeNum)



}



function post(options) {
	options.url = options.url[0] == '/' ? options.url : ('/' + options.url);
	options.headers = options.headers ? options.headers : {};
	options.showMessage = options.showMessage === undefined ? true : options.showMessage;
	options.sync = options.sync === undefined ? true : options.sync;
	options.data = options.data ? options.data : {};

	var headers = Object.assign({

	}, options.headers);

	if (options.sync) {// 有回调，异步执行
		http.post(globalData.api + options.url, options.data, {
			headers: headers
		}, function (res) {
			try {
				if (res.statusCode == 200) {
					var RES = JSON.parse(res.body.string());
					console.log(options.url + ' post返回', RES)
					if (RES.Code != 1 && options.showMessage) {

						toast('接口异常' + options.url);
					} else {
						if (options.showMessage) {
							toast('请求成功: ' + options.url);
						}

						options.success && options.success(RES);
					}

				} else {
					toast('网络异常' + options.url);
				}
			}
			catch (err) {

			}

		})

	} else {//同步，阻塞进行
		console.log("aaaa", globalData.api + options.url);

		var res = http.post(globalData.api + options.url, options.data, {
			headers: headers
		});
		try {
			if (res.statusCode == 200) {
				var RES = JSON.parse(res.body.string());
				console.log(options.url + ' post返回', RES)
				if (RES.Code != 1 && options.showMessage) {
					toast('接口异常' + options.url);
				} else {
					if (options.showMessage) {
						toast('保存成功: ' + options.url);
					}

					return RES;
				}

			} else {
				toast('网络异常' + options.url);
			}
		}
		catch (err) {
			console.log("同步 post error catch", err)
		}
	}

}