/** 
 * class Node {
 *  new(val: number, next: Node);
 *    val: number
 *    next: Node
 * }
 */

// reverse a linked list
const reverseLinkedListRecursion = (list, prev = null) => {
  if (list === null) return prev;

  const temp = list.next;
  list.next = prev;
  prev = list;
  list = temp;

  return reverseLinkedListRecursion(list, prev);
}

const reverseLinkedListIterative = (list) => {
  let node = list;    
  let prev = null

  while (node !== null) {
    const temp = node.next;
    node.next = prev;
    prev = node;
    node = temp;
  }

  return prev;
}
