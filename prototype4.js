document.getElementById('menu-toggle').addEventListener('click', function() {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu.style.transform === 'translateX(0px)') {
        sideMenu.style.transform = 'translateX(-200px)';
    } else {
        sideMenu.style.transform = 'translateX(0px)';
    }
});
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('.side-menu').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const sideMenu = document.querySelector('.side-menu');
    const menuToggle = document.getElementById('menu-toggle');
    
    if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        sideMenu.classList.remove('active');
    }
});