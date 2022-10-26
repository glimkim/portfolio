import React from 'react';
import styled from '@emotion/styled';
import profilePic from 'assets/images/profile_img.png';

type ProfileImgType = 'square' | 'circle';

interface ProfileImgProps {
  shape: ProfileImgType;
}

function ProfileImg({ shape }: ProfileImgProps) {
  return (
    <ImageFigure shape={shape}>
      <img src={profilePic} alt="Lim Kim" />
    </ImageFigure>
  );
}

const ImageFigure = styled.figure<{ shape: ProfileImgType }>`
  width: 11rem;
  height: 11rem;
  overflow: hidden;
  border-radius: ${({ shape }) => (shape === 'circle' ? '100%' : 0)};
  border: 1px solid ${({ theme: { colors } }) => colors.border};
  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

export default ProfileImg;
