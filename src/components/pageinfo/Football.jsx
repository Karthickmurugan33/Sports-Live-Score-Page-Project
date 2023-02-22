import React from "react";
import style from "./cricket.module.css";
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";

const Football = () => {
  return (
    <section>
      <header className={style.navback}>
        <nav className={style.nav}>
        <Link to={"/home"} className = {style.head}>FOOTBALL</Link>
          <Link to="//www.livescore.com" target={"_blank"} className={style.li}>
            LiveScores
            <div class="spinner-grow text-danger" role="status">
              {/* <p>LiveScores</p> */}
              <span class="sr-only">Loading...</span>
            </div>
          </Link>
        </nav>
      </header>
      <div className={style.img}>
        <Carousel
          cellAlign="center"
          autoplay={true}
          wrapAround={true}
          withoutControls={true}
          pauseOnHover={false}
          speed={200}
        >
          <img
            src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </Carousel>
      </div>

      <div className={style.ptag}>
        <p>
          Football is a family of team sports that involve, to varying degrees,
          kicking a ball to score a goal. Unqualified, the word football
          normally means the form of football that is the most popular where the
          word is used. Sports commonly called football include association
          football (known as soccer in North America, Ireland and Australia);
          gridiron football (specifically American football or Canadian
          football); Australian rules football; rugby union and rugby league;
          and Gaelic football. These various forms of football share to varying
          extent common origins and are known as "football codes". There are a
          number of references to traditional, ancient, or prehistoric ball
          games played in many different parts of the world. Contemporary codes
          of football can be traced back to the codification of these games at
          English public schools during the 19th century.The expansion and
          cultural influence of the British Empire allowed these rules of
          football to spread to areas of British influence outside the directly
          controlled Empire. By the end of the 19th century, distinct regional
          codes were already developing: Gaelic football, for example,
          deliberately incorporated the rules of local traditional football
          games in order to maintain their heritage. In 1888, The Football
          League was founded in England, becoming the first of many professional
          football associations. During the 20th century, several of the various
          kinds of football grew to become some of the most popular team sports
          in the world.
        </p>
      </div>
    </section>
  );
};

export default Football;
