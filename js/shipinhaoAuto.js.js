"ui";

ui.statusBarColor("#409EFF");
var globalData = {
	forms: [],//form表单
	thread: ''
}
observeKey();
showMainUI();
checkService();
clearStorage();
onload();

threads.start(function(){
console.show();
console.setPosition(50, device.height/2)
console.setSize(50,50);
})


var myee = events.emitter();	
InitEventEmit();


//主界面
function showMainUI() {
	ui.layout(
		<vertical bg="#f5f5f5" textSize="15sp">
			<ScrollView>
				<vertical>
					<vertical margin="10" bg="#ffffff" padding="10" radius="20">
						<Switch id="autoService" text="{{auto.service != null ? '已打开无障碍服务了' : '请打开无障碍服务。' }}" checked="{{true}}" padding="8 8 8 8" textSize="15sp" />
					</vertical>
					{/* 视频序号1 */}
					<vertical margin="10" bg="#ffffff" padding="10 5" radius="20">

						<vertical padding="4">
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="15sp" textStyle="bold" >1</text>

							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="视频序号"  ></text>
								<input w="80" inputType="number" textSize="13sp" text="" gravity="center" hint="数字" id="video1" />
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="定时时间"  ></text>
								<input w="150" textSize="13sp" text="" gravity="center" hint="日期时间" id="videosettime1" />
								<text id="nowTime1" textColor="#353535" textSize="13sp" text="此刻"  ></text>
							</horizontal>
							<horizontal layout_gravity="center" gravity="center" margin="0 -5 0 0" >
								<text>👉️</text>
								<text textColor="#00bcd4" textSize="10sp" text="如9月20号15点30分，格式为9-20 15:30"></text>
							</horizontal>
						</vertical>
						<linear gravity="">
							<text id="message1" w="200sp" gravity="right" margin="0 0 10 0"></text>
							<button id="start1" text="开启"></button>
						</linear>
					</vertical>


					{/* 视频序号2 */}
					<vertical margin="10" bg="#ffffff" padding="10 5" radius="20">

						<vertical padding="4">
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="15sp" textStyle="bold" >2</text>
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="视频序号"  ></text>
								<input w="80" textSize="13sp" text="" gravity="center" hint="数字" id="video2" />
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="定时时间"  ></text>
								<input w="180" textSize="13sp" text="" gravity="center" hint="日期时间" id="videosettime2" />
								<text id="nowTime2" textColor="#353535" textSize="13sp" text="此刻"  ></text>
							</horizontal>
						</vertical>
						<linear gravity="">
							<text id="message2" w="200sp" gravity="right" margin="0 0 10 0"></text>
							<button id="start2" text="开启"></button>
						</linear>
					</vertical>


					{/* 视频序号3 */}
					<vertical margin="10" bg="#ffffff" padding="10 5" radius="20">

						<vertical padding="4">
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="15sp" textStyle="bold" >3</text>
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="视频序号"  ></text>
								<input w="80" textSize="13sp" text="" gravity="center" hint="数字" id="video3" />
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="定时时间"  ></text>
								<input w="180" textSize="13sp" text="" gravity="center" hint="日期时间" id="videosettime3" />
								<text id="nowTime3" textColor="#353535" textSize="13sp" text="此刻"  ></text>
							</horizontal>
						</vertical>
						<linear gravity="">
							<text id="message3" w="200sp" gravity="right" margin="0 0 10 0"></text>
							<button id="start3" text="开启"></button>
						</linear>
					</vertical>


					{/* 视频序号4 */}
					<vertical margin="10" bg="#ffffff" padding="10 5" radius="20">

						<vertical padding="4">
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="15sp" textStyle="bold" >4</text>
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="视频序号"  ></text>
								<input w="80" textSize="13sp" text="" gravity="center" hint="数字" id="video4" />
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="定时时间"  ></text>
								<input w="180" textSize="13sp" text="" gravity="center" hint="日期时间" id="videosettime4" />
								<text id="nowTime4" textColor="#353535" textSize="13sp" text="此刻"  ></text>
							</horizontal>
						</vertical>
						<linear gravity="">
							<text id="message4" w="200sp" gravity="right" margin="0 0 10 0"></text>
							<button id="start4" text="开启"></button>
						</linear>
					</vertical>



					{/* 视频序号5 */}
					<vertical margin="10" bg="#ffffff" padding="10 5" radius="20">

						<vertical padding="4">
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="15sp" textStyle="bold" >5</text>
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="视频序号"  ></text>
								<input w="80" textSize="13sp" text="" gravity="center" hint="数字" id="video5" />
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="定时时间"  ></text>
								<input w="180" textSize="13sp" text="" gravity="center" hint="日期时间" id="videosettime5" />
								<text id="nowTime5" textColor="#353535" textSize="13sp" text="此刻"  ></text>
							</horizontal>
						</vertical>
						<linear gravity="">
							<text id="message5" w="200sp" gravity="right" margin="0 0 10 0"></text>
							<button id="start5" text="开启"></button>
						</linear>
					</vertical>


					{/* 视频序号6 */}
					<vertical margin="10" bg="#ffffff" padding="10 5" radius="20">

						<vertical padding="4">
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="15sp" textStyle="bold" >6</text>
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="视频序号"  ></text>
								<input w="80" textSize="13sp" text="" gravity="center" hint="数字" id="video6" />
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="定时时间"  ></text>
								<input w="180" textSize="13sp" text="" gravity="center" hint="日期时间" id="videosettime6" />
								<text id="nowTime6" textColor="#353535" textSize="13sp" text="此刻"  ></text>
							</horizontal>
						</vertical>
						<linear gravity="">
							<text id="message6" w="200sp" gravity="right" margin="0 0 10 0"></text>
							<button id="start6" text="开启"></button>
						</linear>
					</vertical>


					{/* 视频序号7 */}
					<vertical margin="10" bg="#ffffff" padding="10 5" radius="20">

						<vertical padding="4">
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="15sp" textStyle="bold" >7</text>
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="视频序号"  ></text>
								<input w="80" textSize="13sp" text="" gravity="center" hint="数字" id="video7" />
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="定时时间"  ></text>
								<input w="180" textSize="13sp" text="" gravity="center" hint="日期时间" id="videosettime7" />
								<text id="nowTime7" textColor="#353535" textSize="13sp" text="此刻"  ></text>
							</horizontal>
						</vertical>
						<linear gravity="">
							<text id="message7" w="200sp" gravity="right" margin="0 0 10 0"></text>
							<button id="start7" text="开启"></button>
						</linear>
					</vertical>



					{/* 视频序号8 */}
					<vertical margin="10" bg="#ffffff" padding="10 5" radius="20">

						<vertical padding="4">
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="15sp" textStyle="bold" >8</text>
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="视频序号"  ></text>
								<input w="80" textSize="13sp" text="" gravity="center" hint="数字" id="video8" />
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="定时时间"  ></text>
								<input w="180" textSize="13sp" text="" gravity="center" hint="日期时间" id="videosettime8" />
								<text id="nowTime8" textColor="#353535" textSize="13sp" text="此刻"  ></text>
							</horizontal>
						</vertical>
						<linear gravity="">
							<text id="message8" w="200sp" gravity="right" margin="0 0 10 0"></text>
							<button id="start8" text="开启"></button>
						</linear>
					</vertical>


					{/* 视频序号9 */}
					<vertical margin="10" bg="#ffffff" padding="10 5" radius="20">

						<vertical padding="4">
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="15sp" textStyle="bold" >9</text>
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="视频序号"  ></text>
								<input w="80" textSize="13sp" text="" gravity="center" hint="数字" id="video9" />
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="定时时间"  ></text>
								<input w="180" textSize="13sp" text="" gravity="center" hint="日期时间" id="videosettime9" />
								<text id="nowTime9" textColor="#353535" textSize="13sp" text="此刻"  ></text>
							</horizontal>
						</vertical>
						<linear gravity="">
							<text id="message9" w="200sp" gravity="right" margin="0 0 10 0"></text>
							<button id="start9" text="开启"></button>
						</linear>
					</vertical>


					{/* 视频序号10 */}
					<vertical margin="10" bg="#ffffff" padding="10 5" radius="20">

						<vertical padding="4">
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="15sp" textStyle="bold" >10</text>
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="视频序号"  ></text>
								<input w="80" textSize="13sp" text="" gravity="center" hint="数字" id="video10" />
							</horizontal>
							<horizontal layout_gravity="center" >
								<text textColor="#353535" textSize="13sp" text="定时时间"  ></text>
								<input w="180" textSize="13sp" text="" gravity="center" hint="日期时间" id="videosettime10" />
								<text id="nowTime10" textColor="#353535" textSize="13sp" text="此刻"  ></text>
							</horizontal>
						</vertical>
						<linear gravity="">
							<text id="message10" w="200sp" gravity="right" margin="0 0 10 0"></text>
							<button id="start10" text="开启"></button>
						</linear>
					</vertical>
				</vertical>
			</ScrollView>
		</vertical>
	);

	for (var i = 1; i < 11; i++) {
		(function (i) {
			handlerRunSetTime(i);
			handleNowTime(i);
		})(i);

	}


}

function handleNowTime(i) {
	ui['nowTime' + i].click(() => {
		getNowTime(i);
	})
}

//Event 事注册
function InitEventEmit(){
//监听线程结果
    myee.on('result', function (res) {
	console.log("12342")
	if(res && res.code) {
		successCallback(res.i);
	}
	globalData.thread && globalData.thread.interrupt();
	
});


}

//设置此刻时间
function getNowTime(i) {
	var date = new Date();
	var time = dealWidthLength(date.getMonth() + 1) + '-' + dealWidthLength(date.getDate()) + ' ' + dealWidthLength(date.getHours()) + ':' + dealWidthLength(date.getMinutes());
	ui['videosettime' + i].setText(time)
}

// 清空本地缓存记录
function clearStorage() {
	var storage = storages.create('storage');
	storage.put('globalData', '');
}

function dealWidthLength(t) {
	return t < 10 ? ('0' + t) : t
}

// 统一处理启动,暂停定时方法
function handlerRunSetTime(i) {
	//开启|暂停事件
	ui['start' + i].click(function () {
		ui['message' + i].setText('');

		// console.log(globalData.forms)
		globalData.forms[i - 1]['video' + i] = Number(ui['video' + i].text());
		globalData.forms[i - 1]['videosettime' + i] = ui['videosettime' + i].text();

		if (globalData.forms[i - 1]['start' + i] == '开启') {
			addTask(globalData.forms[i - 1], i);
		} else {
			deletTask(globalData.forms[i - 1], i);
		}
	})
}



function addTask(form, i) {


	if (!form['video' + i] || !form['videosettime' + i]) return;
	console.log("globalData.forms", handleDate(form['videosettime' + i]))
	if (handleDate(form['videosettime' + i]) <= 0) {
		log('开启失败!时间不能低于目前时间')

		// toast('开启失败!时间不能低于目前时间')
		return;
	}

	for (var h = 1; h < 11; h++) {
		if (globalData.forms[h - 1]['video' + h] == form['video' + h] && globalData.forms[h - 1]['start' + h] == '暂停') {
			log('开启失败!已有相同视频等待上传!')
			toast('开启失败!已有相同视频等待上传!')
			return;
		}
	}


	globalData.forms[i - 1]['start' + i] = '暂停';
	ui['start' + i].setText('暂停');



	console.log("33333")
	globalData.thread = threads.start(function(){
		sleep(handleDate(form['videosettime' + i]));
		
			//检测网络状态
			// internetCheck();
			if (!globalData.forms[i - 1]['video' + i]) {
				globalData.forms[i - 1]['start' + i] = '开启';
				ui['start' + i].setText('开启');
				var storage = storages.create('storage');
				storage.put('globalData', globalData);
				ui['message' + i].setText('任务已作废')
			log('任务已作废')

				toast('任务已作废');
				globalData.thread.interrupt();
			}

		wakeUp();
		openShipinhao(i);
	});
	

	var storage = storages.create('storage');
	storage.put('globalData', globalData);
}





function deletTask(form, i) {
	form['videosettimeid' + i] && clearTimeout(form['videosettimeid' + i]) ;
	globalData.thread && globalData.thread.interrupt();
	globalData.thread = '';
	globalData.forms[i-1]['videosettimeid' + i] = '';
	ui['start' + i].setText('开启');
	globalData.forms[i - 1]['start' + i] = '开启';
	var storage = storages.create('storage');
	storage.put('globalData', globalData);
}



function wakeUp() {
	//唤醒手机
	device.wakeUp();
	sleep(3 * 1000);

	device.wakeUpIfNeeded();

	//判断屏幕是否唤醒成功
	if (!device.isScreenOn()) {
		console.error("屏幕未唤醒，退出脚本");
		exit();
	}

	//上滑解锁
	// sleep(3 * 1000);
	// swipe(device.width / 2, device.height - 200, device.width / 2, Math.min(device.height / 5, 10), 1500);
	// sleep(3 * 1000);

	//脚本执行时保持屏幕常亮
	device.keepScreenDim(5 * 60 * 1000);
}

//打开视频号视频
function openShipinhao(i) {
	//返回桌面
	home();
	sleep(3000);
	launchApp("微信")
	sleep(5 * 1000);
	console.log("打开微信。。。")
	log("打开微信。。。")

	while (!(text('微信').exists() && text('通讯录').exists() && text('发现').exists() && text('我').exists())) {
		back();
		sleep(1500);
	}


	click(text('发现').findOne().bounds().centerX(), text('发现').findOne().bounds().centerY());
	sleep(3000);

	click(text('视频号').findOne().bounds().centerX(), text('视频号').findOne().bounds().centerY());
	sleep(10000);
	safeModeToYanger();
	console.log(" text('推荐')", text('推荐').find());
	var tuijian = text('推荐').boundsInside(0, 0, device.width,device.height/2).findOne();

	click(device.width - 60, tuijian.bounds().centerY());
	safeModeToYanger();
	sleep(2000);
	swipe(device.width / 2, device.height - 100, device.width / 2, Math.min(device.height / 5, 10), 1500);
	sleep(1500);
	click(text('发表视频').findOne().bounds().centerX(), text('发表视频').findOne().bounds().centerY());
	sleep(2000);
	click(text('从相册选择').findOne().bounds().centerX(), text('从相册选择').findOne().bounds().centerY());
	sleep(2000);
	click(text('图片和视频').findOne().bounds().centerX(), text('图片和视频').findOne().bounds().centerY());
	sleep(1500);
	click(text('所有视频').findOne().bounds().centerX(), text('所有视频').findOne().bounds().centerY());
	sleep(5000);


	var shipin = descContains('视频' + globalData.forms[i-1]['video' + i] + ',').find();
	console.log("shipin", shipin);
	if (shipin) {
		click(shipin[0].bounds().centerX(), shipin[0].bounds().centerY());
	} else {
		globalData.forms[i - 1].message = '所有视频相册下没有对应视频|' + new Date()
	}
	sleep(2000);
	text('下一步').click();
	sleep(5000);
	text('完成').click();
	sleep(5000);
	click(text('发表').findOne().bounds().centerX(), text('发表').findOne().bounds().centerY());
	sleep(5000);
	myee.emit('result',{code: 1, i: i });

	
}

// 执行成功回调
function successCallback(i) {

	var time = new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes();
	globalData.forms[i - 1].message = time + '|发布成功';
	ui['message' + i].setText(time + '|发布成功');
	ui['start' + i].setText('启动');
	globalData.forms[i - 1]['videosettimeid' + i] && clearTimeout(globalData.forms[i - 1]['videosettimeid' + i]);
	
	globalData.thread = '';
	globalData.forms[i - 1]['videosettimeid' + i] = '';
	var storage = storages.create('storage');
	storage.put('globalData', globalData);

	//返回主页
	back();
	sleep(1 * 1000);
	back();
	log(globalData.forms[i - 1].message)
	//关闭屏幕常亮
	console.log("关闭屏幕常亮");
	device.cancelKeepingAwake();
}


//时间处理
function handleDate(date) {
	var array = date.split('-');
	if (date.split('-')[0].length < 2) date = '0' + date;


	var year = new Date().getFullYear();
	var ymd = year + '-' + date.split(' ')[0];
	var time1 = new Date(ymd).getTime();
	var array2 = date.split(' ')[1].split(':');
	var h = Number(array2[0]), m = Number(array2[1]);
	var time2 = h * 1000 * 60 * 60 + m * 1000 * 60;

	var dateTime = time1 + time2;
	var date2 = new Date();
	var year2 = date2.getFullYear();
	var mount2 = date2.getMonth() + 1;
	var day2 = date2.getDate();

	var ymd2 = year2 + '-' + dealWidthLength(mount2) + '-' + dealWidthLength(day2);
	var time3 = new Date(ymd2).getTime();
	var hour2 = dealWidthLength(date2.getHours());
	var minute2 = dealWidthLength(date2.getMinutes());

	var time4 = hour2 * 1000 * 60 * 60 + minute2 * 1000 * 60;

	
	if (time1 + time2 - time3 - time4 < 0 * 60 * 1000) {
		return 0;
	}

	return time1 + time2 - time3 - time4

}



//初始化加载
function onload() {
	initData();
}


// 初始化数据
function initData() {
	var storage = storages.create("storage");
	var localGlobalData = storage.get('globalData');
	var forms = [], localForms = [];

	if (localGlobalData) {
		localForms = localGlobalData.forms;
	}

	for (var i = 1; i < 11; i++) {
		var object = {};
		object['video' + i] = localForms.length ? localForms[i - 1]['video' + i] : '';
		console.log("object['video'+i]", object['video' + i], localForms)
		ui['video' + i].setText(object['video' + i].toString());
		object['videosettime' + i] = localForms.length ? localForms[i - 1]['videosettime' + i] : '';
		ui['videosettime' + i].setText(object['videosettime' + i]);
		object['start' + i] = localForms.length ? localForms[i - 1]['start' + i] : '开启';
		ui['start' + i].setText(object['start' + i]);
		object['videosettimeid' + i] = localForms.length ? localForms[i - 1]['videosettimeid' + i] : '';
		forms.push(object)
	}

	globalData.forms = forms;
	console.log("globalData.forms", globalData.forms)
}





// 检查权限是否开启
function checkService() {
	console.log("auto.service",auto.service)
	if (auto.service != null) {
		ui.autoService.checked = true;
		ui.autoService.setText('已打开无障碍服务');

	} else {
		ui.autoService.checked = false;
		ui.autoService.setText('请打开无障碍服务');
		return { value: false, text: '请打开无障碍服务' }
	}

	ui.autoService.checked = true;
}





/*
 * 按音量键下键就停止脚本 
*/
function observeKey() {
	events.observeKey();
	events.onKeyDown("volume_down", function (event) {
		exit();
		engines.stopAllAndToast();
		globalData.thread && globalData.thread.interrupt();
		threads.shutDownAll();
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


//判断网络情况，如果没有网络，结束脚本运行
function internetCheck() {
	var url = "m.baidu.com";
	var res = http.get(url);
	if (res.statusCode != 200) {
		console.error("网络不可用，无法打卡");
		exit();
	}
}
