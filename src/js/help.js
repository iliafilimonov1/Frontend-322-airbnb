const allSkeletons = document.querySelectorAll('.skeleton');

window.addEventListener('load', () => {
  allSkeletons.forEach(item => {
    item.classList.remove('skeleton');
  })
})

/* btn-airbnb */
const buttons = document.querySelectorAll('.btn-airbnb');

buttons.forEach(element => {
  element.addEventListener('mousemove', e => {
    const rect = element.getBoundingClientRect();

    const x = (e.clientX - rect.left) * 100 / element.clientWidth;
    const y = (e.clientY - rect.top) * 100 / element.clientHeight;

    element.style.setProperty('--mouse-x', x);
    element.style.setProperty('--mouse-y', y);
  })
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


/* popup */
const searchTarget = document.querySelector('.help-search');
const searchPopup = document.querySelector('#search-popup');

/* открытие/закрытие списка */
searchTarget.addEventListener('click', () => {
  searchPopup.classList.toggle('popup-show');
})

// закрытие меню по клику на пункт
const popupOptions = document.querySelectorAll('.popup-options');

popupOptions.forEach(option => {
  option.addEventListener('click', () => {
    event.stopPropagation(); // остановка всплытия событий 
    searchPopup.classList.remove('popup-show');
  })
})


// клик вне пунктов меню
document.addEventListener('click', (event) => {
  if (!event.target.closest('#search-popup') && !event.target.closest('.help-search')) {
    searchPopup.classList.remove('popup-show');
  }
});


// обводка при фокусе формы
const formSearch = document.querySelector('#form');

formSearch.addEventListener("focusin", () => formSearch.classList.add('focused'));
formSearch.addEventListener("focusout", () => formSearch.classList.remove('focused'));


/* модалка ask question */
const modal = document.querySelector('#modal-question');
const openModal = document.querySelector('.btn-ask');
const closeModal = document.querySelector('#close-button');

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});


/* функционал получения/записи пользовательских сообщений */
// класс пользовательских данных 
class Message {
  constructor(firstName, lastName, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }
}

// класс для отображения наших данных
class UI {
  static displayMessages() {
    const messages = Store.getMessages();

    messages.forEach(message => UI.addMessageTolist(message));
  }

  static addMessageTolist(message) {
    const list = document.querySelector('#messages-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td class="w-200">${message.firstName}</td>
      <td class="w-200">${message.lastName}</td>
      <td class="w-200">${message.email}</td>
      <td class="w-200">${message.phone}</td>
    `;

    list.appendChild(row);
  }
}

// класс для хранения/записи/получения данных из localStorage
class Store {
  static getMessages() {
    let messages;

    if (localStorage.getItem('messages') === null) {
      messages = [];
    } else {
      messages = JSON.parse(localStorage.getItem('messages'));
    }

    return messages;
  }

  static addMessage(message) {
    const messages = Store.getMessages();
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
  }
}


const firstNameInput = document.querySelector('#firstName');
let firstNameError = document.querySelector('#firstNameError');

firstNameInput.addEventListener('input', () => {
  let firstName = firstNameInput.value.trim();

  // Удаляем все символы, кроме букв кириллицы и латиницы
  firstName = firstName.replace(/[^a-zA-Zа-яА-Я]/g, '');

  firstNameInput.value = firstName; // Присваиваем отфильтрованное значение обратно в поле ввода

  if (firstName === '') {
    firstNameInput.classList.add('error');
    firstNameError.textContent = 'Please enter your first name.';
  } else {
    firstNameInput.classList.remove('error');
    firstNameError.textContent = '';
  }
});

firstNameInput.addEventListener('blur', () => {
  const firstName = firstNameInput.value.trim();

  if (firstName === '') {
    firstNameInput.classList.add('error');
    firstNameError.textContent = 'Please enter your first name.';
  }
});

firstNameInput.addEventListener('focus', () => {
  const firstName = firstNameInput.value.trim();

  if (firstName === '') {
    firstNameInput.classList.add('error');
    firstNameError.textContent = 'Please enter your first name.';
  }
});


// обработка получения пользовательских данных
document.querySelector('#form-modal').addEventListener('submit', event => {
  event.preventDefault(); // предотвращение отправки данных

  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;

  if (firstName === '' || lastName === '' || email === '' || phone === '') {
    alert('Please fill in all fields!');
  } else {
    const message = new Message(firstName, lastName, email, phone);  // передаем данные в сущность Message

    UI.addMessageTolist(message); // рисуем данные
    Store.addMessage(message); // передаем данные в стор

    modal.close(); // закрываем модалку
  }
});



// показ данных из localStorage при загрузке страницы 
document.addEventListener('DOMContentLoaded', UI.displayMessages);