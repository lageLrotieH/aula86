
var canvas = new fabric.Canvas('myCanvas');


playerX = 100;
playerY = 100;

larguraBloco = 30;
alturaBloco = 30;



function playerUpdate()
{

	fabric.Image.fromURL("player.png", function(Img) /* codigo padrao para enviar imagem ao canvas*/
	{
	playerObject = Img; /* essa variável e o objeto que contem a imagem*/

	playerObject.scaleToWidth(130);/*altera largura da imagem*/
	playerObject.scaleToHeight(180);/* altera altura */
	playerObject.set({top:playerY, left:playerX}); /*coloca o objeto nas coordenas x e y definidas */
	canvas.add(playerObject); /*add a imagem ao canvas*/

	});
}

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img) {
	blocos = Img;

	blocos.scaleToWidth(larguraBloco);
	blocos.scaleToHeight(alturaBloco);
	blocos.set({
	top:playerY, left:playerX
	});
	canvas.add(blocos);

	});

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true  &&keyPressed == '80')
{
	console.log("p e shift pressionadas juntas"); 
	larguraBloco = larguraBloco + 10;
	alturaBloco = alturaBloco + 10;
	document.getElementById("currentWidth").innerHTML = larguraBloco;
	document.getElementById("currentHeight").innerHTML = alturaBloco;	
	/**ira aumentar o tamanho do bloco */
}
if(e.shiftKey == true && keyPressed == '77')
{
	console.log("m e shift pressionadas juntas");
	larguraBloco = larguraBloco - 10;
	alturaBloco = alturaBloco - 10;
	document.getElementById("currentWidth").innerHTML = larguraBloco;
	document.getElementById("currentHeight").innerHTML = alturaBloco;
	/**ira diminuir o tamanho do bloco */
}
	/**movimentacao do personagem de acordo com a direcao pressionada */
	if(keyPressed == '38')
	{
		up()
		
		console.log("seta para cima");
	}
	if(keyPressed == '40')
	{
	down()	
		console.log("seta para baixo");
	}
	if(keyPressed == '37')
	{
		
		console.log("seta para esquerda");
		left()
	}
	if(keyPressed == '39')
	{
		
		console.log("seta para direita");
		right()
	}
	
	
	/**carregamento da imagem do bloco, de acordo com a tecla pressionada */	
	if(keyPressed == '87')
	{
		newImage('wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '71')
	{
		newImage('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		newImage('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		newImage('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		newImage('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		newImage('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		newImage('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		newImage('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		newImage('cloud.jpg'); 
		console.log("c");
	}

	
	
}
function up()
{
	if(playerY >=0)
	{
	playerY=playerY-alturaBloco		
		
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function down()
{
	if(playerY <=310)
	{
	playerY=playerY+alturaBloco	
		
		playerUpdate();
		canvas.remove(playerObject);
	}
}

function left()
{
	if(playerX >0)
	{
		playerX=playerX-larguraBloco	
		
		playerUpdate();
		canvas.remove(playerObject);
	}
}

function right()
{
	if(playerX <=700)
	{
	playerX=playerX+larguraBloco		
		playerUpdate();
		canvas.remove(playerObject);
	}
}

