import AddHomeIcon from "@mui/icons-material/AddHome";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import * as React from "react";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc"
import { FaRegPenToSquare } from "react-icons/fa6";




const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {/* list of section on dashboard */}
      <List>
        <div>
          <div>
            <Link to="/dashboard">
              <ListItem disablePadding>
                <ListItemButton>
                  <div>
                    <ListItemIcon>
                      <AddHomeIcon />
                    </ListItemIcon>
                  </div>
                  <h1>Dashboard Home</h1>
                </ListItemButton>
              </ListItem>
            </Link>
          </div>
          <div>
            <Link to="/dashboard/profile">
              <ListItem disablePadding>
                <ListItemButton>
                  <div>
                    <ListItemIcon>
                      <PersonPinIcon />
                    </ListItemIcon>
                  </div>
                  <h1>Profile</h1>
                </ListItemButton>
              </ListItem>
            </Link>
          </div>
          <div>
            <Link to=" /dashboard/my-donation-requests">
              <ListItem disablePadding>
                <ListItemButton>
                  <div>
                    <ListItemIcon>
                      < FaRegPenToSquare className="text-xl"/>
                    </ListItemIcon>
                  </div>
                  <h1>My Requests</h1>
                </ListItemButton>
              </ListItem>
            </Link>
          </div>
          <div>
            <Link to="/dashboard/create-donation-request">
              <ListItem disablePadding>
                <ListItemButton>
                  <div>
                    <ListItemIcon>
                      <VscGitPullRequestGoToChanges className="text-xl" />
                    </ListItemIcon>
                  </div>
                  <h1>Create Request</h1>
                </ListItemButton>
              </ListItem>
            </Link>
          </div>
        </div>
      </List>
      <Divider />

      <Divider />

      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <List className="text-center">
        <Link to="/">
          {" "}
          <button className="btn text-center ">Go Back to home</button>
        </Link>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="bg-red-500">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Blood Donation
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

export default Dashboard;