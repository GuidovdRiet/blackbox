import { string } from "prop-types";

// Buttons
import DefaultButton from './DefaultButton';

const buttons = {
  default: DefaultButton
};

const Card = ({ __type, ...props }) => {
  if (typeof buttons[__type] === "undefined") {
    return null;
  }

  const Comp = buttons[__type];

  return Comp && <Comp {...props} />;
};

export default Card;

Card.propTypes = {
  __type: string.isRequired
};
