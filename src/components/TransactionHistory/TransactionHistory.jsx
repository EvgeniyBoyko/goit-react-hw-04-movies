import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const Transaction = ({type,amount,currency}) => {
    return (<tr className={styles.trItem}>
        <td className={styles.tdItem}>{type}</td>
        <td className={styles.tdItem}>{amount}</td>
        <td className={styles.tdItem}>{currency}</td>
    </tr>)
};

const TransactionHistory = ({props}) => {
    const transactionMarkup = props.map((prop) => <Transaction {...prop} key={prop.id} />);
    return (<>
        <table className={styles.transactionHistory}>
            <thead className={styles.theadItem}>
                <tr className={styles.trItem}>
                <th className={styles.thItem}>Type</th>
                <th className={styles.thItem}>Amount</th>
                <th className={styles.thItem}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactionMarkup}
            </tbody>
        </table>
    </>);
}
 
export default TransactionHistory;

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};