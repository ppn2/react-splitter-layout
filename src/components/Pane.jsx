import React from 'react';
import PropTypes from 'prop-types';

function Pane(props) {
  const size = props.size || 0;
  const unit = props.percentage ? '%' : 'px';
  let classes = 'layout-pane';
  const style = {};
  if (!props.primary) {
    classes = classes + (props.secondaryClassName ? " " + props.secondaryClassName : "");
    if (props.vertical) {
      style.height = `${size}${unit}`;
    } else {
      style.width = `${size}${unit}`;
    }
  } else {
    classes += ' layout-pane-primary';
    classes = classes + (props.primaryClassName ? " " + props.primaryClassName : "");
  }
  return (
    <div className={classes} style={style}>{props.children}</div>
  );
}

Pane.propTypes = {
  vertical: PropTypes.bool,
  primary: PropTypes.bool,
  size: PropTypes.number,
  percentage: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Pane.defaultProps = {
  vertical: false,
  primary: false,
  size: 0,
  percentage: false,
  children: []
};

export default Pane;
