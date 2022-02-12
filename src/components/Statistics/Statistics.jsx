import PropTypes from 'prop-types';
import styled from '../Statistics/Statistics.module.css';

const Statistics = ({ title, stats }) => {
    return (
        <section>
            <div className={styled.statistics}>
                {title ? <h2 className={styled.title}>{title}</h2> : ''}

                <ul className={styled.statlist}>
                    {stats.map(({ id, label, percentage }) => {
                        return (
                            <li className={styled.item} key={id}>
                                <span className={styled.label}>{label}</span>
                                <span className={styled.percentage}>{percentage} %</span>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </section >
    )
}
Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};
export default Statistics;