function toggle(id){
    var seller = document.getElementById('seller');
    if(seller.style.display != 'none'){
        seller.style.display = 'none';
    }
    else{
        seller.style.display = '';
    }
    if(id=='show'){
        document.getElementById(id).style.display='none';
        document.getElementById('hide').style.display='';
    }
    else if(id == 'hide'){
        document.getElementById(id).style.display='none';
        document.getElementById('show').style.display='';
    }
}