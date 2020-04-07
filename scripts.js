const buttons = [
  { code: "Backquote", en: "`", ru: "ё" },
  {
    code: "Digit1",
    en: "1",
    ru: "1",
    shift: { en: "!", ru: "!" },
  },
  {
    code: "Digit2",
    en: "2",
    ru: "2",
    shift: { en: "@", ru: '"' },
  },
  {
    code: "Digit3",
    en: "3",
    ru: "3",
    shift: { en: "#", ru: "№" },
  },
  {
    code: "Digit4",
    en: "4",
    ru: "4",
    shift: { en: "$", ru: ";" },
  },
  {
    code: "Digit5",
    en: "5",
    ru: "5",
    shift: { en: "%", ru: "%" },
  },
  {
    code: "Digit6",
    en: "6",
    ru: "6",
    shift: { en: "^", ru: ":" },
  },
  {
    code: "Digit7",
    en: "7",
    ru: "7",
    shift: { en: "&", ru: "?" },
  },
  {
    code: "Digit8",
    en: "8",
    ru: "8",
    shift: { en: "*", ru: "*" },
  },
  {
    code: "Digit9",
    en: "9",
    ru: "9",
    shift: { en: "(", ru: "(" },
  },
  {
    code: "Digit0",
    en: "0",
    ru: "0",
    shift: { en: ")", ru: ")" },
  },
  {
    code: "Minus",
    en: "-",
    ru: "-",
    shift: { en: "_", ru: "_" },
  },
  {
    code: "Equal",
    en: "=",
    ru: "=",
    shift: { en: "+", ru: "+" },
  },
  { code: "Backspace", en: "Backspace", ru: "Backspace" },
  { code: "Tab", en: "Tab", ru: "Tab" },
  { code: "KeyQ", en: "q", ru: "й" },
  { code: "KeyW", en: "w", ru: "ц" },
  { code: "KeyE", en: "e", ru: "у" },
  { code: "KeyR", en: "r", ru: "к" },
  { code: "KeyT", en: "t", ru: "е" },
  { code: "KeyY", en: "y", ru: "н" },
  { code: "KeyU", en: "u", ru: "г" },
  { code: "KeyI", en: "i", ru: "ш" },
  { code: "KeyO", en: "o", ru: "щ" },
  { code: "KeyP", en: "p", ru: "з" },
  {
    code: "BracketLeft",
    en: "[",
    ru: "х",
    shift: { en: "{", ru: "х" },
    printable: true,
  },
  {
    code: "BracketRight",
    en: "]",
    ru: "ъ",
    shift: { en: "}", ru: "ъ" },
  },
  {
    code: "Backslash",
    en: "\\",
    ru: "\\",
    shift: { en: "|", ru: "/" },
  },
  { code: "Delete", en: "Del", ru: "Del" },
  { code: "CapsLock", en: "Caps Lock", ru: "Caps Lock" },
  { code: "KeyA", en: "a", ru: "ф" },
  { code: "KeyS", en: "s", ru: "ы" },
  { code: "KeyD", en: "d", ru: "в" },
  { code: "KeyF", en: "f", ru: "а" },
  { code: "KeyG", en: "g", ru: "п" },
  { code: "KeyH", en: "h", ru: "р" },
  { code: "KeyJ", en: "j", ru: "о" },
  { code: "KeyK", en: "k", ru: "л" },
  { code: "KeyL", en: "l", ru: "д" },
  {
    code: "Semicolon",
    en: ";",
    ru: "ж",
    shift: { en: ":", ru: "ж" },
  },
  {
    code: "Quote",
    en: "'",
    ru: "э",
    shift: { en: '"', ru: "э" },
  },
  { code: "Enter", en: "Enter", ru: "Enter" },
  { code: "ShiftLeft", en: "Shift", ru: "Shift" },
  { code: "KeyZ", en: "z", ru: "я" },
  { code: "KeyX", en: "x", ru: "ч" },
  { code: "KeyC", en: "c", ru: "с" },
  { code: "KeyV", en: "v", ru: "м" },
  { code: "KeyB", en: "b", ru: "и" },
  { code: "KeyN", en: "n", ru: "т" },
  { code: "KeyM", en: "m", ru: "ь" },
  {
    code: "Comma",
    en: ",",
    ru: "б",
    shift: { en: "<", ru: "б" },
  },
  {
    code: "Period",
    en: ".",
    ru: "ю",
    shift: { en: ">", ru: "ю" },
  },
  {
    code: "Slash",
    en: "/",
    ru: ".",
    shift: { en: "?", ru: "," },
  },
  { code: "ArrowUp", en: "↑", ru: "↑" },
  { code: "ShiftRight", en: "Shift", ru: "Shift" },
  { code: "ControlLeft", en: "Ctrl", ru: "Ctrl" },
  { code: "MetaLeft", en: "Win", ru: "Win" },
  { code: "AltLeft", en: "Alt", ru: "Alt" },
  { code: "Space", en: " ", ru: " " },
  { code: "AltRight", en: "Alt", ru: "Alt" },
  { code: "ArrowLeft", en: "←", ru: "←" },
  { code: "ArrowDown", en: "↓", ru: "↓" },
  { code: "ArrowRight", en: "→", ru: "→" },
  { code: "ControlRight", en: "Ctrl", ru: "Ctrl" },
];

class Keyboard {
  container = null;
  textarea = null;
  keyboard = null;
  info = null;
  keys = [];
  LetterCases = {
    _shift: false,
    _capsLock: false,
    _listener: null,
    get shift() {
      return this._shift;
    },
    set shift(value) {
      this._shift = value;
      this._listener(this._shift, this._capsLock);
    },
    get capsLock() {
      return this._capsLock;
    },
    set capsLock(value) {
      this._capsLock = value;
      this._listener(this._shift, this._capsLock);
    },
    registerListener: function (listener) {
      this._listener = listener;
      this._listener(this._shift, this._capsLock);
    },
  };
  language = localStorage.getItem("language") || "en";

  changeLanguage() {
    this.language = this.language === "en" ? "ru" : "en";
    localStorage.setItem("language", this.language);
  }

  init() {
    this.container = this.createElement("div", "container");
    this.textarea = this.createElement("textarea", "textarea");
    this.keyboard = this.createElement("div", "keyboard");
    this.keyboard.append(this.generateKeyboardButtons());
    this.info = this.createElement("p", "info").innerHTML =
      "[Win] Change language: <span>Shift + Alt</span>";
    this.keys = this.keyboard.querySelectorAll(".key");
    this.LetterCases.registerListener(this.renderKeyboardContent);
    this.container.append(this.textarea, this.keyboard, this.info);

    document.body.append(this.container);
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("keyup", this.onKeyUp);
    document.addEventListener("click", this.onClick);
  }

  onClick = (event) => {
    if (event.target.classList.contains("key")) {
      const index = Array.from(this.keys).findIndex(
        (key) => key === event.target
      );
      this.buttonAction(buttons[index]);
    }
  };

  handleInput(button) {
    const { value, selectionStart } = this.textarea;
    const index = buttons.indexOf(button);
    const letter = this.keys[index].textContent;

    this.textarea.value = `${value.slice(
      0,
      selectionStart
    )}${letter}${value.slice(selectionStart)}`;

    this.setTextAreaPosition(selectionStart + 1);
  }

  setTextAreaPosition(position) {
    this.textarea.selectionStart = position;
    this.textarea.selectionEnd = position;
    this.textarea.focus();
  }

  buttonAction(button) {
    switch (button.code) {
      case "Backspace":
        this.handleBackspace();
        break;
      case "Tab":
        this.handleTab();
        break;
      case "Delete":
        this.handleDelete();
        break;
      case "CapsLock":
        this.LetterCases.capsLock = !this.LetterCases.capsLock;
        break;
      case "Enter":
        this.handleEnter();
        break;
      case "ShiftLeft":
        break;
      case "ShiftRight":
        break;
      case "ArrowUp":
      case "ArrowLeft":
      case "ArrowDown":
      case "ArrowRight":
      case "AltLeft":
      case "AltRight":
      case "MetaLeft":
      case "ControlLeft":
      case "ControlRight":
      case "MetaLeft":
        break;
      default:
        this.handleInput(button);
        break;
    }
  }

  onKeyDown = (event) => {
    event.preventDefault();

    const index = buttons.findIndex((button) => button.code === event.code);

    if (index === -1) return;

    this.keys[index].classList.add("active");
    this.keys[index].click();

    if (event.shiftKey) {
      if (event.altKey) {
        this.changeLanguage();
      }
      this.LetterCases.shift = true;
    }
  };

  onKeyUp = (event) => {
    event.preventDefault();

    const index = buttons.findIndex((button) => button.code === event.code);

    if (index === -1) return;

    this.keys[index].classList.remove("active");
    // if (event.shiftKey) {
    if (
      (event.code === "ShiftLeft" || event.code === "ShiftRight") &&
      this.LetterCases.shift
    ) {
      this.LetterCases.shift = false;
    }
  };

  renderKeyboardContent = (shift, capsLock) => {
    this.keys.forEach((key, i) => {
      key.textContent = buttons[i][this.language];
      if (!capsLock && !shift) {
        if (typeof buttons[i].shift === "undefined") {
          key.textContent = buttons[i][this.language];
        }
      } else if (capsLock && !shift) {
        if (typeof buttons[i].shift === "undefined") {
          key.textContent = key.textContent.toUpperCase();
        }
      } else if (!capsLock && shift) {
        if (typeof buttons[i].shift === "undefined") {
          key.textContent = key.textContent.toUpperCase();
        } else {
          key.textContent = buttons[i].shift[this.language];
        }
      }
    });
  };

  createElement(tagName, ...classNames) {
    const element = document.createElement(tagName);

    element.classList.add(...classNames);

    return element;
  }

  generateKeyboardButtons() {
    const keyboardFragment = new DocumentFragment();

    buttons.forEach((button) => {
      const key = this.createElement("button", "key");
      key.setAttribute("type", "button");

      switch (button.code) {
        case "Backspace":
          key.classList.add("backspace");
          break;
        case "Tab":
          key.classList.add("tab");
          break;
        case "Delete":
          key.classList.add("delete");
          break;
        case "CapsLock":
          key.classList.add("capslock");
          break;
        case "Enter":
          key.classList.add("enter");
          break;
        case "ShiftLeft":
          key.classList.add("left-shift");
          break;
        case "ShiftRight":
          key.classList.add("right-shift");
          break;
        case "Space":
          key.classList.add("space");
          break;
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowDown":
        case "ArrowRight":
          key.classList.add("arrow");
          break;
        default:
          break;
      }

      keyboardFragment.append(key);
    });

    return keyboardFragment;
  }

  handleEnter() {
    const { value, selectionStart } = this.textarea;

    this.textarea.value = `${value.slice(0, selectionStart)}\n${value.slice(
      selectionStart
    )}`;

    this.setTextAreaPosition(selectionStart + 1);
  }

  handleTab() {
    const { value, selectionStart } = this.textarea;

    this.textarea.value = `${value.slice(0, selectionStart)}\t${value.slice(
      selectionStart
    )}`;

    this.setTextAreaPosition(selectionStart + 1);
  }

  handleBackspace() {
    const { value, selectionStart } = this.textarea;
    const newPosition = selectionStart > 0 ? selectionStart - 1 : 0;

    this.textarea.value = `${value.slice(0, newPosition)}${value.slice(
      selectionStart
    )}`;

    this.setTextAreaPosition(newPosition);
  }

  handleDelete() {
    const { value, selectionStart } = this.textarea;

    this.textarea.value = `${value.slice(0, selectionStart)}${value.slice(
      selectionStart + 1
    )}`;

    this.setTextAreaPosition(selectionStart);
  }
}

window.addEventListener("load", () => {
  const keyboard = new Keyboard();

  keyboard.init();
});
