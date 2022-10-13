import PropTypes from 'prop-types';
// import css from './StatisticsList.module.css';
import { Lable, Percentage } from './Statistics.styled';
export default function StatItem({ stats }) {
  return (
    <div>
      <Lable>{stats.label}</Lable>
      <Percentage>{stats.percentage}%</Percentage>
    </div>
  );
}

StatItem.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
