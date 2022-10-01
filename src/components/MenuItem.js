function MenuItem(name, url) {
  const menuItem = `
    <div class="menuItem">
      <h2 class="dishTitle">${name}</h2>
      <img src=${url} alt="dish image" />
    </div>
  `;
  
  return menuItem;
}

export default MenuItem;