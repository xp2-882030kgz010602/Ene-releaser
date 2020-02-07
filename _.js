var width;
var height;
var state="release";
var start_ms;
var h=-120;
function setup(){
	width=window.innerWidth-16;
	height=window.innerHeight-16;
	createCanvas(width,height);
};
var text_lines=["Operating System: Electronic Net 12.4.1","Ready to Release Ene"];
var lines=["Stage 6 complete","Check: Good","Checking launch success...","1 line of code successfully injected:\nself.launch('ene');","Injecting code through Node.js code execution interface...","Launching Ene out of electronic net...","===Start of Stage 6===","Stage 5 complete","Check: Good","Checking that threats have been disabled...","Check: Good","Checking that Ene has been successfully released from\nelectronic net...","===Start of Stage 5===","Stage 4 complete","Done.","1 line of code successfully injected:\nself.release('ene');","Injecting code through Node.js code execution interface...","Releasing Ene...","Done.","Disabling Adhesion...","Done.","Disabling Anti-Devirtulization...","Removing threats and releasing Ene...","===Start of Stage 4===","Stage 3 complete","2 threats found:\nAdhesion: The electronic net will\nstick to Ene and will try to prevent\nEne from escaping.\nAnti-Devirtualization:\nEne can enter (virtualization)\nand exit (devirtualization)\nelectronic devices whenever she wants.\nDevirtualization provides a\nquick escape from electronic nets,\nbut Anti-Devirtualization prevents Ene\nfrom devirtualizing out of\nthis particular electronic net.","Scanning for potential threats","===Start of Stage 3===","Stage 2 complete","Creating code execution interface","Installing Node.js","Patching Electronic Net","===Start of Stage 2===","Stage 1 complete","Exploitation of Electronic Net complete","Running exploit...","===Start of Stage 1==="];
function draw(){
	var ene_handler=function(size,blue,transparency,white){
		textSize(size*72);
		if(white){
			fill(255);
		}else{
			fill(0,blue,255,transparency);
		}
		text("E N E",width/2,80);
		rect(width/2-size*64,80-size*2,size*36,size*4);
		rect(width/2+size*28,80-size*2,size*36,size*4);
		quad(width/2-size*24,80,width/2-size*40,80-size*16,width/2-size*42,80-size*14,width/2-size*28,80);
		quad(width/2-size*24,80,width/2-size*40,80+size*16,width/2-size*42,80+size*14,width/2-size*28,80);
		quad(width/2+size*24,80,width/2+size*40,80-size*16,width/2+size*42,80-size*14,width/2+size*28,80);
		quad(width/2+size*24,80,width/2+size*40,80+size*16,width/2+size*42,80+size*14,width/2+size*28,80);
	};
	background(0,0,0);
	noStroke();
	textAlign(CENTER,CENTER);
	textFont("Courier New");
    fill(0,255,255);
    rect(width-120,height/2-120,120,120);
    rect(width-120,height/2,120,120);
    fill(0,0,255);
    rect(width-64,height/2-96,8,72);
    rect(width-64,height/2+24,8,72);
    quad(width-60,height/2-100,width-60,height/2-92,width-88,height/2-64,width-92,height/2-68);
    quad(width-60,height/2-100,width-60,height/2-92,width-32,height/2-64,width-28,height/2-68);
    quad(width-60,height/2+100,width-60,height/2+92,width-88,height/2+64,width-92,height/2+68);
    quad(width-60,height/2+100,width-60,height/2+92,width-32,height/2+64,width-28,height/2+68);
	textSize(24);
	textAlign(LEFT,BOTTOM);
    fill(0,255,255);
	text(text_lines.join("\n"),0,height+h);
	fill(0,0,0);
	rect(0,0,width,132);
    rect(0,height-120,width,120);
	textAlign(CENTER,CENTER);
    fill(0,255,255);
	text("The world's most advanced jailbreak utility",width/2,120);
	if(state==="release"){
		ene_handler(1,255,255,true);
	}else if(state==="releasing"||state==="released"){
		for(var i=0;i<255;i+=2){
			ene_handler(1+0.65*i/255,i,255-i,false);
		}
	}
	if(state==="release"){
		fill(0,63,255);
	}else if(state==="releasing"||state==="released"){
		fill(0,127,255);
	}
	rect(width/2-120,height-120,240,80);
	textSize(30);
    fill(0,255,255);
	if(state==="release"){
		text("Release Ene",width/2,height-80);
	}else if(state==="releasing"){
		text("Releasing...",width/2,height-80);
	}else if(state==="released"){
       text("Released",width/2,height-80);
   }
   if(state==="releasing"){
        text_lines.push(lines.pop());
        if(lines.length===0){
            text_lines.push("Successfully released Ene in "+(millis()-start_ms)/1000+" second(s)");
            state="released";
        }
    }
};
function mouseReleased(){
	if(mouseX>width/2-120&&mouseX<width/2+120&&mouseY>height-120&&mouseY<height-40&&state==="release"){
		state="releasing";
       start_ms=millis();
	}
    if(mouseX>width-120&&mouseX<width){
        if(mouseY>height/2-120&&mouseY<height/2){
            h-=30;
        }else if(mouseY>height/2&&mouseY<height/2+120){
            h+=30;
        }
    }
};