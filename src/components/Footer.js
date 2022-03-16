import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Pedro Novaes</h1>
          <PText>
            A web developer from Rio de Janeiro, Brasil. I always make Web
            Systems that have good performance and quality rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+55 21 97341-0635',
                path: 'tel:+55 21 97341-0635',
              },
              {
                title: 'pe.fer@hotmail.com',
                path: 'mailto:pe.fer@hotmail.com',
              },
              {
                title: 'Jardim América, Rio de Janeiro, Brasil',
                path:
                  'https://www.google.com/maps/place/Jardim+America,+Rio+de+Janeiro+-+RJ/@-22.8102558,-43.3280012,16z/data=!3m1!4b1!4m5!3m4!1s0x997b31ea13e29f:0x527865946d1d6633!8m2!3d-22.811487!4d-43.3207177',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/profile.php?id=100001636886675',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/PedrinhoFRN',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/pedro_rnovaes/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2022 - Pedro Novaes | Designed By{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/pedro-rocha-novaes-56732a169/"
            >
              B X D
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
