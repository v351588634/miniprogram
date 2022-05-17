App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log(options);
    console.log('小程序初始化完成了： onLaunch');
    //  异步调用
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('界面显示出来： onShow');
    //  1.判断小程序的进入场景
    console.log(options);

    //  2.获取用户信息，并且获取到用户信息之后，将用户的信息传递给服务器
    wx.login({
      //  数据拿到之后，再进行回调的
      success: function (res) {
        console.log('res', res);
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面被隐藏时会执行： onHide');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
