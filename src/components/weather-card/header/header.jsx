import dayjs from 'dayjs';
require('dayjs/locale/ru')
dayjs.locale('ru');

export default function Header({city, icon, date, temp, description, shortDescription}) {
  return (
    <>
      <h2 className="card__title">{city}</h2>
      <time className="card__date" dateTime={dayjs(date).toISOString()}>{dayjs(date).format('DD MMM YYYY')}</time>
      <div className="card__icon">
        <img src={`img/${icon}.png`} alt={shortDescription} />
      </div>
      <div className="card__degree">{temp}</div>
      <div className="card__weather">{description}</div>
    </>
  )
}
