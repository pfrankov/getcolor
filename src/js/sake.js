jQuery.sake = {
	entryMark: function (query, DataItemValue) {
		var position = DataItemValue.toLowerCase().indexOf(query.toLowerCase());
		if (position >= 0) {
			var before = DataItemValue.substring(0, position),
				piece = DataItemValue.substring(position, query.length + position),
				after = DataItemValue.substring(query.length + position, DataItemValue.length);
		}

		return [before, piece, after];
	}
};
jQuery.fn.sake = function (options, callback) {

	var url,
		ajaxSetup = {};

	// Create ajaxSetup if first argument is String
	if (typeof options === "string") {
		ajaxSetup = {
			url: options
		};
		options = {};
		options.change = callback || function () {
		};

	} else if (options.ajax) {
		ajaxSetup = options.ajax;
	}
	;

	ajaxSetup = jQuery.extend({
		timeout: 100
	}, ajaxSetup);

	options = jQuery.extend({
		listClass: "sake", // :String	Class for suggestion list and his elements	<ul class="sake"><li class="sake">
		delay: 0, // :Int	Delay in milliseconds before opening suggestion list

		/*
		*	data	:Array
		*
		*	Data to search.
		*	Array can contain Strings:
		*				["one", "two", "three"]
		*	or Objects:
		*				[{value:"one", id:55}, {value:"two", id:56}, {value:"three", id:57}]
		*/
		data: null,

		/*
		*	ajax	:ajaxSetup:Object
		*
		*	Load data from ajax-query
		*	@ajaxSetup	:Object	from http://api.jquery.com/jQuery.ajax/
		*/
		ajax: ajaxSetup,

		limit: 10, // :Int	Limit of showed suggests

		/*
		*	width	:String
		*
		*	Suggestion list width.
		*		"input" — width from input.
		*	You can use any declaration of width, like "100%" or "50px"
		*/
		width: "input",

		searchAt: "value", // :String	Property in data to searching, if data is array of objects.

		/*
		*	listFormat	:Function():String
		*
		* 	Set data format in <li>{right here}</li> of suggestion list
		* 	@query		:String		Input value at this moment
		* 	@DataItem	:Object		Data from founded item (from ajax or data), who contain @query
		 */
		listFormat: function (query, DataItem) {
			var markedArray = jQuery.sake.entryMark(query, DataItem[options.searchAt]);

			return markedArray[0] + "<b>" + markedArray[1] + "</b>" + markedArray[2]
		},

		/*
		*	inputFormat	:Function():String
		*
		* 	Set data format in <input type="text" value="{right here}"/> after Event:onkeyup
		* 	@query	:String	Input value at this moment
		 */
		inputFormat: function (query) {
			return query;
		},

		/*
		*	[---- Events ----]
		*	this	:$input:jQuery:Object
		*/


		/*
		*	select	:Function():void
		*
		* 	Callback. Triggered when <li class="sake"> hovered or selected from keyboard
		* 	@$listItem	:jQuery:Object
		*/
		select: function ($listItem) {
		},

		/*
		*	click	:Function():void
		*
		* 	Callback. Triggered when <li class="sake"> clicked or pressed from keyboard
		* 	@$listItem	:jQuery:Object
		*/
		click: function ($listItem) {
		},

		/*
		*	change	:Function():void
		*
		* 	Callback. Triggered when suggestion list is changhed
		* 	@ListArray	:ListArray:Array
		* 			{
		* 				$item: 	$listItem:jQuery:Object,
		*				data: 	DataItem:Object
		*			}
		*/
		change: function (ListArray) {
		},

		/*
		*	show	:Function():void
		*
		* 	Callback. Triggered when suggestion list is showing
		* 	@$list	:jQuery:Object		<ul>
		*/
		show: function ($list) {
		},
		close: function () {
		},
		search: function () {
		}
	}, options);


	/*
	*	Return founded elements():Array
	*
	* 	@query	:String
	* 	@Data	:DataArray:Array
	*/
	function filter(query, Data) {
		var resultArray = [];

		var i = 0;

		while (i < Data.length) {

			var DataItem = Data[i];
			if (typeof DataItem === "string") {
				DataItem = {};
				DataItem[options.searchAt] = Data[i];
			}
			var position = DataItem[options.searchAt].toLowerCase().indexOf(query.toLowerCase());
			if (position >= 0) {
				if (resultArray.length >= options.limit) {
					break;
				}
				resultArray[resultArray.length] = DataItem;
			}

			i++;
		}

		// Sort by alphabet
		resultArray = resultArray.sort(function (a, b) {
			if (a[options.searchAt] > b[options.searchAt]) {
				return 1
			}
		});

		// Sort by position of founded symbols
		resultArray = resultArray.sort(function (a, b) {
			if (a[options.searchAt].toLowerCase().indexOf(query.toLowerCase()) > b[options.searchAt].toLowerCase().indexOf(query.toLowerCase())) {
				if (a[options.searchAt] < b[options.searchAt]) {
					return 1
				}
			}
		});


		return resultArray;
	}


	/*
	*	Filling list():void
	*
	* 	@$input			:jQuery:Object
	* 	@Data			:DataArray:Array
	* 	@formatedData	:Function():String
	*/
	function fillList($input, Data) {
		var $list = $input.data("sakeList");
		var ListArray = [];
		var $listItems = $();

		var i = 0;

		while (i < Data.length) {

			(function () {
				var DataItem = Data[i];
				if (typeof DataItem === "string") {
					DataItem = {};
					DataItem[options.searchAt] = Data[i];
				}

				var $listItem = $("<li/>")
					.addClass(options.listClass)
					.hover(function () {
						$listItem.addClass("active").siblings(".active").removeClass("active");

						options.select.call($input, $this);
					}, function () {
						$listItem.siblings(".active").andSelf().removeClass("active");
					})
					.click(function () {

						$input.val(options.inputFormat($input.val(), DataItem));
						hideList($input, $list);

						options.click.call($input, $listItem);
					})
					.html(options.listFormat($input.val(), DataItem));

				ListArray[ListArray.length] = {
					$item: $listItem,
					data: DataItem
				};

				$listItems = $listItems.add($listItem);
			}).call(this);

			i++;
		}

		$listItems.appendTo($list);

		options.change.call($input, ListArray);
	}

	function showList($input, $list) {
		$list.fadeIn(500);

		options.show.call($input, $list);
	}

	function hideList($input, $list) {
		$list.fadeOut(500);

		options.close.call($input, $list);
	}


	function removeListItems($list) {
		$list.children().remove();
	}

	this.open = function () {
		return this.each(function () {
			var $input = $(this);

			var $list = $input.data("sakeList");
			if ($list) {
				showList($input, $list);
			}
		})
	};
	this.close = function () {
		return this.each(function () {
			var $input = $(this);

			var $list = $input.data("sakeList");
			if ($list) {
				hideList($input, $list);
			}
		})
	}
	return this.each(function () {


		var $input = $(this);
		// If sake on this element exist
		if ($input.data("sakeList")) {
			return false;
		}
		var $listParent = $input.parent();

		var $list = $("<ul/>")
			.addClass(options.listClass)
			.css({
				width: options.width === "auto" ? $input.outerWidth() : options.width
			})
			.hide()
			.appendTo($listParent);

		$input.data("sakeList", $list);

		var oldVal = $input.val();
		$input.keyup(function (event) {

			$input.val(options.inputFormat($input.val()));

			var $active = $list.children(".active");
			switch (event.keyCode) {
				case 40: {
					showList($input, $list);
					if ($active.length && $active.next().length) {
						$active.removeClass("active").next().addClass("active");
					} else if (!$active.length) {
						$list.children(":first-child").addClass("active");
					}

					break;
				}
				case 38: {
					showList($input, $list);
					if ($active.length && $active.prev().length) {
						$active.removeClass("active").prev().addClass("active");
					} else if (!$active.length) {
						$list.children(":last-child").addClass("active");
					}


					break;
				}
				case 13: {
					if ($active.length) {
						$active.click();
					}

					break;
				}
				case 27: {
					hideList($input, $list);

					break;
				}
			}
			if (oldVal === $input.val()) {
				return false;
			}
			oldVal = $input.val();
			removeListItems($list);

			if (!$input.val().length) {
				return false;
			}

			showList($input, $list);

			clearTimeout($input[options.listClass + "_interval"]);

			var filtered = [];

			if (options.data instanceof Array) {
				$input[options.listClass + "_interval"] = setTimeout(function () {
					filtered = filter($input.val(), options.data);
					fillList($input, filtered);
				}, options.delay);
			} else {
				var ajaxSetup = options.ajax;

				ajaxSetup = jQuery.extend({
					success: function (data) {
						if (!data) {
							return false;
						}
						$input[options.listClass + "_interval"] = setTimeout(function () {
							filtered = data;
							fillList($input, filtered);
						}, options.delay);

						// if success callback already exist — call it!
						if (options.ajax.success) {
							options.ajax.success(arguments);
						}
					}
				}, ajaxSetup);

				$.ajax(ajaxSetup);
			}
		});
	});
};