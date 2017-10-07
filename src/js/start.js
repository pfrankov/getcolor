var Cookies = {
	set: function (name, value, expires, path, domain, secure) {
		var now = new Date();
		var twoYearsAfter = new Date(now.getTime() + (365 * 2 * 24 * 60 * 60 * 1000));

		expires = expires || twoYearsAfter.toGMTString();
		document.cookie = name + "=" + escape(value) +
			((expires) ? "; expires=" + expires : "") +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			((secure) ? "; secure" : "");
		return value;
	},
	get: function (name) {
		var cookie = " " + document.cookie;
		var search = " " + name + "=";
		var setStr = null;
		var offset = 0;
		var end = 0;
		if (cookie.length > 0) {
			offset = cookie.indexOf(search);
			if (offset !== -1) {
				offset += search.length;
				end = cookie.indexOf(";", offset);
				if (end === -1) {
					end = cookie.length;
				}
				setStr = unescape(cookie.substring(offset, end));
			}
		}
		return (setStr);
	}
};


var Watch = {
	// obj:Object, property:String
	start: function (obj, property, callback) {
		obj.watchInterval = obj.watchInterval || {};

		if (!obj.watchInterval[property]) {
			var startValue = obj[property];


			obj.watchInterval[property] = setInterval(function () {
				if (startValue !== obj[property]) {
					callback(obj);
					startValue = obj[property];
				}
			}, 10);
		}
	},
	stop: function (obj, property) {
		if (!property) {

			for (property in obj) {
				clearInterval(obj.watchInterval[property]);
			}
			obj.watchInterval = {};
		}
		clearInterval(obj.watchInterval[property]);
		obj.watchInterval[property] = null;
	}
};

window.mainColor = "#000000";

function setMainColor() {
	if (window.location.hash) {
		switch (window.location.hash.length) {
			case 7: {
				window.mainColor = window.location.hash.toUpperCase();
				break;
			}
			case 6: {
				window.mainColor = "#" + window.location.hash.toUpperCase();
				break;
			}
		}
	} else {
		var pathname = window.location.pathname;
		var expression = /([a-f\d]{6})$/i.exec(pathname);

		if (expression && expression[1]) {
			window.mainColor = "#" + expression[1];
		}
	}
}

setMainColor();
Watch.start(window.location, "hash", function () {
	setMainColor();
});

function RGBToHSL(rgb) {
	var min, max, delta, h, s, l;
	var r = rgb[0], g = rgb[1], b = rgb[2];
	min = Math.min(r, Math.min(g, b));
	max = Math.max(r, Math.max(g, b));
	delta = max - min;
	l = (min + max) / 2;
	s = 0;
	if (l > 0 && l < 1) {
		s = delta / (l < 0.5 ? (2 * l) : (2 - 2 * l));
	}
	h = 0;
	if (delta > 0) {
		if (max === r && max !== g) h += (g - b) / delta;
		if (max === g && max !== b) h += (2 + (b - r) / delta);
		if (max === b && max !== r) h += (4 + (r - g) / delta);
		h /= 6;
	}
	return [h, s, l];
}

function HEXToRGB(hexColor) {
	if (hexColor.length === 7) {
		return [parseInt('0x' + hexColor.substring(1, 3)) / 255,
			parseInt('0x' + hexColor.substring(3, 5)) / 255,
			parseInt('0x' + hexColor.substring(5, 7)) / 255];
	} else if (hexColor.length === 4) {
		return [parseInt('0x' + hexColor.substring(1, 2)) / 15,
			parseInt('0x' + hexColor.substring(2, 3)) / 15,
			parseInt('0x' + hexColor.substring(3, 4)) / 15];
	}
	return false
}

// return percents of difference 0...100
function getColorDifference(rgb1, rgb2) {
	var rgbResult = [];
	var percents = 0;

	for (var i = 0; i < 3; i++) {
		var max = Math.max(rgb1[i], rgb2[i]);
		var min = Math.min(rgb1[i], rgb2[i]);

		if (max > 0) {
			rgbResult[i] = min / max * 100;
		} else {
			rgbResult[i] = 100;
		}
		percents += rgbResult[i];
	}


	return percents / 3;
}

var Queue = function () {
	var queue = [];
	var position = 0;

	this.add = function (obj) {
		queue.push(obj);
	};
	this.next = function () {
		var next = queue[position];

		if (next) {
			position++;
			return next
		}
		return false

	};
	this.getCurrentLength = function () {
		return queue.length;
	}
};

var body = document.getElementsByTagName("body")[0];
var backgroundColors = document.getElementById("background-color-change").getElementsByTagName("li");

function backgroundColorChange(color) {
	var hexColor = this.innerHTML || color;

	if (RGBToHSL(HEXToRGB(hexColor))[2] <= 0.48) {
		body.className = "inverted";
	} else {
		body.className = "";
	}
	body.style.backgroundColor = hexColor;
	if (!color) {
		this.style.backgroundColor = hexColor;
	}

	var backgroundColorsArray = [];
	var backgroundColorsLength = backgroundColors.length;
	var i = 0;
	while (i < backgroundColorsLength) {
		var item = backgroundColors[i].getElementsByTagName("span")[0];
		backgroundColorsArray.push(item.innerHTML);
		i++;
	}
	Cookies.set("backgroundColors", backgroundColorsArray.toString());
	Cookies.set("currentBackgroundColor", hexColor);
}


(function () {
	function addEvent(elem, evType, fn) {
		if (elem.addEventListener) {
			elem.addEventListener(evType, fn, false);
		}
		else if (elem.attachEvent) {
			elem.attachEvent('on' + evType, function () {
				fn.call(elem);
			});
		}
		else {
			elem['on' + evType] = function () {
				fn.call(elem);
			}
		}
	}

	var head = document.getElementsByTagName("head")[0];

	var scriptQueue = new Queue();
	var scriptLoad = function (url) {
		if (!url) {
			return false;
		}
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = url;
		head.appendChild(script);

		script.onload = function () {
			scriptLoad(scriptQueue.next());
		};

		return script
	};
	var scriptAdd = function (url) {
		scriptQueue.add(url);
		if (scriptQueue.getCurrentLength() === 1) {
			scriptLoad(scriptQueue.next());
		}
	};


	var styleLoad = function (url) {
		var style = document.createElement("link");
		style.type = "text/css";
		style.rel = "stylesheet";
		style.href = url;
		head.appendChild(style);

		return style
	};
	var imageLoad = function (url) {
		var image = new Image();
		image.src = url;

		return image
	};

	var list = document.getElementById("background-color-change"),
		listItems = list.getElementsByTagName("li"),
		listItemsLength = listItems.length;


	var cookiesBackgroundColors = Cookies.get("backgroundColors") || "";
	cookiesBackgroundColors = cookiesBackgroundColors.split(",");

	var i = 0;
	while (i < listItemsLength) {
		var item = listItems[i].getElementsByTagName("span")[0];
		item.innerHTML = cookiesBackgroundColors[i] || item.innerHTML;
		item.style.backgroundColor = item.innerHTML;

		addEvent(item, "mouseover", backgroundColorChange);

		i++;
	}

	var currentBackgroundColor = Cookies.get("currentBackgroundColor");
	if (currentBackgroundColor) {
		backgroundColorChange(currentBackgroundColor);

	}

	scriptAdd("js/main.js");
	scriptAdd("http://www.google-analytics.com/ga.js");

	imageLoad("images/farbtastic/marker.png");
	imageLoad("images/farbtastic/mask.png");
	imageLoad("images/farbtastic/wheel.png");


}).call(this);