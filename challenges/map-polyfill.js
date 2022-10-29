class NodeStore {
  constructor() {
    this.map = {};
  } 

   /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    this.map[Symbol.for(node)] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.map[Symbol.for(node)];
  }
  
  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return this.map.hasOwnProperty(Symbol.for(node));
  }
}
