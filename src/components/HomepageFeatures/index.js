import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    
    //title: 'Update',
    Svg: require('@site/static/svg/Page1.svg').default,
    /*description: (
      <>
        ohhhhhhhhh
      </>
    ),*/
  },
  {
    //title: 'Focus on What Matters',
    Svg: require('@site/static/svg/undraw_docusaurus_tree.svg').default,
    /*description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),*/
  },
  {
    //title: 'Powered by React',
    Svg: require('@site/static/svg/undraw_docusaurus_react.svg').default,
    /*description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),*/
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
