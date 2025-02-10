import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser, editUser } from "../features/userSlice.js";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const UsersTable = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditedName(user.name);
    setEditedEmail(user.email);
    setOpen(true);
  };

  const handleEditSave = () => {
    dispatch(
      editUser({ ...selectedUser, name: editedName, email: editedEmail })
    );
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleEditClick(params.row)}
          >
            <FaEdit />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDelete(params.row.id)}
            style={{ marginLeft: 8 }}
          >
            <MdDelete />
          </Button>
        </>
      ),
    },
  ];

  return (
    <div
      style={{ height: 735, width: "100%", marginTop: 10, overflow: "hidden" }}
    >
      <DataGrid
        rows={users}
        columns={columns}
        loading={loading}
        pageSizeOptions={[12, 24, 60]}
        pagination
        initialState={{
          pagination: {
            paginationModel: { pageSize: 24 },
          },
        }}
        sx={{
          "& .MuiDataGrid-virtualScroller": {
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          },
        }}
      />

      {/* Edit Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            margin="dense"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UsersTable;
