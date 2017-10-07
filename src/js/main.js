var wikiColors = [
	["Ализариновый красный", "Alizarin Crimson", "#E32636"],
	["Янтарный", "Amber", "#FFBF00"],
	["Аметистовый", "Amethyst", "#9966CC"],
	["Спаржа", "Asparagus", "#7BA05B"],
	["Морской волны", "Aqua", "#00FFFF"],
	["Аквамариновый", "Aquamarine", "#7FFFD4"],
	["Лазурный", "Azure", "#007FFF"],
	["Бежевый", "Beige", "#F5F5DC"],
	["Бистр", "Bistre", "#3D2B1F"],
	["Чёрный", "Black", "#000000"],
	["Синий", "Blue", "#0000FF"],
	["Вода пляжа Бонди", "Bondi Blue", "#0095B6"],
	["Латунный", "Brass", "#B5A642"],
	["Ярко-зелёный", "Bright green", "#66FF00"],
	["Ярко-бирюзовый", "Bright turquoise", "#08E8DE"],
	["Ярко-фиолетовый", "Bright violet", "#CD00CD"],
	["Бронзовый", "Bronze", "#CD7F32"],
	["Коричневый", "Brown", "#964B00"],
	["Кожа буйвола", "Buff", "#F0DC82"],
	["Бургундский", "Burgundy", "#900020"],
	["Выгоревший оранжевый", "Burnt Orange", "#CC5500"],
	["Сиена жжёная", "Burnt Sienna", "#E97451"],
	["Умбра жжёная", "Burnt umber", "#8A3324"],
	["Камуфляжный зелёный", "Camouflage green", "#78866B"],
	["Кардинал", "Cardinal", "#C41E3A"],
	["Карминово-красный", "Carmine", "#960018"],
	["Морковный", "Carrot", "#ED9121"],
	["Серо-зелёный", "Celadon", "#ACE1AF"],
	["Светлая вишня", "Cerise", "#DE3163"],
	["Лазурный", "Cerulean", "#007BA7"],
	["Лазурно-синий", "Cerulean blue", "#2A52BE"],
	["Салатовый / Шартрез", "Chartreuse", "#7FFF00"],
	["Каштановый", "Chestnut", "#CD5C5C"],
	["Шоколадный", "Chocolate", "#D2691E"],
	["Коричневый", "Cinnamon", "#7B3F00"],
	["Кобальт синий", "Cobalt", "#0047AB"],
	["Медный", "Copper", "#B87333"],
	["Коралловый", "Coral", "#FF7F50"],
	["Кукурузный", "Corn", "#FBEC5D"],
	["Васильковый", "Cornflower blue", "#6495ED"],
	["Кремовый", "Cream", "#FFFDD0"],
	["Малиновый", "Crimson", "#DC143C"],
	["Циан, васильковый", "Cyan", "#00FFFF"],
	["Тёмно-коричневый", "Dark brown", "#654321"],
	["Тёмно-лазурный", "Dark cerulean", "#08457E"],
	["Тёмно-каштановый", "Dark chestnut", "#986960"],
	["Тёмно-коралловый", "Dark coral", "#CD5B45"],
	["Тёмно-золотой", "Dark goldenrod", "#B8860B"],
	["Тёмно-зелёный", "Dark green", "#013220"],
	["Тёмный индиго", "Dark Indigo", "#310062"],
	["Тёмный хаки", "Dark Khaki", "#BDB76B"],
	["Тёмно-оливковый", "Dark Olive", "#556832"],
	["Тёмный пастельно-зелёный", "Dark pastel green", "#03C03C"],
	["Тёмно-персиковый", "Dark Peach", "#FFDAB9"],
	["Тёмно-розовый", "Dark pink", "#E75480"],
	["Тёмная лососина", "Dark salmon", "#E9967A"],
	["Тёмно-алый", "Dark Scarlet", "#560319"],
	["Тёмно-аспидный серый", "Dark slate gray", "#2F4F4F"],
	["Тёмный весенне-зелёный", "Dark spring green", "#177245"],
	["Тёмный жёлто-коричневый", "Dark tan", "#918151"],
	["Тёмно-мандариновый", "Dark tangerine", "#FFA812"],
	["Тёмный зелёный чай", "Dark Tea Green", "#BADBAD"],
	["Тёмно-бирюзовый", "Dark turquoise", "#116062"],
	["Тёмно-фиолетовый", "Dark violet", "#423189"],
	["Голубой", "Deep sky blue", "#00BFFF"],
	["Джинсовый синий", "Denim", "#1560BD"],
	["Защитно-синий", "Dodger blue", "#1E90FF"],
	["Изумрудный", "Emerald", "#50C878"],
	["Баклажановый", "Eggplant", "#990066"],
	["Зелёный папоротник", "Fern green", "#4F7942"],
	["Льняной", "Flax", "#EEDC82"],
	["Фуксия", "Magenta (Fuchsia)", "#FF00FF"],
	["Гуммигут", "Gamboge", "#E49B0F"],
	["Золотой", "Gold", "#FFD700"],
	["Золотисто-берёзовый", "Goldenrod", "#DAA520"],
	["Серый", "Gray", "#808080"],
	["Серая спаржа", "Gray-asparagus", "#465945"],
	["Зелёный серый чай", "Gray-Tea Green", "#CADABA"],
	["Зелёный", "Green", "#00FF00"],
	["Жёлто-зелёный", "Green-yellow", "#ADFF2F"],
	["Синий Градуса", "Gradus Blue", "#007DFF"],
	["Гелиотроп", "Heliotrope", "#DF73FF"],
	["Ярко-розовый", "Hot pink", "#FC0FC0"],
	["Индиго", "Indigo", "#4B0082"],
	["Международный (сигнальный) оранжевый", "International orange (Safety orange)", "#FF4F00"],
	["Жёлто-зелёный", "Jade", "#00A86B"],
	["Хаки", "Khaki", "#C3B091"],
	["Синий Клейна", "Klein Blue", "#3A75C4"],
	["Лаванда", "Lavender", "#E6E6FA"],
	["Розово-лавандовый", "Lavender Blush", "#FFF0F5"],
	["Лимонный", "Lemon", "#FDE910"],
	["Лимонно-кремовый", "Lemon Cream", "#FFFACD"],
	["Светло-коричневый", "Light brown", "#CD853F"],
	["Сиреневый", "Lilac", "#C8A2C8"],
	["Лайм", "Lime", "#CCFF00"],
	["Льняной", "Linen", "#FAF0E6"],
	["Малахитовый", "Malachite", "#0BDA51"],
	["Коричнево-малиновый", "Maroon", "#800000"],
	["Розовато-лиловый", "Mauve", "#993366"],
	["Полуночно-синий", "Midnight Blue", "#003366"],
	["Зелёная мята", "Mint Green", "#98FF98"],
	["Зелёный мох", "Moss green", "#ADDFAD"],
	["Розовый Маунтбэттена", "Mountbatten pink", "#997A8D"],
	["Горчичный", "Mustard", "#FFDB58"],
	["Белый навахо", "Navajo white", "#FFDEAD"],
	["Тёмно-синий", "Navy blue", "#000080"],
	["Охра", "Ochre", "#CC7722"],
	["Старое золото", "Old Gold", "#CFB53B"],
	["Оливковый", "Olive", "#808000"],
	["Нежно-оливковый", "Olive Drab", "#6B8E23"],
	["Оранжевый", "Orange", "#FFA500"],
	["Орхидея", "Orchid", "#DA70D6"],
	["Бледно-синий", "Pale Blue", "#AFEEEE"],
	["Бледно-коричневый", "Pale brown", "#987654"],
	["Бледно-карминный", "Pale carmine", "#AF4035"],
	["Бледно-каштановый", "Pale chestnut", "#DDADAF"],
	["Бледно-васильковый", "Pale cornflower blue", "#ABCDEF"],
	["Бледно-пурпурный", "Pale magenta", "#F984E5"],
	["Бледный розовато-лиловый", "Pale mauve", "#996666"],
	["Бледно-розовый", "Pale pink", "#FADADD"],
	["Лиловый", "Pale red-violet", "#DB7093"],
	["Бледно-песочный", "Pale Sandy Brown", "#DABDAB"],
	["Палевый", "Pale yellow", "#F0DC82"],
	["Панг", "Pang", "#C7FCEC"],
	["Побег папайи", "Papaya whip", "#FFEFD5"],
	["Пастельно-зелёный", "Pastel green", "#77DD77"],
	["Пастельно-розовый", "Pastel pink", "#FFD1DC"],
	["Персиковый", "Peach", "#FFE5B4"],
	["Оранжево-персиковый", "Peach-orange", "#FFCC99"],
	["Жёлто-персиковый", "Peach-yellow", "#FADFAD"],
	["Грушевый", "Pear", "#D1E231"],
	["Барвинок", "Periwinkle", "#CCCCFF"],
	["Персидский синий", "Persian blue", "#6600FF"],
	["Зелёная сосна", "Pine Green", "#01796F"],
	["Розовый", "Pink", "#FFC0CB"],
	["Оранжево-розовый", "Pink-orange", "#FF9966"],
	["Сливовый", "Plum", "#660066"],
	["Пороховая синь", "Powder blue", "#003399"],
	["Красновато-коричневый", "Puce", "#CC8899"],
	["Берлинская лазурь", "Prussian blue", "#003153"],
	["Тыква", "Pumpkin", "#FF7518"],
	["Пурпурный", "Purple", "#660099"],
	["Умбра", "Raw umber", "#734A12"],
	["Красный", "Red", "#FF0000"],
	["Фиолетово-красный", "Red-violet", "#C71585"],
	["Яйца дрозда", "Robin egg blue", "#00CCCC"],
	["Королевский синий", "Royal Blue", "#4169E1"],
	["Красновато-коричневый", "Russet", "#755A57"],
	["Ржаво-коричневый", "Rust", "#B7410E"],
	["Сигнальный оранжевый", "Safety Orange (Blaze Orange)", "#FF9900"],
	["Шафрановый", "Saffron", "#F4C430"],
	["Сапфировый", "Sapphire", "#082567"],
	["Лососёвый", "Salmon", "#FF8C69"],
	["Песочный", "Sandy brown", "#F4A460"],
	["Сангрия", "Sangria", "#92000A"],
	["Алый", "Scarlet", "#FF2400"],
	["Жёлтого школьного автобуса", "School bus yellow", "#FFD800"],
	["Зелёное море", "Sea Green", "#2E8B57"],
	["Морской пены", "Seashell", "#FFF5EE"],
	["Отборный жёлтый", "Selective yellow", "#FFBA00"],
	["Сепия", "Sepia", "#704214"],
	["Серебряный", "Silver", "#C0C0C0"],
	["Серый шифер", "Slate gray", "#708090"],
	["Зелёная весна", "Spring Green", "#00FF7F"],
	["Синяя сталь", "Steel blue", "#4682B4"],
	["Болотный", "Swamp green", "#ACB78E"],
	["Загара", "Tan", "#D2B48C"],
	["Краснобуро-оранжевый", "Tenne", "#CD5700"],
	["Мандариновый", "Tangerine", "#FFCC00"],
	["Зелёный чай", "Tea Green", "#D0F0C0"],
	["Сине-зелёный", "Teal", "#008080"],
	["Чертополох", "Thistle", "#D8BFD8"],
	["Бирюзовый", "Turquoise", "#30D5C8"],
	["Тициановый", "Titian", "#d53e07"],
	["Ультрамариновый", "Ultramarine", "#120A8F"],
	["Киноварь", "Vermilion", "#FF4D00"],
	["Фиолетовый", "Violet", "#8B00FF"],
	["Фиолетово-баклажанный", "Violet-eggplant", "#991199"],
	["Ядовито-зелёный", "Viridian", "#40826D"],
	["Пшеничный", "Wheat", "#F5DEB3"],
	["Белый", "White", "#FFFFFF"],
	["Глициния", "Wisteria", "#C9A0DC"],
	["Жёлтый", "Yellow", "#FFFF00"],
	["Циннвальдит", "Zinnwaldite", "#EBC2AF"],

	["Сомон", "Saumon", "#EFAF8C"],
	["Кофейный", "Coffee", "#442D25"],
	["Медвежьего ушка", "Byron", "#834D18"],
	["Кирпичный", "Brick", "#884535"],
	["Терракотовый", "Terracotta", "#904D30"],
	["Камелопардовый", "Camelopardalis", "#A25F2A"],
	["Ванильный", "Vanilla", "#D5713F"],
	["Рыжий", "Reddish-brown", "#D77D31"],
	["Сиена", "Siena", "#E28B00"],
	["Последний вздох Жако", "Jaco", "#FF9218"],
	["Жёлто-розовый", "Yellow Pink", "#FFE4B2"],
	["Бедра испуганной нимфы", "Scared nymph", "#FAEEDD"],
	["Сливочный", "Light cream", "#F2E8C9"],
	["Пергидрольной блондинки", "Perhydor", "#EEE6A3"],
	["Шамуа", "Chamois", "#A08040"],
	["Тёмно-грушевый", "Dark pear", "#D8A903"],
	["Детской неожиданности", "Child's surprise", "#F7F21A"],
	["Вердепешевый", "Vert-de-pеche", "#DAD871"],
	["Слоновой кости", "Ivory", "#FFFDDF"],
	["Травяной", "Grass", "#5DA130"],
	["Влюбленной жабы", "Toad in love", "#3CAA3C"],
	["Вердепомовый", "Vert-de-pomme", "#34C924"],
	["Фисташковый", "Pistachio", "#BEF574"],
	["Красного моря", "Red Sea", "#1F4037"],
	["Лягушки в обмороке", "Fainted frog", "#7B917B"],
	["Маренго", "Marengo", "#4C5866"],
	["Мурена", "Moray", "#1C6B72"],
	["Электрик", "Electric", "#7DF9FF"],
	["Светло-серый", "Light Grey", "#BBBBBB"],
	["Кварцевый", "Quartz", "#99958C"],
	["Антрацитовый", "Anthracite", "#464451"],
	["Чёрного моря", "Black Sea", "#1A4780"],
	["Сизый", "Bluish", "#79A0C1"],
	["Ниагара", "Niagara", "#9DB1CC"],
	["Небесный", "Sky", "#7FC7FF"],
	["Гридеперлевый", "Gris de perle", "#C7D0CC"],
	["Бороды Абдель-Керима", "Abdel Kerim's beard", "#D5D5D5"],
	["Серобуромалиновый", "Seroburomalinovyj", "#735184"],
	["Фиалковый", "Violaceous", "#EA8DF7"],
	["Звезды в шоке", "Shocked star", "#FF47CA"],
	["Вишнёвый", "Cherry", "#911E42"],
	["Блошиного брюшка", "Flea belly", "#4E1609"],
	["Бурый", "Fulvous", "#45161C"],
	["Бисмарк-фуриозо", "Bismarck-furious", "#A5260A"],
	["Бордовый", "Wine red", "#9B2D30"]
];

var additionalInfo = [
	"Почти не похоже на",
	"Слегка напоминает",
	"Похоже на",
	"Почти как",
	"Очень похоже на",
	"Больше всего напоминает",
	"Ещё чуть-чуть и будет",
	"Настоящий"
];

function convertData(wikiColors) {
	var resultArray = [];
	var i = 0;
	while (i < wikiColors.length) {
		resultArray[resultArray.length] = {
			value: wikiColors[i][0],
			color: wikiColors[i][2]
		};
		resultArray[resultArray.length] = {
			value: wikiColors[i][1],
			color: wikiColors[i][2]
		};

		i++;
	}

	return resultArray;
}


$(function () {

	VK.init({apiId: 1961711, onlyWidgets: true});


	var $head = $("head:eq(0)");

	function drawFavicon(hexColor) {
		var hex = hexColor.slice(1);

		var red = parseInt(hex.slice(0, 2), 16);
		var green = parseInt(hex.slice(2, 4), 16);
		var blue = parseInt(hex.slice(4, 6), 16);


		var canvas = document.createElement("canvas");
		canvas.width = 16;
		canvas.height = 16;

		if (canvas.getContext) {
			var context = canvas.getContext('2d');

			context.fillStyle = "rgba(" + red + "," + green + "," + blue + ",1)";

			var roundedPixels = 4;

			context.beginPath();
			context.moveTo(0, roundedPixels);

			context.quadraticCurveTo(0, 0, roundedPixels, 0);
			context.lineTo(canvas.width - roundedPixels, 0);

			context.quadraticCurveTo(canvas.width, 0, canvas.width, roundedPixels);
			context.lineTo(canvas.width, canvas.height - roundedPixels);

			context.quadraticCurveTo(canvas.width, canvas.height, canvas.width - roundedPixels, canvas.height);
			context.lineTo(roundedPixels, canvas.height);

			context.quadraticCurveTo(0, canvas.height, 0, canvas.height - roundedPixels);
			context.lineTo(0, roundedPixels);

			context.fill();

			//context.font = "bold 120% sans-serif";
			//context.fillStyle = RGBToHSL (HEXToRGB( hexColor ))[2] <= 0.48 ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.5)";
			//context.fillText("#", 4, 12);

			if (canvas.toDataURL) {
				var dataURL = canvas.toDataURL("image/png");

				$head.children("link[rel*=icon]").remove();
				$("<link/>").attr({
					rel: "shortcut icon",
					type: "image/png",
					href: dataURL
				}).appendTo($head);
			}
		}
	}

	drawFavicon(mainColor);


	var $color = $("#color").attr({
		title: "Выбрать другой цвет"
	}).css({
		cursor: "pointer"
	});


	var $body = $(document.body);
	var $mainColor = $("#main-colorpicker");
	var $mainColorPicker = $mainColor.find(".mainColorPicker");
	var $colorInput = $mainColor.find("input:eq(0)");
	var $linkInput = $mainColor.find("#link input:eq(0)");
	var $linkLink = $mainColor.find("#link a");
	var $currentColor = $("#current-color");
	var $additionalInfo = $("#colorize h2");
	var $bgColors = $("#background-color-change li");

	var $searchInput = $("#color-finder-input input");

	// create
	var farbtastic = $.farbtastic($mainColorPicker, function (color) {
		var self = this;

		if (!/([a-f\d]{6})$/i.test(color)) {
			return false;
		}
		$color.css({
			backgroundColor: color
		});
		$color.data("currentColor", color);

		var colorString = color.substring(1, color.length);

		$linkInput.val("http://getcolor.ru/" + colorString.toUpperCase());
		$linkLink.attr("href", $linkInput.val());

		$colorInput.val(color.toUpperCase());
		$currentColor.html(color.toUpperCase());

		document.title = color.toUpperCase();
		drawFavicon(color);


		/*
		*	additional info
		*/
		clearTimeout(this.additionalInfoTimeout);
		this.additionalInfoTimeout = setTimeout(function () {
			var i = 0,
				minValue = 80,
				maxPercents = minValue, // start value
				colorId;

			while (i < wikiColors.length) {
				var difference = getColorDifference(HEXToRGB(wikiColors[i][2]), self.rgb);
				if (difference > maxPercents) {
					maxPercents = difference;
					colorId = i;
				}

				i++;
			}

			$additionalInfo.html("");
			var colorPrefix = "";
			if (colorId !== undefined) {

				var increment = (100 - minValue) / additionalInfo.length;

				if (!/^.+?(ы|и|о)й$/i.test(wikiColors[colorId][0])) {
					colorPrefix = "цвет ";
				}

				for (var j = 0; j < additionalInfo.length; j++) {
					if (increment * (j + 1) + minValue >= maxPercents - increment / 2) {
						var additionalInfoText = additionalInfo[j];
						break;
					}
				}

				$additionalInfo.html(additionalInfoText + ' ' + colorPrefix + '<a title="Выбрать этот цвет" href="' + wikiColors[colorId][2] + '" class="color">' + wikiColors[colorId][0] + '</a>');
			}

			var vk_title_string;
			var vk_color = colorId !== undefined ? wikiColors[colorId][0] : color;

			if (colorPrefix.length || colorId === undefined) {
				vk_title_string = "Мне нравится цвет " + vk_color;
			} else {
				vk_title_string = "Мне нравится " + vk_color + " цвет";
			}

			var getColorURL = "http://getcolor.ru/";
			var url = getColorURL + colorString.toUpperCase();

			$("#vk_like").children().remove();
			VK.Widgets.Like('vk_like', {
				pageTitle: vk_title_string,
				pageDescription: 'А тебе?',
				pageUrl: url,
				type: "mini"
			});


			$("#plus").html("");

			var $plus = $("<div/>", {
				id: "plus-button"
			});
			$plus.appendTo("#plus");

			gapi.plusone.render(
				"plus-button",
				{
					href: url,
					size: "medium",
					align: "right"
				}
			);
		}, 1000);
	}).setColor(window.mainColor);

	$(document.body).on("mouseenter", ".color", function () {
		var color = this.getAttribute("href");

		$color.css({
			backgroundColor: color
		});
	}).on("mouseleave", ".color", function () {
		$color.css({
			backgroundColor: $color.data("currentColor")
		});
	});

	$linkInput.bind("focus", function () {
		setTimeout(function () {
			$linkInput.select();
		}, 1);
	});

	Watch.stop(window.location);
	Watch.start(window.location, "hash", function () {
		setMainColor();
		farbtastic.setColor(window.mainColor);
	});

	//
	$color.click(function () {
		if ($mainColor.is(":visible")) {
			$mainColor.fadeOut(700);
		} else {
			$mainColor.fadeIn(700);
		}
	});

	// Background color changer
	var $backgroundColor = $("<div/>").addClass("backgroundColor").appendTo($body);
	var $backgroundColorInput = $("<input/>").attr({
		type: "text"
	}).addClass("backgroundColorInput colorInput").appendTo($backgroundColor);
	var $backgroundColorPicker = $("<div/>").addClass("backgroundColorPicker colorpicker").appendTo($backgroundColor);

	$.farbtastic($backgroundColorPicker, function (hexColor) {
		var $current = $($backgroundColorPicker.data("current"));
		var colorElement = $current.siblings("span").html(hexColor).get(0);
		$backgroundColorInput.val(hexColor.toUpperCase());

		backgroundColorChange.call(colorElement);

	});
	$backgroundColor
		.mouseleave(function () {
			$backgroundColor.fadeOut("fast");
		});
	$("#background-color-change > .colorpicker strong")
		.each(function () {
			$(this).css({
				cursor: "pointer"
			}).attr({
				title: "Выбрать другой цвет"
			});
		})
		.click(function () {
			var $this = $(this);
			$backgroundColor.css({
				top: Math.max($this.offset().top + $this.height() / 2 - $backgroundColor.outerHeight() / 2, 0),
				left: $this.offset().left - 40
			});

			if ($backgroundColor.data("current") === this && $backgroundColor.filter(":visible").length) {
				$backgroundColor.fadeOut(700);
			} else {
				$backgroundColor.fadeIn(700);
			}
			$backgroundColorPicker.data("current", this);
			$.farbtastic($backgroundColorPicker).setColor($this.siblings("span").html());

		});


	$(".colorInput").bind("change keyup", function () {
		$.farbtastic($(this).siblings(".colorpicker")).setColor(this.value);
	});

	if (!window.location.hash && window.location.pathname.length < 2) {
		$color.click();
	}


	var $colorFinder = $("#color-finder").addClass("visible"),
		$colorFinderH2 = $colorFinder.find("h2"),
		$colorFinderSmall = $colorFinderH2.find("small"),
		$colorFinderInput = $("#color-finder-input"),
		$colorFinderInputRequest = $colorFinderInput.find("input");

	$colorFinderH2.click(function () {
		if (!$colorFinderInput.filter(":visible").length) {
			$colorFinderH2.addClass("active");
			$colorFinderSmall.hide();

			$colorFinderInput.fadeIn(500);
			$colorFinderInputRequest.focus();

			$colorFinder.css({
				width: "10%"
			}).animate({
				width: "30%"
			}, 500);
		} else {
			$colorFinderInput.fadeOut(500);
			$colorFinder.css({
				width: "30%"
			}).animate({
				width: "10%"
			}, 500, function () {
				$colorFinder.css({
					width: "auto"
				});
				$colorFinderH2.removeClass("active");
				$colorFinderSmall.show();
			});
		}
	});
	$colorFinderInputRequest.sake({
		data: convertData(wikiColors),
		width: "150%",
		change: function (listArray) {
			var i = 0;

			while (i < listArray.length) {
				var link = $("<a/>").attr({
					href: listArray[i].data.color,
					title: "Выбрать этот цвет"
				}).addClass("color").css({
					color: RGBToHSL(HEXToRGB(listArray[i].data.color))[2] <= 0.48 ? "#fff" : "#333"
				});
				listArray[i].$item.css({
					backgroundColor: listArray[i].data.color
				}).wrapInner(link);


				/*
				if ( $.support.opacity ) {
					listArray[i].$item.css({
						opacity:0
					}).delay(50*i).animate({
						opacity:1
					}, 300);
				}
				*/


				i++;
			}
		}
	});

	$(document).one("touchmove mousewheel click", function () {
		$("#background-color-change").addClass("visible");
		$("#main-colorpicker").addClass("visible");
	});


	$("#colorize").addClass("visible");
});