import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import HeroImg from './img/hero_main.svg'

import styles from './index.module.css';

const svgList = [
  {
    title: 'github',
    Svg: require('./img/github.svg').default,
    color: 'black',
    link: 'https://github.com/hikyuuPX',
  },
  {
    title: 'csdn',
    Svg: require('./img/csdn.svg').default,
    link: 'https://blog.csdn.net/Eternally_Time',
  },
]

const Svg = ({ Svg, color, title, link }) => {
  return (
    <a href={link} target='_blank'>
      <Svg className={styles.svg} style={{ fill: color }} />
    </a>
  )
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.myHeroContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.leftContainer_h1}>Hello👋</h1>
        <p className={styles.leftContainer_p}>我在这里记录一些知识，以免遗忘，也希望对你有用，请随意浏览～</p>
      </div>
      <div className={styles.rightContainer}>
        <img src={HeroImg} alt='HeroImg' width="200" height="200"/>
      </div>
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
