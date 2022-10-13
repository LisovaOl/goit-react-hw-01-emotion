import PropTypes from 'prop-types';
import StatItem from './StatisticsItem';
// import css from './StatisticsList.module.css';
import { Statistic, Title, StatsList, StatsItem } from './Statistics.styled';

export default function StatList({ title, stats }) {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(stat => (
          <StatsItem
            key={stats.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatItem stats={stat} />
          </StatsItem>
        ))}
      </StatsList>
    </Statistic>
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
