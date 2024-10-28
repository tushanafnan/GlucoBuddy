import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import dataInfoImg from "../assets/dataInfo.jpeg";
import diabetesImg from "../assets/diabetes.jpeg";
import predictionImg from "../assets/prediction.jpeg";
import visualizationImg from "../assets/Visualization.jpeg";
import Testimonials from "./Testimonials/Testimonials.jsx";

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <div
        className='flex flex-col items-center justify-center h-screen w-full'
        style={{
          backgroundImage: `url(${diabetesImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0,0,0,0.4)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className='p-8 text-center space-y-6'>
          <motion.h1
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            className='text-white font-extrabold'
            style={{
              fontFamily: "'Abhaya Libre ExtraBold'",
              fontSize: "clamp(30px, 5vw, 50px)",
              lineHeight: "1.5",
              textAlign: "center",
            }}
          >
            Welcome to the Diabetes Predictor!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              delay: 1,
            }}
            className='text-white font-extrabold'
            style={{
              fontFamily: "'Abhaya Libre ExtraBold', serif",
              fontSize: "clamp(20px, 4vw, 40px)",
              lineHeight: "1.5",
              textAlign: "center",
            }}
          >
            Know your risk
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              delay: 1.2,
            }}
            className='text-white font-extrabold'
            style={{
              fontFamily: "'Abhaya Libre ExtraBold', serif",
              fontSize: "clamp(20px, 4vw, 40px)",
              lineHeight: "1.5",
              textAlign: "center",
            }}
          >
            Take control of your health.
          </motion.p>
          <br /> <br />
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.85,
              type: "spring",
              stiffness: 100,
              delay: 1.2,
            }}
            className='w-full max-w-xs'
            style={{
              background: "#FF9900",
              border: "0.7px solid #5C3200",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              margin: "0 auto",
            }}
          >
            <Link
              to='/prediction'
              className='w-full h-full flex items-center justify-center text-white font-extrabold'
              style={{
                fontFamily: "'Abhaya Libre ExtraBold', serif",
                fontSize: "clamp(14px, 3vw, 23px)",
                textAlign: "center",
                textDecoration: "none",
                backgroundColor: "transparent",
              }}
            >
              GET STARTED
            </Link>
          </motion.div>
        </div>
      </div>

      <div className='container mx-auto my-8 px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.3,
          }}
          className='text-4xl font-bold mb-8 text-purple-800 text-center'
        >
          Features
        </motion.h2>

        <div className='flex flex-col md:flex-row gap-10 bg-purple-100 justify-around items-center mb-8 md:mx-10 border p-4 rounded-md'>
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            className='md:w-2/5 mb-4 md:mb-0'
          >
            <img
              src={dataInfoImg}
              alt='Data Info'
              className='w-full h-53 object-cover rounded-md'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            className='md:w-2/3 md:pl-8 bg-purple-100 p-4 rounded-md'
          >
            <h3 className='text-2xl font-bold mb-2 text-purple-800'>
              Data Info
            </h3>
            <p className='text-gray-700 text-xl mb-4'>
              Our Data Info section gives you unparalleled insights into the
              medical data that powers our diabetes prediction model. It breaks
              down the most significant health metrics—like glucose levels, body
              mass index (BMI), age, blood pressure, insulin levels, and family
              medical history—that are crucial for predicting diabetes risk. You
              will learn how each feature influences the overall risk score,
              whether it be through direct relationships (e.g., higher glucose
              levels leading to greater risk) or subtle correlations (e.g.,
              patterns in BMI and insulin resistance). Understanding these
              individual metrics helps you grasp how our algorithm uses them
              collectively for prediction. In addition, this section provides
              statistical summaries of the dataset, showing common trends and
              key insights derived from large-scale clinical data. Equipped with
              this knowledge, you will gain a more profound understanding of
              your own health metrics and how they align with broader population
              trends.
            </p>{" "}
            <br />
            <Link
              to='/data-info'
              className='bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded transition-colors duration-300'
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        <div className='flex flex-col gap-10 md:flex-row-reverse justify-around bg-purple-100 items-center mb-8 md:mx-10 border p-4 rounded-md'>
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            className='md:w-2/5 mb-4 md:mb-0'
          >
            <img
              src={predictionImg}
              alt='Prediction'
              className='w-full h-53 object-cover rounded-md'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            className='md:w-1/2 md:pr-8 bg-purple-100 p-4 rounded-md'
          >
            <h3 className='text-2xl font-bold mb-2 text-purple-800'>
              Prediction
            </h3>
            <p className='text-gray-700 text-xl mb-4'>
              The Prediction feature employs state-of-the-art machine learning
              techniques, combining logistic regression models, ensemble
              methods, and neural networks to provide accurate and personalized
              results. Our prediction tool analyzes your input—such as blood
              glucose levels, recent weight changes, physical activity, and
              family history—to assess your risk of developing diabetes. Each
              prediction is backed by a sophisticated algorithm that has been
              trained on thousands of real-world medical records to detect
              patterns even a healthcare professional might miss. Whether you’re
              monitoring pre-diabetes or proactively managing chronic
              conditions, the tool offers actionable insights, not just a risk
              percentage. You’ll also receive tips on which areas of your health
              to focus on based on your personal results—whether that means
              lowering BMI, improving dietary choices, or monitoring glucose
              levels more frequently. Predictions are designed not just to alert
              but also to empower you to take meaningful steps toward improving
              your health outcomes.
            </p>{" "}
            <br />
            <Link
              to='/prediction'
              className='bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded transition-colors duration-300'
            >
              Get Prediction
            </Link>
          </motion.div>
        </div>

        <div className='flex flex-col md:flex-row gap-10 justify-around bg-purple-100 items-center mb-8 md:mx-10 border p-4 rounded-md'>
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            className='md:w-2/5 mb-4 md:mb-0'
          >
            <img
              src={visualizationImg}
              alt='Visualization'
              className='w-full rounded-md h-53 object-cover'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            className='md:w-1/2 md:pl-8 bg-purple-100 p-4 rounded-md'
          >
            <h3 className='text-2xl font-bold mb-2 text-purple-800'>
              Visualization
            </h3>
            <p className='text-gray-700 text-xl mb-4'>
              The Visualization section transforms complex health data into
              interactive charts and graphs that are easy to understand. It
              offers a clear picture of how different factors—such as glucose
              levels, insulin resistance, and BMI—interact over time and
              contribute to diabetes risk. The dashboard allows you to explore
              your historical health trends, comparing them with population
              averages or your past records to identify areas of improvement.
              Our visualization tools include features like line graphs to track
              glucose levels over time, scatter plots to reveal relationships
              between BMI and blood pressure, and bar charts to compare
              individual health metrics to clinical thresholds. This section is
              particularly useful for identifying trends that might not be
              apparent in raw numbers, such as gradual weight gain or subtle
              increases in fasting glucose levels. With dynamic filtering
              options, you can customize the visuals to focus on specific
              timeframes or metrics, giving you control over what you see. These
              interactive elements make it easy to share your progress with
              healthcare professionals, fostering productive discussions about
              your health goals. The visualization tools are not just about
              displaying data—they are designed to motivate change by turning
              numbers into meaningful insights.
            </p>{" "}
            <br />
            <Link
              to='/visualization'
              className='bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded transition-colors duration-300'
            >
              Visualize Data
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          delay: 1,
        }}
      >
        <Testimonials />
      </motion.div>
    </div>
  );
};

export default Home;
