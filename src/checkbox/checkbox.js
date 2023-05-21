import React from 'react';
import { RadioButton as RB } from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isInputChecked: props.isInputChecked || '',
      value: ''
    };
  }

  render() {
    const checkStyle = {
      marginBottom: '2em',
      color: '#999'
    };

    const checkLabelStyle = {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    };

    return (
      <RB
        value={this.state.value || ''}
        label={this.props.label || ''}
        style={checkStyle}
        labelStyle={checkLabelStyle}
        disabled={this.props.disabled || false}
        inputStyle={this.props.inputStyle}
      />
    );
  }
}

export default Checkbox;
