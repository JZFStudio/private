//形成bfc
// 1. 根元素
// 2. float属性不为none
// 3. position为absolute或fixed
// 4. display为inline-block, table-cell, table-caption, flex, inline-flex 
// 5. overflow不为visible

//bfc的特性
// 1 内部的Box会在垂直方向上一个接一个的放置。
// 2 垂直方向上的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
// 3 bfc的区域不会与float的元素区域重叠。
// 4 计算bfc的高度时，浮动元素也参与计算
// 5 bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。