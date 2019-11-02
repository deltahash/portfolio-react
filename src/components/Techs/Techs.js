import React from 'react';
import uuidv4 from 'uuid/v4';

import TechItem from './TechItem/TechItem';

import classes from './Techs.module.css';

import ReactImage from '../../assets/images/ic_react.svg';
import DotnetImage from '../../assets/images/ic_dotnet.svg';
import AndroidImage from '../../assets/images/ic_android.svg';
import IosImage from '../../assets/images/ic_ios.svg';

const techItemsData = [
  {
    id: uuidv4(),
    title: 'React',
    imageSrc: ReactImage
  },
  {
    id: uuidv4(),
    title: 'Dotnet Core',
    imageSrc: DotnetImage
  },
  {
    id: uuidv4(),
    title: 'Android',
    imageSrc: AndroidImage
  },
  {
    id: uuidv4(),
    title: 'iOS',
    imageSrc: IosImage
  }
];

const Techs = () => {
  const techItemsWindow = techItemsData.map(techItem => (
    <div key={techItem.id}>
      <TechItem src={techItem.imageSrc} title={techItem.title} />
    </div>
  ));

  return (
    <div>
      <div className="globalWindowDisplay">
        <div className={classes.TechsWindow}>{techItemsWindow}</div>
      </div>
      <div className="mobileDisplay">
        <div className={classes.TechsMobile}>
          <div className={classes.TopLayer}>
            <div className={classes.BottomLayer}>
              <TechItem
                src={techItemsData[0].imageSrc}
                title={techItemsData[0].title}
              />
            </div>
            <div className={classes.BottomLayer}>
              <TechItem
                src={techItemsData[1].imageSrc}
                title={techItemsData[1].title}
              />
            </div>
          </div>
          <div className={classes.TopLayer}>
            <div className={classes.BottomLayer}>
              <TechItem
                src={techItemsData[2].imageSrc}
                title={techItemsData[2].title}
              />
            </div>
            <div className={classes.BottomLayer}>
              <TechItem
                src={techItemsData[3].imageSrc}
                title={techItemsData[3].title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techs;
