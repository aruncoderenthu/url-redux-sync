import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Checkbox from '../components/Checkbox';
import * as CheckboxActions from '../actions/actions';

class CheckboxContainer extends Component {

    constructor(props) {
        super(props);

        this.dispatchToggle = this.dispatchToggle.bind(this);
    };

    dispatchToggle(e) {
        console.log('toggle: '+e);
        let item = e.id;

        this.props.actions.toggle(item)
    }

    render() {

        return (
            <div>
                <Checkbox
                    initToggleOn={this.props.one}
                    name={"one"}
                    dispatchToggle={this.dispatchToggle}
                />
                <Checkbox
                    initToggleOn={this.props.two}
                    name={"two"}
                    dispatchToggle={this.dispatchToggle}
                />
                <Checkbox
                    initToggleOn={this.props.three}
                    name={"three"}
                    dispatchToggle={this.dispatchToggle}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      one: state.one,
      two: state.two,
      three: state.three
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(CheckboxActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxContainer);