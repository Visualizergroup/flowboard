import Image from 'next/image'
import styles from './page.module.css'
import 'reactflow/dist/style.css';
import DnDFlow from './flowcomponent';
import './globals.css'
import './textupdater.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './headercomponent';


export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderComponent></HeaderComponent>
      <DnDFlow />
    </main>
  )
}
