# Notify 消息提示

### 引入
在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)

```json
"usingComponents": {
  "van-notify": "path/to/vant-weapp/dist/notify/index"
}
```

## 代码演示

### 基础用法

```js
import Notify from 'path/to/vant-weapp/dist/notify/notify';

Notify('通知内容');
```

```html
<!-- 在页面内添加对应的节点 -->
<van-notify id="van-notify" />
```

### 通知类型

支持`primary`、`success`、`warning`、`danger`四种通知类型，默认为`danger`

```js
// 主要通知
Notify({ type: 'primary', message: '通知内容' });

// 成功通知
Notify({ type: 'success', message: '通知内容' });

// 危险通知
Notify({ type: 'danger', message: '通知内容' });

// 警告通知
Notify({ type: 'warning', message: '通知内容' });
```

### 自定义通知

自定义消息通知的颜色和展示时长

```js
Notify({
  message: '自定义颜色',
  color: '#ad0000',
  background: '#ffe1e1'
});

Notify({
  message: '自定义时长',
  duration: 1000
});
```

### 自定义选择器

```js
Notify({
  message: '自定义节点选择器',
  duration: 1000,
  selector: '#custom-selector'
});
```

```html
<!-- 在页面内添加自定义节点 -->
<van-notify id="custom-selector" />
```

## API

### Options

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| type | 类型，可选值为 `primary` `info` `warning` | *string* | `danger` | 1.0.0 |
| message | 展示文案，支持通过`\n`换行 | *string* | 1.0.0 | - |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | *number* | `3000` | - |
| selector | 自定义节点选择器 | *string* | `van-notify` | - |
| color | 字体颜色 | *string* | `#fff` | - |
| background | 背景颜色 | *string* | - | - |
| context | 选择器的选择范围，可以传入自定义组件的 this 作为上下文 | *object* | 当前页面 | - |
| safe-area-inset-top | 是否留出顶部安全距离（状态栏高度） | *boolean* | `false` | - |
| onClick | 点击时的回调函数 | *Function* | - | - |
| onOpened | 完全展示后的回调函数 | *Function* | - | - |
| onClose | 关闭时的回调函数 | *Function* | - | - |
