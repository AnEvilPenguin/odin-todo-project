import { div } from "../util/dom";
import penguinLogo from "../assets/logo.jpg";
import { Banner } from "./banner";
import { Sidebar } from "./sidebar";
import { Logo } from "./logo";
import { Footer } from "./footer";
import { Content } from "./content";

export function App(project) {
  return div(
    "app",
    {},
    Logo(penguinLogo),
    Banner(project),
    Sidebar(project),
    Content(project),
    Footer(),
  );
}
