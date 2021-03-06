/*
 * dashboard
 * Crown
 * 2017-04-18
 * v1.0
 */
(function($){
	$.fn.dashboard = function(options){
		var defaults = {
			lineWidth:7,//线宽
			lineCap:'round',//线端点形状
			radius:45,//半径
			font:'24px 黑体,Helvetica,PingFangSC-Regular,Droid Sans,Arial,sans-serif',//文本大小和字体
			degree : {
				start:135,//起点度数(内外)
				end:405,//外圆终点度数
			},
			color : {
				Outside:'#48b3b5',//外圆颜色
				Inside:'#ffffff',//内圆颜色
				font:'#ffffff',//文本颜色
			},
			roundCenter : {
				X:50,//圆的起点x轴坐标
				Y:50//圆的起点y轴坐标
			},
			align : {
				vertical:'middle',//文本垂直对其方式
				level:'center',//文本水平对其方式
			},
			fillText : {
				font:'已抢',//文字文本内容
				fontX:50,//文字文本绘制起点x
				fontY:40,//文字文本绘制起点y
				mathX:50,//数字文本绘制起点x
				mathY:70,//数字文本绘制起点y
			}
		}
		
		var options = $.extend(defaults,options);
		
		this.each(function(){
			var _this = $(this);
			
			var int = setInterval(dod,10);	
			var a = 135;
			var t = 0;
			var c = 0;
			var atr = [];
			
			//获取data-num的最大值
			function maxDataNum(){
				for(var i = 0;i<_this.length;i++){
					var d = _this.eq(i).attr('data-num');
					atr.push(d);
				}
				var max_data_num = Math.max.apply(null, atr)
				return max_data_num
			}
			function dod(){
				for(var i = 0;i<=_this.length;i++){
					var et = document.getElementsByClassName('canvas')[i];
					var dn = et.getAttribute('data-num');
					var cc = et.getContext("2d");
					cc.lineWidth = options.lineWidth;
					cc.lineCap = options.lineCap;
					cc.clearRect(0,0,et.width,et.height);
					
					//外圆
					cc.beginPath();
					cc.strokeStyle = options.color.Outside;
					cc.arc(options.roundCenter.X,options.roundCenter.Y,options.radius,Math.PI*options.degree.start/180,Math.PI*options.degree.end/180,false);
					cc.stroke();
					cc.closePath();
					
					//内圆
					cc.beginPath();
					var radian = dn/(100/3) * 90 + options.degree.start;//0到100对应的135到405
					cc.strokeStyle= options.color.Inside;
					if (t >=radian) {
						cc.arc(options.roundCenter.X,options.roundCenter.Y,options.radius,Math.PI*options.degree.start/180,Math.PI * radian/180,false);
						cc.stroke();
						if(maxDataNum() == dn){//判断是否已经循环到最大值，如果是则清除时钟结束运行
							clearInterval(int);
						}
					} else{
						t = a++;
						cc.arc(options.roundCenter.X,options.roundCenter.Y,options.radius,Math.PI*options.degree.start/180,Math.PI * t/180,false);
						cc.stroke();
					}
					cc.closePath();
					
					//文本
					cc.beginPath();
					cc.font = options.font;
					cc.fillStyle = options.color.font;
					cc.textBaseline = options.align.vertical;
					cc.textAlign = options.align.level;
					cc.fillText(options.fillText.font, options.fillText.fontX, options.fillText.fontY);
					if(c>dn){
						cc.fillText(dn+'%', options.fillText.mathX, options.fillText.mathY);
					}else{
						c++;
						cc.fillText(c+'%', options.fillText.mathX, options.fillText.mathY);
					}
					cc.closePath();
				}
			}
			
		})
	}
})(jQuery)