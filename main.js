//工具函数
function getLocalStorage(name){
   return JSON.parse(localStorage.getItem(name) ||'null')
}

function tag(tagname){
    return document.createElement(tagname)
}

function createButton(id){
    button=tag('button')
    button.textContent = 'E'
    button.id=row[index2]
    button.onclick = function(y){
        var button2=y['target']
        var key=button2['id']
        var x=prompt('请输入要更改的网址')
        hash[key]=x
        localStorage.setItem('xxx',JSON.stringify(hash))
        img2=button2.previousSibling
        img2.src='http://'+x+'/favicon.ico'
        img2.onerror=function(z){
        z.target.src='https://i.loli.net/2018/11/07/5be25aafd5405.png'
        }
    }
    return button
}

function createImg(){
    img=tag('img')
    img.src='http://'+hash[row[index2]]+'/favicon.ico'
    img.onerror=function(z){
        z.target.src='https://i.loli.net/2018/11/07/5be25aafd5405.png'
    }
    return img
}
//初始化数据
var hashA = init()
var keys = hashA.keys
var hash = hashA.hash

function init(){
    var keys = {
        '0':['1','2','3','4','5','6','7','8','9','0'],
        '1':['q','w','e','r','t','y','u','i','o','p'],
        '2':['a','s','d','f','g','h','j','k','l'],
        '3':['z','x','c','v','b','n','m'],
        'length':'4'
    }
    var hash = {
        '1': 'iconfont.cn', '2':'www.jianshu.com', '3': 'javascript.ruanyifeng.com', '4': undefined, '5': undefined, '6': undefined, '7': undefined, '8': undefined, '9': undefined, '0': undefined, 
        'q':'qq.com',
        'w':'weibo.com',
        'e':'ele.me',
        'r': undefined,
        't': 'tianya.com', 
        'y': 'youtube.com', 
        'u': 'uc.com' , 
        'i': 'www.iciba.com', 
        'o': 'opera.com', 
        'p': undefined, 
        'a': 'alpha.wallhaven.cc', 
        's': 'sm.ms', 
        'd': undefined,'f': undefined,'g': 'github.com','h': undefined,'j': 'js.jirengu.com','k': undefined,'l': undefined,
        'z': 'zhihu.com', 
        'x': 'xiedaimala.com','c': 'css-tricks.com','v': undefined,'b':undefined ,'n':undefined ,
        'm': 'www.mcdonalds.com.cn'
            } 
        var hashInLocalStorage = getLocalStorage('xxx')
        if(hashInLocalStorage){
            hash = hashInLocalStorage
        }
        return{
            'keys': keys,
            'hash':hash
        }
}

//生成键盘
createkeyboard(keys,hash)

function createkeyboard(keys,hash){
    index = 0
    while(index<keys.length){
        div = tag('div')
        main.appendChild(div)
        div.className ='row'
        index2 = 0
        row = keys[index]
        while(index2<row.length){
            kbd=tag('kbd')
            kbd.textContent = row[index2]
            kbd.className = 'key'
            kbd.id = row[index2]
            
            createImg()

            createButton(row[index2])
            
            div.appendChild(kbd)
            kbd.appendChild(img)
            kbd.appendChild(button)

            index2 = index2+1
        }
        index = index+1
    }
}

//监听用户键盘事件
listenToUser(hash)

function listenToUser(hash){
    document.onkeypress = function(x){
        key = x['key']
        if(hash[key] === undefined){
            alert('请先点击Ｅ按钮编辑您想要的网址')
        }else{
            window.open('http://'+hash[key],'_blank')
        }
    }
}

document.onclick = function(y){
    let key = y.target.id
    if(hash[key] === undefined){
        alert('请先点击Ｅ按钮编辑您想要的网址')
    }else{
        window.open('http://'+hash[key],'_blank')
    }
}