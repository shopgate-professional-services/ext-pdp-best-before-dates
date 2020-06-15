import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { withCurrentProduct } from '@shopgate/engage/core';
import { I18n } from '@shopgate/engage/components';
import connect from './connector';
import { styles } from '../../config';

const block = css({
  padding: `${themeConfig.variables.gap.small}px ${themeConfig.variables.gap.big}px`,
  margin: '0.5rem 0',
  background: '#f2dede',
  color: '#a94442',
  fontSize: '0.875rem',
  ' p': {
    padding: 0,
    margin: 0,
  },
  ' p:not(:first-child)': {
    fontWeight: 500,
  },
  ...styles,
});

/**
 * @param {Object} props Props
 * @return {JSX}
 */
const PdpAfterAvailability = ({ bestBeforeLines }) => {
  if (!bestBeforeLines) {
    return null;
  }

  return (
    <div className={block}>
      <p>
        <I18n.Text string="pdp_best_before_dates.label" />
      </p>
      {bestBeforeLines.map(line => (
        <p key={line.label}>
          <I18n.Text string="pdp_best_before_dates.line" params={line} />
        </p>
      ))}
    </div>
  );
};

PdpAfterAvailability.propTypes = {
  bestBeforeLines: PropTypes.arrayOf(PropTypes.shape()),
};

PdpAfterAvailability.defaultProps = {
  bestBeforeLines: null,
};

export default withCurrentProduct(connect(PdpAfterAvailability));
