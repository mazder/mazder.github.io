import React from "react";
import "./ProfessionalActivities.css";

const ProfessionalActivities = () => {
  return (
    <div className="activity-page">

      <h2>Professional Activities</h2>

      <p>
        My professional activities include academic society memberships, conference participation,
        peer review contributions, scholarships, and community engagement in both research and
        educational environments.
      </p>

      {/* ===================== MEMBERSHIP ===================== */}
      <h3>Membership</h3>

      <div className="activity-card">
        <p>2014–2015</p>
        <p><strong>IEEE Graduate Student Membership</strong></p>
      </div>

      <div className="activity-card">
        <p>2012–2014</p>
        <p><strong>IEEE Computer Society & Student Membership</strong></p>
      </div>

      <div className="activity-card">
        <p>2013–2014</p>
        <p><strong>IEEE Student Branch Membership</strong>, University of New Brunswick</p>
      </div>

      {/* ===================== CONFERENCES ===================== */}
      <h3>Conference Participation</h3>

      <div className="activity-card">
        <p><strong>SC19</strong> — Nov 17–22, 2019</p>
        <p>
          International Conference for High Performance Computing, Networking, Storage, and Analysis,
          Denver, Colorado, USA.
        </p>
      </div>

      <div className="activity-card">
        <p><strong>RC2012</strong> — July 2–3, 2012</p>
        <p>4th Workshop on Reversible Computation, Copenhagen, Denmark.</p>
      </div>

      <div className="activity-card">
        <p><strong>RC2011</strong> — July 4–5, 2011</p>
        <p>3rd Workshop on Reversible Computation, Gent, Belgium.</p>
      </div>

      {/* ===================== PEER REVIEW ===================== */}
      <h3>Peer Reviewer</h3>

      <div className="activity-card">
        <ul>
          <li>IEEE ISMVL (2011, 2015)</li>
          <li>Journal of Multiple-Valued Logic and Soft Computing (2012, 2013)</li>
          <li>LAGOS Symposium (2015)</li>
        </ul>
      </div>

      {/* ===================== GRANTS ===================== */}
      <h3>Grants & Scholarships</h3>

      <div className="activity-card">
        <ul>
          <li>2010–2014 — Graduate Research Assistant / Teaching Assistant, University of New Brunswick</li>
          <li>2010–2014 — International Differential Scholarship, University of New Brunswick</li>
          <li>2009–2010 — Travel Grant for Higher Studies, Sweden Bangladesh Trust Fund</li>
        </ul>
      </div>

      {/* ===================== COMMUNITY ===================== */}
      <h3>Community Activities</h3>

      <div className="activity-card">
        <ul>
          <li>Councillor & Peer Mentor — Computer Science Graduate Student Association, UNB (2013–2014)</li>
          <li>Volunteer — Ability New Brunswick, Feast in the Field (2014)</li>
          <li>
            Member — “Badhon” Blood Donation Organization, University of Dhaka (1997–2005)
          </li>
        </ul>
      </div>

    </div>
  );
};

export default ProfessionalActivities;
