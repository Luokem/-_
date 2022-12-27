

// var shipinhaoGoodsJs_goodLucky = document.createElement('script');
// shipinhaoGoodsJs_goodLucky.src = 'https://www.minretail.com/res/js/autogoods.js';
//  document.querySelector('body').appendChild(shipinhaoGoodsJs_goodLucky);



var toolCss =
	`
.flex-row {
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    flex-direction: row;
}
.flex-column {
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    flex-direction: column;
}
.flex-align-center {
    align-items: center;
}
.flex-justify-center {
    justify-content: center;
}
.operate-btn {
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    letter-spacing: 1px;
    font-size: 17px; 
    margin-top: 35px;
    cursor: pointer;
    position: relative;
    padding: 0 0 50px;
}
.vertical-line {
    width: 2px;
    height: 20px;
    background-color: #fff;
    content: ' ';
    border-radius: 1px;
    margin: 0 10px;
}

 .push-btn{flex: 1; text-align: center;    border-radius: 4px;  min-width: 120px;margin-right: -13px;}
 .setting-status {background-color: var(--weuiDesktop_BG_globalBgColor); font-size: 13px;color: var(--weuiDesktop_BG_emBgColor);border-radius: 4px;
    border-radius: 4px;
    width: max-content;
    padding: 0 24px;
    box-sizing: border-box;
    letter-spacing: 1px;
    font-size: 15px; }
 

.arrow-bottom-icon {
    width: 8px;
    height: 14px;
    margin-left: 10px;
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);

}
.operate-btn:hover  .operate-item-sets {
    display: flex;
}
.operate-item-sets {
     display: none;
    transition: all 0.2s linear;
    position: absolute;
    left: -205px;
    bottom: -24px;
    z-index: 1;
    
}
.check-active .check-box {
    border: 2px solid var(--Finder-primary);
}

.check-active .check-solid {
    background-color: var(--Finder-primary);
}

.check-box {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid rgba(0,0,0,.05);
    position: relative;
}
.check-solid {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgba(0,0,0,.05);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.run-item-time {
	font-size: 17px;
	border: 1px solid rgba(0,0,0,.3);
	border-radius: 2px;
	height: 32px;
	width: 32px;
	text-align: center;
	line-height: 32px;
}

.tool-wrap {
	position: fixed;
	bottom: 10px;
	right: 10px;
	z-index: 1000;
	width: 300px;
	border-radius: 10px;
	background-color: #fff;
	padding: 20px;
	color: var(--Finder-primary);
	background: #fef5eb;
	border-radius: var(--weuiDesktop_mediumBorderRadius);
}

.auto-run-btn {
	width: 200px;
	    height: 40px;
	    line-height: 40px;
	    text-align: center;
	    border-radius: 20px;
	    font-size: 18px;
	    font-weight: 500;
	    color: #fff;
	    backround-color: #fff;
	    background: var(--Finder-primary);
	    opacity: 0.5;
		transition: all 0.2s linear;
		padding: 0 20px;
		margin: 10px auto ;
		cursor: pointer;
}
.auto-run-btn:hover {
	opacity: 1;
}
.restart-btn {
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
}

 `;

var imgs = {
	'arrow-icon': `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAAAXNSR0IArs4c6QAAAMVJREFUSEul1csNAiEQgGGGMqAyj0sgWAZVeNOoB0ujDMZAJCHrAjMs9/+DEB4QQpAxRoOISWv9DCEkwRjgvd8Q8fFrXkopw0HAWnuRUn6aSVkICCHAOXcDgOsKkoE8lpEKLCMtsITsATZyBLCQHkBGRgAJmQFThAIMESrQQ9wpIKVkqcDfUUfEt9Z6owDdOF/7GTCMy8YMHp9pPAJIcQ8gx0cAK94D7LgFluIKLMcF2D/r9YRR/4Y8uwGAe9a4cVnB2a/tCwvj0ka6Sm3LAAAAAElFTkSuQmCC`,

}
//js动态添加css
function add_css(str_css) { //Copyright @ rainic.com

	try { //IE下可行

		var style = document.createStyleSheet();

		style.cssText = str_css;

	} catch (e) { //Firefox,Opera,Safari,Chrome下可行

		var style = document.createElement("style");

		style.type = "text/css";
		style.rel = 'stylesheet'

		document.getElementsByTagName("HEAD").item(0).insertBefore(style, document.getElementsByTagName("HEAD").item(0).lastChild)

		style.appendChild(document.createTextNode(str_css));

	}

};
add_css(toolCss);

window.stopRun = true; //停止脚本运行
var script = document.createElement('script');
script.src = 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js';
document.querySelector('body').appendChild(script);


script.onload = function() {
	var goodsList = $('.table-row-wrap');
	$('.operate-btn').remove();
	$('.tool-wrap').remove();
	


	goodsList.each((index, item) => {
		var toolTemplate =
			`<div class="flex-row operate-btn  flex-align-center flex-justify-center" >
                    <div onclick="pushTool(this,${index});"   class="push-btn weui-desktop-btn_primary">脚本推送</div>
                    <div class="flex-row operate-item-sets flex-align-center">
                        <div class="setting-status flex-row flex-align-center "  >
                            <div >
                            强度:
                            </div>
                            <div onclick="switchSet(this);" data-index="0"  class="flex-row flex-align-center check-value-1 " style="color: #333;margin-left: 5px;">
                                <div class="check-box">
                                    <span class="check-solid"></span>
                                </div>
                                <div style="margin-left: 5px;">快</div>
                                
                            </div>

                            <div onclick="switchSet(this);" data-index="1"  class="flex-row flex-align-center check-value-2 check-active " style="color: #333;margin-left: 5px;">
                            <div class="check-box">
                                <span class="check-solid"></span>
                            </div>
                            <div style="margin-left: 5px;">中</div>
                            
                        </div>

                        <div onclick="switchSet(this);" data-index="2"  class="flex-row flex-align-center check-value-2" style="color: #333;margin-left: 5px;">
                        <div class="check-box">
                            <span class="check-solid"></span>
                        </div>
                        <div style="margin-left: 5px;">慢</div>
                    </div>
					
					<div style="margin-left: 10px;">循环次数: <input class="run-item-time" placehold="默认3次" value="3" /> </div>
                            
                        </div>
                    </div>
                </div>`;
		$(item).append(toolTemplate);
	});

	var toolWrap =
		`
		<div class="tool-wrap">
			<div class="tool-run-statu flex-row">
				<div style="margin-right: 37px;">脚本状态: </div>
				<div class="tool-run-text" style="color: #333;">未运行</div>
				
			</div>
			<div class="tool-run-num flex-row">
				<div style="margin-right: 37px;">推送商品: </div>
				<div class="run-goods-num" style="color: #333;"> </div>
			
				
			</div>
			<div class="flex-row">
				<div style="margin-right: 12px;">剩余运行次数:</div>
				<div class="run-last-time" style="color: #333;"></div>
			</div>
			
			<div class="flex-row">
				<div style="margin-right: 12px;">推送频率:</div>
				<div class="run-speed" style="color: #333;"></div>
			</div>
			
			<div onclick="autoRunAll(this);" class="auto-run-btn" data-status="0">自动运行</div>
			
			<div onclick="restartRunIndex(this);" class="restart-btn">
				<a href="javascript:;" title="从第一个商品开始运行">重置</a>
			</div>
			
		</div>
	`;

	$('body').append(toolWrap);

	//点击解说按钮清除定时器
	$('.promoting-wrap').on('click', function(e) {
		if (e.originalEvent) {

			clearTimeout(window.setTimeoutPushtool);
			clearTimeout(window.setTimeoutPushtool2);
		}

	})
}

//切换推送的强度
function switchSet(_this) {
	$(_this).siblings().removeClass('check-active');
	$(_this).addClass('check-active');
}

// 重置商品运行从0开始
function restartRunIndex() {
	window.restartRun = true;
}

function validTime() {

	var serverTime = '2022-07-30';
	var localTime = new Date().getTime();
	if (localTime <= new Date(serverTime).getTime()) {

		return true;
	} else {
		window.alert('请到小程序获取最新的代码, 才能使用此功能')
		return false;
	}

}

// 全部推送
async function autoRunAll() {

	if (!validTime()) return;

	clearTimeout(window.setTimeoutPushtool);
	clearTimeout(window.setTimeoutPushtool2);

	if (window.stopRun) {
		$('.auto-run-btn').text('停止运行');
		window.stopRun = false;
		var pushbtns = $('.push-btn');

		var rungoodsnum = Number($('.run-goods-num').text().replace('号', ''));
		var startIndex = 0;

		if (!window.restartRun) {
			$('.index-count-wrap').each((index, item) => {
				if ($(item).text() == rungoodsnum) {
					startIndex = index;
				}
			})

		}


		for (var i = 0; i < pushbtns.length; i++) {
			if (window.stopRun) return;
			if (i >= startIndex) {
				await pushTool($('.push-btn')[i]);
				await restTime();

			}
			if (i == pushbtns.length - 1) {
				$('.tool-run-text').text('已执行完');
				$('.auto-run-btn').text('重新运行');
			}
		}
	} else {
		if (window.restartRun) {
			$('.auto-run-btn').text('自动运行');
		} else {
			$('.auto-run-btn').text('继续运行');
		}
		window.stopRun = true;
	}
}

function restTime(t = 2000) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, t)
	})
}

// 推送脚本
async function pushTool(_this,index) {

	var jieshuo = $(_this).parents('.operate-btn').prev().find('.promoting-wrap');

	clearTimeout(window.setTimeoutPushtool);
	clearTimeout(window.setTimeoutPushtool2);
	if(index !== undefined) {
		window.stopRun = true;
		if(!validTime()) return;
	}

	var setStatu = $(_this).siblings('.operate-item-sets').find('.check-active').attr('data-index');

	var circulTime = $(_this).siblings('.operate-item-sets').find('.run-item-time').val();


	$('.run-goods-num').text(jieshuo.parents('.table-row-wrap').find('.index-count-wrap').text());

	if (jieshuo.text() == '结束讲解') {
		jieshuo.click();

		return new Promise((resolve, reject) => {
			setTimeout(async function() {
				await autoRun(setStatu, circulTime, jieshuo);
				resolve();
			}, 2000)
		})


	} else {
		await autoRun(setStatu, circulTime, jieshuo);
		return new Promise((resolve, reject) => {
			resolve();
		})
	}


}



//上下架商品
function autoRun(setStatu = '1', circulTime = 3, dom) {
	return new Promise((resolve, reject) => {
		$('.tool-run-text').text('正在运行');
		$('.run-goods-num').text(dom.parents('.table-row-wrap').find('.index-count-wrap').text() + '号');
		$('.run-speed').text(setStatu == '0' ? '快' : setStatu == '1' ? '中' : '慢');


		dom.click(); //开
		circulTime = Number(circulTime) ? Number(circulTime) : 3; //循环次数
		var time = 0; //已经循环次数
		$('.run-last-time').text(circulTime);
		var upSeconds = 3000; // 商品停留时间;
		var downSeconds = 2000; //商品下架时间
		switch (setStatu) {
			case '0':
				upSeconds = 3200;
				downSeconds = 2500;
				break;

			case '1':
				upSeconds = 5000;
				downSeconds = 4000;
				break;

			case '2':
				upSeconds = 8000;
				downSeconds = 6000;
				break;
		}
		run();

		function run() {

			time++;
			upSeconds = upSeconds - Math.random() * 500;
			window.setTimeoutPushtool = setTimeout(() => {
				dom.click(); //关闭
				downSeconds = downSeconds - Math.random() * 200;
				$('.run-last-time').text(circulTime - time);
				if (time >= circulTime) {

					$('.tool-run-text').text('未运行');
					$('.run-goods-num').text(' ');
					$('.run-speed').text(' ');
					clearTimeout(window.setTimeoutPushtool);
					clearTimeout(window.setTimeoutPushtool2);
					resolve();
					return;
				}
				
				window.setTimeoutPushtool2 = setTimeout(() => {
					dom.click(); //开
					run();
				}, downSeconds)

			}, upSeconds)
		}

	})
}
