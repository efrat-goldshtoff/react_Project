// import { Button } from "@mui/material";
// import { useContext, useRef, useState } from "react";

import { Button } from "@mui/material";
import { createContext, useContext, useRef } from "react";
import { Action, User } from "./User";

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     background: 'linear-gradient(50deg,rgb(224, 64, 163) 50%,  rgb(229, 131, 191) 80%)',
//     border: '3px solid rgb(224, 64, 163) ',
//     boxShadow: 24,
//     borderRadius: '16px',
//     p: 4,
// };
// const UpdateDetails = () => {
//     const [click, setClick] = useState(false);
//     const LastnameRef1 = useRef<HTMLInputElement>(null);
//     const PhonenameRef1 = useRef<HTMLInputElement>(null);
//     const EmailnameRef1 = useRef<HTMLInputElement>(null);
//     const AddressRef1 = useRef<HTMLInputElement>(null);
//     const context = useContext(userContext)

//     const handleSubmit = () => {
//         setClick(false)
//         if (context) {
//             context.userDispatch({
//                 type: 'UPDATE', data: {

//                     lastName: LastnameRef1.current?.value || '',
//                     address: AddressRef1.current?.value || '',
//                     email: EmailnameRef1.current?.value || '',
//                     phone: PhonenameRef1.current?.value || ''
//                 }
//             }
//             )
//         }

//         return (<>
//             <Button onClick={() => { setClick(true) }} variant="outlined" sx={{ backgroundColor: 'white', color: 'rgb(224, 64, 163) ', border: '1px solid gray' }}>Update</Button>
//             <form>
//                 <input ref={LastnameRef1} placeholder="last name" />
//                 <br></br>
//                 <input ref={PhonenameRef1} placeholder="phone"></input>
//                 <br></br>
//                 <input ref={EmailnameRef1} placeholder="email"></input>
//                 <br></br>
//                 <input ref={AddressRef1} placeholder="address"></input>
//                 <br></br>
//                 <Button onClick={handleSubmit} variant="contained" sx={{
//                     backgroundColor: 'white',
//                     color: ' rgb(224, 64, 163) ',
//                     marginTop: '15px',
//                     '&:hover': {
//                         backgroundColor: 'rgb(159, 15, 104)',
//                     },
//                 }} >Send</Button>
//             </form>
//         </>)
//     }
// }
// export default UpdateDetails;


export const UserContext = createContext<{ user: User; userDispatch: React.Dispatch<Action> } | null>(null);

const UpdateDetails = () => {
    const LastnameRef1 = useRef<HTMLInputElement>(null);
    const PhonenameRef1 = useRef<HTMLInputElement>(null);
    const EmailnameRef1 = useRef<HTMLInputElement>(null);
    const AddressRef1 = useRef<HTMLInputElement>(null);
    const context = useContext(UserContext);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (context) {
            context.userDispatch({
                type: 'UPDATE',
                data: {
                    lastName: LastnameRef1.current?.value || '',
                    address: AddressRef1.current?.value || '',
                    email: EmailnameRef1.current?.value || '',
                    phone: PhonenameRef1.current?.value || '',
                }
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={LastnameRef1} placeholder="last name" />
            <br />
            <input ref={PhonenameRef1} placeholder="phone" />
            <br />
            <input ref={EmailnameRef1} placeholder="email" />
            <br />
            <input ref={AddressRef1} placeholder="address" />
            <br />
            <Button type="submit" variant="contained">Send</Button>
        </form>
    );
}
export default UpdateDetails;
