"use client";

import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { Card } from "primereact/card";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const cardsInfo = [
    {
      label: "Guided Workflow",
      iconName: "pa-compass",
      cardDesc: "Lets you focus on the candiate .",
    },
    {
      label: "Relevant Questions",
      iconName: "pa-search",
      cardDesc: "Questions Tailored to the Job Description.",
    },
    {
      label: "Efficient",
      iconName: "pa-clock",
      cardDesc: "Ease of recording reponses.",
    },
  ];

  const header = (props: { label: string; iconName: string }) => {
    const { label, iconName } = props;
    console.log(props);
    const newIconName = "pa " + iconName;
    return (
      <div className="flex align-items-center gap-2 p-3 font-medium bg-yellow-500">
        <i className="pa pa-compass" style={{ fontSize: "1rem" }}></i>
        <div className="ml-1 text-xl">{label}</div>
      </div>
    );
  };

  return (
    <PrimeReactProvider>
      <main>
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
        <section className="text-center">
          <i className="pa pa-search" style={{ fontSize: "4rem" }}></i>
          <div className="landing-features-title text-3xl lg:text-6xl">
            {" "}
            Empowering Panelist{" "}
          </div>
          <div className="flex p-4 justify-content-center">
            {cardsInfo.map((card) => {
              const { label, iconName, cardDesc } = card;
              return (
                <Card
                  key={label}
                  header={header({
                    label: label,
                    iconName: iconName,
                  })}
                  className="m-2"
                >
                  <p>{cardDesc}</p>
                </Card>
              );
            })}
          </div>
        </section>
        <section className="landing-section-question flex flex-column text-center gap-3 fadeindown animation-duration-1000 animation-ease-out p-3 surface-200">
          <div className="text-3xl lg:text-5xl">Ask Right Questions</div>
          <div className="text-xl">
            Hundreds of carefully designed questions.
          </div>
          <div className="text-center">
            <Button
              label="Explore"
              icon="pi pi-arrow-right"
              iconPos="right"
              text
              raised
              severity="warning"
              onClick={() => router.push("/login")}
            />
          </div>
        </section>
        <section className="landing-section-coding flex flex-column text-center gap-3">
          <div className="text-3xl lg:text-5xl pt-5">Live Coding</div>
          <div className="flex flex-row justify-content-center gap-3">
            <div className="text-center border-solid border-1 border-yellow-500 p-1">
              <Link href="/login" className="no-underline">
                <img
                  src="https://codevira.com/assets/codevira-7fa3d0c1.jpg"
                  alt="CodeVira"
                  className="h-3rem"
                />
              </Link>
            </div>
            <div className="text-center border-solid border-1 border-yellow-500 p-1">
              <Link href="/login" className="no-underline">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/feather-5/24/codesandbox-512.png"
                  alt="codesandbox"
                  className="h-3rem"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PrimeReactProvider>
  );
}
