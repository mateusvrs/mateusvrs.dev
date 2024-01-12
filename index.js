{
    const navBarHTML = document.getElementsByTagName('nav')[0];
    const linksHTML = document.getElementById('links');
    const bodyHTML = document.getElementsByTagName('body')[0];

    navBarHTML.addEventListener('click', (event) => {
        navBarHTML.classList.toggle('active');
        linksHTML.classList.toggle('active');

        if (navBarHTML.classList.contains('active')) {
            bodyHTML.style.overflow = 'hidden';
        } else {
            bodyHTML.style.overflow = 'auto';
        }
    });

    document.addEventListener('scroll', () => {
        navBarHTML.classList.remove('active');
        linksHTML.classList.remove('active');
        bodyHTML.style.overflow = 'auto';
    });
}

{
    const copyrightSpanHTML = document.getElementById('copyright');
    const date = new Date();
    const year = date.getFullYear();
    copyrightSpanHTML.innerHTML = `&copy; ${year} Mateus Vieira`;

}