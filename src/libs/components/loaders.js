import React, { Component } from 'react';

export class CircularLoader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="spinner"><svg viewBox="25 25 50 50"><circle cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"></circle></svg></div>);
    }
}

export class ThreeDotLoader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<span className="three-dot-loader"><span className="dot"></span><span className="dot"></span><span className="dot"></span></span>);
    }
}