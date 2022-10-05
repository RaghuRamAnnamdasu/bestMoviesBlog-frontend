import { useState, useEffect } from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from "yup";
import { API } from "./global";



const formValidationSchema = yup.object({
  namee : yup.string().required("Please add name"),
  imgg : yup.string().required("Please add image source"),
  ratingg : yup.number().required("Please add rating").max(10,"Provide rating from 1-10").min(1,"Provide rating from 1-10"),
  contentt : yup.string().required("Please add summary").min(20,"Minimum 20 characters"),
  trailerr : yup.string().required("Please add trailer source")
}
);



export function EditMovie() {

  const[movie,setMovie]=useState(null);
  const { id } = useParams();
  
  function getMovieAPI(){
    fetch(`${API}/movies/${id}`)
    .then((data)=>data.json())
    .then((mvs)=>setMovie(mvs));
  }

  useEffect(()=>{
    getMovieAPI();
  },[]);






  return(
    movie ? <MovieEditCore movie={movie}/> : "Loading..."
  )

}



  function MovieEditCore({movie}){




    const {handleBlur,handleChange,handleSubmit,values,touched,errors} = useFormik({
      initialValues : {
                        namee: movie.namee,
                        imgg: movie.imgg,
                        ratingg: movie.ratingg,
                        contentt: movie.contentt,
                        trailerr: movie.trailerr
                      },
      validationSchema : formValidationSchema,
      onSubmit : (values)=>editMovieAPI(movie,values)
    })

    



    const navigate = useNavigate();

    function editMovieAPI(movie,values){
      fetch(`${API}/movies/editMovie/${movie._id}`,
        {
          method:"PUT",
          body : JSON.stringify(values),
          headers : {"Content-Type":"application/json"}
        }
      ).then(()=>navigate("/movies"))
    }
    return (
        localStorage.getItem("user") ? 
        <form onSubmit={handleSubmit} className="formSection">
        
        <TextField label="Name" variant="standard"  name="namee" value={values.namee} onChange={handleChange} onBlur = {handleBlur}  error={touched.namee && errors.namee} id="filled-error-helper-text" helperText={touched.namee && errors.namee}/>
        {/* {touched.namee && errors.namee} */}
        <TextField label="Poster" variant="standard" name="imgg" value={values.imgg} onChange={handleChange} onBlur = {handleBlur}  error={touched.imgg && errors.imgg}  id="filled-error-helper-text" helperText={touched.imgg && errors.imgg}/>
        {/* {touched.imgg && errors.imgg} */}
        <TextField label="Rating" variant="standard" className="rating input"  name="ratingg" value={values.ratingg} onChange={handleChange} onBlur = {handleBlur}  error={touched.ratingg && errors.ratingg}  id="filled-error-helper-text" helperText={touched.ratingg && errors.ratingg}/>
        {/* {touched.ratingg && errors.ratingg} */}
        <TextField label="Summary" variant="standard" className="summary input" name="contentt" value={values.contentt} onChange={handleChange} onBlur = {handleBlur}  error={touched.contentt && errors.contentt}  id="filled-error-helper-text" helperText={touched.contentt && errors.contentt} />
        {/* {touched.contentt && errors.contentt} */}
        <TextField label="Trailer" variant="standard" className="trailer input" name="trailerr" value={values.trailerr} onChange={handleChange} onBlur = {handleBlur}  error={touched.trailerr && errors.trailerr}  id="filled-error-helper-text" helperText={touched.trailerr && errors.trailerr}/>
        {/* {touched.trailerr && errors.trailerr} */}
        <Button variant="outlined" className="addMovieButton" type="submit">Save</Button>
      </form> :
      <Navigate to="/login" />
    );
  }
