let initState = {
	currentPage: 'home'
}
const Social = (state = initState, action) => {
	// console.log(state);
	switch (action.type) {
		case 'CHANGE_PAGE':
			return {
                ...state
            }
		default:
			return state;
	}
}

export default Social;
