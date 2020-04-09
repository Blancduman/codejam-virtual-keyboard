const SHIFT = "Shift";
const buttons = [
  { code: "Backquote", en: "`", ru: "ё" },
  { code: "Digit1", en: "1", ru: "1", shift: { en: "!", ru: "!" }, },
  { code: "Digit2", en: "2", ru: "2", shift: { en: "@", ru: "\"" }, },
  { code: "Digit3", en: "3", ru: "3", shift: { en: "#", ru: "№" }, },
  { code: "Digit4", en: "4", ru: "4", shift: { en: "$", ru: ";" }, },
  { code: "Digit5", en: "5", ru: "5", shift: { en: "%", ru: "%" }, },
  { code: "Digit6", en: "6", ru: "6", shift: { en: "^", ru: ":" }, },
  { code: "Digit7", en: "7", ru: "7", shift: { en: "&", ru: "?" }, },
  { code: "Digit8", en: "8", ru: "8", shift: { en: "*", ru: "*" }, },
  { code: "Digit9", en: "9", ru: "9", shift: { en: "(", ru: "(" }, },
  { code: "Digit0", en: "0", ru: "0", shift: { en: ")", ru: ")" }, },
  { code: "Minus", en: "-", ru: "-", shift: { en: "_", ru: "_" }, },
  { code: "Equal", en: "=", ru: "=", shift: { en: "+", ru: "+" }, },
  { code: "Backspace", className: "backspace", en: "Backspace", ru: "Backspace" },
  { code: "Tab", className: "tab", en: "Tab", ru: "Tab" },
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
  { code: "BracketLeft", en: "[", ru: "х", shift: { en: "{", ru: "х" }, },
  { code: "BracketRight", en: "]", ru: "ъ", shift: { en: "}", ru: "ъ" }, },
  { code: "Backslash", en: "\\", ru: "\\", shift: { en: "|", ru: "/" }, },
  { code: "Delete", className: "delete", en: "Del", ru: "Del" },
  { code: "CapsLock", className: "capslock", en: "Caps Lock", ru: "Caps Lock" },
  { code: "KeyA", en: "a", ru: "ф" },
  { code: "KeyS", en: "s", ru: "ы" },
  { code: "KeyD", en: "d", ru: "в" },
  { code: "KeyF", en: "f", ru: "а" },
  { code: "KeyG", en: "g", ru: "п" },
  { code: "KeyH", en: "h", ru: "р" },
  { code: "KeyJ", en: "j", ru: "о" },
  { code: "KeyK", en: "k", ru: "л" },
  { code: "KeyL", en: "l", ru: "д" },
  { code: "Semicolon", en: ";", ru: "ж", shift: { en: ":", ru: "ж" }, },
  { code: "Quote", en: "'", ru: "э", shift: { en: "\"", ru: "э" }, },
  { code: "Enter", className: "enter", en: "Enter", ru: "Enter" },
  { code: "ShiftLeft", className: "left-shift", en: "Shift", ru: "Shift" },
  { code: "KeyZ", en: "z", ru: "я" },
  { code: "KeyX", en: "x", ru: "ч" },
  { code: "KeyC", en: "c", ru: "с" },
  { code: "KeyV", en: "v", ru: "м" },
  { code: "KeyB", en: "b", ru: "и" },
  { code: "KeyN", en: "n", ru: "т" },
  { code: "KeyM", en: "m", ru: "ь" },
  { code: "Comma", en: ",", ru: "б", shift: { en: "<", ru: "б" }, },
  { code: "Period", en: ".", ru: "ю", shift: { en: ">", ru: "ю" }, },
  { code: "Slash", en: "/", ru: ".", shift: { en: "?", ru: "," }, },
  { code: "ArrowUp", en: "↑", ru: "↑" },
  { code: "ShiftRight", className: "right-shift", en: "Shift", ru: "Shift" },
  { code: "ControlLeft", en: "Ctrl", ru: "Ctrl" },
  { code: "MetaLeft", en: "Win", ru: "Win" },
  { code: "AltLeft", en: "Alt", ru: "Alt" },
  { code: "Space", className: "space", en: " ", ru: " " },
  { code: "AltRight", className: "arrow", en: "Alt", ru: "Alt" },
  { code: "ArrowLeft", className: "arrow", en: "←", ru: "←" },
  { code: "ArrowDown", className: "arrow", en: "↓", ru: "↓" },
  { code: "ArrowRight", className: "arrow", en: "→", ru: "→" },
  { code: "ControlRight", className: "arrow", en: "Ctrl", ru: "Ctrl" },
];

function createElementWithClassList(tagName, classNames) {
  const element = document.createElement(tagName);

  element.classList.add(...classNames);

  return element;
}

function createButton(className) {
  const element = createElementWithClassList('button', className ? ["key", className] : ["key"]);

  element.setAttribute('type', 'button');

  return element;
}

function generateKeyboardButtons() {
  const keyboardFragment = new DocumentFragment();

  buttons.forEach(button => {
    const key = createButton(button.className);

    keyboardFragment.append(key);
  });

  return keyboardFragment;
}

class Keyboard {
  container = null;

  textarea = null;

  keyboard = null;

  info = null;

  keys = [];

  letterCases = {
    SUPAshift: false,
    SUPAcapsLock: false,
    SUPAlistener: null,
    get shift() {
      return this.SUPAshift;
    },
    set shift(value) {
      this.SUPAshift = value;
      this.SUPAlistener(this.SUPAshift, this.SUPAcapsLock);
    },
    get capsLock() {
      return this.SUPAcapsLock;
    },
    set capsLock(value) {
      this.SUPAcapsLock = value;
      this.SUPAlistener(this.SUPAshift, this.SUPAcapsLock);
    },
    registerListener(listener) {
      this.SUPAlistener = listener;
      this.SUPAlistener(this.SUPAshift, this.SUPAcapsLock);
    },
  };

  language = localStorage.getItem("language") || "en";

  renderKeyboardContent = (shift, capsLock) => {
    this.keys.forEach((key, i) => {
      const currentButton = buttons[i];

      key.textContent = currentButton[this.language];

      if (!capsLock && !shift) {
        if (!currentButton.shift) {
          key.textContent = currentButton[this.language];
        }
      } else if (capsLock && shift) {
        if (!currentButton.shift) {
          key.textContent = currentButton[this.language]
        } else {
          key.textContent = currentButton.shift[this.language];
        }
      } else if (capsLock && !shift) {
        if (!currentButton.shift) {
          key.textContent = key.textContent.toUpperCase();
        }
      } else if (!capsLock && shift) {
        if (!currentButton.shift) {
          key.textContent = key.textContent.toUpperCase();
        } else {
          key.textContent = currentButton.shift[this.language];
        }
      }
    });
  };

  changeLanguage() {
    this.language = this.language === "en" ? "ru" : "en";
    localStorage.setItem("language", this.language);
  }

  setTextAreaPosition(position) {
    this.textarea.selectionStart = position;
    this.textarea.selectionEnd = position;
    this.textarea.focus();
  }

  handleInputButtons(newValue, newPosition) {
    this.textarea.value = newValue;
    this.setTextAreaPosition(newPosition);
  }

  handleBackspace(value, selectionStart) {
    const newPosition = selectionStart > 0 ? selectionStart - 1 : 0;
    const newValue = `${value.slice(0, newPosition)}${value.slice(
      selectionStart,
    )}`;

    this.handleInputButtons(newValue, newPosition);
  }

  handleTab(value, selectionStart) {
    const newPosition = selectionStart + 1;
    const newValue = `${value.slice(0, selectionStart)}\t${value.slice(
      selectionStart,
    )}`;

    this.handleInputButtons(newValue, newPosition);
  }

  handleDelete(value, selectionStart) {
    const newPosition = selectionStart;
    const newValue = `${value.slice(0, selectionStart)}${value.slice(
      selectionStart + 1,
    )}`;

    this.handleInputButtons(newValue, newPosition);
  }

  handleEnter(value, selectionStart) {
    const newPosition = selectionStart + 1;
    const newValue = `${value.slice(0, selectionStart)}\n${value.slice(
      selectionStart,
    )}`;

    this.handleInputButtons(newValue, newPosition);
  }

  handleInput = (value, selectionStart, button) => {
    const letter = this.keys[buttons.indexOf(button)].textContent;
    const newPosition = selectionStart + 1;
    const newValue = `${value.slice(
      0,
      selectionStart,
    )
      }${letter}${value.slice(selectionStart)}`;

    this.handleInputButtons(newValue, newPosition);
  }

  keystrokeAction(button) {
    const { value, selectionStart } = this.textarea;

    switch (button.code) {
      case "Backspace":
        this.handleBackspace(value, selectionStart);
        break;
      case "Tab":
        this.handleTab(value, selectionStart);
        break;
      case "Delete":
        this.handleDelete(value, selectionStart);
        break;
      case "CapsLock":
        this.letterCases.capsLock = !this.letterCases.capsLock;
        break;
      case "Enter":
        this.handleEnter(value, selectionStart);
        break;
      case "ShiftLeft":
        break;
      case "ShiftRight":
        break;
      case "ArrowUp":
      case "ArrowLeft":
        this.setTextAreaPosition(selectionStart > 0 ? selectionStart - 1 : 0);
        break;
      case "ArrowDown":
      case "ArrowRight":
        this.setTextAreaPosition(selectionStart + 1);
        break;
      case "AltLeft":
      case "AltRight":
      case "MetaLeft":
      case "ControlLeft":
      case "ControlRight":
        break;
      default:
        this.handleInput(value, selectionStart, button);
        break;
    }
  }

  onKeyDown = event => {
    event.preventDefault();

    const index = buttons.findIndex(button => button.code === event.code);
    if (index === -1) return;

    this.keys[index].classList.add("active");
    this.keys[index].click();

    if (event.key === SHIFT) {
      if (event.altKey) {
        this.changeLanguage();
      }

      this.letterCases.shift = true;
    }
  };

  onKeyUp = event => {
    event.preventDefault();

    const index = buttons.findIndex(button => button.code === event.code);
    if (index === -1) return;

    this.keys[index].classList.remove("active");

    if (event.key === SHIFT && this.letterCases.shift) {
      this.letterCases.shift = false;
    }
  };

  onClick = event => {
    if (event.target.classList.contains("key")) {
      const index = Array.from(this.keys).findIndex(
        key => key === event.target,
      );

      this.keystrokeAction(buttons[index]);
    }
  };

  init() {
    this.container = createElementWithClassList("div", ["container"]);
    this.textarea = createElementWithClassList("textarea", ["textarea"]);
    this.keyboard = createElementWithClassList("div", ["keyboard"]);
    this.keyboard.append(generateKeyboardButtons());
    this.info = createElementWithClassList("p", ["info"]);
    this.info.innerHTML = "[Win] Change language: <span class=\"description\">Shift + Alt</span>";
    this.keys = this.keyboard.querySelectorAll(".key");
    this.letterCases.registerListener(this.renderKeyboardContent);
    this.container.append(this.textarea, this.keyboard, this.info);

    document.body.append(this.container);
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("keyup", this.onKeyUp);
    document.addEventListener("click", this.onClick);
  }
}

window.addEventListener("load", () => {
  const keyboard = new Keyboard();

  keyboard.init();
});
