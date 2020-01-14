import Page from '../../common/page';

Page({
  data: {
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    action1: [
      { name: '选项' },
      { name: '选项' },
      { name: '选项', subname: '描述信息' }
    ],
    action2: [
      { name: '选项', color: '#07c160' },
      { loading: true },
      { name: '禁用选项', disabled: true }
    ]
  },

  toggle(type) {
    this.setData({
      [type]: !this.data[type]
    });
  },

  toggleActionSheet1() {
    this.toggle('show1');
  },

  toggleActionSheet2() {
    this.toggle('show2');
  },

  toggleActionSheet3() {
    this.toggle('show3');
  },

  toggleActionSheet4() {
    this.toggle('show4');
  }
});
