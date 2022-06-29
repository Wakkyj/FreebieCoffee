
document.querySelector('#rightArrowCoffee').addEventListener('click',function(){
    element = document.getElementById('listProduct');
    left = window.getComputedStyle(element).left;
    leftn = left.slice(0,left.length-2) * 1 - 525;
    if (leftn < -730)
        leftn = 320;
    document.getElementById('listProduct').style.left = leftn +'px';
});

document.querySelector('#leftArrowCoffee').addEventListener('click',function(){
    element = document.getElementById('listProduct');
    left = window.getComputedStyle(element).left;
    leftn = left.slice(0,left.length-2) * 1 + 525;
    if (leftn > 320)
        leftn = -730;
    document.getElementById('listProduct').style.left = leftn +'px';
});

// #listCombo #leftArrowCombo #rightArrowCombo

document.querySelector('#rightArrowCombo').addEventListener('click',function(){
    element = document.getElementById('listCombo');
    left = window.getComputedStyle(element).left;
    leftn = left.slice(0,left.length-2) * 1 - 400;
    if (leftn < -800)
        leftn = 400;
    document.getElementById('listCombo').style.left = leftn +'px';
});

document.querySelector('#leftArrowCombo').addEventListener('click',function(){
    element = document.getElementById('listCombo');
    left = window.getComputedStyle(element).left;
    leftn = left.slice(0,left.length-2) * 1 + 400;
    if (leftn > 400)
        leftn = -800;
    document.getElementById('listCombo').style.left = leftn +'px';
});

document.querySelector('button#tab2').addEventListener('click',function(){
    document.getElementById('discriptionGift1').style.display = 'none';

    document.getElementById('tab2').style.background = '#FFFFFF';
    document.getElementById('tab2').style.opacity = '1';

    document.getElementById('tab1').style.background = '#EDF0F5';
    document.getElementById('tab1').style.opacity = '0.3';
    document.getElementById('tab3').style.background = '#EDF0F5';
    document.getElementById('tab3').style.opacity = '0.3';

});

document.querySelector('button#tab1').addEventListener('click',function(){
    document.getElementById('discriptionGift1').style.display = 'block';

    document.getElementById('tab1').style.background = '#FFFFFF';
    document.getElementById('tab1').style.opacity = '1';

    document.getElementById('tab2').style.background = '#EDF0F5';
    document.getElementById('tab2').style.opacity = '0.3';
    document.getElementById('tab3').style.background = '#EDF0F5';
    document.getElementById('tab3').style.opacity = '0.3';
    
});

document.querySelector('button#tab3').addEventListener('click',function(){
    document.getElementById('discriptionGift1').style.display = 'none';

    document.getElementById('tab3').style.background = '#FFFFFF';
    document.getElementById('tab3').style.opacity = '1';

    document.getElementById('tab1').style.background = '#EDF0F5';
    document.getElementById('tab1').style.opacity = '0.3';
    document.getElementById('tab2').style.background = '#EDF0F5';
    document.getElementById('tab2').style.opacity = '0.3';
    
});