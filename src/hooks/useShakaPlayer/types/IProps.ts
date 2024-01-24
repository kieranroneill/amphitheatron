// types
import type { IAsset, IBaseProps } from '@app/types';

interface IProps extends IBaseProps {
  onLoaded: (asset: IAsset) => void;
  onComplete: (asset: IAsset) => void;
}

export default IProps;
