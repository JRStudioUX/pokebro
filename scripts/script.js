const menu = document.getElementById('menu');
const openMenu = document.getElementById('openMenu').addEventListener('click', function(){
    menu.style.display = 'block';
});

const closeMenu = document.getElementById('closeMenu').addEventListener('click', function(){
    menu.style.display = 'none';
})
