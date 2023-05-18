
var image=document.getElementsByClassName('image')
var dropimg=document.getElementsByClassName('dropimg')

let right=new Audio('assets/right.mp3')
let wrong=new Audio('assets/wrong.mp3')

for(var i=0;i<image.length;i++){
    image[i].addEventListener("dragstart",function dragimagestart(e){
        e.dataTransfer.setData("png",this.id);
    })
}

for(var j=0;j<dropimg.length;j++){
    dropimg[j].addEventListener("dragover", function dragoverdrop(e){
        e.preventDefault();
    });
    dropimg[j].addEventListener("drop",function dropfun(e){
        var dropimage=e.dataTransfer.getData("png")
        // console.log(this);
        // console.log(dropimage);
        if(this.title == dropimage){
            this.appendChild(document.getElementById(dropimage))
            right.play()
        }else{
            wrong.play()
        }
    })
}




