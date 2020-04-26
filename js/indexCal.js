
class Calendar {
	constructor() {
		this.days = [
			"Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
		];
		this.month = [
			"Январь", "Ферваль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];
    
		this.date = new Date();
		this.currMonth = this.date.getMonth();
		this.currYear = this.date.getFullYear();
    this.currDay = this.date.getDate();
    

    this.showCurrent();
    this.currentMonth()
		document.querySelector(".next").onclick = () => {
			this.nextMonth();
		};
		document.querySelector(".previous").onclick = () => {
			this.previousMonth();
    }
  }
  


	showCurrent() {
		this.createCalendar(".calendar", this.currYear, this.currMonth);
	}

	previousMonth() {
		if (this.currMonth == 0) {
			this.currMonth = 11;
			this.currYear = this.currYear - 1;
		} else {
			this.currMonth = this.currMonth - 1;
		}
    this.showCurrent();
    this.currentMonth()-1;
	}

	nextMonth() {
		if (this.currMonth == 11) {
			this.currMonth = 0;
			this.currYear = this.currYear + 1;
		} else {
			this.currMonth = this.currMonth + 1;
		}
    this.showCurrent();
    this.currentMonth(+1)
	}

  currentMonth(){
    let c = document.querySelector('.calendar');
    let span = document.createElement('span');
    span.innerHTML = this.month[this.currMonth];
    c.prepend(span)
  }

	createCalendar(calendar, y, m) {
		let c = document.querySelector(calendar);
		let html = '<table>';
		let d = new Date()
				// First day of the week in the selected month
				, firstDayOfMonth = new Date(y, m, 1).getDay()
				// Last day of the selected month
				, lastDateOfMonth = new Date(y, m + 1, 0).getDate()
				// Last day of the previous month
				, lastDayOfLastMonth = m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();
		html += '<thead>';

		for (let i = 0; i < this.days.length; i++) {
			html += `<td class="days_of_week">${this.days[i]}</td>`;
		}

		html += '</thead>';
		html += '<tbody>';
		// Write the days
		let i = 1;
		do {

			let dow = new Date(y, m, i).getDay();
			// If Sunday, start new row
			if (dow == 0) {
				html += '<tr>';
			}
			// If not Sunday but first day of the month
			// it will write the last days from the previous month
			else if (i == 1) {
				html += '<tr>';
				let k = lastDayOfLastMonth - firstDayOfMonth + 1;
				for (let j = 0; j < firstDayOfMonth; j++) {
					html += '<td class="not-current">' + k + '</td>';
					k++;
				}
			}

			// Write the current day in the loop
			let chk = new Date();
			let chkY = chk.getFullYear();
			let chkM = chk.getMonth();
			let dayName = '';

			switch(dow) {
				case 0 :
					dayName = "Воскресенье";
					break;
				case 1 :
					dayName = "Понедельник";
					break;
				case 2 :
					dayName = "Вторник";
					break;
				case 3 :
					dayName = "Среда";
					break;
				case 4 :
					dayName = "Четверг";
					break;
				case 5 :
					dayName = "Пятница";
					break;
				case 6 :
					dayName = "Суббота";
					break;
				default:
					dayName = 'None';
			}

			if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
				html += '<td class="today" data-date="'+ dayName + " " + chkM + " " + chkY +'">' + i + '</td>';
			} else {
				html += '<td class="normal" data-date="'+ dayName + " " + chkM + " " + chkY +'">' + i + '</td>';
			}
			// If Saturday, closes the row
			if (dow == 6) {
				html += '</tr>';
			}
			// If not Saturday, but last day of the selected month
			// it will write the next few days from the next month
			else if (i == lastDateOfMonth) {
				let k = 1;
				for (dow; dow < 6; dow++) {
					html += '<td class="not-current">' + k + '</td>';
					k++;
				}
			}

			i++;
		} while (i <= lastDateOfMonth);
		html += '</tbody>';

		html += '</table>';
		c.innerHTML = html;
	}
}

new Calendar();