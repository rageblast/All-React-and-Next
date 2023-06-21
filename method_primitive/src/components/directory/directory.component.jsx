import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../store/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';

import { Directorymenu } from './directory.styles';

class Directory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sections } = this.props;
    return (
      <Directorymenu>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </Directorymenu>
    );
  }
}

const mapstatetoprops = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapstatetoprops)(Directory);
