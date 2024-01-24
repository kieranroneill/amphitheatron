import React, { FC, MutableRefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';

// data
import assets from '@app/data/assets.json';

// hooks
import useShakaPlayer from '@app/hooks/useShakaPlayer';

// types
import { IBaseExecutionProps } from '@app/types';
import { IProps } from './types';

const Container = styled.div``;
const Video = styled.video<IBaseExecutionProps>`
  width: 640px;
`;

const VideoPlayer: FC<IProps> = ({
  onLoaded,
  onComplete,
  ...baseProps
}: IProps) => {
  const videoRef: MutableRefObject<HTMLVideoElement | null> =
    useRef<HTMLVideoElement | null>(null);
  // hooks
  const { initializePlayer, loadStream, player } = useShakaPlayer({
    ...baseProps,
    onLoaded,
    onComplete,
  });

  useEffect(() => {
    (async () => {
      if (player) {
        await loadStream(assets[0]);
      }
    })();
  }, [player]);
  useEffect(() => {
    (async () => {
      if (videoRef.current && !player) {
        await initializePlayer(videoRef.current);
      }
    })();
  }, [videoRef]);

  return (
    <Container>
      <Video
        autoPlay={true}
        controls={true}
        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
        ref={videoRef}
      />
    </Container>
  );
};

export default VideoPlayer;
