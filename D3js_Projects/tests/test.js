var w=960, h=500,
svg = d3.select("#chart")
	.append("svg")
	.attr("width", w)
	.attr("height", h);

var text=svg
	.append("text")
	.text("Hello World")
	.attr("y", 50);
