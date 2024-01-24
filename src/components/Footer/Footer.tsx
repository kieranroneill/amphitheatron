import React, { FC } from 'react';
import { Trans } from 'react-i18next';
import styled from 'styled-components';

// components
import Text from '@app/components/Text';

// constants
import { KIERAN_ONEILL_WEBSITE_LINK } from '@app/constants';

// types
import { IBaseExecutionProps } from '@app/types';

const Inner = styled.div<IBaseExecutionProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing['3.5']}
    ${(props) => props.theme.spacing['5']};
`;
const Outer = styled.footer`
  width: 100%;
`;

const Footer: FC = () => {
  return (
    <Outer>
      <Inner>
        <Text size="sm">{`v${__VERSION__}`}</Text>

        <Text size="sm">
          <Trans i18nKey="captions.developedBy">
            Developed with ❤️ by{' '}
            <a
              href={KIERAN_ONEILL_WEBSITE_LINK}
              rel="noreferrer"
              target="_blank"
            >
              {`Kieran O'Neill`}
            </a>
          </Trans>
        </Text>
      </Inner>
    </Outer>
  );
};

export default Footer;
