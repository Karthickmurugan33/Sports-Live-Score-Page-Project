import style from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className={style.main_section}>
      <div className={style.size}>
        <Link to={"/cricket"} target={"_blank"}>
          <img
            src="https://www.freevector.com/uploads/vector/preview/30676/Cool_Cricket_Logo_1.jpg"
            alt="cricket logo"
          />
        </Link>
      </div>

      <Link to={"/football"} target={"_blank"}>
        <div className={style.size}>
          <img
            src="https://img.freepik.com/premium-vector/football-logo-design_680400-15.jpg?w=2000"
            alt="football-img"
          />
        </div>
      </Link>
      <Link to={"/hockey"} target={"_blank"}>
        <div className={style.size}>
          <img
            src="https://clipground.com/images/hockey-logos-clipart-2.jpg"
            alt="Hockey"
          />
        </div>
      </Link>
      <Link to={"/Volleyball"} target={"_blank"}>
        <div className={style.size}>
          <img
            src="https://img.freepik.com/premium-vector/volleyball-logo-design-with-jumping-person-icon_396343-240.jpg?w=2000"
            alt="volleyball-img"
          />
        </div>
      </Link>
      <Link to={"/kabaddi"} target={"_blank"}>
        <div className={style.size}>
          <img
            src="https://th.bing.com/th/id/OIP.bveTU4gp54dlCCwZADFx2QHaGM?pid=ImgDet&rs=1"
            alt="kabaddi-img"
          />
        </div>
      </Link>

      <Link to={"/basketball"} target={"_blank"}>
        <div className={style.size}>
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-basketball-logo_23-2149392459.jpg?w=2000"
            alt="basketball"
          />
        </div>
      </Link>
    </section>
  );
};

export default Home;
