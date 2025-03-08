import React from "react";
import "../styles/home.css"; // Updated the CSS file

const Homepage = () => {
  return (
    <div>
      {/* Header */}
      <header className="hero">
        <h1>Learn, Code, Conquer!</h1>
        <p>Sharpen your skills with interactive coding challenges.</p>
      </header>

      {/* Features */}
      <section className="features">
        <div id="problem" className="feature slide-in left">
          <h2>Problem of the Day</h2>
          <p>Challenge yourself daily with new problems.</p>
        </div>
        <div id="quizzes" className="feature slide-in right">
          <h2>Quizzes</h2>
          <p>Test your coding knowledge with engaging quizzes.</p>
        </div>
        <div id="leaderboard" className="feature slide-in left">
          <h2>Leaderboard</h2>
          <p>Compete with others and climb the ranks!</p>
        </div>
        <div id="codeforces" className="feature slide-in right">
          <h2>Codeforces Integration</h2>
          <p>Coming soon! Sync your Codeforces account for personalized challenges.</p>
        </div>
        <div id="contribute" className="feature slide-in left">
          <h2>Contribute & Grow</h2>
          <p>Based on your performance, contribute to adding content! <em>(Coming Soon)</em></p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
