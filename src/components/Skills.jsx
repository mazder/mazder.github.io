import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-page">
      <h2>Skills</h2>

      <h3>Technical Skills</h3>

      <div className="skills-card">
        <p>
          <strong>Programming Languages:</strong> C/C++, OpenMP, MPI, CUDA,
          Fortran, Python, MATLAB, Basic: OpenCL, SIMD (AVX2, AVX512), Java, C#
        </p>

        <p>
          <strong>Platforms:</strong> ACENET Supercomputing Systems (Cluster
          Management, Job Scheduler Slurm), Cloud-based HPC (Google, Nimbix,
          Rescale, Azure, AWS)
        </p>

        <p>
          <strong>Source Control:</strong> GitHub, Bitbucket, DockerHub
        </p>

        <p>
          <strong>Debugger and Profiler:</strong> GDB, CUDA-GDB, valgrind,
          Scalasca, Score-p, TAU, TotalView
        </p>

        <p>
          <strong>Applications Building & Packaging:</strong> Make, CMake,
          Spack, Docker, Kubernetes
        </p>

        <p>
          <strong>Testing Environment:</strong> Jenkins
        </p>

        <p>
          <strong>Database:</strong> SQLite, SQL
        </p>

        <p>
          <strong>Agile:</strong> Jira, Kanban board, Confluence
        </p>

        <p>
          <strong>Others:</strong> Doxygen, HTML, CSS, JavaScript
        </p>
      </div>

      <h3>Open Source Contributions</h3>

      <div className="skills-card">
        <p>
          <strong>HPC Programming:</strong> HPC example programs (vector,
          matrix manipulation, convolution) using CUDA, OpenMP, MPI, AVX
        </p>

        <p>
          <strong>Simulator:</strong> GarCoSim — a simulator for analyzing
          garbage collection algorithms using trace files for SPECjvm
          benchmarks and synthetic traces
        </p>

        <p>
          <strong>CI & Runtime Analysis:</strong> pennylane-lightning-benchmarks
          — full workflow for HPC software packaging using Spack, building with
          GCC 11.3.0 and LLVM Clang 15.0.6, deploying on bare-metal and Docker
          environments, and performance benchmarking of runtime kernels
        </p>
      </div>
    </div>
  );
};

export default Skills;
