
	var obj = {										/* 方法需要使用一个变量进行接收 */
			setRem(){
			var uiWidth = 680;
			var oWidth = document.documentElement.clientWidth;
			var size = oWidth/uiWidth*100;
			document.documentElement.style.fontSize = size+'px';
			if(oWidth>uiWidth){
				document.documentElement.style.fontSize = 100+'px';
				document.documentElement.style.width = uiWidth;
				document.documentElement.style.margin = "0 auto";
			}
			
		}
	}
	export {obj}								/* 将这个变量进行导出 */
	
	

