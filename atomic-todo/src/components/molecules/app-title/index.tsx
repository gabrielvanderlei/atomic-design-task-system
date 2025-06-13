import { TextH1 } from "@/components/atoms/text-h1";
import { TextH2 } from "@/components/atoms/text-h2";
import styles from './index.module.css'

export const AppTitle = ({ title, subtitle }:{title:string, subtitle:string}) => (
    <div className={styles.appTitle}>
        <TextH1>{title}</TextH1>
        <TextH2>{subtitle}</TextH2>
    </div>
)