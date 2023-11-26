import React, { useState } from "react";
import { Box, Button, TextField, Avatar } from "@mui/material";
import img from "../../assets/images/leaves.jpg";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

export const LoginComponent: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <Avatar
        alt="Logo"
        src={img}
        sx={{ width: 80, height: 80, marginBottom: "1rem" }}
      />
      {/* Alternatively, you can use the img HTML element */}
      {/* <img src="/path/to/your/image.jpg" alt="Logo" style={{ width: "80px", height: "80px", marginBottom: "1rem" }} /> */}

      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};
