import { Modal, Box, TextField, Button } from "@mui/material";
import { useState, useContext, useRef } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UpdateDetails = ({ setUpdate }: { setUpdate: Function }) => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const context = useContext(UserContext);
  const [open, setOpen] = useState(true);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(context?.user);
    if (!context?.user.firstName) {
      alert('User Not Logged In');
      return;
    }
    try {
      const result = await axios.put("http://localhost:3000/api/user/",
        {
          firstName: firstNameRef.current?.value,
          lastName: lastNameRef.current?.value,
          address: addressRef.current?.value,
          email: emailRef.current?.value,
          phone: phoneRef.current?.value
        },
        { headers: { 'user-id': context?.user.id } }
      )
      context?.userDispatch({
        type: 'UPDATE',
        data: {
          firstName: firstNameRef.current?.value || '',
          lastName: lastNameRef.current?.value || '',
          address: addressRef.current?.value || '',
          email: emailRef.current?.value || '',
          phone: phoneRef.current?.value || ''
        }
      })
      setOpen(false);
      setUpdate();
    }
    catch (error: any) {
      if (error.status === 404)
        alert('User Not Exist');
    }
  }
  return (<>
    <Modal
      open={open}
      onClose={() => setUpdate()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form onSubmit={handleUpdate}>
        <Box sx={style}>
          <TextField label="first name" inputRef={firstNameRef} sx={{ mt: 2 }} />
          <TextField label="last name" inputRef={lastNameRef} sx={{ mt: 2 }} />
          <TextField label="address" inputRef={addressRef} sx={{ mt: 2 }} />
          <TextField label="phone" inputRef={phoneRef} sx={{ mt: 2 }} />
          <TextField label="email" inputRef={emailRef} sx={{ mt: 2 }} />
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: 'black',
              color: "white",
              borderRadius: '10px',
              border: '2px solid white'
            }}>update</Button>
        </Box>
      </form>
    </Modal>
  </>)
}
export default UpdateDetails