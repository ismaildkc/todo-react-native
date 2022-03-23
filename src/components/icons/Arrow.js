import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgArrow = props => (
  <Svg
    height="24"
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    viewBox="0 0 512 512"
    width="24"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path d="M160 115.4 180.7 96 352 256 180.7 416 160 396.7 310.5 256z" />
  </Svg>
);

export default SvgArrow;
