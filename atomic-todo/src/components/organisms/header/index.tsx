import { TextH2 } from "@/components/atoms/text-h2";
import { AppTitle } from "@/components/molecules/app-title";
import styles from './index.module.css'

export const Header = ({ title, subtitle, description }:{ title:string, subtitle:string, description:string }) => (
    <div className="mb-1 p-5 bg-gray-200">
        <AppTitle title={title} subtitle={subtitle} />
        <TextH2 className={styles.description}>{description}</TextH2>
    </div>
)