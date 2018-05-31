import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Label extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     text: props.defaultText
        // }
    }

    render() {
        return (
            <h3>{this.props.defaultText}</h3>
        );
    }

}

Label.propTypes = {

};

export default Label;