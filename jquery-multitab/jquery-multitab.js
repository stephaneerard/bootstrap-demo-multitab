;
(function($) {

	$.widget('se.multitab', {

		options : {},
		_create : function() {
			console.log(this.element);
			this.element.data('coucou');

		},
		_setOption : function(key, value) {
			this.options.key = value;
			$.Widget.prototype._setOption.apply(this, arguments);
			return this;
		},
		destroy : function() {
			$.Widget.prototype.destroy.call(this);
		}

	});

	$(function() {
		$('.multitab').multitab();
	});

})(jQuery);