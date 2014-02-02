var Lightbox = function() {
	var content, contentCover, cover;

	var l = {close: "Close"};
	
	var createBox = function() {
		if (document.getElementById('lightbox')) {
			cover.style.display = "block";
			return;
		}

		cover = document.createElement("div");
		cover.id = "lightbox";

		var background = document.createElement("div");
		background.className = "lightbox-background";
		cover.appendChild(background);

		var button = document.createElement("button");
		button.className = "lightbox-close";
		button.innerHTML = "× " + l.close;
		background.onclick = button.onclick = close;

		contentCover = document.createElement("div");
		contentCover.className = "lightbox-content";
		contentCover.appendChild(button);

		content = document.createElement("div");
		contentCover.appendChild(content);
		
		cover.appendChild(contentCover);
		document.body.appendChild(cover);
	}

	var close = function() {
		cover.style.display = "none";
	}

	var resize = function() {
		contentCover.style.width = content.offsetWidth + "px";
		contentCover.style.height = content.offsetHeight + "px";
	}

	var page = function(url) {
		createBox();
		content.innerHTML = url;
		resize();
	}

	var element = function(el) {
		content.appendChild()
	}

	return {
		page : page,
	}
}();