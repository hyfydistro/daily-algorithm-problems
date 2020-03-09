let btn = document.querySelector('button');

// Change text on button element when clicked on, and
// revert back to the original text when clicked on again.

// Via Arrow function
// btn.addEventListener('click', () => {
//   console.log("pass1");
//       if(btn.className === 'on') {
//         console.log("pass2");
//       // change text in element
//       btn.textContent = 'Machine is Off';
//       btn.className = 'off';
//     } else {
//       btn.textContent = 'Machine is On';
//       btn.className = 'on';
//     }
//   }
// );

btn.addEventListener('click', function() {
  console.log("pass1");
      if(btn.className === 'on') {
        console.log("pass2");
      // change text in element
      btn.textContent = 'Machine is Off';
      btn.className = 'off';
    } else {
      btn.textContent = 'Machine is On';
      btn.className = 'on';
    }
  }
);
