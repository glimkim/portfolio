import React from 'react';
import styled from '@emotion/styled';
import Bn01 from 'assets/images/item_bn_01.png';
import Bn02 from 'assets/images/item_bn_02.png';
import Bn03 from 'assets/images/item_bn_03.png';
import Bn04 from 'assets/images/item_bn_04.png';
import Bn05 from 'assets/images/item_bn_05.png';
import Bn06 from 'assets/images/item_bn_02.png';
import Bn07 from 'assets/images/item_bn_08.png';
import Bn08 from 'assets/images/item_bn_08.png';
import WorkItem from './WorkItem';

export interface ItemInfo {
  title: string;
  date: string;
  link: string;
  gitLink: string;
  description: string;
  img: string;
  gitCodeDisabled?: boolean;
}

const workList: ItemInfo[] = [
  {
    title: 'Toons',
    date: '01. 06. 2022 - 14. 10. 2022',
    link: 'https://toons.jinwoo.space/',
    gitLink: 'https://github.com/glimkim/portfolio',
    description:
      'Mauris efficitur sit amet augue a blandit. Aenean molestie odio id nisi semper sollicitudin in sit amet felis. Cras sed nisi sapien. Quisque rhoncus accumsan ultricies. Nullam sit amet turpis in enim faucibus congue. Aenean efficitur gravida dui, sit amet porttitor tellus sagittis et massa, in blandit elit.',
    img: Bn01,
  },
  {
    title: 'Toons Components',
    date: '01. 06. 2022 - 24. 09. 2022',
    link: 'https://toons.jinwoo.space/',
    gitLink: 'https://github.com/glimkim/portfolio',
    description:
      'Mauris efficitur sit amet augue a blandit. Aenean molestie odio id nisi semper sollicitudin in sit amet felis. Cras sed nisi sapien. Quisque rhoncus accumsan ultricies. Nullam sit amet turpis in enim faucibus congue. Aenean efficitur gravida dui, sit amet porttitor tellus sagittis et massa, in blandit elit.',
    img: Bn02,
  },
  {
    title: 'StepPay',
    date: '21. 06. 2021 - 30. 06. 2022',
    link: 'https://www.steppay.kr/',
    gitLink: '',
    description:
      '<b>Payment Solution Software Service</b> Mauris efficitur sit amet augue a blandit. Aenean molestie odio id nisi semper sollicitudin in sit amet felis. Cras sed nisi sapien. Quisque rhoncus accumsan ultricies. Nullam sit amet turpis in enim faucibus congue. Aenean efficitur gravida dui, sit amet porttitor tellus sagittis et massa, in blandit elit.',
    img: Bn03,
  },
  {
    title: 'Lmitter',
    date: '24. 04. 2021 - 15. 05. 2021',
    link: 'https://hellolimi.github.io/lmitter/#/',
    gitLink: '',
    description:
      ' - Social Media SPA Mauris efficitur sit amet augue a blandit. Aenean molestie odio id nisi semper sollicitudin in sit amet felis. Cras sed nisi sapien. Quisque rhoncus accumsan ultricies. Nullam sit amet turpis in enim faucibus congue. Aenean efficitur gravida dui, sit amet porttitor tellus sagittis et massa, in blandit elit.',
    img: Bn04,
  },
  {
    title: 'LimChat',
    date: '28. 03. 2021 - 08. 04. 2021',
    link: 'https://www.steppay.kr/',
    gitLink: '',
    description:
      ' - Real Time Open Talk Mauris efficitur sit amet augue a blandit. Aenean molestie odio id nisi semper sollicitudin in sit amet felis. Cras sed nisi sapien. Quisque rhoncus accumsan ultricies. Nullam sit amet turpis in enim faucibus congue. Aenean efficitur gravida dui, sit amet porttitor tellus sagittis et massa, in blandit elit.',
    img: Bn05,
  },
  {
    title: 'ASTELL & KERN',
    date: '28. 02. 2021 - 08. 03. 2021',
    link: 'https://glimkim.github.io/AstellnKern_Renewal_Project/',
    gitLink: '',
    description:
      '- Rebranding Website Mauris efficitur sit amet augue a blandit. Aenean molestie odio id nisi semper sollicitudin in sit amet felis. Cras sed nisi sapien. Quisque rhoncus accumsan ultricies. Nullam sit amet turpis in enim faucibus congue. Aenean efficitur gravida dui, sit amet porttitor tellus sagittis et massa, in blandit elit.',
    img: Bn06,
  },
  {
    title: 'BookAnd',
    date: '31. 12. 2020 - 15. 02. 2021',
    link: 'https://www.steppay.kr/',
    gitLink: '',
    description:
      'Mauris efficitur sit amet augue a blandit. Aenean molestie odio id nisi semper sollicitudin in sit amet felis. Cras sed nisi sapien. Quisque rhoncus accumsan ultricies. Nullam sit amet turpis in enim faucibus congue. Aenean efficitur gravida dui, sit amet porttitor tellus sagittis et massa, in blandit elit.',
    img: Bn07,
  },
  {
    title: 'Baekmidang',
    date: '24. 04. 2020 - 11. 05. 2020',
    link: 'https://glimkim.github.io/Baekmidang_Renewal_Project_PC/',
    gitLink: '',
    description:
      'Mauris efficitur sit amet augue a blandit. Aenean molestie odio id nisi semper sollicitudin in sit amet felis. Cras sed nisi sapien. Quisque rhoncus accumsan ultricies. Nullam sit amet turpis in enim faucibus congue. Aenean efficitur gravida dui, sit amet porttitor tellus sagittis et massa, in blandit elit.',
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
