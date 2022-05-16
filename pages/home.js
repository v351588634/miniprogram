Page({
  data: {
    name: 'World123',
    age: 18,
    students: [{
        id: 110,
        name: 'zhangsan',
        age: 30
      },
      {
        id: 111,
        name: 'lisi',
        age: 30
      },
      {
        id: 112,
        name: 'wangwu',
        age: 30
      },
      {
        id: 113,
        name: 'zhaoliu',
        age: 30
      },
    ],
    counter: 0
  },
  handlerBtnClick() {
    // counter
    console.log('counter');
    // 界面不会刷新
    // this.data.counter++
    this.setData({
      counter: this.data.counter + 1
    })
  }, 
  handlerSubtraction () {
    console.log('----');
    this.setData({
      counter: this.data.counter - 1
    })
  }
})