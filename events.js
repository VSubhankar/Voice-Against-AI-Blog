function toggleDropdown() {
    var dropdownButton = document.querySelector('.btn btn-light dropdown-toggle shadow-0');
    var ariaExpanded = dropdownButton.getAttribute('aria-expanded');

    if (ariaExpanded === 'true') {
        dropdownButton.setAttribute('aria-expanded', 'false');
    } else {
        dropdownButton.setAttribute('aria-expanded', 'true');
    }
}
function scrollDown() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth' // Smooth scrolling animation
    });
}


