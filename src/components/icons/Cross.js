import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgCross = props => (
  <Svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className=""
    {...props}>
    <Path
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm3.21 11.79a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0L12 13.41l-1.79 1.8a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42l1.8-1.79-1.8-1.79a1 1 0 0 1 1.42-1.42l1.79 1.8 1.79-1.8a1 1 0 0 1 1.42 1.42L13.41 12Z"
      fill="#464646"
    />
  </Svg>
);

export default SvgCross;
