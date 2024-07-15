function filterSelection(category) {
    var items = document.getElementsByClassName('filterDiv');
    if (category === 'all') category = '';
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = items[i].className.indexOf(category) > -1 ? 'block' : 'none';
    }
}

// none active 
function filterSelection(category, btn) {
    var items = document.getElementsByClassName('filterDivscale');
    var buttons = document.getElementsByClassName('filter-btn');
    
    if (category === 'all') category = '';
    
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = items[i].className.indexOf(category) > -1 ? 'block' : 'none';
        
        setTimeout((function(item) {
            return function() {
                if (item.className.indexOf(category) > -1 || category === '') {
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                }
            };
        })(items[i]), 13);
    }
    
    for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove('active');
    }
    
    btn.classList.add('active');
}


// Darkmood
if (localStorage.getItem('color-theme') === 'dark' || 
(!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark');

} else {
document.documentElement.classList.remove('dark');
}

// ظائف التبديل
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    if (localStorage.getItem('color-theme') === 'dark' || 
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
        
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    var themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function() {
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });
