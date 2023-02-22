import React from "react";
import style from "./cricket.module.css";
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";

const Hockey = () => {
  return (
    <section>
      <header className={style.navback}>
        <nav className={style.nav}>
        <Link to={"/home"} className = {style.head}>HOCKEY</Link>
          <Link to="//www.sportskeeda.com/hockey" target={"_blank"} className={style.li}>
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
            src="https://www.hockeyindia.org/static-assets/waf-images/fa/28/01/0/R54MaAkWYN.JPG"
            alt=""
          />
          <img
            src="https://www.hockeyindia.org/static-assets/waf-images/06/b5/aa/0/EISxLaRi2Z.JPG"
            alt=""
          />
          <img
            src="https://www.hockeyindia.org/static-assets/waf-images/c2/43/37/0/29bOAEchnA.JPG"
            alt=""
          />
        </Carousel>
      </div>

      <div className={style.ptag}>
        <p>
        The Game
Field Hockey is an eleven aside game played on a pitch 100 yards by 60 yards with a ball which has a 23cm circumference. Each player has a stick with a rounded head to play the ball with and the objective is to score goals by putting the ball in the opposing team’s goal. Sticks are anywhere between 28 inches and 39 inches long and weigh between 340g and 790g. Protective equipment is worn in the form of full body armour, pads, gloves, kickers and a helmet for the goal keepers and shin guards and mouth guards for outfield players.

The Rules
The rules of field hockey are very similar to the rules of soccer except that players must use their sticks instead of their feet to play the ball. There are 11 players on a team made up of a goalkeeper, defenders, midfielders and forwards. The only player on the field who is allowed to use their feet and hands as well as their stick is the goalkeeper. The key rule differential between field hockey and soccer lies with there being no offside rule in field hockey allowing for an extremely fast, potentially high scoring and exciting game.

Playing Surfaces
Despite the name “field” hockey, the game has recently developed (since the mid 1980’s) from a grass pitch based sport into a sport played on artificial surfaces. In BC, the outdoor game is played on both grass and artificial surfaces. Not merely an outdoor sport, field hockey is also played as an indoor sport (six aside) on gymnasium floors that allow for an even faster game.

The History of the Game
The origins of the game can be traced back to the earliest civilizations of the world, but the modern game of field hockey was developed in the British Isles. The modern game was started in England in the mid 1800’s and the first formal field hockey club the ‘Blackheath Football and Hockey Club’ was formed in 1861.

Many rules and concepts changed during the early years as the game spread throughout the British Empire. From these origins sprung not only the formidable field hockey nations of India, Pakistan and Australia but the development of the game in over 100 countries. As a result, field hockey became the second largest team sport in the world, after soccer.

Field hockey has been a men’s Olympic sport since the 1908 Olympic Games in London. The women’s game is a recent addition, first recognized at the Moscow Olympics in 1980. Field Hockey stages both a men’s and women’s World Cup as well as competitions at other International Games including the Commonwealth Games.
        </p>
      </div>
    </section>
  );
};

export default Hockey;
