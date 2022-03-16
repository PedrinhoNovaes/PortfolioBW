import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Pedro Novaes</span>
              </p>
              <h2 className="about__heading">A Web Developer</h2>
              <div className="about__info">
                <PText>
                  I am from Rio de Janeiro, Brasil. A place of beauty and
                  nature, but with a lot of chaos. Since my childhood, i love
                  art, sports and technology. I like to solve challenges and
                  create things that can be usefull to others.
                  <br /> <br />
                  I started coding C when I was in high school, after 10 yars I
                  restarted to code in JavaScript. Coding is an art for me, and
                  now I have the opportunity to develop along with the coding. I
                  find it really interesting and I enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. I believe in
                  the integration between people in a respectful way, without
                  discrimination. It is time for us to create more good stuff
                  that helps the world to become a better place, protecting the
                  environment and with less hate.
                </PText>
              </div>
              <Button
                btnText="Download My CV"
                btnLink="https://drive.google.com/file/d/1q9V8q5nhsHnlZqVju_5eBxC3dG6QSrCy/view"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="High School"
                items={['E.T. Rezende Rammel. Mechatronic. Rio de Janeiro']}
              />
              <AboutInfoItem
                title="University"
                items={['Unigranrio, Civil Engineer. Rio de Janeiro']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'Nest', 'Adonis', 'TypeScript']}
              />
              <AboutInfoItem title="Design" items={['Figma']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2010-2012"
                items={[' Technical Maintence Industry - Fruttar']}
              />
              <AboutInfoItem
                title="2013-2016"
                items={['Trainee in Construction Industry - MRV and FENOSA']}
              />
              <AboutInfoItem
                title="2016-2019"
                items={['Maintence Manager - Cosan']}
              />
              <AboutInfoItem
                title="2019-2022"
                items={['Web Developer - WozCode']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
