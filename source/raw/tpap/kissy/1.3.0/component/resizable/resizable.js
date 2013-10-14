var Resizable = KISSY.Resizable; //namespace in KISSY

//new Resizable
var r = new Resizable({
	node:".resizable_box", // selector
	handlers:["b","t","r","l","tr","tl","br","bl"], // handlers
	minHeight:50,
	minWidth:50,
	maxHeight:400,
	maxWidth:400
});



//test start 
r.on("resizeStart", function(){
  log('resize --  start');
});

//test end 
r.on("resizeEnd", function(){
  log('resize --  end');
});

//test destroy 
$(".resizable_box span").on("click", function(){
	r.destroy();
	log('resize --  destroy');
});
