
    const menu  =  document.querySelector('.menu')
    const menulist = document.querySelector('.sidebar')
    console.log(menulist);
    
    menu.addEventListener('click' , ()=>{
        menulist.classList.toggle('showmenu')
    })
