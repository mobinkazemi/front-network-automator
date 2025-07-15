import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';

import { CONFIG } from 'src/config-global';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

const metadata = { title: `Sign up | Jwt - ${CONFIG.site.name}` };

const Q1 = styled('div')({
  backgroundColor: `rgba(250, 250, 250, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1920px`,
  height: `920px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Rectangle17 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `12px`,
  width: `269px`,
  height: `42px`,
  position: `absolute`,
  left: `230px`,
  top: `32px`,
});

const Rectangle144 = styled('div')({
  backgroundColor: `rgba(255, 228, 205, 1)`,
  borderRadius: `12px`,
  width: `42px`,
  height: `42px`,
  position: `absolute`,
  left: `180px`,
  top: `32px`,
});

const Q2 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1392px`,
  top: `35px`,
});

const Q300114011435Span1 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q300114011435Span2 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q300114011435 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `255px`,
  top: `44px`,
});

// const BoldNotificationsBel = styled(BoldNotificationsBellBing)({
//   width: `20px`,
//   height: `20px`,
//   position: `absolute`,
//   left: `191px`,
//   top: `43px`,
// });

const Rectangle145 = styled('div')({
  backgroundColor: `rgba(222, 44, 67, 1)`,
  borderRadius: `12px`,
  width: `12px`,
  height: `12px`,
  position: `absolute`,
  left: `177px`,
  top: `26px`,
});

const Q5 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `180px`,
  top: `25px`,
});

const Rectangle3 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `-4px 0px 16px rgba(0, 0, 0, 0.08)`,
  width: `280px`,
  height: `920px`,
  position: `absolute`,
  left: `1640px`,
  top: `0px`,
});

const Rectangle147 = styled('div')({
  backgroundColor: `rgba(245, 245, 245, 1)`,
  borderRadius: `16px`,
  width: `226px`,
  height: `124px`,
  position: `absolute`,
  left: `1667px`,
  top: `143px`,
});

const Rectangle1896 = styled('div')({
  backgroundColor: `rgba(255, 228, 205, 1)`,
  borderRadius: `12px`,
  width: `192px`,
  height: `35px`,
  position: `absolute`,
  left: `1684px`,
  top: `217px`,
});

const Rectangle1887 = styled('div')({
  backgroundColor: `rgba(245, 130, 32, 1)`,
  width: `6px`,
  height: `44px`,
  position: `absolute`,
  left: `1640px`,
  top: `344px`,
});

const Rectangle1897 = styled('div')({
  backgroundColor: `rgba(245, 130, 32, 0.4)`,
  filter: `blur(30px)`,
  borderRadius: `0px 19px 19px 0px`,
  width: `27px`,
  height: `44px`,
  position: `absolute`,
  left: `1640px`,
  top: `344px`,
});

const Q3 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1752px`,
  top: `163px`,
});

const Q4 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(245, 130, 32, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1754px`,
  top: `224px`,
});

const Mobinkazemi96GmailC = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1685px`,
  top: `185px`,
});

const LogoText1 = styled('img')({
  height: `78px`,
  width: `149px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `1705px`,
  top: `41px`,
});

const Q6 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1800px`,
  top: `303px`,
});

const Q7 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1737px`,
  top: `465px`,
});

const Q8 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1762px`,
  top: `522px`,
});

const Q9 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(245, 130, 32, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1815px`,
  top: `357px`,
});

const Q10 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1760px`,
  top: `411px`,
});

const Rectangle1885 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `2.559999942779541px solid rgba(245, 130, 32, 1)`,
  boxSizing: `border-box`,
  borderRadius: `29.5px`,
  width: `45px`,
  height: `45px`,
  position: `absolute`,
  left: `1833px`,
  top: `159px`,
});

const Rectangle1886 = styled('div')({
  backgroundColor: `rgba(255, 228, 205, 1)`,
  borderRadius: `29.5px`,
  width: `35px`,
  height: `35px`,
  position: `absolute`,
  left: `1838px`,
  top: `164px`,
});

// const BoldUsersUserRounded = styled(BoldUsersUserRounded)({
//   width: `32px`,
//   height: `32px`,
//   position: `absolute`,
//   left: `1840px`,
//   top: `165px`,
// });

const Group21 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `205px`,
  height: `42px`,
  left: `1678px`,
  top: `839px`,
});

const Rectangle64 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(225, 225, 225, 1)`,
  boxSizing: `border-box`,
  borderRadius: `16px`,
  width: `205px`,
  height: `42px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Group14 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `109px`,
  height: `22px`,
  left: `51px`,
  top: `10px`,
});

const Q11 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const BoldArrowsActionLogo = styled('img')({
  height: `20px`,
  width: `20px`,
  position: `absolute`,
  left: `129px`,
  top: `21px`,
});

// const BoldEssentionalUiBox = styled(BoldEssentionalUiBoxMinimalist)({
//   width: `20px`,
//   height: `20px`,
//   position: `absolute`,
//   left: `1862px`,
//   top: `304px`,
// });

// const BoldUsersUsersGroupR = styled(BoldUsersUsersGroupRounded)({
//   width: `20px`,
//   height: `20px`,
//   position: `absolute`,
//   left: `1862px`,
//   top: `358px`,
// });

// const BoldUsersUserId = styled(BoldUsersUserId)({
//   width: `20px`,
//   height: `20px`,
//   position: `absolute`,
//   left: `1861px`,
//   top: `412px`,
// });

// const BoldNetworkItProgram = styled(BoldNetworkItProgrammingProgra)({
//   width: `20px`,
//   height: `20px`,
//   position: `absolute`,
//   left: `1863px`,
//   top: `467px`,
// });

// const BoldSettingsFineTuni = styled(BoldSettingsFineTuningSettings)({
//   width: `20px`,
//   height: `20px`,
//   position: `absolute`,
//   left: `1863px`,
//   top: `523px`,
// });

const Rectangle1893 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 12px 24px rgba(0, 0, 0, 0.08)`,
  borderRadius: `16px`,
  width: `1280px`,
  height: `761px`,
  position: `absolute`,
  left: `180px`,
  top: `102px`,
});

const Q12 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(245, 130, 32, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1321px`,
  top: `141px`,
});

const Vector90 = styled('img')({
  height: `0px`,
  width: `1177px`,
  position: `absolute`,
  left: `231px`,
  top: `188px`,
});

const Rectangle1912 = styled('div')({
  backgroundColor: `rgba(245, 245, 245, 1)`,
  borderRadius: `16px`,
  width: `1177px`,
  height: `70px`,
  position: `absolute`,
  left: `231px`,
  top: `314px`,
});

const Rectangle1915 = styled('div')({
  backgroundColor: `rgba(245, 245, 245, 1)`,
  borderRadius: `16px`,
  width: `1177px`,
  height: `70px`,
  position: `absolute`,
  left: `231px`,
  top: `392px`,
});

const Rectangle1918 = styled('div')({
  backgroundColor: `rgba(245, 245, 245, 1)`,
  borderRadius: `16px`,
  width: `1177px`,
  height: `70px`,
  position: `absolute`,
  left: `231px`,
  top: `470px`,
});

const Rectangle1921 = styled('div')({
  backgroundColor: `rgba(245, 245, 245, 1)`,
  borderRadius: `16px`,
  width: `1177px`,
  height: `70px`,
  position: `absolute`,
  left: `231px`,
  top: `548px`,
});

const Rectangle1924 = styled('div')({
  backgroundColor: `rgba(245, 245, 245, 1)`,
  borderRadius: `16px`,
  width: `1177px`,
  height: `70px`,
  position: `absolute`,
  left: `231px`,
  top: `626px`,
});

const Rectangle1927 = styled('div')({
  backgroundColor: `rgba(245, 245, 245, 1)`,
  borderRadius: `16px`,
  width: `1177px`,
  height: `70px`,
  position: `absolute`,
  left: `231px`,
  top: `704px`,
});

const Q13 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1159px`,
  top: `330px`,
});

const Q14 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1194px`,
  top: `408px`,
});

const Q15 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1203px`,
  top: `486px`,
});

const Q16 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1201px`,
  top: `564px`,
});

const Q17 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1204px`,
  top: `642px`,
});

const Q18 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1175px`,
  top: `720px`,
});

const Q19 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1367px`,
  top: `334px`,
});

const Q21 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1365px`,
  top: `412px`,
});

const Q31 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1363px`,
  top: `490px`,
});

const Q41 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1364px`,
  top: `568px`,
});

const Q51 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1364px`,
  top: `646px`,
});

const Q61 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1365px`,
  top: `724px`,
});

const Q20 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1233px`,
  top: `289px`,
});

const Q22 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1352px`,
  top: `289px`,
});

const Q23 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `915px`,
  top: `289px`,
});

const Q24 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `673px`,
  top: `289px`,
});

const Q25 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `529px`,
  top: `289px`,
});

const Q26 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `353px`,
  top: `289px`,
});

const Q27 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `882px`,
  top: `338px`,
});

const Q28 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `909px`,
  top: `416px`,
});

const Q29 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `916px`,
  top: `494px`,
});

const Q30 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `902px`,
  top: `572px`,
});

const Q32 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `882px`,
  top: `650px`,
});

const Q33 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `909px`,
  top: `728px`,
});

const Mohammadrezaesfandia = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1110px`,
  top: `352px`,
});

const MohammadfandiariGmai = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1137px`,
  top: `430px`,
});

const Mohammadrez553Aesfan = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1089px`,
  top: `508px`,
});

const MohammfandiariGmailC = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1148px`,
  top: `586px`,
});

const MohammaariGmailCom = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1165px`,
  top: `664px`,
});

const Mohammadrezaesfandia1 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1110px`,
  top: `742px`,
});

const Rectangle1913 = styled('div')({
  backgroundColor: `rgba(228, 240, 255, 1)`,
  borderRadius: `12px`,
  width: `145px`,
  height: `34px`,
  position: `absolute`,
  left: `292px`,
  top: `332px`,
});

const Rectangle1916 = styled('div')({
  backgroundColor: `rgba(228, 240, 255, 1)`,
  borderRadius: `12px`,
  width: `145px`,
  height: `34px`,
  position: `absolute`,
  left: `292px`,
  top: `410px`,
});

const Rectangle1919 = styled('div')({
  backgroundColor: `rgba(228, 240, 255, 1)`,
  borderRadius: `12px`,
  width: `145px`,
  height: `34px`,
  position: `absolute`,
  left: `292px`,
  top: `488px`,
});

const Rectangle1922 = styled('div')({
  backgroundColor: `rgba(228, 240, 255, 1)`,
  borderRadius: `12px`,
  width: `145px`,
  height: `34px`,
  position: `absolute`,
  left: `292px`,
  top: `566px`,
});

const Rectangle1925 = styled('div')({
  backgroundColor: `rgba(228, 240, 255, 1)`,
  borderRadius: `12px`,
  width: `145px`,
  height: `34px`,
  position: `absolute`,
  left: `292px`,
  top: `644px`,
});

const Rectangle1928 = styled('div')({
  backgroundColor: `rgba(228, 240, 255, 1)`,
  borderRadius: `12px`,
  width: `145px`,
  height: `34px`,
  position: `absolute`,
  left: `292px`,
  top: `722px`,
});

const Rectangle1914 = styled('div')({
  backgroundColor: `rgba(253, 225, 228, 1)`,
  borderRadius: `12px`,
  width: `34px`,
  height: `34px`,
  position: `absolute`,
  left: `253px`,
  top: `332px`,
});

const Rectangle1917 = styled('div')({
  backgroundColor: `rgba(253, 225, 228, 1)`,
  borderRadius: `12px`,
  width: `34px`,
  height: `34px`,
  position: `absolute`,
  left: `253px`,
  top: `410px`,
});

const Rectangle1920 = styled('div')({
  backgroundColor: `rgba(253, 225, 228, 1)`,
  borderRadius: `12px`,
  width: `34px`,
  height: `34px`,
  position: `absolute`,
  left: `253px`,
  top: `488px`,
});

const Rectangle1923 = styled('div')({
  backgroundColor: `rgba(253, 225, 228, 1)`,
  borderRadius: `12px`,
  width: `34px`,
  height: `34px`,
  position: `absolute`,
  left: `253px`,
  top: `566px`,
});

const Rectangle1930 = styled('div')({
  backgroundColor: `rgba(255, 228, 205, 1)`,
  borderRadius: `12px`,
  width: `34px`,
  height: `34px`,
  position: `absolute`,
  left: `444px`,
  top: `332px`,
});

const Rectangle1931 = styled('div')({
  backgroundColor: `rgba(255, 228, 205, 1)`,
  borderRadius: `12px`,
  width: `34px`,
  height: `34px`,
  position: `absolute`,
  left: `444px`,
  top: `410px`,
});

const Rectangle1932 = styled('div')({
  backgroundColor: `rgba(255, 228, 205, 1)`,
  borderRadius: `12px`,
  width: `34px`,
  height: `34px`,
  position: `absolute`,
  left: `444px`,
  top: `488px`,
});

const Rectangle1933 = styled('div')({
  backgroundColor: `rgba(255, 228, 205, 1)`,
  borderRadius: `12px`,
  width: `34px`,
  height: `34px`,
  position: `absolute`,
  left: `444px`,
  top: `566px`,
});

const Rectangle1934 = styled('div')({
  backgroundColor: `rgba(255, 228, 205, 1)`,
  borderRadius: `12px`,
  width: `34px`,
  height: `34px`,
  position: `absolute`,
  left: `444px`,
  top: `644px`,
});

const Rectangle1935 = styled('div')({
  backgroundColor: `rgba(255, 228, 205, 1)`,
  borderRadius: `12px`,
  width: `34px`,
  height: `34px`,
  position: `absolute`,
  left: `444px`,
  top: `722px`,
});

const Rectangle1926 = styled('div')({
  backgroundColor: `rgba(253, 225, 228, 1)`,
  borderRadius: `12px`,
  width: `34px`,
  height: `34px`,
  position: `absolute`,
  left: `253px`,
  top: `644px`,
});

const Rectangle1929 = styled('div')({
  backgroundColor: `rgba(253, 225, 228, 1)`,
  borderRadius: `12px`,
  width: `34px`,
  height: `34px`,
  position: `absolute`,
  left: `253px`,
  top: `722px`,
});

const Q34 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(27, 116, 232, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `318px`,
  top: `338px`,
});

const Q35 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(27, 116, 232, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `318px`,
  top: `416px`,
});

const Q36 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(27, 116, 232, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `318px`,
  top: `494px`,
});

const Q37 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(27, 116, 232, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `318px`,
  top: `572px`,
});

const Q38 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(27, 116, 232, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `318px`,
  top: `650px`,
});

const Q39 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(27, 116, 232, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `318px`,
  top: `728px`,
});

const Q251404 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `667px`,
  top: `338px`,
});

const Q2514041 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `681px`,
  top: `416px`,
});

const Q2514042 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `667px`,
  top: `494px`,
});

const Q2514043 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `685px`,
  top: `572px`,
});

const Q2514044 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `667px`,
  top: `650px`,
});

const Q2514045 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `680px`,
  top: `728px`,
});

const Q1435 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `617px`,
  top: `338px`,
});

const Q14351 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `617px`,
  top: `416px`,
});

const Q14352 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `617px`,
  top: `494px`,
});

const Q14353 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `617px`,
  top: `572px`,
});

const Q14354 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `617px`,
  top: `650px`,
});

const Q14355 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `617px`,
  top: `728px`,
});

const Rectangle13 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(225, 225, 225, 1)`,
  boxSizing: `border-box`,
  borderRadius: `12px`,
  width: `160px`,
  height: `34px`,
  position: `absolute`,
  left: `688px`,
  top: `215px`,
});

const Rectangle15 = styled('div')({
  backgroundColor: `rgba(244, 244, 244, 1)`,
  borderRadius: `12px`,
  width: `340px`,
  height: `34px`,
  position: `absolute`,
  left: `961px`,
  top: `215px`,
});

const Rectangle14 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(225, 225, 225, 1)`,
  boxSizing: `border-box`,
  borderRadius: `12px`,
  width: `160px`,
  height: `34px`,
  position: `absolute`,
  left: `472px`,
  top: `215px`,
});

const Rectangle1905 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(225, 225, 225, 1)`,
  boxSizing: `border-box`,
  borderRadius: `12px`,
  width: `160px`,
  height: `34px`,
  position: `absolute`,
  left: `231px`,
  top: `215px`,
});

const Q40 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1338px`,
  top: `223px`,
});

const Q42 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `853px`,
  top: `223px`,
});

const Q43 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `637px`,
  top: `223px`,
});

const Q44 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1210px`,
  top: `222px`,
});

const Q45 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `396px`,
  top: `223px`,
});

// const BoldArrowsAltArrowDo = styled(BoldArrowsAltArrowDown)({
//   width: `16px`,
//   height: `16px`,
//   position: `absolute`,
//   left: `481px`,
//   top: `225px`,
// });

// const LinearSearchMinimali = styled(LinearSearchMinimalisticMagnif)({
//   width: `20px`,
//   height: `20px`,
//   position: `absolute`,
//   left: `973px`,
//   top: `222px`,
// });

// const BoldArrowsAltArrowDo1 = styled(BoldArrowsAltArrowDown)({
//   width: `16px`,
//   height: `16px`,
//   position: `absolute`,
//   left: `240px`,
//   top: `225px`,
// });

const Group31 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  left: `721px`,
  top: `222px`,
});

// const BoldTimeCalendarDate = styled(BoldTimeCalendarDate)({
//   width: `20px`,
//   height: `20px`,
//   position: `absolute`,
//   left: `0px`,
//   top: `0px`,
// });

const Q46 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `566px`,
  top: `223px`,
});

const Q14040112 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `748px`,
  top: `225px`,
});

const Q47 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `331px`,
  top: `223px`,
});

const Rectangle641 = styled('div')({
  backgroundColor: `rgba(245, 130, 32, 1)`,
  boxShadow: `0px 8px 24px rgba(245, 130, 32, 0.3)`,
  borderRadius: `12px`,
  width: `174px`,
  height: `42px`,
  position: `absolute`,
  left: `224px`,
  top: `129px`,
});

const Q48 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `249px`,
  top: `139px`,
});

const BoldEssentionalUiAdd = styled('img')({
  height: `20px`,
  width: `20px`,
  position: `absolute`,
  left: `355px`,
  top: `140px`,
});

const Image = styled('img')({
  height: `36px`,
  width: `36px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `1290px`,
  top: `331px`,
});

const Image1 = styled('div')({
  // backgroundImage: `url(${Image1Image})`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  border: `2px solid rgba(245, 130, 32, 1)`,
  borderRadius: `24px`,
  width: `36px`,
  height: `36px`,
  position: `absolute`,
  left: `1290px`,
  top: `409px`,
});

const Image2 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `2px solid rgba(245, 130, 32, 1)`,
  borderRadius: `24px`,
  width: `36px`,
  height: `36px`,
  position: `absolute`,
  left: `1290px`,
  top: `487px`,
});

const Image3 = styled('div')({
  // backgroundImage: `url(${Image3Image})`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  border: `2px solid rgba(245, 130, 32, 1)`,
  borderRadius: `24px`,
  width: `36px`,
  height: `36px`,
  position: `absolute`,
  left: `1290px`,
  top: `565px`,
});

const Image4 = styled('div')({
  // backgroundImage: `url(${Image4Image})`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  border: `2px solid rgba(245, 130, 32, 1)`,
  borderRadius: `24px`,
  width: `36px`,
  height: `36px`,
  position: `absolute`,
  left: `1290px`,
  top: `643px`,
});

const Image5 = styled('div')({
  // backgroundImage: `url(${Image5Image})`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  border: `2px solid rgba(245, 130, 32, 1)`,
  borderRadius: `24px`,
  width: `36px`,
  height: `36px`,
  position: `absolute`,
  left: `1290px`,
  top: `721px`,
});

const BoldNotesDocumentAdd = styled('img')({
  height: `20px`,
  width: `20px`,
  position: `absolute`,
  left: `395px`,
  top: `339px`,
});

const BoldNotesDocumentAdd1 = styled(BoldNotesDocumentAdd)({
  width: `20px`,
  height: `20px`,
  position: `absolute`,
  left: `395px`,
  top: `417px`,
});

const BoldNotesDocumentAdd2 = styled(BoldNotesDocumentAdd)({
  width: `20px`,
  height: `20px`,
  position: `absolute`,
  left: `395px`,
  top: `495px`,
});

const BoldNotesDocumentAdd3 = styled(BoldNotesDocumentAdd)({
  width: `20px`,
  height: `20px`,
  position: `absolute`,
  left: `395px`,
  top: `573px`,
});

const BoldNotesDocumentAdd4 = styled(BoldNotesDocumentAdd)({
  width: `20px`,
  height: `20px`,
  position: `absolute`,
  left: `395px`,
  top: `651px`,
});

const BoldNotesDocumentAdd5 = styled(BoldNotesDocumentAdd)({
  width: `20px`,
  height: `20px`,
  position: `absolute`,
  left: `395px`,
  top: `729px`,
});

// const BoldEssentionalUiTra = styled(BoldEssentionalUiTrashBinTrash)({
//   width: `20px`,
//   height: `20px`,
//   position: `absolute`,
//   left: `260px`,
//   top: `339px`,
// });

// const BoldEssentionalUiTra1 = styled(BoldEssentionalUiTrashBinTrash)({
//   width: `20px`,
//   height: `20px`,
//   position: `absolute`,
//   left: `260px`,
//   top: `417px`,
// });

// const BoldEssentionalUiTra2 = styled(BoldEssentionalUiTrashBinTrash)({
//   width: `20px`,
//   height: `20px`,
//   position: `absolute`,
//   left: `260px`,
//   top: `495px`,
// });

// const BoldEssentionalUiTra3 = styled(BoldEssentionalUiTrashBinTrash)({
//   width: `20px`,
//   height: `20px`,
//   position: `absolute`,
//   left: `260px`,
//   top: `573px`,
// });

// const BoldEssentionalUiTra4 = styled(BoldEssentionalUiTrashBinTrash)({
//   width: `20px`,
//   height: `20px`,
//   position: `absolute`,
//   left: `260px`,
//   top: `651px`,
// });

// const BoldEssentionalUiTra5 = styled(BoldEssentionalUiTrashBinTrash)({
//   width: `20px`,
//   height: `20px`,
//   position: `absolute`,
//   left: `260px`,
//   top: `729px`,
// });

const Group34 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `444px`,
  height: `30px`,
  left: `598px`,
  top: `793px`,
});

const Rectangle209 = styled('div')({
  backgroundColor: `rgba(245, 130, 32, 1)`,
  borderRadius: `12px`,
  width: `30px`,
  height: `30px`,
  position: `absolute`,
  left: `380px`,
  top: `0px`,
});

const Rectangle19051 = styled('div')({
  backgroundColor: `rgba(255, 228, 205, 1)`,
  borderRadius: `12px`,
  width: `30px`,
  height: `30px`,
  position: `absolute`,
  left: `142px`,
  top: `0px`,
});

const Rectangle1898 = styled('div')({
  backgroundColor: `rgba(255, 228, 205, 1)`,
  borderRadius: `12px`,
  width: `30px`,
  height: `30px`,
  position: `absolute`,
  left: `414px`,
  top: `0px`,
});

const Rectangle231 = styled('div')({
  backgroundColor: `rgba(245, 245, 245, 1)`,
  borderRadius: `12px`,
  width: `47px`,
  height: `30px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Q110 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `393px`,
  top: `6px`,
});

const Q210 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `357px`,
  top: `6px`,
});

const Q310 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `321px`,
  top: `6px`,
});

const Q49 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `288px`,
  top: `6px`,
});

const Q52 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `254px`,
  top: `6px`,
});

const Q50 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `219px`,
  top: `3px`,
});

const Q81 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `187px`,
  top: `5px`,
});

const Q53 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(116, 116, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `51px`,
  top: `4px`,
});

const BoldArrowsAltArrowDo2 = styled('img')({
  height: `16px`,
  width: `16px`,
  position: `absolute`,
  left: `164px`,
  top: `23px`,
});

const BoldArrowsAltArrowDo3 = styled('img')({
  height: `16px`,
  width: `16px`,
  position: `absolute`,
  left: `421px`,
  top: `23px`,
});

// const BoldUsersUserRounded1 = styled(BoldUsersUserRounded)({
//   width: `32px`,
//   height: `32px`,
//   position: `absolute`,
//   left: `1292px`,
//   top: `489px`,
// });

// const BoldSecurityEye = styled(BoldSecurityEye)({
//   width: `19px`,
//   height: `19px`,
//   position: `absolute`,
//   left: `452px`,
//   top: `340px`,
// });

// const BoldSecurityEye1 = styled(BoldSecurityEye)({
//   width: `19px`,
//   height: `19px`,
//   position: `absolute`,
//   left: `452px`,
//   top: `418px`,
// });

// const BoldSecurityEye2 = styled(BoldSecurityEye)({
//   width: `19px`,
//   height: `19px`,
//   position: `absolute`,
//   left: `452px`,
//   top: `496px`,
// });

// const BoldSecurityEye3 = styled(BoldSecurityEye)({
//   width: `19px`,
//   height: `19px`,
//   position: `absolute`,
//   left: `452px`,
//   top: `574px`,
// });

// const BoldSecurityEye4 = styled(BoldSecurityEye)({
//   width: `19px`,
//   height: `19px`,
//   position: `absolute`,
//   left: `452px`,
//   top: `652px`,
// });

// const BoldSecurityEye5 = styled(BoldSecurityEye)({
//   width: `19px`,
//   height: `19px`,
//   position: `absolute`,
//   left: `452px`,
//   top: `730px`,
// });

const Q54 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `526px`,
  top: `338px`,
});

const Q55 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `515px`,
  top: `416px`,
});

const Q56 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `526px`,
  top: `494px`,
});

const Q57 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `513px`,
  top: `572px`,
});

const Q58 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `513px`,
  top: `650px`,
});

const Q59 = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 51, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Yekan Bakh`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `526px`,
  top: `728px`,
});

const Rectangle2768 = styled('div')({
  backgroundColor: `rgba(23, 219, 46, 1)`,
  borderRadius: `4px`,
  width: `8px`,
  height: `8px`,
  position: `absolute`,
  left: `560px`,
  top: `345px`,
});

const Rectangle2769 = styled('div')({
  backgroundColor: `rgba(222, 44, 67, 1)`,
  borderRadius: `4px`,
  width: `8px`,
  height: `8px`,
  position: `absolute`,
  left: `567px`,
  top: `423px`,
});

const Rectangle2770 = styled('div')({
  backgroundColor: `rgba(23, 219, 46, 1)`,
  borderRadius: `4px`,
  width: `8px`,
  height: `8px`,
  position: `absolute`,
  left: `560px`,
  top: `501px`,
});

const Rectangle2771 = styled('div')({
  backgroundColor: `rgba(222, 44, 67, 1)`,
  borderRadius: `4px`,
  width: `8px`,
  height: `8px`,
  position: `absolute`,
  left: `567px`,
  top: `579px`,
});

const Rectangle2772 = styled('div')({
  backgroundColor: `rgba(222, 44, 67, 1)`,
  borderRadius: `4px`,
  width: `8px`,
  height: `8px`,
  position: `absolute`,
  left: `567px`,
  top: `657px`,
});

const Rectangle2773 = styled('div')({
  backgroundColor: `rgba(23, 219, 46, 1)`,
  borderRadius: `4px`,
  width: `8px`,
  height: `8px`,
  position: `absolute`,
  left: `560px`,
  top: `735px`,
});

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Q1>
        <Rectangle17 />
        <Rectangle144 />
        <Q2>کاربران</Q2>
        <Q300114011435>
          <Q300114011435Span1>{`تاریخ ورود به سیستم:  `}</Q300114011435Span1>
          <Q300114011435Span2>{` 30/01/1401   14:35`}</Q300114011435Span2>
        </Q300114011435>
        {/* <BoldNotificationsBel /> */}
        <Rectangle145 />
        <Q5>5</Q5>
        <Rectangle3 />
        <Rectangle147 />
        <Rectangle1896 />
        <Rectangle1887 />
        <Rectangle1897 />
        <Q3>مبین کاظمی</Q3>
        <Q4>ادمین کل</Q4>
        <Mobinkazemi96GmailC>Mobinkazemi96@gmail.c...</Mobinkazemi96GmailC>
        {/* <LogoText1 src={LogoText1Image} loading="lazy" alt="logo-text 1" /> */}
        <Q6>پیشخوان</Q6>
        <Q7>مدیریت دسترسی‌ها</Q7>
        <Q8>تنظیمات سامانه</Q8>
        <Q9>کاربران</Q9>
        <Q10>مدیریت نقش‌ها</Q10>
        <Rectangle1885 />
        <Rectangle1886 />
        {/* <BoldUsersUserRounded /> */}
        <Group21>
          <Rectangle64 />
          <Group14>
            <Q11>{`خروج از حساب `}</Q11>
            {/* <BoldArrowsActionLogo
              src={BoldArrowsActionLogoImage}
              loading="lazy"
              alt="Bold / Arrows Action / Logout 2"
            /> */}
          </Group14>
        </Group21>
        {/* <BoldEssentionalUiBox /> */}
        {/* <BoldUsersUsersGroupR /> */}
        {/* <BoldUsersUserId /> */}
        {/* <BoldNetworkItProgram /> */}
        {/* <BoldSettingsFineTuni /> */}
        <Rectangle1893 />
        <Q12>لیست کاربران</Q12>
        {/* <Vector90 src={Vector90Image} loading="lazy" alt="Vector 90" /> */}
        <Rectangle1912 />
        <Rectangle1915 />
        <Rectangle1918 />
        <Rectangle1921 />
        <Rectangle1924 />
        <Rectangle1927 />
        <Q13>محمدرضا اسفندیاری</Q13>
        <Q14>متین نوروزپور</Q14>
        <Q15>مبین کاظمی</Q15>
        <Q16>حمید محمدی</Q16>
        <Q17>اهورا حامدی</Q17>
        <Q18>سید محمد کریمی</Q18>
        <Q19>1</Q19>
        <Q21>2</Q21>
        <Q31>3</Q31>
        <Q41>4</Q41>
        <Q51>5</Q51>
        <Q61>6</Q61>
        <Q20>نام کاربر</Q20>
        <Q22>ردیف</Q22>
        <Q23>نقش ایجاد شده</Q23>
        <Q24>شروع فعالیت</Q24>
        <Q25>وضعیت</Q25>
        <Q26>عملیات</Q26>
        <Q27>کارشناس شبکه کامپیوتر</Q27>
        <Q28>تکنیسین شبکه</Q28>
        <Q29>طراح محصول</Q29>
        <Q30>مدیر طراحی شبکه</Q30>
        <Q32>کارشناس شبکه کامپیوتر</Q32>
        <Q33>{`کارشناس شبکه `}</Q33>
        <Mohammadrezaesfandia>Mohammadrezaesfandiari@gmail.com</Mohammadrezaesfandia>
        <MohammadfandiariGmai>Mohammadfandiari@gmail.com</MohammadfandiariGmai>
        <Mohammadrez553Aesfan>Mohammadrez553aesfandiari@gmail.com</Mohammadrez553Aesfan>
        <MohammfandiariGmailC>Mohammfandiari@gmail.com</MohammfandiariGmailC>
        <MohammaariGmailCom>Mohammaari@gmail.com</MohammaariGmailCom>
        <Mohammadrezaesfandia1>Mohammadrezaesfandiari@gmail.com</Mohammadrezaesfandia1>
        <Rectangle1913 />
        <Rectangle1916 />
        <Rectangle1919 />
        <Rectangle1922 />
        <Rectangle1925 />
        <Rectangle1928 />
        <Rectangle1914 />
        <Rectangle1917 />
        <Rectangle1920 />
        <Rectangle1923 />
        <Rectangle1930 />
        <Rectangle1931 />
        <Rectangle1932 />
        <Rectangle1933 />
        <Rectangle1934 />
        <Rectangle1935 />
        <Rectangle1926 />
        <Rectangle1929 />
        <Q34>ویرایش کاربر</Q34>
        <Q35>ویرایش کاربر</Q35>
        <Q36>ویرایش کاربر</Q36>
        <Q37>ویرایش کاربر</Q37>
        <Q38>ویرایش کاربر</Q38>
        <Q39>ویرایش کاربر</Q39>
        <Q251404>25 اردیبهشت 1404</Q251404>
        <Q2514041>25 بهمن 1404</Q2514041>
        <Q2514042>25 اردیبهشت 1404</Q2514042>
        <Q2514043>25 آبان 1404</Q2514043>
        <Q2514044>25 اردیبهشت 1404</Q2514044>
        <Q2514045>25 خرداد 1404</Q2514045>
        <Q1435>14:35</Q1435>
        <Q14351>14:35</Q14351>
        <Q14352>14:35</Q14352>
        <Q14353>14:35</Q14353>
        <Q14354>14:35</Q14354>
        <Q14355>14:35</Q14355>
        <Rectangle13 />
        <Rectangle15 />
        <Rectangle14 />
        <Rectangle1905 />
        <Q40>فیلتر براساس:</Q40>
        <Q42>تاریخ ایجاد:</Q42>
        <Q43>نقش:</Q43>
        <Q44>جستجوی کاربر...</Q44>
        <Q45>مرتب سازی:</Q45>
        {/* <BoldArrowsAltArrowDo /> */}
        {/* <LinearSearchMinimali /> */}
        {/* <BoldArrowsAltArrowDo1 /> */}
        <Group31>
          {/* <BoldTimeCalendarDate /> */}
        </Group31>
        <Q46>تایید شده</Q46>
        <Q14040112>140401/12</Q14040112>
        <Q47>جدیدترین</Q47>
        <Rectangle641 />
        <Q48>
          <Link to='/dashboard/three'>افزودن کاربر جدید</Link>
        </Q48>
        {/* <BoldEssentionalUiAdd
          src={BoldEssentionalUiAddImage}
          loading="lazy"
          alt="Bold / Essentional, UI / Add Circle"
        /> */}
        {/* <Image src={ImageImage} loading="lazy" alt="image" /> */}
        <Image1 />
        <Image2 />
        <Image3 />
        <Image4 />
        <Image5 />
        {/* <BoldNotesDocumentAdd
          src={BoldNotesDocumentAddImage}
          loading="lazy"
          alt="Bold / Notes / Document Add"
        /> */}
        <BoldNotesDocumentAdd1 />
        <BoldNotesDocumentAdd2 />
        <BoldNotesDocumentAdd3 />
        <BoldNotesDocumentAdd4 />
        <BoldNotesDocumentAdd5 />
        {/* <BoldEssentionalUiTra /> */}
        {/* <BoldEssentionalUiTra1 /> */}
        {/* <BoldEssentionalUiTra2 /> */}
        {/* <BoldEssentionalUiTra3 /> */}
        {/* <BoldEssentionalUiTra4 /> */}
        {/* <BoldEssentionalUiTra5 /> */}
        <Group34>
          <Rectangle209 />
          <Rectangle19051 />
          <Rectangle1898 />
          <Rectangle231 />
          <Q110>1</Q110>
          <Q210>2</Q210>
          <Q310>3</Q310>
          <Q49>4</Q49>
          <Q52>5</Q52>
          <Q50>...</Q50>
          <Q81>8</Q81>
          <Q53>برو به صفحه</Q53>
          {/* <BoldArrowsAltArrowDo2
            src={BoldArrowsAltArrowDo2Image}
            loading="lazy"
            alt="Bold / Arrows / Alt Arrow Down"
          /> */}
          {/* <BoldArrowsAltArrowDo3
            src={BoldArrowsAltArrowDo3Image}
            loading="lazy"
            alt="Bold / Arrows / Alt Arrow Down"
          /> */}
        </Group34>
        {/* <BoldUsersUserRounded1 /> */}
        {/* <BoldSecurityEye /> */}
        {/* <BoldSecurityEye1 /> */}
        {/* <BoldSecurityEye2 /> */}
        {/* <BoldSecurityEye3 /> */}
        {/* <BoldSecurityEye4 /> */}
        {/* <BoldSecurityEye5 /> */}
        <Q54>فعال</Q54>
        <Q55>غیرفعال</Q55>
        <Q56>فعال</Q56>
        <Q57>غیرفعال</Q57>
        <Q58>غیرفعال</Q58>
        <Q59>فعال</Q59>
        <Rectangle2768 />
        <Rectangle2769 />
        <Rectangle2770 />
        <Rectangle2771 />
        <Rectangle2772 />
        <Rectangle2773 />
      </Q1>
    </>
  );
}
