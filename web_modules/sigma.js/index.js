require("imports?this=>window&module=>undefined&exports=>undefined!./sigma.min.js");

require("./patch-force-atlas!./plugins/sigma.layout.forceAtlas2.min.js");

module.exports = sigma;

sigma.canvas.labels.webpack = function(node, context, settings) {
	var old = node.label;
	if(node.shortLabel) node.label = node.shortLabel;
	sigma.canvas.labels.def(node, context, settings);
	node.label = old;
};

sigma.layout.forceatlas2.edgeWeightInfluence = 0.5;
sigma.layout.forceatlas2.adjustSizes = true;
