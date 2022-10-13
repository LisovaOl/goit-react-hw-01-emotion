import PropTypes from 'prop-types';
import StatItem from './StatisticsItem';
import css from './StatisticsList.module.css';

export default function StatList({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(stat => (
          <li
            key={stats.id}
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatItem stats={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
StatList.propTypes = {
  title: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};