/**
 * @param {HTMLElement} el - element to be wrapped
 */
 function $(el) {
    const item = el;
  
    return {
        css: function(key, value){
          item.style[key] = value;
          return {
            css: this.css
          };
        },
      };
  }
  