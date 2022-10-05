// import logo from './logo.svg';
import './App.css';
import {createContext, useState} from "react";
import {AddColor} from "./AddColor";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { MovieAdditionForm } from './MovieAdditionForm';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MovieDetails } from './MovieDetails';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { TicTacToe } from './TicTacToe';
import { Movies } from './Movies';
import { EditMovie } from './EditMovie';
import { BasicForm } from './BasicForm';
import { Login } from './Login';
import { IconButton } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

// const mveinf =  [
//   {
//     id:100,
//     imgg : "https://wallpaperaccess.com/full/1266291.jpg",
//     namee : "Titanic",
//     ratingg : 7.9,
//     contentt : "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
//     trailerr : "https://www.youtube.com/embed/kVrqfYjkTdQ"
//   },
//   {
//     id:101,
//     imgg : "https://www.xtrafondos.com/descargar.php?id=2728&vertical=1",
//     namee : "Ben-Hur",
//     ratingg : 8.1,
//     contentt : "After a Jewish prince is betrayed and sent into slavery by a Roman friend in 1st-century Jerusalem, he regains his freedom and comes back for revenge.",
//     trailerr : "https://www.youtube.com/embed/NR1ZHKw09n8"
//   },
//   {
//     id:102,
//     imgg : "https://static.toiimg.com/photo/msid-5348868/5348868.jpg?26276",
//     namee : "Avatar",
//     ratingg : 7.8,
//     contentt : "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home. ",
//     trailerr : "https://www.youtube.com/embed/5PSNL1qE6VY"
//   },
//   {
//     id:103,
//     imgg : "https://i.pinimg.com/originals/6b/40/c5/6b40c5d03dfce1084dea4829bc7310a1.jpg",
//     namee : "Harry Potter and the Goblet of Fire",
//     ratingg : 7.7,
//     contentt : "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.",
//     trailerr : "https://www.youtube.com/embed/3EGojp4Hh6I"
//   },
//   {
//     id:104,
//     imgg : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     namee : "The Avengers",
//     ratingg : 8,
//     contentt : "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
//     trailerr : "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//     id:105,
//     imgg : "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//     namee : "Baahubali",
//     ratingg : 8,
//     contentt : "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     trailerr : "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//     id:106,
//     imgg : "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//     namee : "Interstellar",
//     ratingg : 8.6,
//     contentt : "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
//     trailerr : "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//     id:107,
//     imgg : "https://stat1.bollywoodhungama.in/wp-content/uploads/2021/10/Pushpa.jpeg",
//     namee : "Pushpa",
//     ratingg : 7.6,
//     contentt : "Story of Pushpa Raj, a lorry driver in Seshachalam forests of South India, set in the backdrop of red sandalwood smuggling. Red Sandalwood is endemic to South-Eastern Ghats (mountain range) of India.",
//     trailerr : "https://www.youtube.com/embed/Q1NKMPhP8PY"
//   },
//   {
//     id:108,
//     imgg : "https://m.media-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
//     namee : "Bahubali 2",
//     ratingg : 8.2,
//     contentt : "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.",
//     trailerr : "https://www.youtube.com/embed/G62HrubdD6o"
//   },
//   {
//     id:109,
//     imgg : "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_FMjpg_UX1000_.jpg",
//     namee : "KGF Chapter 2",
//     ratingg : 8.7,
//     contentt : "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy.",
//     trailerr : "https://www.youtube.com/embed/JKa05nyUmuQ"
//   },
//   {
//     id:110,
//     imgg : "https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/Dangal-1.jpg",
//     namee : "Dangal",
//     ratingg : 8.3,
//     contentt : "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
//     trailerr : "https://www.youtube.com/embed/x_7YlGv9u1g"
//   },
//   {
//     id:111,
//     imgg : "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg",
//     namee : "PK",
//     ratingg : 8.1,
//     contentt : "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of religion on its people.",
//     trailerr : "https://www.youtube.com/embed/SOXWc32k4zA"
//   }
// ];



export function App() {
  const [mode,setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  // const[movieInfo,setmovieInfo]=useState(mveinf);
  const navigate = useNavigate();

  const signOut = ()=>{
      localStorage.clear();
      navigate("/login");
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{minHeight:"100vh", borderRadius:"0px"}}>
        <div className="App">
          
          <AppBar position="static">
            <Toolbar className="toolBar">
              <div>
                {/* <Button color="inherit" onClick = {()=> navigate("/")}>Home</Button> */}
                {/* <Button color="inherit" onClick = {()=> navigate("/about")}>About</Button> */}
                <Button color="inherit" onClick = {()=> navigate("/movies")}>Movies</Button>
                <Button color="inherit" onClick = {()=> navigate("/addmovies")}>Add Movies</Button>
                <Button color="inherit" onClick = {()=> navigate("/addcolor")}>Color Game</Button>
                <Button color="inherit" onClick = {()=> navigate("/tictactoe")}>Tic-Tac-Toe</Button>
              </div>
              <div className = "endButtons">
                <Button color="inherit" className="modeButton" onClick = {()=> 
                  setMode(mode==="light" ? "dark" : "light")
                  }>{mode==="light" ? <Brightness4Icon/> : <Brightness7Icon/>}&nbsp;&nbsp;
                    {mode==="light" ? "Dark Mode" : "Light Mode"}
                </Button>
                {
                localStorage.getItem("user") && <div>
                  <IconButton onClick={signOut}>
                    <PowerSettingsNewIcon />
                  </IconButton>
                </div>
              }
              </div>
              
            </Toolbar>
          </AppBar>
              
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/addmovies"element={<MovieAdditionForm />}/>
            <Route path="/addcolor" element={<AddColor />} />
            <Route path="/tictactoe" element={<TicTacToe mode={mode}/>} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/movies/edit/:id" element={<EditMovie />} />
            <Route path="/basicform" element={<BasicForm />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  ) 
}

function NotFound(){
  return <h1>404 not found</h1>
}




