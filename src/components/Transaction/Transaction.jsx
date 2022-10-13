import PropTypes from 'prop-types';
// import css from './Transaction.module.css'
import { Table, TitleTable, TextTable, TextRow } from './Transaction.styled';

export default function TransactionHistory({ transactions }) {
  return (
    <Table>
      <thead>
        <tr>
          <TitleTable>Type</TitleTable>
          <TitleTable>Amount</TitleTable>
          <TitleTable>Currency</TitleTable>
        </tr>
      </thead>

      <TextRow>
        {transactions.map(item => (
          <tr key={item.id}>
            <TextTable>{item.type}</TextTable>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </TextRow>
    </Table>
  );
}
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
