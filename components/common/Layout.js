import styles from "@/styles/Layout.module.css";
import {Pagination,Table,Modal} from "@/components";
import Head from "next/head";
export function Layout({children}) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>{children}</main>
            <Table/>
            <Pagination/>
            <Modal/>
        </div>
    );
}
