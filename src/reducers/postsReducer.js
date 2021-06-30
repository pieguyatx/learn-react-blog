// Reducer produces 'state' data, based *only* on previous 'state' data inputs and an 'action'
// ...so don't do any API requests, pulling values from DOM, etc...
// This keeps the reducer "pure" and only basing things off the state and action
export default (state = [], action) => {

    // A reducer always needs a return statement of something not "undefined"
    // ***Should not "mutate" the input state data, or change the old data; 
    // ...see https://www.udemy.com/course/react-redux/learn/lecture/12586896#questions
    // ...should create new data that replaces state; otherwise Redux won't detect changes and update the app
    // ...It's very easy to mutate arrays and objects
    // ...in JS, strings and numbers (primitives) are immutable, though.
    // What to AVOID:
    //    Arrays:  pop (delete), 
    //             push (add on), 
    //             directly replacing at an index
    //    Objects: state.key = blah, 
    //             state.newProp = value, 
    //             delete state.oldProp 
    // What to use instead:
    //    Arrays:  state.filter(elem => elem !== [some val]), 
    //             [...state, elem], 
    //             state.map(el => el===[someval]?yes:no)
    //    Objects:  {...state, key:'blah'}, 
    //              {...state, newProp:value}, 
    //              {...state, oldProp:undefined} / _.omit(state,'oldProp') <-- better to use Lo dash library

    if (action.type === 'FETCH_POSTS') {
        return action.payload;
    }

    return state;
    // // or use switch statement:
    // switch ( action.type ) {
    //     case 'FETCH_POSTS':
    //         // what to do
    //         return action.payload;
    //     default:
    //         return state;
    // }

}