import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <Button
      key={option}
      keyStatus={option}
      onClick={() => {
        onLeaveFeedback(option);
      }}
    >
      {option}
    </Button>
  ));
}

Button.propTypes = {
  keyStatus: PropTypes.string.isRequired,
};
