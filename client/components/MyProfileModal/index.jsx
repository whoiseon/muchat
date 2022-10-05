import {useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Background, ModalWrapper} from "./styles";
import {userLogout} from "../../slices/userSlice";
import {useCookies} from "react-cookie";

const MyProfileModal = ({ setShowMyProfileModal }) => {
  const { userInfo } = useSelector((state) => state.user);

  const ModalRef = useRef();
  const dispatch = useDispatch();

  const [cookie, setCookie] = useCookies();

  const onClickCloseModal = useCallback((e) => {
    if (ModalRef.current && !ModalRef.current.contains(e.target)) {
      setShowMyProfileModal(false);
    } else {
      setShowMyProfileModal(true);
    }
  }, [ModalRef]);

  const onClickLogout = useCallback(() => {
    dispatch(userLogout({
      token: userInfo.token,
    }));
  }, [userInfo]);

  useEffect(() => {
    document.addEventListener("mousedown", onClickCloseModal);
    return () => {
      document.removeEventListener("mousedown", onClickCloseModal);
    };
  });

  return (
    <Background onClick={onClickCloseModal} ref={ModalRef}>
      <ModalWrapper>
        <li>
          <img src={`/image/mucorn/${userInfo?.mucorn}.png`} alt={`mucorn_${userInfo?.mucorn}`} />
          <div>
            <p>{ userInfo?.nickname }</p>
            <p>{ userInfo?.email }</p>
          </div>
        </li>
        <li onClick={onClickLogout}>
          <span>로그아웃</span>
        </li>
      </ModalWrapper>
    </Background>
  );
};

export default MyProfileModal;
