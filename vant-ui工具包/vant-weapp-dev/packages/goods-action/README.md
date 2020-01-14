# GoodsAction 商品导航

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)

```json
"usingComponents": {
  "van-goods-action": "path/to/vant-weapp/dist/goods-action/index",
  "van-goods-action-icon": "path/to/vant-weapp/dist/goods-action-icon/index",
  "van-goods-action-button": "path/to/vant-weapp/dist/goods-action-button/index"
}
```

## 代码演示

### 基础用法

```html
<van-goods-action>
  <van-goods-action-icon
    icon="chat-o"
    text="客服"
    bind:click="onClickIcon"
  />
  <van-goods-action-icon
    icon="cart-o"
    text="购物车"
    bind:click="onClickIcon"
  />
  <van-goods-action-button
    text="加入购物车"
    type="warning"
    bind:click="onClickButton"
  />
  <van-goods-action-button
    text="立即购买"
    bind:click="onClickButton"
  />
</van-goods-action>
```

```javascript
Page({
  onClickIcon() {
    Toast('点击图标');
  },

  onClickButton() {
    Toast('点击按钮');
  }
});
```

### 提示信息

设置`dot`属性后，会在图标右上角展示一个小红点。设置`info`属性后，会在图标右上角展示相应的徽标

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" dot />
  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button text="加入购物车" type="warning" />
  <van-goods-action-button text="立即购买" />
</van-goods-action>
```

### 自定义按钮颜色

通过`color`属性可以自定义按钮的颜色，支持传入`linear-gradient`渐变色

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button text="加入购物车" type="warning" />
  <van-goods-action-button text="立即购买" />
</van-goods-action>
```

## API

### GoodsAction API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| safe-area-inset-bottom | 是否为 iPhoneX 留出底部安全距离 | *boolean* | `true` | - |

### GoodsActionIcon API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| text | 按钮文字 | *string* | - | - |
| icon | 图标类型，可选值见`icon`组件 | *string* | - | - |
| info | 图标右上角提示信息 | *string \| number* | - | - |
| url | 点击后跳转的链接地址 | *string* | - | - |
| link-type | 链接跳转类型，可选值为 `redirectTo` `switchTab` `reLaunch` | *string* | `navigateTo` | - |
| id | 标识符 | *string* | - | - |
| disabled | 是否禁用按钮 | *boolean* | `false` | - |
| loading | 是否显示为加载状态 | *boolean* | `false` | - |
| open-type | 微信开放能力，具体支持可参考 [微信官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/component/button.html) | *string* | - | - |
| app-parameter | 打开 APP 时，向 APP 传递的参数 | *string* | - | - |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，<br>zh_TW 繁体中文，en 英文 | *string* | `en` | - |
| session-from | 会话来源 | *string* | - | - |
| send-message-title | 会话内消息卡片标题 | *string* | 当前标题 | - |
| send-message-path | 会话内消息卡片点击跳转小程序路径 | *string* | 当前分享路径 | - |
| send-message-img | sendMessageImg | *string* | 截图 | - |
| show-message-card | 显示会话内消息卡片 | *string* | `false` | - |

### GoodsActionButton API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| text | 按钮文字 | *string* | - | - |
| color | 按钮颜色，支持传入 `linear-gradient` 渐变色 | *string* | - | - |
| url | 点击后跳转的链接地址 | *string* | - | - |
| link-type | 链接跳转类型，可选值为 `redirectTo` `switchTab` `reLaunch` | *string* | `navigateTo` | - |
| id | 标识符 | *string* | - | - |
| type | 按钮类型，可选值为 `primary` `warning` `danger` | *string* | `default` | - |
| size | 按钮尺寸，可选值为 `normal` `large` `small` `mini` | *string* | `normal` | - |
| disabled | 是否禁用按钮 | *boolean* | `false` | - |
| loading | 是否显示为加载状态 | *boolean* | `false` | - |
| open-type | 微信开放能力，具体支持可参考 [微信官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/component/button.html) | *string* | - | - |
| app-parameter | 打开 APP 时，向 APP 传递的参数 | *string* | - | - |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，<br>zh_TW 繁体中文，en 英文 | *string* | `en` | - |
| session-from | 会话来源 | *string* | - | - |
| send-message-title | 会话内消息卡片标题 | *string* | 当前标题 | - |
| send-message-path | 会话内消息卡片点击跳转小程序路径 | *string* | 当前分享路径 | - |
| send-message-img | sendMessageImg | *string* | 截图 | - |
| show-message-card | 显示会话内消息卡片 | *string* | `false` | - |

### Events

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 按钮点击事件回调 | - |

### GoodsActionIcon Slot

| 名称 | 说明 |
|-----------|-----------|
| icon | 自定义图标 |

### GoodsActionIcon 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| icon-class | 图标样式类 |
| text-class | 文字样式类 |

### GoodsActionButton 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
