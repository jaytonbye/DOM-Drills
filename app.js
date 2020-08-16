

document.addEventListener('DOMContentLoaded',()=>{
    let div = document.createElement('div');

    div.classList = 'header-container'

    let h1 = document.createElement('h1')
    let h1Text= document.createTextNode('This is an h1')
    h1.appendChild(h1Text)
    div.appendChild(h1)
    document.body.appendChild(div)
    h1.classList = 'h1'

    let h2 = document.createElement('h2')
    let h2Text = document.createTextNode('This is an h2')
    h2.appendChild(h2Text)
    div.appendChild(h2)
    h2.classList = 'h2'

    let h3 = document.createElement('h3')
    let h3Text = document.createTextNode('This is an h3')
    h3.appendChild(h3Text)
    div.appendChild(h3)
    h3.classList = 'h3'

    let h4 = document.createElement('h4')
    let h4Text = document.createTextNode('This is an h4')
    h4.appendChild(h4Text)
    div.appendChild(h4)
    h4.classList = 'h4'

    let h5 = document.createElement('h5')
    let h5Text = document.createTextNode('This is an h5')
    h5.appendChild(h5Text)
    div.appendChild(h5)
    h5.classList = 'h5'

    let h6 = document.createElement('h6')
    let h6Text = document.createTextNode('This is an h6')
    h6.appendChild(h6Text)
    div.appendChild(h6)
    h6.classList = 'h6'

    let colorArray = ['black','blue','red','green','orange','purple','brown','pink']
    
    
    h1.addEventListener('dblclick',()=>{
        let newColor = colorArray[Math.floor(Math.random()*colorArray.length)]
        document.getElementsByClassName('h1')[0].style.color = newColor
    })

    let y = 0

    
    //I can't figure out how to select the right li. Is there a way I can use the "this" keyword?
    document.getElementsByClassName('button')[0].addEventListener('click',()=>{
        y++
        let li = document.createElement('li')
        let liText = document.createTextNode(`This is list item ${y}`)
        li.classList = `li`
        li.append(liText)
        div.append(li)
        li.addEventListener('click',()=>{
            let newColor = colorArray[Math.floor(Math.random()*colorArray.length)]
            li.style.color=newColor
        })
        li.addEventListener('dblclick',()=>{
            li.remove()
        })
    })
})