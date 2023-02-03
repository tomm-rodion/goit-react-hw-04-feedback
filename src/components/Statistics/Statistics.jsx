import PropTypes from 'prop-types';
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  const feedbackStatus = positivePercentage;
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>
        Positive percentage: {!feedbackStatus ? '😶' : `${feedbackStatus} %`}
      </p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
