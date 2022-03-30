alert('您已被封号')
alert('先蓝后黄')
alert('开源网址：https://github.com/CHKEric/Doge')
var can = document.getElementById('can');
// 传入2d元素
var ctx = can.getContext('2d');
var background = new Image();
background.src = "images/bg.jpg";
var chessboard = new Image();
chessboard.src = "images/棋盘.png";
var black = new Image();
black.src = "images/黑棋.png";
var white = new Image();
white.src = "images/白棋.png";
var state = 0; //游戏状态
window.onload = function(){
	//绘制背景
	ctx.drawImage(background,0,0);
}
var flag = false;
can.onclick = function(e){
	//将坐标变成行和列赋值给x和y
	var x = Math.floor(e.offsetX/40);
	var y = Math.floor(e.offsetY/40);
	if(state==1){
		//开始游戏
		oneStep(x,y);
	}else if(x>4&&x<11&&y>10&&y<13){
		//绘制棋盘
		ctx.drawImage(chessboard,0,0);
		state=1;
	}
}
var chess = new Array(16);//棋盘数组
for(var i=0;i<chess.length;i++){
	chess[i] = new Array();
	for(var j=0;j<chess.length;j++){
		chess[i][j] = 0;
	}
}
function oneStep(x,y){
	if(chess[x][y]==0){
		if(flag=!flag){
			ctx.drawImage(black,x*40+1,y*40+1);
			chess[x][y]=1;
		}else{
			ctx.drawImage(white,x*40+1,y*40+1);
			chess[x][y]=2;
		}
		document.getElementById('sound').play();
		isWin(x,y);
	}
}
function isWin(x,y){
	var num=0;
	for(var i=0;i<16;i++){
		if(chess[x][i]==chess[x][y]){
			num=num+1;
		}
		else{
			num=0;
		}
		if(num==5){
			win();
			break;
		}
	}
	var num=0;
	for(var i=0;i<16;i++){
		if(chess[i][y]==chess[x][y]){
			num= num + 1;
		}else{
			num==0;
		}
		if(num==5){
			win();
			break;
		}
	}
	var num=0;
	for(var i=0,n=y-x;i<16;i++,n++){
		if(chess[i][n]==chess[x][y]){
			num=num+1;
		}else{
			num==0;
		}
		if(num==5){
			win();
			break;
		}
	}
	var num=0;
	for(var i=0,n=y+x;i<16;i++,n--){
		if(chess[n][i]==chess[x][y]){
			num=num+1;
		}else{
			num==0;
		}
		if(num==5){
			win();
			break;
		}
	}
}
function win(){
	document.getElementById("sound1").play();
	alert(flag?"蓝狗头成为新狗王！恭喜！！！":"黄狗头成为新狗王！恭喜！！！");
	window.location.reload();
}
