import styled, { css } from 'styled-components';

const fontRegular = '"Circular Std Book", Arial, Helvetica, sans-serif';
const fontMedium = '"Circular Std Medium", Arial, Helvetica, sans-serif';
const fontBold = '"Circular Std Bold", Arial, Helvetica, sans-serif';
const fontBlack = '"Circular Std Black", Arial, Helvetica, sans-serif';

const baseStyles = css`
  color: ${props => props.theme.colors.text.primary};
  line-height: 1.5;
  margin: 0;
`;

const H1 = styled.h1`
  ${baseStyles}
  font-family: ${fontBlack};
  font-size: 48px;
  line-height: 1.25;
  margin-bottom: 32px;
`;

const H2 = styled.h2`
  ${baseStyles}
  font-family: ${fontBlack};
  font-size: 40px;
  font-weight: 900;
  line-height: 1.25;
  margin-bottom: 16px;
`;

const H3 = styled.h3`
  ${baseStyles}
  font-family: ${fontMedium};
  font-size: 32px;
`;

const H4 = styled.h4`
  ${baseStyles}
  font-family: ${fontMedium};
  font-size: 28px;
`;

const H5 = styled.h5`
  ${baseStyles}
  font-family: ${fontRegular};
  font-size: 24px;
`;

const H5B = styled.h5`
  ${baseStyles}
  font-family: ${fontMedium};
  font-size: 24px;
`;

const H6 = styled.h6`
  ${baseStyles}
  font-family: ${fontRegular};
  font-size: 20px;
`;

const SH = styled.p`
  ${baseStyles}
  color: ${props => props.theme.colors.text.brandPrimary};
  font-family: ${fontBold};
  font-size: 18px;
`;

const P1 = styled.p`
  ${baseStyles}
  font-family: ${fontRegular};
  font-size: 19px;
`;

const P2 = styled.p`
  ${baseStyles}
  font-family: ${fontRegular};
  font-size: 17px;
`;

const P2B = styled.p`
  ${baseStyles}
  font-family: ${fontMedium};
  font-size: 17px;
`;

const P3 = styled.p`
  ${baseStyles}
  font-family: ${fontRegular};
  font-size: 16px;
`;

const Text = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H5B,
  H6,
  SH,
  P1,
  P2,
  P2B,
  P3
};

export default Text;