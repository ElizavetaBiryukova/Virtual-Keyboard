class Keyboard {
  constructor() {
    this.textarea = null;
    this.container = null;
  }
}

const keyboard = new Keyboard();

function keyboardInit() {
  keyboard.textarea = document.createElement('textarea');
  keyboard.textarea.classList.add('text');
  keyboard.container = document.createElement('div');
  keyboard.container.classList.add('container');

  document.body.append(keyboard.textarea, keyboard.container);
}

keyboardInit();
