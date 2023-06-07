import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Welcome to TechyStar, your one-stop solution for all your tech
            problems and a leading tech company dedicated to nurturing
            problem-solving abilities in children. <br /> At TechyStar, we
            believe that technology is a powerful tool that can empower
            individuals of all ages to overcome challenges and unlock their
            potential. Our mission is to inspire and educate children, fostering
            a love for technology while equipping them with the skills they need
            to thrive in the digital world. <br />
            <br />
            {/* <h3>Our Vision</h3> We envision a future where every child is not
            only a consumer of technology but also a confident creator, able to
            leverage technology to solve problems and make a positive impact on
            the world. We strive to be the catalyst that sparks curiosity,
            ignites passion, and cultivates a generation of tech-savvy problem
            solvers. <br /> <br /> */}
            <h3>Join Us!</h3>
            Whether you're a parent seeking tech solutions, an educator
            enhancing teaching with technology, or a child eager to embark on a
            tech journey, TechyStar is here to guide and support you. Unlock the
            power of technology and inspire the problem solvers of tomorrow with
            TechyStar!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
