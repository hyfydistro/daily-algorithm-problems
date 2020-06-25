let tabs = document.querySelectorAll('.info-box li');
let panels = document.querySelectorAll('.info-box article');

for (let i = 0; i < tabs.length; i++) {
  let tab = tabs[i];
  setTabHandler(tab, i);
}

function setTab(e) {
  if (e.type === 'keypress' && e.keyCode !== 13) {
    return;
  }

let tabPos = Number(this.getAttribute('aria-posinset')) - 1;

for (let i = 0; i < tabs.length; i++) {
  if (tabs[i].getAttribute('class')) {
    tabs[i].removeAttribute('class');
  }

  tabs[i].setAttribute('aria-selected', 'false');
}

this.setAttribute('class', 'active');
this.setAttribute('aria-selected', 'true')

for (let i = 0; i < panels.length; i++) {
  if (panels[i].getAttribute('class')) {
    panels[i].removeAttribute('class');
  }

  panels[i].setAttribute('aria-hidden', 'true');
}

panels[tabPos].setAttribute('class', 'active-panel');
panels[tabPos].setAttribute('aria-hidden', 'false');
}

function setTabHandler(tab) {
  tab.addEventListener('click', setTab);
  tab.addEventListener('keypress', setTab);
}
