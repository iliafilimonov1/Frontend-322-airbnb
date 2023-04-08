const lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]'); // подключение цветовой схемы (media, которая содержит prefer color scheme и содержит light)
const darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');
const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)'); // проверка на темную тему
const switcherCheckbox = document.querySelector('.switch'); // получение чекбокса

function setupSwitcher() {
  const savedScheme = getSavedScheme(); // есть ли сохраненная схема

  // если есть, т.е. не равна null, то устанавливаем состояние чекбокса
  if (savedScheme !== null) {
    switcherCheckbox.checked = savedScheme === 'dark'; // если сохраненная схема 'dark', то устанавливаем чекбокс в состояние "включено"
  }

  // добавляем слушателя на изменение состояния чекбокса
  switcherCheckbox.addEventListener('change', (event) => {
    const scheme = event.target.checked ? 'dark' : 'light'; // определяем выбранную тему в зависимости от состояния чекбокса
    setScheme(scheme); // передаем выбранную тему в функцию setScheme()
  });
}

function setupScheme() {
  const savedScheme = getSavedScheme(); // берет из LocalStorage тему, если была выставлена
  const systemScheme = getSystemScheme(); // проверяет, на наличие системной темы

  if (savedScheme === null) return; // есть ли сохраненная схема?

  // если есть, сравниваем, сохраненную с системной. если они не равны, выигрывает сохраненная
  if (savedScheme !== systemScheme) {
    setScheme(savedScheme);
  }
}

function setScheme(scheme) {
  switchMedia(scheme); // переключает медиа стили

  if (scheme === 'auto') {
    clearScheme(); // если тема выставлена, как auto, очищаем localStorage
  } else {
    saveScheme(scheme);
  }
}

// функция переключает медиа на нужное, в зависимости от того, что мы в нее передаем
function switchMedia(scheme) {
  let lightMedia;
  let darkMedia;

  if (scheme === 'auto') {
    lightMedia = '(prefers-color-scheme: light)'; // ставим то, что по умолчанию (светлая)
    darkMedia = '(prefers-color-scheme: dark)'; // ставим то, что по умолчанию (темная)
  } else {
    lightMedia = (scheme === 'light') ? 'all' : 'not all';
    darkMedia = (scheme === 'dark') ? 'all' : 'not all';
  }

  [...lightStyles].forEach((link) => {
    link.media = lightMedia;
  });

  [...darkStyles].forEach((link) => {
    link.media = darkMedia;
  });
}

function getSystemScheme() {
  const darkScheme = darkSchemeMedia.matches;

  return darkScheme ? 'dark' : 'light';
}

function getSavedScheme() {
  return localStorage.getItem('color-scheme');
}

function saveScheme(scheme) {
  localStorage.setItem('color-scheme', scheme);
}

function clearScheme() {
  localStorage.removeItem('color-scheme');
}

setupSwitcher();
setupScheme();


// итог: если тема уже светлая и сохраненная светлая, то ничего не делаем. 
// если сохраненная темная, а текущая светлая, то сохраненная важнее.
// приоритет пользователя выигрывает
// очень подробно здесь https://www.youtube.com/watch?v=8LFbS78a4Rw