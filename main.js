import { keys, keyboardKeysArr } from './keys.js';

class Keyboard {
  constructor() {
    this.lang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';
    this.upperCase = false;
  }

  init() {
    this.wrapper = document.createElement('main');
    this.title = document.createElement('h1');
    this.textarea = document.createElement('textarea');
    this.container = document.createElement('div');
    this.description = document.createElement('p');
    this.language = document.createElement('p');

    this.wrapper.classList.add('wrapper');

    this.title.classList.add('title');
    this.title.textContent = 'Virtual keyboard';

    this.textarea.classList.add('textarea');

    this.container.classList.add('keyboard');

    this.description.classList.add('description');
    this.description.textContent = 'This keyboard was developed and tested in Microsoft Windows.';

    this.language.classList.add('language');
    this.language.textContent = 'To switch ENG/РУС input methods, press Ctrl+Alt.';

    this.wrapper.append(this.title, this.textarea, this.container, this.description, this.language);

    document.body.append(this.wrapper);

    this.createKey();
    this.changeLang(this.lang);
    this.createActions();
  }

  createActions() {
    document.addEventListener('keydown', (e) => {
      const key = document.getElementById(e.code);

      key.classList.add('active');

      this.switchLanguage(e);

      if (e.code === 'Tab') {
        this.createTab(e);
      } else if (e.code === 'Enter') {
        this.createEnter(e);
      } else if (e.code === 'Backspace') {
        this.createBackspace(e);
      } else if (e.code === 'Delete') {
        this.createDelete(e);
      } else if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
        e.preventDefault();
      } else if (e.code === 'AltLeft' || e.code === 'AltRight') {
        e.preventDefault();
        this.container.focus();
      } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        e.preventDefault();
        this.createUpperCase();
      } else if (e.code === 'ArrowUp') {
        this.createArrowUp();
      } else if (e.code === 'ArrowDown') {
        this.createArrowDown();
      } else if (e.code === 'ArrowRight') {
        this.createArrowRight();
      } else if (e.code === 'ArrowLeft') {
        this.createArrowLeft();
      } else if (e.code === 'CapsLock') {
        this.createUpperCase();
      } else if (!key) {
        e.preventDefault();
      } else {
        if (this.upperCase) {
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
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.upperCase = false;
      }
      key.classList.remove('active');
    });

    this.container.addEventListener('click', (e) => {
      this.textarea.focus();
      const keyDown = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        code: e.target.id,
      });
      document.dispatchEvent(keyDown);

      this.textarea.focus();
      const keyUp = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        code: e.target.id,
      });
      document.dispatchEvent(keyUp);
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

  createKey() {
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

      this.container.append(keyboardRow);
    });
  }

  switchLanguage(e) {
    if ((e.ctrlKey || e.metaKey) && e.altKey && !e.repeat) {
      e.preventDefault();
      this.lang = this.lang === 'ru' ? 'en' : 'ru';
      localStorage.setItem('lang', this.lang);
      this.changeLang(this.lang);
    }
  }

  createTab(e) {
    e.preventDefault();
    this.insertText('\t');
  }

  createEnter(e) {
    e.preventDefault();
    this.insertText('\n');
  }

  createBackspace(e) {
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
  }

  createDelete(e) {
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
  }

  createArrowUp() {
    this.textarea.selectionStart = 0;
    this.textarea.selectionEnd = this.textarea.selectionStart;
  }

  createArrowDown() {
    this.textarea.selectionEnd = this.textarea.textLength;
    this.textarea.selectionStart = this.textarea.selectionEnd;
  }

  createArrowRight() {
    this.textarea.selectionStart = Math.min(
      this.textarea.textLength,
      this.textarea.selectionEnd + 1,
    );
    this.textarea.selectionEnd = this.textarea.selectionStart - 1;
  }

  createArrowLeft() {
    this.textarea.selectionStart = Math.max(0, this.textarea.selectionStart - 1);
    this.textarea.selectionEnd = this.textarea.selectionStart + 1;
  }

  createUpperCase() {
    if (!this.upperCase) {
      this.upperCase = true;
    } else {
      this.upperCase = false;
    }
  }
}

const keyboard = new Keyboard();

keyboard.init();
