/* eslint-disable no-else-return, eqeqeq */
import React from 'react';

import SettingBottAttack from './AttackBoss';
import SettingAttackBossShowCode from './AttackBossShowCode';
import SettingComment from './Comment';
import SettingVoteGifts from './VoteGifts';
import SettingTakeCarePet from './TakeCarePet';
import SettingRace from './Race';

const WidgetSetting = ({ widget = {}, usedWidget = {}, eventDetail = {} }) => {
  console.log('widget', widget);
  if (widget.name == 'Đánh boss') {
    return (
      <SettingBottAttack
        widget={widget}
        usedWidget={usedWidget}
        eventDetail={eventDetail}
      />
    );
  } else if (widget.name == 'Vote quà') {
    return (
      <SettingVoteGifts
        widget={widget}
        usedWidget={usedWidget}
        eventDetail={eventDetail}
      />
    );
  } else if (widget.name == 'Comment' || widget.name == 'Top comment') {
    return (
      <SettingComment
        widget={widget}
        usedWidget={usedWidget}
        eventDetail={eventDetail}
      />
    );
  } else if (widget.name == 'Đánh boss hiện code') {
    return (
      <SettingAttackBossShowCode
        widget={widget}
        usedWidget={usedWidget}
        eventDetail={eventDetail}
      />
    );
  } else if (widget.name == 'Nuôi pet') {
    return (
      <SettingTakeCarePet
        widget={widget}
        usedWidget={usedWidget}
        eventDetail={eventDetail}
      />
    );
  } else if (widget.name == 'Đua ngựa') {
    return (
      <SettingRace
        widget={widget}
        usedWidget={usedWidget}
        eventDetail={eventDetail}
      />
    );
  }
  // switch (widget.name) {
  //   case 'Đánh boss':
  //     return (
  //       <SettingBottAttack
  //         widget={widget}
  //         usedWidget={usedWidget}
  //         eventDetail={eventDetail}
  //       />
  //     );

  //   case 'Vote quà':
  //     return (
  //       <SettingVoteGifts
  //         widget={widget}
  //         usedWidget={usedWidget}
  //         eventDetail={eventDetail}
  //       />
  //     );

  //   case 'Comment':
  //   case 'Top comment':
  //     return (
  //       <SettingComment
  //         widget={widget}
  //         usedWidget={usedWidget}
  //         eventDetail={eventDetail}
  //       />
  //     );

  //   case 'Đánh boss hiện code':
  //     return (
  //       <SettingAttackBossShowCode
  //         widget={widget}
  //         usedWidget={usedWidget}
  //         eventDetail={eventDetail}
  //       />
  //     );

  //   case 'Nuôi pet':
  //     return (
  //       <SettingTakeCarePet
  //         widget={widget}
  //         usedWidget={usedWidget}
  //         eventDetail={eventDetail}
  //       />
  //     );

  //   case 'Đua ngựa':
  //     return (
  //       <SettingRace
  //         widget={widget}
  //         usedWidget={usedWidget}
  //         eventDetail={eventDetail}
  //       />
  //     );

  //   default:
  //     return (
  //       <SettingRace
  //         widget={widget}
  //         usedWidget={usedWidget}
  //         eventDetail={eventDetail}
  //       />
  //     );
  // }
  // return (

  // );
};

export default WidgetSetting;
