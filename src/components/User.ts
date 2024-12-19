export type UserType = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: string,
    phone: string
}
export type Action = {
    type: 'ADD' | 'REMOVE' | 'UPDATE' | 'GET',
    data: UserType
}
export const userReducer = (state: UserType, action: Action) => {
    switch (action.type) {
        case 'ADD': {
            localStorage.setItem('user', JSON.stringify(action.data));
            return { ...action.data };
        }
        case 'REMOVE': {
            localStorage.removeItem('user');
            return null
        }
        case 'UPDATE': {
            localStorage.setItem('user',JSON.stringify(action.data));
            return action.data
        }
        case 'GET':{
            const URfomLocalS = localStorage.getItem('user');
            return URfomLocalS? JSON.parse(URfomLocalS):state;
        }
        default:
            return state;
    }
}