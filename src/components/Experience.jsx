import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-page">
      <h2>R&D Experience</h2>

      {/* ===================== CURRENT ACADEMIC ===================== */}
      <h3>Academic Research Experience</h3>

      <div className="experience-card">
        <h4>Honorary Research Associate</h4>
        <div className="exp-meta">
          University of New Brunswick | May 2023 – Present | NB, Canada
        </div>
        <p>
          Exchange High Performance Computing (HPC) knowledge and expertise.
        </p>
      </div>

      <div className="experience-card">
        <h4>Research Assistant</h4>
        <div className="exp-meta">
          Department of Mechanical Engineering, University of New Brunswick | Jan 2023 – Present | NB, Canada
        </div>
        <ul>
          <li>
            Developed software tools using C/C++, Python, CUDA, and GMSH for ocean data analysis.
          </li>
          <li>
            Designed workflows for building, packaging, and containerizing simulation software for CI/CD.
          </li>
          <li>
            Built CFD simulation stacks for execution on ACENET HPC systems.
          </li>
          <li>
            Provided HPC consulting for GPU-based scientific computing systems.
          </li>
        </ul>
      </div>

      {/* ===================== INDUSTRY EXPERIENCE ===================== */}
      <h3>Industry Research & Development</h3>

      <div className="experience-card">
        <h4>Sr. Computational Scientist (HPC)</h4>
        <div className="exp-meta">
          JUUL LABS | Dec 2021 – Nov 2022 | NB, Canada
        </div>
        <ul>
          <li>
            Developed R&D scientific simulation software using CUDA Fortran, C/C++, OpenMP, and MPI.
          </li>
          <li>
            Designed backend systems using GKE clusters in Google Cloud Platform (Docker + Kubernetes).
          </li>
          <li>
            Implemented CI/CD pipelines for HPC GPU simulation systems in cloud and bare-metal environments.
          </li>
          <li>
            Led Data Visualization Handler (DVH) project with interactive simulation controls.
          </li>
          <li>
            Developed CFD mesh assembly tools using C/C++.
          </li>
        </ul>
      </div>

      <div className="experience-card">
        <h4>Computational Scientist (HPC)</h4>
        <div className="exp-meta">
          JUUL LABS | Feb 2020 – Dec 2021 | NB, Canada
        </div>
        <ul>
          <li>
            Conducted performance analysis of simulation workloads across K80, P100, and V100 GPUs.
          </li>
          <li>
            Optimized CUDA kernels using streams and multi-threaded execution models.
          </li>
          <li>
            Designed MPI-based Data Visualization Handler integrated with ParaView Catalyst.
          </li>
          <li>
            Developed cloud backend infrastructure for HPC simulation deployment.
          </li>
          <li>
            Evaluated cloud platforms (GCP, AWS, Azure, IBM) for HPC simulation workloads.
          </li>
          <li>
            Designed Kubernetes-based load balancing framework for simulation scaling.
          </li>
        </ul>
      </div>

      <div className="experience-card">
        <h4>Developer, Simulation Development</h4>
        <div className="exp-meta">
          JUUL LABS | Nov 2018 – Feb 2020 | NB, Canada
        </div>
        <ul>
          <li>
            Developed runtime extensible simulation kernels using CUDA/C++ APIs.
          </li>
          <li>
            Optimized build and compilation pipelines for large-scale simulation systems.
          </li>
          <li>
            Containerized simulation software using Docker for cloud deployment.
          </li>
          <li>
            Supported cloud deployment on Google Cloud and Rescale platforms.
          </li>
        </ul>
      </div>

      <div className="experience-card">
        <h4>Parallel Software Developer</h4>
        <div className="exp-meta">
          Envenio Inc. | Mar 2016 – Nov 2018 | NB, Canada
        </div>
        <ul>
          <li>
            Developed CFD domain decomposition and dynamic load balancing using METIS.
          </li>
          <li>
            Built automated performance regression testing tools using C++ and Python.
          </li>
          <li>
            Created Docker-based deployment pipelines for HPC simulation software.
          </li>
          <li>
            Released and maintained licensed HPC software on cloud and bare-metal systems.
          </li>
          <li>
            Supported HPC infrastructure and R&D system maintenance.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
