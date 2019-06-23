import { string } from "prop-types";

// Icons
import FireIcon from "./FireIcon";
import FireInfoIcon from "./FireInfoIcon";
import LocationIcon from "./LocationIcon";
import SettingsIcon from "./SettingsIcon";
import UserIcon from "./UserIcon";
import NextArrowIcon from "./NextArrowIcon";

const icons = {
  fire: FireIcon,
  fireInfo: FireInfoIcon,
  location: LocationIcon,
  settings: SettingsIcon,
  user: UserIcon,
  nextArrow: NextArrowIcon
};

const Card = ({ __type, ...props }) => {
  if (typeof icons[__type] === "undefined") {
    return null;
  }

  const Comp = icons[__type];

  return Comp && <Comp {...props} />;
};

export default Card;

Card.propTypes = {
  __type: string.isRequired
};
