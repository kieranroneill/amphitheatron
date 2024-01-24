import shaka from 'shaka-player';

interface IErrorEvent extends Event {
  detail: shaka.util.Error;
  type: 'error';
}

export default IErrorEvent;
