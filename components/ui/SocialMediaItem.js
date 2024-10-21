import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function SocialMediaItem({ title, icon, url }) {
  return (
    <div>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <Link href={url}>{title}</Link>
    </div>
  );
}
