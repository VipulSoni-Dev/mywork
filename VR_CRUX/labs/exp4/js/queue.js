class Queue {
  constructor() {
    this.linkedList = [];
    this.array = []
  }
  isEmpty() {
    return this.linkedList.length == 0;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList[0];
  }
  enqueue(value) {
    this.linkedList.push(value);
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.shift(0);
  }
}

function saveReadyQeueStage(){
  data = []
  for (var i = 0; i < ReadyQueue.linkedList.length; i++) {
    data.push(ReadyQueue.linkedList[i])
  }
  ReadyQueueHistory.push(data);
}

function saveCompleteQeueStage(){
  data = []
  for (var i = 0; i < CompletedQueue.linkedList.length; i++) {
    data.push(CompletedQueue.linkedList[i])
  }
  CompletedQueueHistory.push(data);

}
