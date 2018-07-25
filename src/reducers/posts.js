function posts( state = [], action) {
    
    switch(action.type) {
        case "INCREMENT_LIKES":
             console.log("increment likes");
             const i = action.index;
             return [
                 ...state.slice(0,i),
                 {...state[i], likes:state[i].likes + 1},
                 ...state.slice(i+1)
             ]
             
        case "DECREMENT_LIKES":
            console.log("decrement likes");
            const j = action.index;
             return [
                 ...state.slice(0,j),
                 {...state[j], likes:state[j].likes - 1},
                 ...state.slice(j+1)
             ]  
            
        default: return state;
    }

    return state;
}

export default posts;