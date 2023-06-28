import { Player } from 'video-react';

export interface VideoProps {
    src?: string;
}
const Video = ({ src }: VideoProps ) => {
    return(
        <Player>
        <source src={`${src}`} />
      </Player>
    );
};

export default Video;