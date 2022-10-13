import PropTypes from 'prop-types';
import css from './StatisticsList.module.css';

export default function StatItem({ stats }) {
  return (
    <div>
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.percentage}%</span>
    </div>
  );
}

StatItem.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
