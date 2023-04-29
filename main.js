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
    this.description = document.createElement('p');
    this.language = document.createElement('p');

    this.wrapper.classList.add('wrapper');

    this.title.classList.add('title');
    this.title.textContent = 'Virtual keyboard';

    this.textarea.classList.add('text');

    this.container.classList.add('container');

    this.description.classList.add('description');
    this.description.textContent = 'Клавиатура создана в операционной системе Windows';

    this.language.classList.add('language');
    this.language.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';

    this.wrapper.append(this.title, this.textarea, this.container, this.description, this.language);

    document.body.append(this.wrapper);
  }
}

const keyboard = new Keyboard();

keyboard.init();

// function keyboardInit() {
//   keyboard.textarea = document.createElement('textarea');
//   keyboard.textarea.classList.add('text');
//   keyboard.container = document.createElement('div');
//   keyboard.container.classList.add('container');

//   document.body.append(keyboard.textarea, keyboard.container);
// }

// keyboardInit();
