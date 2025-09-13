Element.applyStyles = function(el, styles) {
    if (typeof styles == "string") {
        styles = styles.split(";");
    }
    styles.forEach(function(style) {
        var parts = style.split(":");
        if (parts.length == 2) {
            el.style[parts[0].trim()] = parts[1].trim();
        }
    });
};
Element.prototype.applyStyles = function(styles) {
    Element.applyStyles(this, styles);
};
Element.prototype.getStyle = function(style) {
    return window.getComputedStyle(this).getPropertyValue(style);
};
Element.prototype.getStyles = function(styles) {
    var result = {};
    styles.forEach(function(style) {
        result[style] = this.getStyle(style);
    }, this);
    return result;
};
alert("usuario ativos");