import React from 'react'
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

const randomColor = () => '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()

const Stats = ({label, percentage} ) => {
    return (<li className={styles.item} style={{backgroundColor: randomColor()}}>
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}>{percentage}</span>
            </li>)
};

function Statistics({data}) {
    const statsMarkup = data.map((prop) => <Stats {...prop} key={prop.id} />);
    return <>
      <section className={styles.statistics}>
         <h2 className={styles.title}>Upload stats</h2>
            <ul className={styles.statList}>
                {statsMarkup}
            </ul>
      </section>
    </> 
};
 


// console.log(Stats());

export default Statistics;


Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};