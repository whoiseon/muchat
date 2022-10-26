import Link from "next/link";
import {MenuWrapper} from "./styles";
import {BACKGROUND_BLACK_HOVER, WHITE_COLOR} from "../../../styles/common";
import {useRouter} from "next/router";

const ProfileLeftMenu = () => {
  const router = useRouter();

  const active = {
    backgroundColor: BACKGROUND_BLACK_HOVER,
    color: WHITE_COLOR,
    fontWeight: 'bold',
  };

  return (
    <MenuWrapper>
      <ul>
        <li>
          <Link
            href="/profile/account"
          >
            <a
              style={router.query.setting === 'account' ? active : {}}
            >
              내 계정
            </a>
          </Link>
        </li>
        <li>
          <Link href="/profile/mucorn">
            <a
              style={router.query.setting === 'mucorn' ? active : {}}
            >
              먹콘
            </a>
          </Link>
        </li>
        <li>
          <Link href="/profile/membership">
            <a
              style={router.query.setting === 'membership' ? active : {}}
            >
              가입된 멤버십
            </a>
          </Link>
        </li>
      </ul>
    </MenuWrapper>
  );
};

export default ProfileLeftMenu;
