import ThankYou from "@/components/thank-you/thank-you";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <main>
        <ThankYou />
      </main>
    </Suspense>
  )
}
