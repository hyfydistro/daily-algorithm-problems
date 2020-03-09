const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

// the following is an eventListenr 'onchange'
select.onchange = function() {
  const choice = select.value;

  // The following conditional statements work, however 'conditional statement 2' is subjected to less code
  // Conditional Statement 1
  // let days = '';
  // switch (choice) {
  //   case 'January':
  //   case 'March':
  //   case 'May':
  //   case 'July':
  //   case 'August':
  //   case 'October':
  //   case 'December':
  //     days = 31;
  //     break;
  //   case 'April':
  //   case 'June':
  //   case 'September':
  //   case 'November':
  //     days = 30;
  //     break;
  //   case 'February':
  //   days = 28;
  //   break;
  // }

    // Conditional Statement 2
    let days = 31;
    if (choice === 'February') {
      days = 28;
    } else if (choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {
      days = 30;
    } // else if (choice === 'default') {
    //   choice = 0;
    // }

  createCalender(days, choice);
}

function createCalender(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}
