 const imgName = [
    './img/slide-1.avif',
    './img/slide-2.avif',
    './img/slide-3.avif',
    './img/slide-4.avif',
    './img/slide-5.avif'
 ]
 const dots = document.querySelectorAll('dot-btn')
 let images = []
 let index = -1

 function load (){
    for (const name of imgName) {
        const img = new Image()
        img.src = name
        images.push(img)
    }
 }

 setInterval(next, 2000)

 function next () {
    if(index == images.length-1){
        index = 0
    }else{
        index ++
    }
    document.getElementById('img').src = images[index].src
    for(var i = 0; i < dots.length; i++){
        dots[i].classList.add('active')
    }
 }


 function prev () {
    if(index == 0 ){
        index = images.length-1
    }else{
        index --
    }
    document.getElementById('img').src = images[index].src
 }

 
