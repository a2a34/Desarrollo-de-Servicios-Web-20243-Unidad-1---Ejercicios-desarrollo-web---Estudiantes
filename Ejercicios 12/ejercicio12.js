const searchBox = document.getElementById('searchBox');
const itemList = document.getElementById('itemList');
const items = itemList.getElementsByTagName('li');

searchBox.addEventListener('keyup', () => {
  const filter = searchBox.value.toLowerCase();
  
  for (let i = 0; i < items.length; i++) {
    let item = items[i].textContent.toLowerCase();
    
    if (item.includes(filter)) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
    }
  }
});
