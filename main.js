const keyFragment = document.createDocumentFragment();

class Keyboard {
  constructor() {
    this.textarea = null;
    this.container = null;
  }

  init() {
    this.wrapper = document.createElement('main');
    this.title = document.createElement('h1');
    this.textarea = document.createElement('textarea');
    this.container = document.createElement('div');
    this.keyboardRow = document.createElement('div');
    this.description = document.createElement('p');
    this.language = document.createElement('p');

    this.wrapper.classList.add('wrapper');

    this.title.classList.add('title');
    this.title.textContent = 'Virtual keyboard';

    this.textarea.classList.add('textarea');

    this.container.classList.add('keyboard');
    this.keyboardRow.classList.add('row');

    this.description.classList.add('description');
    this.description.textContent = 'This keyboard was developed and tested in Microsoft Windows.';

    this.language.classList.add('language');
    this.language.textContent = 'To switch ENG/РУС input methods, press Ctrl+Alt.';

    this.container.append(keyFragment);

    this.wrapper.append(this.title, this.textarea, this.container, this.description, this.language);

    document.body.append(this.wrapper);
  }
}

const keys = [
  [
    {
      code: 'Backquote',
      lang: { en: '`', ru: 'ё' },
    },
    {
      code: 'Key1',
      lang: { en: '1', ru: '1' },
    },
    {
      code: 'Key2',
      lang: { en: '2', ru: '2' },
    },
    {
      code: 'Key3',
      lang: { en: '3', ru: '3' },
    },
    {
      code: 'Key4',
      lang: { en: '4', ru: '4' },
    },
    {
      code: 'Key5',
      lang: { en: '5', ru: '5' },
    },
    {
      code: 'Key6',
      lang: { en: '6', ru: '6' },
    },
    {
      code: 'Key7',
      lang: { en: '7', ru: '7' },
    },
    {
      code: 'Key8',
      lang: { en: '8', ru: '8' },
    },
    {
      code: 'Key9',
      lang: { en: '9', ru: '9' },
    },
    {
      code: 'Key0',
      lang: { en: '0', ru: '0' },
    },
    {
      code: 'Minus',
      lang: { en: '-', ru: '-' },
    },
    {
      code: 'Equal',
      lang: { en: '=', ru: '=' },
    },
    {
      code: 'Backspace',
      lang: { en: 'Backspace', ru: 'Backspace' },
    },
  ],
  [
    {
      code: 'Tab',
      lang: { en: 'Tab', ru: 'Tab' },
    },
    {
      code: 'KeyQ',
      lang: { en: 'q', ru: 'й' },
    },
    {
      code: 'KeyW',
      lang: { en: 'w', ru: 'ц' },
    },
    {
      code: 'KeyE',
      lang: { en: 'e', ru: 'у' },
    },
    {
      code: 'KeyR',
      lang: { en: 'r', ru: 'к' },
    },
    {
      code: 'KeyT',
      lang: { en: 't', ru: 'е' },
    },
    {
      code: 'KeyY',
      lang: { en: 'y', ru: 'н' },
    },
    {
      code: 'KeyU',
      lang: { en: 'u', ru: 'г' },
    },
    {
      code: 'KeyI',
      lang: { en: 'i', ru: 'ш' },
    },
    {
      code: 'KeyO',
      lang: { en: 'o', ru: 'щ' },
    },
    {
      code: 'KeyP',
      lang: { en: 'p', ru: 'з' },
    },
    {
      code: 'BracketLeft',
      lang: { en: '[', ru: 'х' },
    },
    {
      code: 'BracketRight',
      lang: { en: ']', ru: 'ъ' },
    },
    {
      code: 'Backslash',
      lang: { en: '\\', ru: '\\' },
    },
    {
      code: 'Delete',
      lang: { en: 'Del', ru: 'Del' },
    },
  ],
  [
    {
      code: 'CapsLock',
      lang: { en: 'CapsLock', ru: 'CapsLock' },
    },
    {
      code: 'KeyA',
      lang: { en: 'a', ru: 'ф' },
    },
    {
      code: 'KeyS',
      lang: { en: 's', ru: 'ы' },
    },
    {
      code: 'KeyD',
      lang: { en: 'd', ru: 'в' },
    },
    {
      code: 'KeyF',
      lang: { en: 'f', ru: 'а' },
    },
    {
      code: 'KeyG',
      lang: { en: 'g', ru: 'п' },
    },
    {
      code: 'KeyH',
      lang: { en: 'h', ru: 'р' },
    },
    {
      code: 'KeyJ',
      lang: { en: 'j', ru: 'о' },
    },
    {
      code: 'KeyK',
      lang: { en: 'k', ru: 'л' },
    },
    {
      code: 'KeyL',
      lang: { en: 'l', ru: 'д' },
    },
    {
      code: 'Semicolon',
      lang: { en: ';', ru: 'ж' },
    },
    {
      code: 'Quote',
      lang: { en: "'", ru: 'э' },
    },
    {
      code: 'Enter',
      lang: { en: 'Enter', ru: 'Enter' },
    },
  ],
  [
    {
      code: 'ShiftLeft',
      lang: { en: 'Shift', ru: 'Shift' },
    },
    {
      code: 'KeyZ',
      lang: { en: 'z', ru: 'я' },
    },
    {
      code: 'KeyX',
      lang: { en: 'x', ru: 'ч' },
    },
    {
      code: 'KeyC',
      lang: { en: 'c', ru: 'с' },
    },
    {
      code: 'KeyV',
      lang: { en: 'v', ru: 'м' },
    },
    {
      code: 'KeyB',
      lang: { en: 'b', ru: 'и' },
    },
    {
      code: 'KeyN',
      lang: { en: 'n', ru: 'т' },
    },
    {
      code: 'KeyM',
      lang: { en: 'm', ru: 'ь' },
    },
    {
      code: 'Comma',
      lang: { en: ',', ru: 'б' },
    },
    {
      code: 'Period',
      lang: { en: '.', ru: 'ю' },
    },
    {
      code: 'Slash',
      lang: { en: '/', ru: '.' },
    },
    {
      code: 'ArrowUp',
      lang: { en: '⯅', ru: '⯅' },
    },
    {
      code: 'ShiftRight',
      lang: { en: 'Shift', ru: 'Shift' },
    },
  ],
  [
    {
      code: 'ControlLeft',
      lang: { en: 'Ctrl', ru: 'Ctrl' },
    },
    {
      code: 'AltLeft',
      lang: { en: 'Alt', ru: 'Alt' },
    },
    {
      code: 'Space',
      lang: { en: ' ', ru: ' ' },
    },
    {
      code: 'AltRight',
      lang: { en: 'Alt', ru: 'Alt' },
    },
    {
      code: 'ArrowLeft',
      lang: { en: '⯇', ru: '⯇' },
    },
    {
      code: 'ArrowDown',
      lang: { en: '⯆', ru: '⯆' },
    },
    {
      code: 'ArrowRight',
      lang: { en: '⯈', ru: '⯈' },
    },
    {
      code: 'ControlRight',
      lang: { en: 'Ctrl', ru: 'Ctrl' },
    },
  ],
];

keys.forEach((row) => {
  const keyboardRow = document.createElement('div');
  keyboardRow.classList.add('row');

  row.forEach((key) => {
    const keyElement = document.createElement('button');

    keyElement.classList.add('key');
    keyElement.classList.add(`${key.code}`);

    keyElement.textContent = key.lang.en;

    keyboardRow.append(keyElement);
  });

  keyFragment.append(keyboardRow);
});

const keyboard = new Keyboard();

keyboard.init();
