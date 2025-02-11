const events = {
  'licenza pasquale': new Date(2025, 3, 17),
  'tirocinio': new Date(2025, 7, 2),
  'licenza estiva': new Date(2025, 7, 18),
};

const differenceInDays = (date) => {
  const diff = date - new Date();

  return Math.ceil(
    diff
    / 1000 /* milliseconds */
    / 60 /* seconds */
    / 60 /* minutes */
    / 24 /* hours */
  );
}

const buildElement = (name, date) => {
  const eventElement = document.createElement('div');
  eventElement.classList.add('event');

  const nameElement = document.createElement('p');
  nameElement.innerText = name;

  const daysUntilElement = document.createElement('p');
  daysUntilElement.classList.add('days-until');
  daysUntilElement.innerText = `${differenceInDays(date)} giorni`;

  const dateElement = document.createElement('small');
  dateElement.innerText = date.toLocaleDateString('it-IT');

  eventElement.append(nameElement, daysUntilElement, dateElement);
  document.querySelector('main').append(eventElement);
}

Object.entries(events).forEach(([name, date]) => buildElement(name, date));
