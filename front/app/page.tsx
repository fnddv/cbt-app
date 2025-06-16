import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
      <main className={`flex flex-col gap-[32px] row-start-2 items-center ${styles.container}`}>
        <h1 className={styles.container__title}>정보처리기사 CBT</h1>
        <p>정보처리기사 필기시험을 위한 모의 테스트 입니다.</p>
        <Button>시작하기</Button>
      </main>
    </div>
  );
}
