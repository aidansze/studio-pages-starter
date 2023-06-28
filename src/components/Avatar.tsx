import React from 'react';


const avatarBackground = {
  backgroundColor: '#fdd4d4',
  borderRadius: 67.5,
  height: 135,
  position: "relative",
  width: 135,
};


const avatarPic = {
  borderRadius: 67.5,
  height: 125,
  position: "relative",
  width: 125,
  left: 5,
  top: 5
};

export interface AvatarProps {
  src: string;
  alt: string;
}

export const initialProps: AvatarProps = {
  src: "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  alt: "Doggy"
}

const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <div style={avatarBackground}>
      <img style={avatarPic} alt={alt} src={src} />
    </div>
  );
};

export default Avatar;