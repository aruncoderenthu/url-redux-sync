import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Checkbox from '../components/Checkbox';
import * as CheckboxActions from '../actions/actions';

class CheckboxContainer extends Component {

    constructor(props) {
        super(props);

        this.dispatchToggleOn = this.dispatchToggleOn.bind(this);
        this.dispatchToggleOff = this.dispatchToggleOff.bind(this);
    };

    dispatchToggleOn(e) {
        console.log('toggleOn: '+e);
        let item = e.id;

        this.props.actions.toggleOn(item)
    }

    dispatchToggleOff(e) {
        console.log('toggleOff: '+e);
        let item = e.id;

        this.props.actions.toggleOff(item)
    }

    render() {
        console.log(this.context.store);

        return (
            <div>
                <Checkbox
                    initToggleOn={this.props.one === 'ON' ? true : false}
                    name={"one"}
                    dispatchToggleOn={this.dispatchToggleOn}
                    dispatchToggleOff={this.dispatchToggleOff}
                />
                <Checkbox
                    initToggleOn={this.props.two === 'ON'? true : false}
                    name={"two"}
                    dispatchToggleOn={this.dispatchToggleOn}
                    dispatchToggleOff={this.dispatchToggleOff}
                />
                <Checkbox
                    initToggleOn={this.props.three === 'ON' ? true : false}
                    name={"three"}
                    dispatchToggleOn={this.dispatchToggleOn}
                    dispatchToggleOff={this.dispatchToggleOff}
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