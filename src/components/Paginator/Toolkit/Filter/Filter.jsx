import React from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const MenuPropsStyle = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

export default class Filter extends React.PureComponent {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    selectedOptions: PropTypes.array,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    width: PropTypes.number
  };

  static defaultProps = {
    label: '',
    selectedOptions: [],
    width: 100
  }

  handleChange = (event) => {
    this.props.onSelect({
      name: event.target.name,
      value: event.target.value
    });
  };


  render() {
    const { name, options, label, selectedOptions, width } = this.props;
    return (
      <FormControl style={{ width }}>
        <InputLabel htmlFor="select-multiple-checkbox" style={{ top: -10, left: 4 }}>{label}</InputLabel>
        <Select
          name={name}
          multiple
          value={selectedOptions}
          onChange={this.handleChange}
          placeholder="Filters"
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuPropsStyle}
          style={{ margin: 5 }}
        >
          {options.map(option => (
            <MenuItem key={`${label}-${option.key}`} value={option.key}>
              <Checkbox
                style={{ color: '#04b9e6' }}
                checked={selectedOptions.indexOf(option.key) > -1}
              />
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}
