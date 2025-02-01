export type UserType = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: string,
    phone: string
}
export type Action = {
    type: 'CREATE' | 'UPDATE' | 'GET' | 'REMOVE',
    data: Partial<UserType>
}
export const userReducer =
    (state: UserType, action: Action)
        : UserType => {
        switch (action.type) {
            case 'CREATE':
                return { ...state, ...action.data };
            case 'UPDATE':
                return { ...state, ...action.data };
            case 'REMOVE':
                return {
                    id: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    address: '',
                    password: '',
                    phone: ''
                };
            default:
                return state;
        }
    }