document.querySelectorAll('#navigate p').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('#navigate p').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
    });
});