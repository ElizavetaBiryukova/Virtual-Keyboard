const keys = [
  [
    {
      code: 'Backquote',
      lang: { en: '`', ru: 'ё' },
    },
    {
      code: 'Digit1',
      lang: { en: '1', ru: '1' },
    },
    {
      code: 'Digit2',
      lang: { en: '2', ru: '2' },
    },
    {
      code: 'Digit3',
      lang: { en: '3', ru: '3' },
    },
    {
      code: 'Digit4',
      lang: { en: '4', ru: '4' },
    },
    {
      code: 'Digit5',
      lang: { en: '5', ru: '5' },
    },
    {
      code: 'Digit6',
      lang: { en: '6', ru: '6' },
    },
    {
      code: 'Digit7',
      lang: { en: '7', ru: '7' },
    },
    {
      code: 'Digit8',
      lang: { en: '8', ru: '8' },
    },
    {
      code: 'Digit9',
      lang: { en: '9', ru: '9' },
    },
    {
      code: 'Digit0',
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

export default { keys };
