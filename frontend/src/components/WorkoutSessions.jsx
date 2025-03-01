import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        The ultimate 4-day-per-week transformation program designed for rapid fat loss and lean muscle definition. 
        Combining metabolic resistance training, high-intensity endurance circuits, 
        and a precision nutrition blueprint, 
        Titan Shred guarantees visible results in just 8 weeks. 
        Our expert trainers use science-backed techniques to maximize calorie burn while preserving muscle mass, 
        making it the most effective body-recomposition plan in the fitness industry.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Get ready for an intense, results-driven bootcamp designed to push your limits and transform your body
        </p>
        <div className="bootcamps">
          <div>
            <h4>Weight Loss Training</h4>
            <p>
            3 days per week weight loss training with a 
            proper nutrition guide and effective results.
            </p>
          </div>
          <div>
            <h4>Muscle Building Program</h4>
            <p>
            5 days per week strength and hypertrophy training, 
            including personalized workout plans and diet recommendations.
            </p>
          </div>
          <div>
            <h4>General Fitness Plan</h4>
            <p>
            4 days per week full-body workouts, focusing on endurance, 
            flexibility, and overall health improvement.
            </p>
          </div>
          <div>
            <h4>Athletic Performance Training</h4>
            <p>
            6 days per week high-intensity training designed for athletes, 
            including agility, strength, and endurance drills.
            </p>
          </div>
          <div>
            <h4>Beginners Fitness Starter Pack</h4>
            <p>
            3 days per week beginner-friendly workouts, guided by professional 
            trainers to build consistency and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
