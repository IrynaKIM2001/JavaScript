// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
//     При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів
const items = [];
for (let i = 1; i <= 100; i++) {
    items.push({ id: i, name: `Об'єкт ${i*11}` });
}
const itemsPerPage = 10;
let currentPage = 0;

function renderPage() {
    const list = document.getElementById('list');
    list.innerHTML = '';
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = items.slice(start, end);
    pageItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = `${item.id}. ${item.name}`;
        list.appendChild(div);
    });
}
function nextPage() {
    if ((currentPage + 1) * itemsPerPage < items.length) {
        currentPage++;
        renderPage();
    }
}
function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
}
renderPage();