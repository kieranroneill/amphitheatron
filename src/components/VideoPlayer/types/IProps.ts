// types
import type { IAsset, IBaseProps } from '@app/types';

interface IProps extends IBaseProps {
  onComplete: (asset: IAsset) => void;
  onLoaded: (asset: IAsset) => void;
}

export default IProps;
