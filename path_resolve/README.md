# 实现路径解析功能

> 结构

- common
  - common.js
- images -
- src
  - index.css
  - index.js

> 背景

- index.js 会引用 common/common.js

  ```javascript
  import common from "@/common/common.js";
  ```

- index.css 会引用 common/common.css

  ```css
  import '@/common/common.css';
  ```

> 需求

- 开发者工具中 ctrl+左键点击要求能追溯到目标文件
- 代码运行中能够找到该文件即识别为

```javascript
// 相对路径
import common from "../common/common.js";
// 或绝对路径
import common from "/common/common.js";
```

```css
// 相对路径
import '../common/common.css';
// 或绝对路径
import '/common/common.css';
```
