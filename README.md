# dashboard
canvas仪表盘式进度

## 使用：
  window.onload = function(){
        $('.canvas').dashboard();
  }
## 引用：
  <script src="js/jquery-3.1.1.min.js" type="text/javascript" charset="utf-8"></script>
  <script src="js/dashboard.js" type="text/javascript" charset="utf-8"></script>

变量：
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
  
  本插件基于jq库,主要js为dashboard.js所以要引用:
      <script src="js/jquery-3.1.1.min.js" type="text/javascript" charset="utf-8"></script>
      <script src="js/dashboard.js" type="text/javascript" charset="utf-8"></script>
  
 