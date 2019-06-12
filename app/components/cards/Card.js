import { string } from "prop-types";

// Cards
import LayoutCard from "./LayoutCard";

const cards = {
  layout: LayoutCard
};

const Card = ({ __type, ...props }) => {
  if (typeof cards[__type] === "undefined") {
    return null;
  }

  const Comp = cards[__type];

  return Comp && <Comp {...props} />;
};

export default Card;

Card.propTypes = {
  __type: string.isRequired
};
