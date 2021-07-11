document.getElementById("left_clicK_1").addEventListener("click",function(){
    const name =  document.getElementById("auth_name_1").innerText;
    const work =  document.getElementById("auth_work_1").innerText;
     document.getElementById("auth_rightSide_name").innerHTML=name;
     document.getElementById("author_rightSide_work").innerText=work;
     document.getElementById("author_img").setAttribute("src" ,"img.jpeg")
 })
document.getElementById("left_clicK_2").addEventListener("click",function(){
    const name =  document.getElementById("auth_name_2").innerText;
   const work =  document.getElementById("auth_work_2").innerText;
   document.getElementById("auth_rightSide_name").innerHTML=name;
    document.getElementById("author_rightSide_work").innerText=work;
    document.getElementById("author_img").setAttribute("src" ,"auth3.webp")
})
document.getElementById("left_clicK_3").addEventListener("click",function(){
    const name =  document.getElementById("auth_name_3").innerText;
   const work =  document.getElementById("auth_work_3").innerText;
    document.getElementById("auth_rightSide_name").innerHTML=name;
    document.getElementById("author_rightSide_work").innerText=work;
    document.getElementById("author_img").setAttribute("src" ,"auth4.jpg")
})
document.getElementById("left_clicK_4").addEventListener("click",function(){
   const name =  document.getElementById("auth_name_4").innerText;
   const work =  document.getElementById("auth_work_4").innerText;
    document.getElementById("auth_rightSide_name").innerHTML=name;
    document.getElementById("author_rightSide_work").innerText=work;
    document.getElementById("author_img").setAttribute("src" ,"auth2.jpg")
})








// for( var i=1;i<10;i++){
//     document.getElementById("left_clicK_"+i).addEventListener("click",function(){
//         // document.getElementById("auth_name").innerHTML="ram"
//     alert(i)
//     })

// }