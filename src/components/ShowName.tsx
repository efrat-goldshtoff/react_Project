import { Avatar, Stack } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { userContext } from "./Login";
import UpdateDetails from "./UpdateDetails";


export const btnUpdateContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([
    {} as boolean,
    () => { },
  ]);
  
  const ShowName = () => {
  
    const [user, Dispatch] = useContext(userContext)
  
    const [updateBtn, setUpdateBtn] = useState(false)
  
  
    return (
      <btnUpdateContext.Provider value={[updateBtn, setUpdateBtn]}>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepPurple[400] }} style={{
            position: "absolute",
            top: "10px",
            left: "10px",
          }}>{user.firstName.charAt(0) + user.lastName.charAt(0)} </Avatar>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}>
             <h3> hello, {user.firstName}   </h3>
            <h2>my home</h2>
           
            </div>
          <button onClick={() => { setUpdateBtn(true) }} style={{
            position: "absolute",
            top: "10px",
            left: "40px",
          }}>update</button>
          {updateBtn && <UpdateDetails />}
        </Stack>
      </btnUpdateContext.Provider>
    );
  }
  
  export default ShowName;