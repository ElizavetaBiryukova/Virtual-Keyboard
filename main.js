import { keys, keyFragment } from './keys.js';

const keyboardKeysArr = [];

class Keyboard {
  constructor() {
    this.textarea = null;
    this.container = null;
    this.lang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';
    this.capsLock = false;
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

    this.changeLang(this.lang);
    this.createActions();
  }

  createActions() {
    document.addEventListener('keydown', (e) => {
      const key = document.getElementById(e.code);

      if ((e.ctrlKey || e.metaKey) && e.altKey && !e.repeat) {
        e.preventDefault();
        this.lang = this.lang === 'ru' ? 'en' : 'ru';
        localStorage.setItem('lang', this.lang);
        this.changeLang(this.lang);
      }

      if (e.code === 'Tab') {
        e.preventDefault();
        this.insertText('\t');
        key.classList.add('active');
      } else if (e.code === 'Enter') {
        e.preventDefault();
        this.insertText('\n');
        key.classList.add('active');
      } else if (e.code === 'Backspace') {
        e.preventDefault();
        let result;
        const start = this.textarea.selectionStart;
        const end = this.textarea.selectionEnd;
        if (start === end) {
          result = this.textarea.value.substring(0, start - 1) + this.textarea.value.substring(end);
        } else {
          result = this.textarea.value.substring(0, start) + this.textarea.value.substring(end);
        }
        this.textarea.value = result;
        this.textarea.selectionEnd = (start === end) ? start - 1 : start;
        key.classList.add('active');
      } else if (e.code === 'Delete') {
        e.preventDefault();
        let result;
        const start = this.textarea.selectionStart;
        const end = this.textarea.selectionEnd;
        if (start === end) {
          result = this.textarea.value.substring(0, start) + this.textarea.value.substring(end + 1);
        } else {
          result = this.textarea.value.substring(0, start) + this.textarea.value.substring(end);
        }
        this.textarea.value = result;
        this.textarea.selectionEnd = start;
        key.classList.add('active');
      } else if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
        e.preventDefault();
        key.classList.add('active');
      } else if (e.code === 'AltLeft' || e.code === 'AltRight') {
        e.preventDefault();
        key.classList.add('active');
        this.container.focus();
      } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        e.preventDefault();
        key.classList.add('active');
        this.container.focus();
      } else if (e.code === 'ArrowUp') {
        this.textarea.selectionStart = 0;
        this.textarea.selectionEnd = this.textarea.selectionStart;
        key.classList.add('active');
      } else if (e.code === 'ArrowDown') {
        this.textarea.selectionEnd = this.textarea.textLength;
        this.textarea.selectionStart = this.textarea.selectionEnd;
        key.classList.add('active');
      } else if (e.code === 'ArrowRight') {
        this.textarea.selectionStart = Math.min(
          this.textarea.textLength,
          this.textarea.selectionEnd + 1,
        );
        this.textarea.selectionEnd = this.textarea.selectionStart;
        key.classList.add('active');
      } else if (e.code === 'ArrowLeft') {
        this.textarea.selectionStart = Math.max(0, this.textarea.selectionStart - 1);
        this.textarea.selectionEnd = this.textarea.selectionStart;
        key.classList.add('active');
      } else if (e.code === 'CapsLock') {
        e.preventDefault();
        if (!this.capsLock) {
          this.capsLock = true;
        } else {
          this.capsLock = false;
        }
        key.classList.add('active');
      } else if (!key) {
        e.preventDefault();
      } else {
        if (this.capsLock) {
          this.insertText(key.textContent.toUpperCase());
        } else {
          this.insertText(key.textContent);
        }
        key.classList.add('active');
      }
    });

    document.addEventListener('keyup', (e) => {
      const key = document.getElementById(e.code);
      if (!key) {
        e.preventDefault();
        return;
      }

      key.classList.remove('active');
    });
  }

  insertText(text) {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    this.textarea.value = this.textarea.value.substring(0, start) + text
      + this.textarea.value.substring(end);
    this.textarea.selectionEnd = start + text.length;
    this.removeFocus();
  }

  changeLang(lang) {
    Array.from(this.container.querySelectorAll('.key')).forEach((e) => {
      e.textContent = keyboardKeysArr[e.id][lang];
    });
  }

  removeFocus() {
    this.textarea.blur();
  }
}

keys.forEach((row) => {
  const keyboardRow = document.createElement('div');
  keyboardRow.classList.add('row');

  row.forEach((key) => {
    keyboardKeysArr[key.code] = key.lang;
    const keyElement = document.createElement('button');
    keyElement.setAttribute('id', key.code);
    keyElement.classList.add('key');
    keyElement.classList.add(`${key.code}`);

    keyElement.textContent = key.lang.en;

    keyboardRow.append(keyElement);
  });

  keyFragment.append(keyboardRow);
});

const keyboard = new Keyboard();

keyboard.init();
