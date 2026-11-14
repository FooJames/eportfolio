export interface Sample {
  title: string;
  project: string;
  desc: string;
  file: string; // path under /public, without the base prefix
}

export const samples: Sample[] = [
  {
    title: "Contextual Child Safety Risk Detector: report",
    project: "DEEPLRN Group 2 (with Stephen Co and Nathaniel Tolentino)",
    desc: "Written report on detecting children and household hazards with two independently trained YOLOv8n models and a distance-rule fusion.",
    file: "/files/deeplrn-group2-report.pdf",
  },
  {
    title: "Contextual Child Safety Risk Detector: presentation",
    project: "DEEPLRN Group 2 (with Stephen Co and Nathaniel Tolentino)",
    desc: "Slides covering the two-detector design, the distance-rule fusion, and the results.",
    file: "/files/deeplrn-group2-presentation.pdf",
  },
];
