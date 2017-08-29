let initState = {
	currentPage: 'home',
	user: null
}
const Social = (state = initState, action) => {
	// console.log(state);
	switch (action.type) {
		case 'CHANGE_PAGE':
			return {
                ...state
			}
		case 'LOGIN':
			return {
				...state,
				user: action.user
			}
		case 'LOGOUT':
			return {
				...state,
				user: null
			}
		default:
			return state;
	}
}

export default Social;
