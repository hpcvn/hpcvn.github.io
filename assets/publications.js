/*
  Publications for the Efficient Computing Research Lab website.

  To add a paper: copy one block, fill it in, save, and refresh the browser.
  The page groups entries by year (newest first) and builds the type filters itself.

  year     number, e.g. 2026
  type     "conference" | "journal" | "workshop" | "preprint" | "patent" | "thesis"
  venue    short badge text, e.g. "ISPASS 2026"
  title    paper title
  authors  list of names in paper order; names in LAB_MEMBERS are shown in bold

  LAB_MEMBERS lists everyone who was in the lab when a paper was written, including past members.
  where    full venue line
  links    list of [label, url] pairs; use [] when there is no link
*/

window.LAB_MEMBERS = [
  "T. T. Dao",
  "X. T. Nguyen",
  "H. Q. Tran",
  "T. D. Chu",
  "V. S. Pham",
  "T. S. Pham",
  "A. T. Mai"
];

window.LAB_PUBLICATIONS = [
  {
    year: 2026, type: "conference", venue: "ISPASS 2026",
    title: "TTX: Towards Autotuning Triton Kernels via Latency Prediction with XGBoost",
    authors: ["V. S. Pham", "T. S. Pham", "T. D. Chu", "X. T. Nguyen", "T. T. Dao"],
    where: "IEEE International Symposium on Performance Analysis of Systems and Software (ISPASS), 2026",
    links: [["IEEE CSDL", "https://www.computer.org/csdl/proceedings-article/ispass/2026/510300a644/2gNOOkLBrwc"]]
  },
  {
    year: 2026, type: "journal", venue: "IEEE Access",
    title: "UDP: Up-or-Down Precision Quantization for Large Language Models via Evolutionary Search",
    authors: ["A. T. Mai", "T. S. Pham", "X. T. Nguyen", "T. T. Dao"],
    where: "IEEE Access, 2026",
    links: [["IEEE Xplore", "https://ieeexplore.ieee.org/document/11471740"]]
  },
  {
    year: 2026, type: "preprint", venue: "arXiv 2026",
    title: "PEAT: Pseudo-Error Assessment for GPU Kernel Validation in DNN Training",
    authors: ["X. T. Nguyen", "H. Q. Tran", "T. D. Chu", "T. T. Dao"],
    where: "arXiv preprint arXiv:2609.13544, 2026",
    links: [["arXiv", "https://arxiv.org/abs/2609.13544"]]
  },
  {
    year: 2025, type: "conference", venue: "RIVF 2025",
    title: "Accurate Latency Predictor for Triton-Based GPU Kernels with PTX Features and XGBoost",
    authors: ["H. Q. Tran", "V. S. Pham", "T. S. Pham", "T. D. Chu", "A. T. Mai", "X. T. Nguyen", "T. T. Dao"],
    where: "RIVF International Conference on Computing and Communication Technologies, 2025",
    links: [["IEEE Xplore", "https://ieeexplore.ieee.org/document/11365185"]]
  },
  {
    year: 2025, type: "conference", venue: "RIVF 2025",
    title: "A Case Study With Concurrency and Data-Tensor Parallelism Scenarios in vLLM",
    authors: ["T. D. Chu", "T. S. Pham", "H. Q. Tran", "V. S. Pham", "A. T. Mai", "X. T. Nguyen", "T. T. Dao"],
    where: "RIVF International Conference on Computing and Communication Technologies, 2025",
    links: [["IEEE Xplore", "https://ieeexplore.ieee.org/document/11365116"]]
  },
  {
    year: 2024, type: "conference", venue: "MASCOTS 2024",
    title: "LLMPerf: GPU Performance Modeling meets Large Language Models",
    authors: ["M. K. Nguyen-Nhat", "H. D. N. Do", "H. T. Le", "T. T. Dao"],
    where: "32nd International Conference on Modeling, Analysis and Simulation of Computer and Telecommunication Systems (MASCOTS), 2024",
    links: [
      ["IEEE Xplore", "https://ieeexplore.ieee.org/document/10786558"],
      ["arXiv", "https://arxiv.org/abs/2503.11244"],
      ["Code", "https://github.com/Fsoft-AIC/LLM-Perfomance-Modeling"]
    ]
  },
  {
    year: 2021, type: "conference", venue: "PLDI 2021",
    title: "DeepCuts: A Deep Learning Optimization Framework for Versatile GPU Workloads",
    authors: ["W. Jung", "T. T. Dao", "J. Lee"],
    where: "Proceedings of the 42nd ACM SIGPLAN International Conference on Programming Language Design and Implementation (PLDI), 2021",
    links: [["ACM DL", "https://doi.org/10.1145/3453483.3454038"]]
  }
];
