import x from './x.js'  // 引入当前目录的x.js
import png from '././assets/1.png'  // 从目录中引入

const div=document.getElementById('app')

// 部署到HTML
div.innerHTML=` 
    <img src="${png}">
`

// 懒加载: 当点击按钮的时候 再加载
const button=document.createElement('button')
button.innerText='懒加载'
button.onclick=()=>{
    const promise=import('./lazy')
    // 监听这个引入的lazy
    promise.then(
        // 成功的话,就...,失败的话,就...
        (module)=>{
            module.default() // 模块的默认值
        },()=>{
            console.log('模块加载错误')
        }
    )
}

div.appendChild(button)