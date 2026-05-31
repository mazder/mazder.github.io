import React from "react";
import "./Research.css";

const Research = () => {
  return (
    <div className="research-page">

      <h2>Research</h2>

      <p>
        My research spans high-performance computing, scientific simulation,
        quantum computing, computational modeling, and software systems.
        Throughout my academic and industrial research career, I have developed
        algorithms, software frameworks, and computational workflows for solving
        large-scale scientific and engineering problems.
      </p>

      {/* ===================== RESEARCH AREAS ===================== */}
      <h3>Research Areas</h3>

      <div className="research-areas">
        <ul>
          <li>
            <strong>Quantum Computing:</strong> Reversible logic, quantum circuit
            synthesis, optimization, template matching, and resource-efficient
            quantum architectures.
          </li>

          <li>
            <strong>High-Performance Computing (HPC):</strong> Parallel and
            distributed computing, GPU acceleration, scientific simulation,
            performance optimization, and scalable computing systems.
          </li>

          <li>
            <strong>Computational Biomechanics:</strong> MRI-driven finite element
            analysis, patient-specific modeling, mesh generation, and medical
            image processing.
          </li>

          <li>
            <strong>Memory Management Systems:</strong> Garbage collection
            simulation, JVM performance analysis, and automated memory management
            research.
          </li>
        </ul>
      </div>

      {/* ===================== EXPERIENCE ===================== */}
      <h3>Research Experience</h3>

      <div className="research-timeline">

        {/* 1 */}
        <div className="research-card">
          <h4>Honorary Research Associate</h4>
          <div className="research-meta">
            University of New Brunswick | May 2023 – Present
          </div>
          <ul>
            <li>
              Exchange expertise in high-performance computing and scientific software development.
            </li>
            <li>
              Conduct research on quantum circuit synthesis and optimization using IBM Qiskit.
            </li>
          </ul>
        </div>

        {/* 2 */}
        <div className="research-card">
          <h4>Research Assistant</h4>
          <div className="research-meta">
            Department of Mechanical Engineering, University of New Brunswick | January 2023 – Present
          </div>
          <ul>
            <li>
              Develop software tools using C/C++, Python, CUDA, and GMSH for ocean data analysis.
            </li>
            <li>
              Design workflows for CI/CD, containerization, and deployment of simulation software.
            </li>
            <li>
              Build CFD solver stacks for ACENET HPC systems.
            </li>
            <li>
              Provide consulting for HPC software deployment on GPU clusters.
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div className="research-card">
          <h4>Postdoctoral Fellow</h4>
          <div className="research-meta">
            CAS Atlantic (IBM Canada), University of New Brunswick | February 2015 – February 2016
          </div>
          <ul>
            <li>
              Research on garbage collection and JVM memory management systems.
            </li>
            <li>
              Developed automated memory event synthesis and simulation tools.
            </li>
            <li>
              Benchmarked JVM performance using SPEC and DaCapo workloads.
            </li>
            <li>
              Published peer-reviewed research in conferences and journals.
            </li>
          </ul>
        </div>

        {/* 4 */}
        <div className="research-card">
          <h4>Graduate Research Assistant (Ph.D.)</h4>
          <div className="research-meta">
            Faculty of Computer Science, University of New Brunswick | May 2010 – December 2014
          </div>
          <ul>
            <li>
              Conducted PhD research on reversible logic and quantum circuit synthesis.
            </li>
            <li>
              Developed algorithms for quantum circuit optimization and heuristics.
            </li>
            <li>
              Built visualization tools for quantum circuits (TikZ generation).
            </li>
            <li>
              Published multiple papers in journals and international conferences.
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Research;
