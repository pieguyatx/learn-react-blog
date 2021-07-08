import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() { // spell this right!! No errors if it's not???
        this.props.fetchUser(this.props.userId); // dispatches action to reducers, adds result to state...
    }

    render() {
        const { user } = this.props; // destructure "user" from props defined below

        if(!user){
            return null;
        }

        return (
            <div className="header">Author: {user.name}</div>
        );
    }
}

// You can extract logic into mapStateToProps to increase usability; put it in a separate file
const mapStateToProps = (state, ownProps) => { // 2nd arg lets it access props from the component above
    // defines pieces of state (from reducers) to add to props:
    return { user: state.users.find(user => user.id === ownProps.userId) };    
};

export default connect( // connects State and Actions to props here
    mapStateToProps, { fetchUser }
)(UserHeader);