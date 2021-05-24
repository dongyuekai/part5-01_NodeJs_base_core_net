// 单向链表
/*
  01 node + head + null
  02 head --->null
  03 size

  04 next element

  05 增加 删除 修改 查询 清空
*/

class Node {
  constructor(element, next) {
    this.element = element
    this.next = next
  }
}
class LinkedList {
  constructor(head, size) {
    this.head = null
    this.size = 0
  }
  _getNode(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('越界了')
    }
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  add(index, element) {
    if (arguments.length === 1) {
      element = index
      index = this.size
    }
    if (index < 0 || index > this.size) {
      throw new Error('cross the border')
    }
    if (index === 0) {
      // 开头添加
      let head = this.head //保存原有的 head 指向
      this.head = new Node(element, head)
    } else {
      let prevNode = this._getNode(index - 1) // 拿到上一个节点
      prevNode.next = new Node(element, prevNode.next)
    }
    this.size++
  }
  remove(index) {
    let rmNode = null
    if (index === 0) {
      rmNode = this.head
      if (!rmNode) {
        return undefined
      }
      this.head = rmNode.next
    } else {
      let prevNode = this._getNode(index - 1)
      rmNode = prevNode.next
      prevNode.next = rmNode.next
    }
    this.size--
    return rmNode
  }
  set(index, element) {
    let node = this._getNode(index)
    node.element = element
  }
  get(index) {
    return this._getNode(index)
  }
  clear(index) {
    this.head = null
    this.size = 0
  }
}
// const l1 = new LinkedList()
// l1.add('node1')
// l1.add('node2')
// l1.add(1, 'node3')
// l1.remove(1)
// l1.set(1, 'node2-2')
// let a = l1.get(0)
// console.log('a--', a)
// console.log(l1)
// l1.clear()
// console.log(l1)


class Queue {
  constructor() {
    this.LinkedList = new LinkedList()
  }
  enQueue(data) {
    this.LinkedList.add(data)
  }
  deQueue() {
    // 删除头部的元素
    return this.LinkedList.remove(0)
  }
}
const q = new Queue()
q.enQueue('node1')
q.enQueue('node2')

let a = q.deQueue()
a = q.deQueue()
a = q.deQueue()

console.log(a)