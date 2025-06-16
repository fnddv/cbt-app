import styles from "../page.module.scss";

export default function Test() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8">
      <main className={`flex flex-col gap-[32px] row-start-2 ${styles.container__page}`}>
        <header className={styles.container__page__header}>
          <h1>정보처리기사 필기 모의고사</h1>
          <div className={styles.container__page__header__time}>제한시간 <span></span> / 
          <b className="text-destructive"> 잔여시간 <span></span></b></div>
        </header>

        {/* Q */}
        {/* A */}

        {/* buttons */}
      </main>
    </div>
  );
}
