
import React, { useContext, useEffect } from 'react';
import { HireContext } from '../../App';
import "./Condedates.css"
import axios from 'axios';
import serverUrl from '../../serverUrl';
import { useNavigate } from 'react-router-dom';
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from '@mui/icons-material/Favorite';


function Condedates() {
  const navigate = useNavigate();
  const { condedates , setCondedate , jwttoken} = useContext(HireContext);

 console.log(condedates)
  function hadleClick(e , condedateId){
    console.log(condedateId)
    axios.patch(`http://localhost:8080/condedateShow/${jwttoken}`, { condedateId })
    .then((result) => {
      if (result.status === 200) {
        
        setCondedate(result.data);
        navigate("/category/resume")
      } else if (result.status === 202) {
        alert(result.data);
      }
      
    });
  }

  return (
    <>
      <section className='condedates'>
        {condedates.map((condedate, index) => (
          <div onClick={(e)=>hadleClick(e,condedate._id)} className='condedate' key={index}>
            <h1>{condedate.fullname}</h1>
            <h3>{condedate.skills}</h3>
            <p>{}</p>
            <button
                  className="heartBtn"
                  >
                  {/* {(userLikedBooks.includes(book._id)) ? */}
                   {/* <FavoriteIcon sx={{ fontSize: 28 }} className="redHeartIcon" />  */}
                  {/* //  : <FavoriteBorderIcon sx={{ fontSize: 28 }} className="heartIcon" />} */}
                </button>
          </div>
        ))}
      </section>
    </>
  );
}

export default Condedates;
