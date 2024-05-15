import { Flex, Spin } from 'antd';
import styles from './Loader.module.css';

const Loader: React.FC = () => (
  <Flex align="center" gap="middle">
    <Spin className={styles['spinner']} size="large" />
  </Flex>
);

export default Loader;
