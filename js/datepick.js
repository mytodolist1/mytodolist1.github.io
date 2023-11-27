document.addEventListener('DOMContentLoaded', function () {
  const datepickers = document.querySelectorAll('datepicker');

  datepickers.forEach(function (datepicker) {
      const input = datepicker.querySelector('datepicker-input');
      const calendar = datepicker.querySelector('datepicker-calendar');

      input.addEventListener('focus', function () {
          calendar.style.display = 'block';
      });

      input.addEventListener('blur', function () {
          setTimeout(function () {
              calendar.style.display = 'none';
          }, 200);
      });

      const today = new Date();
      const currentMonth = today.getMonth();
      const currentYear = today.getFullYear();

      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

      let date = 1;

      const table = document.createElement('table');

      for (let i = 0; i < 6; i++) {
          const row = document.createElement('tr');

          for (let j = 0; j < 7; j++) {
              if (i === 0 && j < today.getDay()) {
                  const cell = document.createElement('td');
                  row.appendChild(cell);
              } else if (date > daysInMonth) {
                  break;
              } else {
                  const cell = document.createElement('td');
                  cell.textContent = date;

                  if (date === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
                      cell.classList.add('selected');
                  }

                  cell.addEventListener('click', function () {
                      input.value = cell.textContent;
                      calendar.style.display = 'none';
                  });

                  row.appendChild(cell);
                  date++;
              }
          }

          table.appendChild(row);
      }

      calendar.appendChild(table);
  });
});
  