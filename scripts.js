const buttons = [
  { code: "Backquote", className: ["key"], en: "`", ru: "ё" },
  { code: "Digit1", className: ["key"], en: "1", ru: "1", shift: { en: "!", ru: "!" }, },
  { code: "Digit2", className: ["key"], en: "2", ru: "2", shift: { en: "@", ru: "\"" }, },
  { code: "Digit3", className: ["key"], en: "3", ru: "3", shift: { en: "#", ru: "№" }, },
  { code: "Digit4", className: ["key"], en: "4", ru: "4", shift: { en: "$", ru: ";" }, },
  { code: "Digit5", className: ["key"], en: "5", ru: "5", shift: { en: "%", ru: "%" }, },
  { code: "Digit6", className: ["key"], en: "6", ru: "6", shift: { en: "^", ru: ":" }, },
  { code: "Digit7", className: ["key"], en: "7", ru: "7", shift: { en: "&", ru: "?" }, },
  { code: "Digit8", className: ["key"], en: "8", ru: "8", shift: { en: "*", ru: "*" }, },
  { code: "Digit9", className: ["key"], en: "9", ru: "9", shift: { en: "(", ru: "(" }, },
  { code: "Digit0", className: ["key"], en: "0", ru: "0", shift: { en: ")", ru: ")" }, },
  { code: "Minus", className: ["key"], en: "-", ru: "-", shift: { en: "_", ru: "_" }, },
  { code: "Equal", className: ["key"], en: "=", ru: "=", shift: { en: "+", ru: "+" }, },
  { code: "Backspace", className: ["key", "backspace"], en: "Backspace", ru: "Backspace" },
  { code: "Tab", className: ["key", "tab"], en: "Tab", ru: "Tab" },
  { code: "KeyQ", className: ["key"], en: "q", ru: "й" },
  { code: "KeyW", className: ["key"], en: "w", ru: "ц" },
  { code: "KeyE", className: ["key"], en: "e", ru: "у" },
  { code: "KeyR", className: ["key"], en: "r", ru: "к" },
  { code: "KeyT", className: ["key"], en: "t", ru: "е" },
  { code: "KeyY", className: ["key"], en: "y", ru: "н" },
  { code: "KeyU", className: ["key"], en: "u", ru: "г" },
  { code: "KeyI", className: ["key"], en: "i", ru: "ш" },
  { code: "KeyO", className: ["key"], en: "o", ru: "щ" },
  { code: "KeyP", className: ["key"], en: "p", ru: "з" },
  { code: "BracketLeft", className: ["key"], en: "[", ru: "х", shift: { en: "{", ru: "х" }, },
  { code: "BracketRight", className: ["key"], en: "]", ru: "ъ", shift: { en: "}", ru: "ъ" }, },
  { code: "Backslash", className: ["key"], en: "\\", ru: "\\", shift: { en: "|", ru: "/" }, },
  { code: "Delete", className: ["key", "delete"], en: "Del", ru: "Del" },
  { code: "CapsLock", className: ["key", "capslock"], en: "Caps Lock", ru: "Caps Lock" },
  { code: "KeyA", className: ["key"], en: "a", ru: "ф" },
  { code: "KeyS", className: ["key"], en: "s", ru: "ы" },
  { code: "KeyD", className: ["key"], en: "d", ru: "в" },
  { code: "KeyF", className: ["key"], en: "f", ru: "а" },
  { code: "KeyG", className: ["key"], en: "g", ru: "п" },
  { code: "KeyH", className: ["key"], en: "h", ru: "р" },
  { code: "KeyJ", className: ["key"], en: "j", ru: "о" },
  { code: "KeyK", className: ["key"], en: "k", ru: "л" },
  { code: "KeyL", className: ["key"], en: "l", ru: "д" },
  { code: "Semicolon", className: ["key"], en: ";", ru: "ж", shift: { en: ":", ru: "ж" }, },
  { code: "Quote", className: ["key"], en: "'", ru: "э", shift: { en: "\"", ru: "э" }, },
  { code: "Enter", className: ["key", "enter"], en: "Enter", ru: "Enter" },
  { code: "ShiftLeft", className: ["key", "left-shift"], en: "Shift", ru: "Shift" },
  { code: "KeyZ", className: ["key"], en: "z", ru: "я" },
  { code: "KeyX", className: ["key"], en: "x", ru: "ч" },
  { code: "KeyC", className: ["key"], en: "c", ru: "с" },
  { code: "KeyV", className: ["key"], en: "v", ru: "м" },
  { code: "KeyB", className: ["key"], en: "b", ru: "и" },
  { code: "KeyN", className: ["key"], en: "n", ru: "т" },
  { code: "KeyM", className: ["key"], en: "m", ru: "ь" },
  { code: "Comma", className: ["key"], en: ",", ru: "б", shift: { en: "<", ru: "б" }, },
  { code: "Period", className: ["key"], en: ".", ru: "ю", shift: { en: ">", ru: "ю" }, },
  { code: "Slash", className: ["key"], en: "/", ru: ".", shift: { en: "?", ru: "," }, },
  { code: "ArrowUp", className: ["key"], en: "↑", ru: "↑" },
  { code: "ShiftRight", className: ["key", "right-shift"], en: "Shift", ru: "Shift" },
  { code: "ControlLeft", className: ["key"], en: "Ctrl", ru: "Ctrl" },
  { code: "MetaLeft", className: ["key"], en: "Win", ru: "Win" },
  { code: "AltLeft", className: ["key"], en: "Alt", ru: "Alt" },
  { code: "Space", className: ["key", "space"], en: " ", ru: " " },
  { code: "AltRight", className: ["key", "arrow"], en: "Alt", ru: "Alt" },
  { code: "ArrowLeft", className: ["key", "arrow"], en: "←", ru: "←" },
  { code: "ArrowDown", className: ["key", "arrow"], en: "↓", ru: "↓" },
  { code: "ArrowRight", className: ["key", "arrow"], en: "→", ru: "→" },
  { code: "ControlRight", className: ["key", "arrow"], en: "Ctrl", ru: "Ctrl" },
];

function createElement(tagName, classNames, isButton = false) {
  const element = document.createElement(tagName);
  if (isButton) {
    element.setAttribute('type', 'button');
  }

  element.classList.add(...classNames);

  return element;
}

function generateKeyboardButtons() {
  const keyboardFragment = new DocumentFragment();

  buttons.forEach((button) => {
    const key = createElement("button", button.className, true);

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

  LetterCases = {
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

  changeLanguage() {
    this.language = this.language === "en" ? "ru" : "en";
    localStorage.setItem("language", this.language);
  }

  init() {
    this.container = createElement("div", ["container"]);
    this.textarea = createElement("textarea", ["textarea"]);
    this.keyboard = createElement("div", ["keyboard"]);
    this.keyboard.append(generateKeyboardButtons());
    this.info = createElement("p", ["info"]);
    this.info.innerHTML = "[Win] Change language: <span class=\"description\">Shift + Alt</span>";
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
        (key) => key === event.target,
      );
      this.KeystrokeAction(buttons[index]);
    }
  };

  handleInput = (value, selectionStart, button) => {
    const letter = this.keys[buttons.indexOf(button)].textContent;

    return [`${value.slice(
      0,
      selectionStart,
    )}${letter}${value.slice(selectionStart)}`, selectionStart + 1];
  }

  setTextAreaPosition(position) {
    this.textarea.selectionStart = position;
    this.textarea.selectionEnd = position;
    this.textarea.focus();
  }

  KeystrokeAction(button) {
    const { selectionStart } = this.textarea;
    switch (button.code) {
      case "Backspace":
        this.handleInputButtons(this.handleBackspace);
        break;
      case "Tab":
        this.handleInputButtons(this.handleTab);
        break;
      case "Delete":
        this.handleInputButtons(this.handleDelete);
        break;
      case "CapsLock":
        this.LetterCases.capsLock = !this.LetterCases.capsLock;
        break;
      case "Enter":
        this.handleInputButtons(this.handleEnter);
        break;
      case "ShiftLeft":
        break;
      case "ShiftRight":
        break;
      case "ArrowUp":
      case "ArrowLeft": this.setTextAreaPosition(selectionStart > 0 ? selectionStart - 1 : 0); break;
      case "ArrowDown":
      case "ArrowRight": this.setTextAreaPosition(selectionStart + 1); break;
      case "AltLeft":
      case "AltRight":
      case "MetaLeft":
      case "ControlLeft":
      case "ControlRight":
        break;
      default:
        this.handleInputButtons(this.handleInput, button);
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

    if (
      (event.code === "ShiftLeft" || event.code === "ShiftRight")
      && this.LetterCases.shift
    ) {
      this.LetterCases.shift = false;
    }
  };

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

  handleInputButtons(callback, button) {
    const { value, selectionStart } = this.textarea;

    const [newValue, newPosition] = callback(value, selectionStart, button);

    this.textarea.value = newValue;
    this.setTextAreaPosition(newPosition);
  }

  handleEnter(value, selectionStart) {
    return [`${value.slice(0, selectionStart)}\n${value.slice(
      selectionStart,
    )}`, selectionStart + 1];
  }

  handleTab(value, selectionStart) {
    return [`${value.slice(0, selectionStart)}\t${value.slice(
      selectionStart,
    )}`, selectionStart + 1];
  }

  handleBackspace(value, selectionStart) {
    const newPosition = selectionStart > 0 ? selectionStart - 1 : 0;
    return [`${value.slice(0, newPosition)}${value.slice(
      selectionStart,
    )}`, newPosition];
  }

  handleDelete(value, selectionStart) {

    return [`${value.slice(0, selectionStart)}${value.slice(
      selectionStart + 1,
    )}`, selectionStart];
  }
}

window.addEventListener("load", () => {
  const keyboard = new Keyboard();

  keyboard.init();
});
