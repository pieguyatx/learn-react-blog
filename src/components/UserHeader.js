import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() { // spell this right!! No errors if it's not???
        this.props.fetchUser(this.props.userId); // dispatches action to reducers, adds result to state...
    }

    render() {
        const user = this.props.users.find( (user) => user.id === this.props.userId);

        if(!user){
            return null;
        }

        return (
            <div className="header">Author: {user.name}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {users: state.users};    // defines pieces of state (from reducers) to add to props
};

export default connect( // connects State and Actions to props here
    mapStateToProps, { fetchUser }
)(UserHeader);