var scale = Math.min(
	innerWidth / document.querySelector("li.project").style.width,
	innerHeight / document.querySelector("li.project").style.width
);

document.querySelector("li.project").style.transform = "translate(-50%, -50%) " + "scale(" + scale + ")";
