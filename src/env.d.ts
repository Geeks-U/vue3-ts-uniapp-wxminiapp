// / <reference types="vue" />
/// <reference types="vite/client" />
/// <reference types="@dcloudio/types" />


// 声明 .vue 文件模块，确保 TypeScript 可以识别 vue 文件并正确推断类型
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any> // 默认组件类型，使用 `any` 来避免类型检查
  export default component
}

// // 全局组件类型声明，防止在使用内置组件时 TypeScript 报错
// declare module 'vue' {
//   export interface GlobalComponents {
//     // 视图容器组件，作为页面结构的基础组件
//     view: typeof import('@dcloudio/uni-app')['View']
    
//     // 可滚动的视图区域
//     scrollView: typeof import('@dcloudio/uni-app')['ScrollView']
    
//     // 按钮组件，用于触发操作的按钮
//     button: typeof import('@dcloudio/uni-app')['Button']
    
//     // 输入框组件，用于文本输入
//     input: typeof import('@dcloudio/uni-app')['Input']
    
//     // 图片组件，用于显示图片
//     image: typeof import('@dcloudio/uni-app')['Image']
    
//     // 文本组件，用于显示文本
//     text: typeof import('@dcloudio/uni-app')['Text']
    
//     // 选择器组件，例如用于选择日期、时间等
//     picker: typeof import('@dcloudio/uni-app')['Picker']
//   }
// }
