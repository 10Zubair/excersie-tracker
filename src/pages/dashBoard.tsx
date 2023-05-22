import React, { useEffect, useState } from "react";
import { createUserAsync, getData } from "../api";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Snackbar,
  TextField,
} from "@mui/material";
import DataTable from "./TableWrapper";

export default function DashBoard() {
  const getUsers = async () => {
    const temp = await getData();
    setRows(temp);
    console.log(temp);
  };
  const [rows, setRows] = useState();

  useEffect(() => {
    getUsers();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const createUser = async () => {
    const payload = {
      userName,
      userEmail,
    };
    await createUserAsync(payload);
    setShowModal(false);
    setOpen(true);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      DashBoard
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis iste
        quod obcaecati libero harum maiores fuga officia, beatae dolorum at
        expedita culpa error vitae deserunt delectus, consequatur animi dolor
        doloribus!
      </p>
      <Button onClick={getUsers}>Get</Button>
      <Button variant="contained" onClick={() => setShowModal(true)}>
        Create User
      </Button>
      {rows && <DataTable rows={rows} />}
      <Dialog
        maxWidth="xs"
        fullWidth
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <DialogContent>
          <TextField
            variant="outlined"
            fullWidth
            value={userName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserName(e.target.value)
            }
            placeholder="Enter your name"
          />
          <TextField
            variant="outlined"
            fullWidth
            sx={{ mt: 4 }}
            value={userEmail}
            placeholder="Please enter your email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserEmail(e.target.value)
            }
          />
          <DialogActions>
            <Button variant="contained" onClick={createUser}>
              Create User
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          User added successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}
