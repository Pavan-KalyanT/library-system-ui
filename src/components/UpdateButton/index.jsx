import React, { useState } from "react";
import { Button, Drawer, Box } from "@mui/material";
import { Edit } from "@mui/icons-material";
import UpdateForm from "../UpdateForm";

const UpdateButton = ({ item, handleToggleDrawer }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleOpenDrawer = () => {
    setSelectedBook(item);
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <Button className="update-button" onClick={handleOpenDrawer}>
        <Edit />
      </Button>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleCloseDrawer}
        PaperProps={{
          style: {
            height: "80%",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Box p={2} style={{ border: "black" }}>
          <UpdateForm
            selectedBook={selectedBook}
            handleCloseDrawer={handleCloseDrawer}
          />
        </Box>
      </Drawer>
    </div>
  );
};

export default UpdateButton;