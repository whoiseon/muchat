import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import {FooterWrapper, DeveloperLink} from "./styles";

const MobileFooter = () => {
  return (
    <FooterWrapper>
      <p>Copyright 2022. MUCHAT all rights reserved.</p>
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

export default MobileFooter;
