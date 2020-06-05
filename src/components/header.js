import React from 'react';
import { Link } from 'gatsby';
import styles from './header.module.scss';
//HeaderLink component
const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>
    {props.text}
  </Link>
);

//HomeButton component
const HomeButton = props => (
  <Link className={styles.button} to={props.to}>
    {props.text}
  </Link>
);

//SocialButton component
const SocialButton = props => {
  let style = '';
  let url = '';

  switch (props.site) {
    case 'twitter':
      style = styles.buttonTwitter;
      url = 'https://twitter.com/' + props.username;
      break;
    case 'facebook':
      style = styles.buttonFacebook;
      url = 'https://twitter.com/' + props.username;
      break;
    case 'youtube':
      style = styles.buttonYoutube;
      url = 'https://twitter.com/' + props.username;
      break;
    default:
      style = styles.buttonInstagram;
      url = 'https://twitter.com/' + props.username;
      break;
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={style}>{props.children}&nbsp;</div>
    </a>
  );
};

export default () => (
  <header className={styles.container}>
    <div className={styles.row}>
      <HomeButton to="/" text="Welcome my site" />
      <SocialButton site="facebook" username="eiq21"></SocialButton>
      <SocialButton site="instagram" username="eiq21"></SocialButton>
      <SocialButton site="youtube" username="eiq21"></SocialButton>
      <SocialButton site="twitter" username="eiq21"></SocialButton>
    </div>

    <div className={styles.row}>
      <HeaderLink to="/" text="Home"></HeaderLink>
      <HeaderLink to="/about" text="About"></HeaderLink>
    </div>
  </header>
);
