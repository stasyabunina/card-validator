import { input } from "./var";
import { setCookie, getCookie } from "./cookie";

let popup;

class Popup {
  constructor(element) {
    this.element = element;
  }

  render() {
    const modal = document.createElement('div');
    modal.classList.add('popup');

    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('popup__wrapper');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.classList.add('popup__btn');
    btn.textContent = 'Продолжить';

    const warning = document.createElement('span');
    warning.classList.add('popup__span');
    warning.textContent = 'Прежде чем вы продолжите...';

    const text = document.createElement('p');
    text.classList.add('popup__text');
    text.innerHTML = `Использование этого приложения абсолютно безопасно. Я&nbsp;не&nbsp;имею доступа
    к&nbsp;какой-либо информации или&nbsp;данным, которые вы&nbsp;вводите на&nbsp;сайте, включая номер вашей
    кредитной карты.`;

    this.element.append(modal);
    modal.append(modalWrapper);
    modalWrapper.append(warning);
    modalWrapper.append(text);
    modalWrapper.append(btn);

    btn.addEventListener('click', () => {
      modal.remove();
      setCookie("modal", "true");
      input.focus();
    })
  }
}

window.addEventListener('load', () => {
  if (getCookie("modal") === "true") {
    return;
  }

  popup = new Popup(document.body);
  popup.render();

  gsap.fromTo('.popup__wrapper', { opacity: 0, y: 100 }, {
    duration: 0.6,
    opacity: 1,
    y: 0
  });
})
