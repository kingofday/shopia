import React from 'react';
import Modal from '../modal';
import { connect } from 'react-redux'
import CustomHeader from '../header';
import Home from '../../routes/home';
import AboutUs from '../../routes/aboutus';
import Product from '../../routes/product';
import ContactUs from '../../routes/contactus';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

class Layout extends React.Component {
    hideModal() {
        this.props.hideModal();
    }

    render() {
        return (
            <Router className="layout">
                <CustomHeader />
                <Switch>
                    <Route exact path="/"  component={Home}/>
                    <Route path="/aboutus" component={AboutUs}/>
                    <Route path="/contactus" component={ContactUs}/>
                    <Route path="/product/:id" component={Product}/>
                </Switch>
                <Modal toggle={this.hideModal.bind(this)}></Modal>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return { ...state.modalReducer };
}

export default connect(mapStateToProps, null)(Layout);
