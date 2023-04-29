import { keys } from './key';

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
