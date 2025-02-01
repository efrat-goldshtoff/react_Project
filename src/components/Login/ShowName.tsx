import { Avatar, Stack } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import UpdateDetails from "./UpdateDetails";
import { UserContext } from "./UserContext";

export const btnUpdateContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([
  {} as boolean,
  () => { },
]);

const ShowName = () => {
  const context = useContext(UserContext);
  const [updateBtn, setUpdateBtn] = useState(false);

  return (
    <btnUpdateContext.Provider value={[updateBtn, setUpdateBtn]}>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: deepPurple[400] }} style={{
          position: "absolute",
          top: "10px",
          left: "10px",
        }}>{context?.user.firstName.charAt(0).toLocaleUpperCase()}
        </Avatar>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
        }}>
          <h1> hello,  {context?.user.firstName}   </h1>
          <h5>my home</h5>

        </div>
        <button onClick={() => { setUpdateBtn(true) }} style={{
          position: "absolute",
          top: "10px",
          left: "40px",
        }}>update</button>
        {updateBtn && <UpdateDetails setUpdate={setUpdateBtn} />}
      </Stack>
    </btnUpdateContext.Provider>
  );
}

export default ShowName;