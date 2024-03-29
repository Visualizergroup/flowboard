import Image from 'next/image'
import styles from './page.module.css'
import 'reactflow/dist/style.css';
import DnDFlow from './flowcomponent';
import './globals.css'
import './textupdater.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <main className={styles.main}>
      <DnDFlow />
    </main>
  )
}
