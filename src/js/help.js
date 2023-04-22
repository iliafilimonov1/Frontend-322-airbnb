const allSkeletons = document.querySelectorAll('.skeleton');

window.addEventListener('load', () => {
  allSkeletons.forEach(item => {
    item.classList.remove('skeleton');
  })
})

/* btn-airbnb */
const button = document.querySelector('.btn-airbnb');

button.addEventListener('mousemove', e => {
  const rect = button.getBoundingClientRect();

  const x = (e.clientX - rect.left) * 100 / button.clientWidth;
  const y = (e.clientY - rect.top) * 100 / button.clientHeight;

  button.style.setProperty('--mouse-x', x);
  button.style.setProperty('--mouse-y', y);
})



/* dropdown */
const dropdownButton = document.querySelector('.dropdown__button');
const dropdownMenu = document.querySelector('.dropdown__menu');

// открытие/закрытие списка
dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle("dropdown-show"); // adds/removes the class dropdown-show
});

// клик вне пунктов меню
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown__menu') && !event.target.closest('.dropdown__button')) {
    dropdownMenu.classList.remove('dropdown-show');
  }
});

// закрытие меню по клику на пункт
const dropdownMenuItems = document.querySelectorAll('.dropdown__menu-item');
dropdownMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    dropdownMenu.classList.remove('dropdown-show');
  });
});


/* tabs */
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  const tabsContent = document.querySelectorAll('.tabs__content');

  if (tabs) {
    tabs.addEventListener('click', e => {
      if (e.target.classList.contains('tabs__btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => el.classList.remove('tabs__btn--active'));
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
        tabsHandler(tabsPath);
      }
    })
  }

  const tabsHandler = path => {
    tabsContent.forEach(el => el.classList.remove('tabs__content--active'));
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
  }
})