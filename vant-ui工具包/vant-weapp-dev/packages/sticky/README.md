# Sticky 粘性布局

### 介绍

Sticky 组件与 CSS 中`position: sticky`属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)

```json
"usingComponents": {
  "van-sticky": "path/to/vant-weapp/dist/sticky/index"
}
```

## 代码演示

### 基础用法

将内容包裹在`Sticky`组件内即可

```html
<van-sticky>
  <van-button type="primary">基础用法</van-button>
</van-sticky>
```

### 吸顶距离

通过`offset-top`属性可以设置组件在吸顶时与顶部的距离

```html
<van-sticky offset-top="{{ 50 }}">
  <van-button type="info">吸顶距离</van-button>
</van-sticky>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| offset-top | 吸顶时与顶部的距离，单位`px` | *number* | `0` |
| z-index | 吸顶时的 z-index | *number* | `99` |

### Events

| 事件名 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| scroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |
