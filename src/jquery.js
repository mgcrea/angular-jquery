'use strict';

angular.module('mgcrea.jquery', [])

  .factory('$', function() {

    var jQLite = angular.element;
    var slice = Array.prototype.slice;

    function jQuery(query) {
      var el = query instanceof HTMLElement ? jQLite(query) : jQLite(document.querySelectorAll(query));
      angular.forEach(jQuery.fn, function(fn, key) {
        el[key] = fn.bind(el[0]);
      });
      return el;
    }

    jQuery.fn = {};

    jQuery.fn.offset = function() {
      if(!this) return;
      var box = this.getBoundingClientRect();
      var docElem = this.ownerDocument.documentElement;
      return {
        top: box.top + window.pageYOffset - docElem.clientTop,
        left: box.left + window.pageXOffset - docElem.clientLeft
      };
    };

    return jQuery;

  });


/*  .constant('jqPosition', function(obj) {
    var left = obj.offsetLeft;
    var top = obj.offsetTop;
    if(obj.offsetParent) {
      while (obj.offsetParent) {
        obj = obj.offsetParent;
        left += obj.offsetLeft;
        top += obj.offsetTop;
      }
    }
    return [left, top];
  })

  .constant('jqHeight', function(elem, outer) {
    var computedStyle = window.getComputedStyle(elem);
    var value = elem.offsetHeight;
    if(outer) {
      value += parseFloat(computedStyle.marginTop) + parseFloat(computedStyle.marginBottom);
    } else {
      value -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom) + parseFloat(computedStyle.borderTopWidth) + parseFloat(computedStyle.borderBottomWidth);
    }
    return value;
  })*/