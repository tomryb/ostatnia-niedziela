import React from 'react';

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconName } from 'assets/icons/types';
import { IconPrefix } from '@fortawesome/pro-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IconInterface extends Partial<FontAwesomeIconProps> {
  className?: string;

  width?: string | number;
  height?: string | number;

  name?: IconName;
  iconPrefix: IconPrefix;
}

const defaultProps: IconInterface = {
  className: '',

  iconPrefix: 'fas',
};

const Icon: React.FC<IconInterface> = (props) => {

  if (!props.name) {
    return null;
  }

  const { name, iconPrefix, ...iconProps } = props;

  return (
    <FontAwesomeIcon
      {...iconProps}
      icon={[iconPrefix, name] as IconProp}
    />
  );
}

Icon.defaultProps = defaultProps;

export default Icon;
