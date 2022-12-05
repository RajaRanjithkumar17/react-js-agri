import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState ,useContext} from 'react';
import detail from "./userdetails.json";
import { useNavigate } from 'react-router-dom';
import images from "./bgimg.jpg"
import { stateContext } from '../context/context';
 

const theme = createTheme();
export default function SignInSide() {

  const {state,dispatch} =useContext(stateContext)
  const navigate = useNavigate();
  const [userName, setUserName] = useState([]);
  const [userPwds, setUserPwd] = useState([]);

  const handellogin = (nam)=>{

      if (nam.target.name === "email") {
          setUserName(nam.target.value);
        }
      
      else{
          setUserPwd(nam.target.value)
      }
  }

  const handleSubmit = (prev)=>{
      prev.preventDefault();

      var email = detail.map((item)=>{
          return item.usersName
      })

      var password = detail.map((item)=>{
          return item.password
      })

      var checkmail = email.indexOf(userName)
      var checkpwd = password.indexOf(userPwds)
      console.log(email,password,detail,checkmail,checkpwd);
      if(userName.length!==0 && userPwds.length!==0){
      if(checkmail===checkpwd){

          const tem ={
              islogin: false,
              selected:false
            }
            dispatch({ type: "islogon", payload:[...state.tasks, tem] });

          console.log("logged");
          navigate("home")

      }
      else{
          alert("enter valid credentials")
      }
  }
  else{
      alert("enter valid credentials");
  }

  }

  console.log(userName,userPwds,detail);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${images})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Box component="form"  sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={userName}
                autoFocus
                onChange={handellogin}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={userPwds}
                autoComplete="current-password"
                onChange={handellogin}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2 }}
              >
                Log in
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}