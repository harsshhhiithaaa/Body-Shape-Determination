document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.transition-list');

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                list.classList.add('appear');
                observer.unobserve(list); // Stop observing once the class is added
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    observer.observe(list);
});
document.addEventListener('DOMContentLoaded', () => {
    const lists = document.querySelector('.transition-lists');

    // Create an Intersection Observer instance
    const observers = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lists.classList.add('appears');
                observers.unobserve(lists); // Stop observing once the class is added
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    observers.observe(lists);
});