import { Box, IconButton, Modal, Toolbar, Grid, Button } from "@mui/material"
import { Drawer } from "@mui/material"

import SearchIcon from '@mui/icons-material/Search';
import BoltIcon from '@mui/icons-material/Bolt';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';

import { useState } from "react";
import Chat from "@/components/chat";
import Task from "@/components/task";

function ChildModal() {
  const [openChat, setOpenChat] = useState(false);
  const handleOpenChat = () => {
    setOpenChat(true);
  };
  const handleCloseChat = () => {
    setOpenChat(false);
  };

  const [openTask, setOpenTask] = useState(false);
  const handleOpenTask = () => {
    setOpenTask(true);
  };
  const handleCloseTask = () => {
    setOpenTask(false);
  };

  return (
    <>
      <Box sx={{
        display: "flex",
        justifyContent: "flex-end",
        ml: "auto",
        mr: "34px",
        mt: "800px"
      }}>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="logo"
          sx={{ mr: 4, backgroundColor: "white" }}
          onClick={handleOpenTask}
        >
          <ListAltIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="logo"
          sx={{ mr: 10, backgroundColor: "white" }}
          onClick={handleOpenChat}
        >
          <QuestionAnswerOutlinedIcon />
        </IconButton>
      </Box>
      <Modal
        open={openChat}
        onClose={handleCloseChat}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Chat />
      </Modal>
      <Modal
        open={openTask}
        onClose={handleCloseTask}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Task />
      </Modal>
    </>
  )
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer
          variant="permanent"
          sx={{
            width: 240, flexShrink: 0,
            [`& .MuiDrawer-paper`]:
            {
              width: 240,
              boxSizing: 'border-box',
              backgroundColor: "black",
              borderWidth: "1px",
              borderColor: "gray"
            }
          }} />
        <Grid>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="search"
              sx={{ mr: 2 }}
            >
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </Grid>
        <Grid sx={{
          display: "flex",
          justifyContent: "flex-end",
          ml: "auto",
          mr: "34px",
          mt: "800px"
        }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ mr: 2, backgroundColor: "#2F80ED" }}
            onClick={handleOpen}
          >
            <BoltIcon />
          </IconButton>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <ChildModal />
          </Modal>
        </Grid>
      </Box>
    </>
  )
}
