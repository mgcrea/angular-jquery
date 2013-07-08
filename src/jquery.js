'use strict';

angular.module('mgcrea.jquery', [])

  .factory('$', function() {

    var jQLite = angular.element;
    var slice = Array.prototype.slice;

    function jQuery(query) {
      var el = query instanceof HTMLElement ? jQLite(query) : jQLite(document.querySelectorAll(query));
      angular.forEach(jQuery.fn, function(fn, key) {
        (el.__proto__ || el)[key] = fn.bind(el[0]);
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

    jQuery.fn.height = function(outer) {
      var computedStyle = window.getComputedStyle(this);
      var value = this.offsetHeight;
      if(outer) {
        value += parseFloat(computedStyle.marginTop) + parseFloat(computedStyle.marginBottom);
      } else {
        value -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom) + parseFloat(computedStyle.borderTopWidth) + parseFloat(computedStyle.borderBottomWidth);
      }
      return value;
    };

    jQuery.fn.width = function(outer) {
      var computedStyle = window.getComputedStyle(this);
      var value = this.offsetWidth;
      if(outer) {
        value += parseFloat(computedStyle.marginLeft) + parseFloat(computedStyle.marginRight);
      } else {
        value -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight) + parseFloat(computedStyle.borderLeftWidth) + parseFloat(computedStyle.borderRightWidth);
      }
      return value;
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
  })*/