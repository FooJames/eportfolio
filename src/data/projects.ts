export interface Project {
  title: string;
  badge: string;
  desc: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "StabiliRead",
    badge: "In progress",
    desc: "Undergraduate thesis: gaze-based reading assistance for Android. The prototype uses gaze estimation to activate four forms of visual assistance, and a Python and Jupyter workflow validates recordings, visualizes gaze patterns, and exports structured research datasets.",
    url: "https://github.com/JedidiahJulian/newsmead",
  },
  {
    title: "Contextual Child Safety Risk Detector",
    badge: "Team project",
    desc: "DEEPLRN group project. Two independently trained YOLOv8n detectors, one for children and one for 12 classes of household hazard, are fused by a distance rule that labels each frame Safe or Unsafe. Validation mAP50 was 0.955 for the child detector and 0.566 for the hazard detector.",
    url: "https://github.com/FooJames/DEEPLRN_Group2",
  },
  {
    title: "Machine Translation for Yami",
    badge: "Course project",
    desc: "NLP1000 Project 3. Fine-tuned MarianMT models to translate Yami, a low-resource Philippine language, and tested whether augmenting with Tagalog, Cebuano, Maranao, and Hiligaynon data improves performance.",
    url: "https://github.com/FooJames/NLP1000-MCO3",
  },
  {
    title: "Kabuhayan DB",
    badge: "Team project",
    desc: "Team-developed database system to digitize the administrative processes of SKMLHOAI, for a local government unit. I was the backend tester. The scope covers member and household records, dues tracking, certification generation, and accreditation autofill.",
    url: "https://github.com/cssweng-skmlhoai/kabuhayandb-backend",
  },
];
