import styles from './Loader.module.css';
import { Flex, Spin } from 'antd';

const Loader: React.FC = () => (
  <Flex align="center" gap="middle">
    <Spin className={styles['spinner']} size="large" />
  </Flex>
);

export default Loader;
