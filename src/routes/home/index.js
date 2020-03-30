import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import CustomButton from './../../libs/components/customButton';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: false };
    }
    _onClick() {
        this.setState({ loading: true });
    }
    render() {
        return (
            <div className="home" style={{ textAlign: 'center' }}>
                <a href="/product/1">test1</a>
                <br />
                <Link to="/product/2">test2</Link>
                <br />
                <CustomButton   loading={this.state.loading}
                                text="test"
                                icon="zmdi zmdi-lock"
                 onClick={this._onClick.bind(this)} />
                <p className="text-center" style={{ padding: '50px' }}>this is home</p>
            </div>

        );
    };

}

const mapStateToProps = state => {
    return { ...state.homeReducer };
}

// const mapDispatchToProps = dispatch => ({
// });

export default connect(mapStateToProps, null)(Home);