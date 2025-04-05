
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list');
    const tutorialList = document.getElementById('tutorial-list');
    const resourceList = document.getElementById('resource-list');

    const books = [
        { title: 'Clean Code', link: '#', description: 'A handbook of agile software craftsmanship.' },
        { title: 'JavaScript: The Good 

Parts', link: '#', description: 'Exploring the elegant parts of JavaScript.' },
        { title: 'Python Crash Course', link: '#', description: 'A hands-on, project-based introduction to programming.' },
        // Add more books here
    ];

    const tutorials = [
        { title: 'HTML Basics', link: '#', description: 'Learn the fundamentals of HTML.' },
        { title: 'CSS Styling', link: '#', description: 'Master CSS for web design.' },
        { title: 'React Tutorial', link: '#', 

description: 'Build interactive user interfaces with React.' },
        // Add more tutorials here
    ];

    const resources = [
        { title: 'Stack Overflow', link: '#', description: 'A question and answer site for programmers.' },
        { title: 'MDN Web Docs', link: '#', description: 'Comprehensive documentation for web technologies.' },
        { title: 'GitHub', link: '#', description: 'A platform for version control and collaboration.' },
        // Add more resources here
    ];


    function populateItems(items, container) {
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.link}" target="_blank">View</a>
            `;
            container.appendChild(itemElement);
        });

    }

    populateItems(books, bookList);
    populateItems(tutorials, tutorialList);
    populateItems(resources, resourceList);
});
