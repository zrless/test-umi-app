import styles from './index.less';

export default function IndexPage() {
  console.log(location.pathname);
  const id = location.pathname.split("/")[1]
  return (
    <div>
      <h1 className={styles.title}>Page {id}</h1>
    </div>
  );
}
