// 'use strict';
import Vue from 'vue';
import ElementUI from 'element-ui';
// import '../../element-ui/lib/theme-chalk'
import Popup from './popup/Popup.vue';

Array.prototype.indexOf = function(val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};

Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

Vue.use(ElementUI);
setTimeout( ()=> {
    new Vue({
        el: '#app',
        render: c => c(Popup)
      });
}, 20)
