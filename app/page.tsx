"use client";

import { Button } from "primereact/button";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <PrimeReactProvider>
      <main className="">
        <section className="landing-hero-content h-22rem text-center flex flex-column flex-shrink-0 justify-content-center mb-5 gap-6">
          <div className="landing-title p-20 text-7xl lg:text-8xl flex flex-row justify-content-center align-items-center gap-4">
            <img
              src="/images/copilot.png"
              className="p-3 h-5rem border-round-3xl bg-white"
              alt="Capilot Image"
            />
            <span> Copilot for Interviews </span>
          </div>
          <div className="w-0.5rem">
            <Button
              className="p-ripple p-element p-button p-component p-button-raised p-button-rounded"
              icon="pi pi-bolt"
              label="Get Started"
              onClick={() => router.push("/login")}
            />
          </div>
        </section>
      </main>
    </PrimeReactProvider>
  );
}
