let interruptor = document.getElementById('light-switch');
let root = document.documentElement

interruptor.addEventListener('click', () => {
    root.classList.toggle('tema-claro')
})