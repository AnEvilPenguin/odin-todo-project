import { Banner } from "./components/banner";

export function changeProject(project, header) {
    header.textContent = '';

    const banner = Banner(project);
    header.appendChild(banner);
}

