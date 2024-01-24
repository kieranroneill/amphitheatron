import { createElement } from 'react';
import { createRoot, Root } from 'react-dom/client';

// components
import App from '@app/components/App';

// types
import type { ILogger } from '@app/types';

// utils
import createLogger from '@app/utils/createLogger';

export async function onDOMContentLoaded(): Promise<void> {
  const _functionName: string = 'onDOMContentLoaded';
  const logger: ILogger = createLogger(
    __ENV__ === 'development' ? 'debug' : 'error'
  );
  const rootElement: HTMLElement | null = document.getElementById('root');
  let root: Root;

  if (!rootElement) {
    logger.error(
      `${_functionName}: failed to find "root" element to render react`
    );

    return;
  }

  root = createRoot(rootElement);

  root.render(
    createElement(App, {
      logger,
    })
  );
}

window.addEventListener('DOMContentLoaded', onDOMContentLoaded);
