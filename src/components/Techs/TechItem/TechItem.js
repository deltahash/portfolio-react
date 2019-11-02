import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Image from '../../UI/Image/Image';

const TechItem = ({ src, title }) => {
  return (
    <Fragment>
      <Image src={src} />
      <h3>{title}</h3>
    </Fragment>
  );
};

TechItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default TechItem;
