// export type User = {
//     firstName: string;
//     lastName: string;
//     address: string;
//     phone: string;
//     email: string;
//     password: string;
// }
// type Action = {
//     type: 'CREATE' | 'DELETE' | 'UPDATE' | 'GET',
//     data: Partial<User>
// }
// export const UserReducer = (state: User, action: Action): User => {
//     switch (action.type) {
//         case 'CREATE':
//             {
//                 const { firstName, password } = action.data as Partial<User>
//                 return {
//                     firstName: firstName || '',
//                     lastName: '',
//                     password: password || '',
//                     address: '',
//                     email: '',
//                     phone: ''
//                 }
//             }
//         case 'UPDATE':
//             {
//                 return {
//                     firstName: state.firstName,
//                     lastName: action.data.lastName || state.lastName,
//                     password: state.password,
//                     address: action.data.address || state.address,
//                     email: action.data.email || state.email,
//                     phone: action.data.phone || state.phone
//                 }
//             }
//         default:
//             return state;
//     }
// }
// export default UserReducer;



export type User = {
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    email: string;
    password: string;
}

export type Action = {
    type: 'CREATE' | 'DELETE' | 'UPDATE' | 'GET',
    data: Partial<User>
}

export const UserReducer = (state: User, action: Action): User => {
    switch (action.type) {
        case 'CREATE':
            return {
                ...state,
                firstName: action.data.firstName || '',
                password: action.data.password || '',
            };
        case 'UPDATE':
            return {
                ...state,
                lastName: action.data.lastName || state.lastName,
                address: action.data.address || state.address,
                email: action.data.email || state.email,
                phone: action.data.phone || state.phone,
            };
        default:
            return state;
    }
}
