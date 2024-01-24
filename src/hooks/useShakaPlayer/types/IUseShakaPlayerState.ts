import shaka from 'shaka-player';

// types
import type { IAsset } from '@app/types';

interface IUseShakaPlayerState {
  error: string | null;
  initializePlayer: (videoElement: HTMLVideoElement) => Promise<void>;
  loadStream: (asset: IAsset) => Promise<void>;
  player: shaka.Player | null;
}

export default IUseShakaPlayerState;
