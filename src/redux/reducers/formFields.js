let initState = {
 	fields: []
};

export default function(state = initState, action){

	switch (action.type) {
		case 'CREATE_FORM_FIELDS' :
       return {...state, fields: action.payload}
       
		default :
			return {...state}
	}
}