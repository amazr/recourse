'use client'
import { AppShell  } from "@mantine/core";
import { OptionsContract } from "./components/OptionsContract";
import { useDisclosure } from "@mantine/hooks";
import Image from 'next/image';
import styles from "./page.module.scss";


export default function Home() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{height: 60}}
      padding='md'
    >
      <AppShell.Header className={styles.header}>
        <Image src={"/logo.webp"} alt={""} width="40" height="40"/>
        Recourse
      </AppShell.Header>
      <AppShell.Main>
        <OptionsContract />
      </AppShell.Main>
    </AppShell>
  );
}
