import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import shaka from 'shaka-player';

// types
import { IAsset } from '@app/types';
import { IErrorEvent, IProps, IUseShakaPlayerState } from './types';

export default function useShakaPlayer({
  onComplete,
  onLoaded,
  logger,
}: IProps): IUseShakaPlayerState {
  const _hookName: string = 'useShakaPlayer';
  const { t } = useTranslation();
  // states
  const [asset, setAsset] = useState<IAsset | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [player, setPlayer] = useState<shaka.Player | null>(null);
  // actions
  const initializePlayer = async (videoElement: HTMLVideoElement) => {
    const _functionName: string = 'initializePlayer';
    let _player: shaka.Player;

    // error if browser is not supported
    if (!shaka.Player.isBrowserSupported()) {
      setError(t('errors.browserNotSupported'));

      return;
    }

    // if the previous player has an element attached, remove it
    if (player) {
      logger.debug(
        `${_hookName}#${_functionName}: removing previous shaka player`
      );

      await player.detach();
      await player.destroy();
    }

    logger.debug(
      `${_hookName}#${_functionName}: initializing new shaka player`
    );

    _player = new shaka.Player();
    await _player.attach(videoElement); // attach the html element

    setPlayer(_player);
  };
  const loadStream = async (_asset: IAsset) => {
    const _functionName: string = 'loadStream';

    if (!player) {
      logger.error(
        `${_hookName}#${_functionName}: attempted to load source before player was initialized`
      );

      setError(t('captions.playerNotInitialized'));

      return;
    }

    logger.debug(
      `${_hookName}#${_functionName}: loading new stream "${_asset.title}"`
    );

    await player.load(_asset.uri);

    logger.debug(
      `${_hookName}#${_functionName}: successfully loaded new stream "${_asset.title}"`
    );

    onLoaded(_asset);

    setAsset(_asset);
  };
  // handlers
  const handleCompleteEvent = () => {
    const _functionName: string = 'handleCompleteEvent';

    if (asset) {
      logger.debug(
        `${_hookName}#${_functionName}: stream "${asset.title}" complete`
      );

      onComplete(asset);
    }
  };
  const handleErrorEvent = (event: unknown) => {
    console.log((event as IErrorEvent).detail);
  };

  useEffect(() => {
    if (player) {
      player.addEventListener('complete', handleCompleteEvent);
      player.addEventListener('error', handleErrorEvent);
    }

    return function cleanup() {
      if (player) {
        player.removeEventListener('complete', handleCompleteEvent);
        player.removeEventListener('error', handleErrorEvent);
      }
    };
  }, [player]);

  return {
    error,
    initializePlayer,
    loadStream,
    player,
  };
}
