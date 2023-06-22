import { Group, Lib } from '@consta/stand';
import { Theme } from '@consta/uikit/Theme';
import React from 'react';

export const StandPageDecoration: Lib<Group>['standPageDecoration'] = (
  props,
) => {
  return <Theme preset={props.theme}>{props.children}</Theme>;
};
