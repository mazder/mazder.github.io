import React from "react";
import "./Teaching.css";

const Teaching = () => {
  return (
    <div className="teaching-page">

      <h2>Teaching Experience</h2>

      <p>
        My teaching experience spans undergraduate and graduate-level courses in
        computer science and engineering, including programming, systems,
        algorithms, computer architecture, and computational modeling. I have
        also contributed to curriculum development, academic supervision, and
        laboratory instruction.
      </p>

      {/* ===================== UNIVERSITY OF NEW BRUNSWICK ===================== */}
      <h3>University of New Brunswick, Canada</h3>

      <div className="teaching-card">
        <h4>Instructor (Part-time)</h4>
        <div className="pub-meta">Winter 2014</div>
        <p>CS2685 – C++ Programming for Programmers</p>
      </div>

      <div className="teaching-card">
        <h4>Graduate Teaching Assistant & Academic Assistant</h4>
        <div className="pub-meta">May 2010 – December 2014</div>

        <ul>
          <li>
            Co-taught undergraduate and graduate courses, assisted with lectures,
            assignments, labs, exams, marking, and grading.
          </li>

          <li>
            CS2253 – Machine Level Programming (Assembly & C): Fall 2011–Fall 2013
          </li>

          <li>
            CS1023 – Data Structures and Algorithms (C programming): Winter 2012–2013
          </li>

          <li>
            CS1003 – Introduction to Programming (MATLAB): Fall 2010
          </li>
        </ul>
      </div>

      {/* ===================== MBSTU ===================== */}
      <h3>Mawlana Bhashani Science and Technology University, Bangladesh</h3>

      <div className="teaching-card">
        <h4>Assistant Professor</h4>
        <div className="pub-meta">December 2008 – April 2010</div>

        <ul>
          <li>
            Served on academic and curriculum committees for undergraduate program design.
          </li>
          <li>
            Supervised thesis work on multi-valued logic and system optimization.
          </li>

          <li>CSE3101 – Operating Systems (Theory & Lab)</li>
          <li>CSE3203 – Computer Networks (Theory & Lab)</li>
          <li>CSE4103 – VLSI Design (Theory & Lab)</li>
          <li>CSE4201 – Computer Graphics and Animation (Theory & Lab)</li>
          <li>CSE1103 – Electrical Circuit Analysis (Theory & Lab)</li>
        </ul>
      </div>

      <div className="teaching-card">
        <h4>Lecturer</h4>
        <div className="pub-meta">December 2005 – December 2008</div>

        <ul>
          <li>
            Participated in curriculum development, academic committees, and
            administrative duties including proctoring and programming contests.
          </li>

          <li>CSE3101 – Operating Systems (Theory & Lab)</li>
          <li>CSE1205 – Discrete Mathematics and Linear Algebra</li>
          <li>CSE1103 – Electrical Circuit Analysis (Theory & Lab)</li>
          <li>Supervised undergraduate thesis on logic optimization</li>
        </ul>
      </div>

      {/* ===================== DHAKA INTERNATIONAL UNIVERSITY ===================== */}
      <h3>Dhaka International University, Bangladesh</h3>

      <div className="teaching-card">
        <h4>Lecturer (Part-Time)</h4>
        <div className="pub-meta">April 2004 – November 2005</div>

        <ul>
          <li>Artificial Intelligence (Prolog)</li>
          <li>Compiler Design (Lex & Flex-based labs in C)</li>
        </ul>
      </div>

      {/* ===================== MILLENNIUM UNIVERSITY ===================== */}
      <h3>The Millennium University, Bangladesh</h3>

      <div className="teaching-card">
        <h4>Lecturer (Part-Time)</h4>
        <div className="pub-meta">October 2004 – December 2005</div>

        <p>C / C++ Programming</p>
      </div>

      {/* ===================== IER DHAKA ===================== */}
      <h3>Institute of Education and Research, University of Dhaka</h3>

      <div className="teaching-card">
        <h4>Honorary Lecturer</h4>
        <div className="pub-meta">August 2008 – April 2010</div>

        <ul>
          <li>
            Taught fundamentals of computers and programming (C) to undergraduate
            and graduate students.
          </li>
          <li>
            Delivered training sessions for higher secondary school teacher educators.
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Teaching;
