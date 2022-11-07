import React from 'react';
import styled from '@emotion/styled';
import Bn01 from 'assets/images/item_bn_01.png';
import Bn02 from 'assets/images/item_bn_02.png';
import Bn03 from 'assets/images/item_bn_03.png';
import Bn04 from 'assets/images/item_bn_04.png';
import Bn05 from 'assets/images/item_bn_05.png';
import Bn06 from 'assets/images/item_bn_06.png';
import Bn07 from 'assets/images/item_bn_07.png';
import Bn08 from 'assets/images/item_bn_08.png';
import WorkItem from './WorkItem';

export interface ItemInfo {
  title: string;
  date: string;
  link: string;
  gitLink: string;
  stacks: string;
  description: React.ReactNode;
  img: string;
  gitCodeDisabled?: boolean;
}

const workList: ItemInfo[] = [
  {
    title: 'Toons',
    date: '01. 06. 2022 - 14. 10. 2022',
    link: 'https://toons.jinwoo.space/',
    gitLink: 'https://github.com/glimkim/toons',
    stacks: 'ReactJS, TypeScript, react-query, Redux, styled-components',
    description: (
      <ul>
        <li>
          Designed/Developed a responsive single-page React app that shows the
          entire cartoon list of 2 main web-cartoon platforms in Korea
        </li>
        <li>
          Implemented the features that users can get notified of their favorite
          cartoons when the season is finished
        </li>
        <li>Carried out the project collaborating a backend developer</li>
      </ul>
    ),
    img: Bn01,
  },
  {
    title: 'Toons Components',
    date: '01. 06. 2022 - 24. 09. 2022',
    link: 'https://glimkim.github.io/toons-ui-components/?path=/story/toons-ui-intro--page',
    gitLink: 'https://github.com/glimkim/toons-ui-components',
    stacks: 'ReactJS, TypeScript, Storybook, styled-components, rollup',
    description: (
      <ul>
        <li>
          Developed a component library for the Toons project above using
          Storybook, React JS, TypeScript, styled-components, and rollup
        </li>
        <li>Aimed to create reusable components</li>
      </ul>
    ),
    img: Bn02,
  },
  {
    title: 'StepPay',
    date: '21. 06. 2021 - 30. 06. 2022',
    link: 'https://www.steppay.kr/',
    gitLink: '',
    stacks:
      'ReactJS, TypeScript, JavaScript, react-query, recoil, Redux, NextJS, emotion, webpack',
    description: (
      <ul>
        <li>
          Designed/Developed online shopping websites that are auto-generated
          based on Steppay&apos;s subscription payment solution service
        </li>
        <li>
          Built a Software Development Kit using webpack, React JS, and
          Typescript
        </li>
        <li>
          White-labeled website builder feature of Duda, and added customized
          features with JavaScript
        </li>
        <li>Maintained and advanced the services of StepPay portal</li>
      </ul>
    ),
    img: Bn03,
    gitCodeDisabled: true,
  },
  {
    title: 'Lmitter',
    date: '24. 04. 2021 - 15. 05. 2021',
    link: 'https://hellolimi.github.io/lmitter/#/',
    gitLink: 'https://github.com/glimkim/lmitter',
    stacks: 'ReactJS, Firebase, SCSS',
    description: (
      <ul>
        <li>Designed a social media platform that shares real-time contents</li>
        <li>Developed a responsive single-page app using React JS and SCSS</li>
        <li>
          Implemented CRUD, “like” and “comment” features to the app using
          Firebase
        </li>
      </ul>
    ),
    img: Bn04,
  },
  {
    title: 'LimChat',
    date: '28. 03. 2021 - 08. 04. 2021',
    link: 'https://limchat.herokuapp.com/',
    gitLink: 'https://github.com/glimkim/limChat',
    stacks: 'Node.js, JavaScript, Express.js, socket.io, HTML, CSS',
    description: (
      <ul>
        <li>Developed a real-time open chat room</li>
        <li>Created a server using Node.js and Express.js framework</li>
        <li>
          Connected data between client-side and server-side using socket.io
        </li>
        <li>
          Designed a responsive interface for the app using JavaScript, HTML,
          CSS, and Adobe XD
        </li>
      </ul>
    ),
    img: Bn05,
  },
  {
    title: 'ASTELL & KERN',
    date: '28. 02. 2021 - 08. 03. 2021',
    link: 'https://glimkim.github.io/AstellnKern_Renewal_Project/',
    gitLink: 'https://github.com/glimkim/AstellnKern_Renewal_Project',
    stacks: 'JavaScript, jQuery, HTML, CSS',
    description: (
      <ul>
        <li>
          Designed a responsive main page of the Astell n Kern website that
          responds to any screen size using JavaScript, jQuery, HTML, CSS, and
          Adobe XD
        </li>
        <li>
          Implemented animated effects interacting with scrolling with jQuery
        </li>
      </ul>
    ),
    img: Bn06,
  },
  {
    title: 'BookAnd',
    date: '31. 12. 2020 - 15. 02. 2021',
    link: 'http://bookand.dothome.co.kr/',
    gitLink: 'https://github.com/glimkim/BookAnd_Rebranding_Project_PC',
    stacks: 'JavaScript, jQuery, HTML, CSS',
    description: (
      <ul>
        <li>
          Designed 38 interactive PC/mobile pages of the BookAnd website using
          JavaScript, jQuery, HTML, CSS, and Photoshop
        </li>
        <li>
          Developed Join/login, CRUD for a notice board, and Q&A board in the
          website using PHP and MySQL
        </li>
        <li>Optimised in accordance with WEB accessibility standards</li>
      </ul>
    ),
    img: Bn07,
  },
  {
    title: 'Baekmidang',
    date: '24. 04. 2020 - 11. 05. 2020',
    link: 'https://glimkim.github.io/Baekmidang_Renewal_Project_PC/',
    gitLink: 'https://github.com/glimkim/Baekmidang_Renewal_Project_PC',
    stacks: 'JavaScript, jQuery, HTML, CSS',
    description: (
      <ul>
        <li>Designed PC and mobile Baekmidang main page</li>
        <li>
          Utilized HTML, CSS, and jQuery to create the renewal website&apos;s
          main page
        </li>
        <li>
          Created a photo fader and animated effects interacting with scrolling
          using jQuery
        </li>
        <li>Optimised in accordance with WEB accessibility standards </li>
      </ul>
    ),
    img: Bn08,
  },
];

function WorkList() {
  return (
    <List>
      {workList.map((_item, index) => (
        <WorkItem key={_item.title} itemInfo={_item} index={index} />
      ))}
    </List>
  );
}

const List = styled.ul`
  margin-bottom: 5rem;
`;

export default WorkList;
