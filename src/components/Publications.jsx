import React from "react";
import "./Publications.css";

const Publications = () => {
  return (
    <div className="publication-page">

      <h2>Publications</h2>

      <p>
        My research publications span quantum computing, reversible logic,
        high-performance computing, memory systems, and computational modeling.
        Below is a list of peer-reviewed journal articles, conference papers,
        and book chapters.
      </p>

      {/* ===================== JOURNAL ===================== */}
      <h3>Journal Articles</h3>

      <div className="publication-card">
        <h4>
          An Algorithm for Quantum Template Matching
          {" "}
          <a href="https://dl.acm.org/doi/10.1145/2629537" target="_blank" rel="noreferrer">
            (Link)
          </a>
        </h4>
        <div className="pub-meta">
          ACM Journal on Emerging Technologies in Computing Systems (2014)
        </div>
        <p>
          Md Mazder Rahman, Gerhard W. Dueck, Joseph D. Horton
        </p>
      </div>

      {/* ===================== CONFERENCE ===================== */}
      <h3>Conference Papers</h3>


<div className="publication-card">
  <h4>MRI-Driven Finite Element Analysis for Patient-Specific Glioma Biomechanics</h4>

  <div className="pub-meta">
    ISMRM Annual Meeting (2026), Cape Town, South Africa
  </div>

  <p>
    Enamul H. Bhuiyan, Md Mazder Rahman, Xiaohong Joe Zhou
  </p>

 
</div>

      <div className="publication-card">
        <h4>Optimization of Circuits for IBM’s Five-Qubit Quantum Computers</h4>
        <div className="pub-meta">
          Euromicro DSD Conference (2018)
        </div>
        <p>
          Gerhard W. Dueck, Anirban Pathak, Md Mazder Rahman, et al.
        </p>
      </div>

      <div className="publication-card">
        <h4>Optimal Quantum Circuits of Three Qubits</h4>
        <div className="pub-meta">
          IEEE ISMVL (2012)
        </div>
        <p>
          Md Mazder Rahman, Gerhard W. Dueck
        </p>
      </div>

      <div className="publication-card">
        <h4>An Algorithm to Find Quantum Templates</h4>
        <div className="pub-meta">
          IEEE CEC (2012)
        </div>
        <p>
          Md Mazder Rahman, Gerhard W. Dueck
        </p>
      </div>

      <div className="publication-card">
        <h4>Integrated Synthesis of Linear Nearest Neighbor Ancilla-Free MCT Circuits</h4>
        <div className="pub-meta">
          IEEE ISMVL (2016)
        </div>
        <p>
          Md Mazder Rahman, Gerhard W. Dueck, Anupam Chattopadhyay, Robert Wille
        </p>
      </div>

      <div className="publication-card">
        <h4>An Extension of Transformation-Based Reversible and Quantum Circuit Synthesis</h4>
        <div className="pub-meta">
          IEEE ISCAS (2016)
        </div>
        <p>
          Mathias Soeken, Gerhard W. Dueck, Md Mazder Rahman, D. Michael Miller
        </p>
      </div>

      <div className="publication-card">
        <h4>GarCoSim: A Framework for Automated Memory Management Research and Evaluation</h4>
        <div className="pub-meta">
          EAI Conference (2016)
        </div>
        <p>
          Konstantin Nasartschuk, Marcel Dombrowski, Tristan Basa, Md Mazder Rahman, Kenneth Kent, Gerhard Dueck
        </p>
      </div>

      <div className="publication-card">
        <h4>Dynamic Template Matching with Mixed-Polarity Toffoli Gates</h4>
        <div className="pub-meta">
          IEEE ISMVL (2015)
        </div>
        <p>
          Md Mazder Rahman, Gerhard W. Dueck
        </p>
      </div>

      <div className="publication-card">
        <h4>Semi-Classical Quantum Gates with 2-Qubit Operations</h4>
        <div className="pub-meta">
          IWBP (2014)
        </div>
        <p>
          Md Mazder Rahman, Gerhard W. Dueck
        </p>
      </div>

      <div className="publication-card">
        <h4>Template Matching in Quantum Circuits Optimization</h4>
        <div className="pub-meta">
          Reed-Muller Workshop (2013)
        </div>
        <p>
          Md Mazder Rahman, Gerhard W. Dueck
        </p>
      </div>

      <div className="publication-card">
        <h4>An Algorithm to Find Quantum Templates</h4>
        <div className="pub-meta">
          IEEE CEC (2012)
        </div>
        <p>
          Md Mazder Rahman, Gerhard W. Dueck
        </p>
      </div>

      <div className="publication-card">
        <h4>Optimal Quantum Circuits of Three Qubits</h4>
        <div className="pub-meta">
          IEEE ISMVL (2012)
        </div>
        <p>
          Md Mazder Rahman, Gerhard W. Dueck
        </p>
      </div>

      <div className="publication-card">
        <h4>Optimization of Reversible Circuits Using Reconfigured Templates</h4>
        <div className="pub-meta">
          RC Workshop (2012)
        </div>
        <p>
          Md Mazder Rahman, Gerhard W. Dueck, Anindita Banerjee
        </p>
      </div>

      <div className="publication-card">
        <h4>Synthesis of Linear Nearest Neighbor Quantum Circuits</h4>
        <div className="pub-meta">
          IWBP (2012)
        </div>
        <p>
          Md Mazder Rahman, Gerhard W. Dueck
        </p>
      </div>

      <div className="publication-card">
        <h4>Two-Qubit Quantum Gates to Reduce Quantum Cost</h4>
        <div className="pub-meta">
          IEEE ISMVL (2011)
        </div>
        <p>
          Md Mazder Rahman, Anindita Banerjee, Gerhard W. Dueck, Anirban Pathak
        </p>
      </div>

      <div className="publication-card">
        <h4>On the Minimization of Multiple-Valued Functions</h4>
        <div className="pub-meta">
          IEEE ISMVL (2004)
        </div>
        <p>
          Hafiz Md. Hasan Babu, Moinul Islam Zaber, Md. Rafiqul Islam, Md Mazder Rahman
        </p>
      </div>

      <div className="publication-card">
        <h4>Implementation of Multiple-Valued Flip-Flops Using Pass Transistor Logic</h4>
        <div className="pub-meta">
          IEEE DSD (2004)
        </div>
        <p>
          Hafiz Md. Hasan Babu, Moinul Islam Zaber, Md Mazder Rahman, Md. Rafiqul Islam
        </p>
      </div>

      {/* ===================== THESIS ===================== */}
      <h3>Thesis</h3>

      <div className="publication-card">
        <h4>
          Ph.D. Thesis: Synthesis of Reversible Logic{" "}
          <a
            href="https://unbscholar.lib.unb.ca/items/5aa60105-3e4d-4f40-85ed-a4e07622dfd1"
            target="_blank"
            rel="noreferrer"
          >
            (Link)
          </a>
        </h4>

        <div className="pub-meta">
          University of New Brunswick (2015)
        </div>

        <p>
          Research in reversible logic, quantum circuit synthesis, and optimization techniques.
        </p>
      </div>

    </div>
  );
};

export default Publications;
