import React from "react";
import style from "./cricket.module.css";
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";

const kabaddi = () => {
  return (
    <section>
      <header className={style.navback}>
        <nav className={style.nav}>
        <Link to={"/home"} className = {style.head}>KABADDI</Link>
          <Link
            to="//www.sportskeeda.com/go/pro-kabaddi"
            target={"_blank"}
            className={style.li}
          >
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
            src="https://media.gettyimages.com/id/1170459337/photo/players-of-bengal-warriors-and-jaipur-pink-panthers-in-action-during-the-pro-kabaddi-league.jpg?s=612x612&w=0&k=20&c=Jb5HJKXzq2dCVuBWDMOkQRjNemD-c8tCqy2a_d8xYUY="
            alt=""
          />
          <img
            src="https://im.indiatimes.in/content/2023/Jan/kabaddi_63b69a06635dc.jpg?w=1200&h=900&cc=1"
            alt=""
          />
          <img
            src="https://imgk.timesnownews.com/story/1539154931-U_Mumba.JPG"
            alt=""
          />
        </Carousel>
      </div>

      <div className={style.ptag}>
        <p>
          Kabaddi is a contact team sport. Played between two teams of seven
          players, the objective of the game is for a single player on offence,
          referred to as a "raider", to run into the opposing team's half of the
          court, touch out as many of their players and return to their own half
          of the court, all without being tackled by the defenders in 30
          seconds. Points are scored for each player tagged by the raider, while
          the opposing team earns a point for stopping the raider. Players are
          taken out of the game if they are touched or tackled, but are brought
          back in for each point scored by their team from a tag or a tackle. It
          is popular in the Indian subcontinent and other surrounding Asian
          countries. Although accounts of kabaddi appear in the histories of
          ancient India, the game was popularised as a competitive sport in the
          20th century. It is the national sport of Bangladesh. It is the state
          game of the Indian states of Chhattisgarh, Tamil Nadu, Andhra Pradesh,
          Bihar, Haryana, Karnataka, Kerala, Maharashtra, Odisha, Punjab,
          Telangana, and Uttar Pradesh. There are two major disciplines of
          kabaddi: "Punjabi kabaddi", also referred to as "circle styles",
          comprises traditional forms of the sport that are played on a circular
          field outdoors, while the "standard style", played on a rectangular
          court indoors, is the discipline played in major professional leagues
          and international competitions such as the Asian Games. This game is
          known by numerous names in different parts of the Indian subcontinent,
          such as: kabaddi or chedugudu in Andhra Pradesh and Telangana; kabaddi
          in Maharashtra, Karnataka and Kerala; kabaddi, komonti or ha-du-du in
          West Bengal and Bangladesh; bhavatik in Maldives, kauddi or kabaddi in
          the Punjab region; hu-tu-tu in Western India, hu-do-do in Eastern
          India; chadakudu in South India; kapardi in Nepal; and kabadi or
          sadugudu in Tamil Nadu. History Kabaddi is a sport developed centered
          on Jallikattu. It is common among the Ayar tribal people who lived in
          the Mullai geographical region of ancient Tamil Nadu. A player going
          to the opposition is treated like a Bull. It is like taming a bull
          without touching it, as it is mentioned in Sangam Literature that the
          game called Sadugudu was practised since ages. There are also accounts
          of Gautam Buddha having played the game recreationally. There is
          another version to this sport origins and rich history, Legend has it
          that kabaddi originated in Tamil Nadu over 4,000 years ago. The game
          was said to have been popular among the Yadava people. An Abhang by
          Tukaram stated that the lord Krishna played the game in his youth.
          Modern kabaddi is a synthesis of the game played in various forms
          under different names in the Indian subcontinent. India has been first
          credited with having helped to popularise kabaddi as a competitive
          sport, with the first organized competitions occurring in the 1920s,
          their introduction to the programme of the Indian Olympic Games in
          1938, the establishment of the All-India Kabaddi Federation in 1950,
          and it being played as a demonstration sport at the inaugural 1951
          Asian Games in New Delhi. These developments helped to formalize the
          sport, which had traditionally been played in villages, for legitimate
          international competition. After being demonstrated again at the 1982
          Asian Games in Delhi, Kabaddi was added to the Asian Games programme
          beginning in 1990. Variations Standard style In the international team
          version of kabaddi, two teams of seven members each occupy opposite
          halves of a court of 10 by 13 metres (33ft × 43ft) in case of men and
          8 by 12 metres (26ft ×39ft) in case of women.[11] Each has five
          supplementary players held in reserve for Contact sport known as
          full-contact, as the sport cannot be undertaken without contact. Some
          sports, such as baseball and kho-kho, only allow physical contact in
          the form
        </p>
      </div>
    </section>
  );
};

export default kabaddi;
