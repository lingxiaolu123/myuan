
			function dh()
			{
				//导航下滑收缩，上划膨胀
				var scrollFunc = function (e) {
					var aheader=document.getElementById('header');
					var aheaderDiv=aheader.getElementsByTagName('Div');
					var alogo=document.getElementById('logo');
				　　e = e || window.event;  
					if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
					　　if (e.wheelDelta > 0) { //当滑轮向上滚动时
							aheader.style.height='150px';
							aheader.style.lineHeight="250px"
							aheader.style.backgroundSize='110%'
							alogo.style.width='300px'
							alogo.style.marginTop='20px'
							aheaderDiv[0].style.backgroundColor='rgba(0,0,0,0)'
						}
						if (e.wheelDelta < 0) { //当滑轮向下滚动时
							aheader.style.height='60px';
							aheader.style.lineHeight="60px"
							aheader.style.backgroundSize='100%'
							alogo.style.width='180px'
							alogo.style.marginTop='5px'
							aheaderDiv[0].style.backgroundColor='rgba(0,0,0,0.3)'
						}
					}
				}
				
				//给页面绑定滑轮滚动事件
				if (document.addEventListener) {//firefox
					document.addEventListener('DOMMouseScroll', scrollFunc, false);
				}
				//滚动滑轮触发scrollFunc方法  //ie 谷歌
				window.onmousewheel = document.onmousewheel = scrollFunc;
				
	
			}
		