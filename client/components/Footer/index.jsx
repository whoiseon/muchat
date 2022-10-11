import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import {DeveloperLink, FooterLogo, FooterWrapper} from "./styles";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo>
        <Link href="/">
          <img src="/image/logo/gray_logo.svg" alt="Logo" />
        </Link>
        <span>MUCHAT 먹챗 | Copyright 2022. MUCHAT all rights reserved.</span>
      </FooterLogo>
      <DeveloperLink>
        <ul>
          <li>
            <Link href="https://github.com/whoiseon">
              <a target="_blank"><GitHubIcon /></a>
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com/seoninmoonlight">
              <a target="_blank"><InstagramIcon /></a>
            </Link>
          </li>
        </ul>
      </DeveloperLink>
    </FooterWrapper>
  );
};

export default Footer;
