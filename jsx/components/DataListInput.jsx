define(function (require, exports, module) {
  var React = require('react');
  var Input = require('react-bootstrap').Input;

  module.exports = React.createClass({displayName: "DataListInput",
    propTypes: {
      dataListID: React.PropTypes.string.isRequired,
      optionsList: React.PropTypes.array
    },
    getDefaultProps: function() {
      return {
        dataListID: 'dataListInput',
        optionsList: []
      };
    },
    getTextValue: function() {
      return this.refs.textInput.getValue();
    },
    render: function() {
      var options = this.props.optionsList.map(function(option, index) {
        return ( <option key={'key-'+index} value={option} /> );
      });

      return (
      <div>
        <Input
          type="text"
          list={this.props.dataListID}
          placeholder={this.props.placeholder}
          ref="textInput"
          defaultValue={this.props.inputText}
          onChange={this.props.onChange}
        />
        <datalist id={this.props.dataListID}>
          {options}
        </datalist>
      </div>
      );
    }
  });
});
