import { render, route } from "rwsdk/router";
import { defineApp } from "rwsdk/worker";

import { Document } from "@/app/document";
import { setCommonHeaders } from "@/app/headers";
import { Home } from "@/app/pages/home";

export type AppContext = {};

function HomePage() {
  const serverTid = new Date().toLocaleString("no-NO");
  const tilfeldigTall = Math.floor(Math.random() * 100);

  return (
    <div>
      <h1>Velkommen til Kvitter!</h1>
      <p>Din mikroblogg-plattform,</p>
      <p>Servertid: {serverTid}</p>
      <p>Tilfeldig tall: {tilfeldigTall}</p>
      <a href="/about">Om Kvitter</a>
      <br />
      <a href="/contact">Kontakt oss</a>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>Om Kvitter</h1>
      <p>Kvitter er et kursprosjekt for å lære webapplikasjonsutvikling.</p>
      <a href="/">Tilbake til forsiden</a>
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <h1>Kontakt oss:</h1>
      <p>tlf: 12345678</p>
      <p>mail: test@test</p>
      <a href="/">Tilbake til forsiden</a>
    </div>
  );
}

export default defineApp([
  setCommonHeaders(),
  ({ ctx }) => {
    // setup ctx here
    ctx;
  },
  render(Document, [
    route("/", HomePage),
    route("/about", AboutPage),
    route("/contact", ContactPage),
    route("/api/status", () => {
      return Response.json({
        app: "Kvitter",
        status: "online",
        tidspunkt: new Date().toISOString(),
      });
    }),
  ]),
]);
