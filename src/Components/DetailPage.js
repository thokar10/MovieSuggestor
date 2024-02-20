import { FaCircleArrowLeft } from "react-icons/fa6";
import "../Css/DetailPage.css";
import { useLocation, useNavigate } from "react-router-dom";
const DetailPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <>
      <div className="goBack">
        <FaCircleArrowLeft
          className="arrow"
          style={{ fontSize: "30px" }}
          onClick={() => {
            navigate("/");
          }}
        />
        <h3>Go Back</h3>
      </div>
      <div>{state.movie_name}</div>
      <div>
        <img src={state.movie_img} alt="s" />
      </div>
    </>
  );
};
export default DetailPage;
