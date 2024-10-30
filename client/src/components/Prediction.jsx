/* eslint-disable no-unused-vars */
import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

// Debounce function to delay validation
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const Prediction = () => {
  const [userInput, setUserInput] = useState({
    Age: "",
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    Insulin: "",
    BMI: "",
    SkinThickness: "",
    DPF: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const ranges = {
    Age: "0 - 120",
    Pregnancies: "0 - 20",
    Glucose: "0 - 300",
    BloodPressure: "0 - 180",
    Insulin: "0 - 600",
    BMI: "10 - 60",
    SkinThickness: "0 - 100",
    DPF: "0.0 - 2.5",
  };

  const validateInput = (name, value) => {
    const range = ranges[name].split(" - ");
    const min = parseFloat(range[0]);
    const max = parseFloat(range[1]);
    return value >= min && value <= max;
  };

  const debouncedValidation = useRef(
    debounce((name, value) => {
      if (!validateInput(name, value)) {
        setButtonDisabled(true);
        Swal.fire({
          icon: "error",
          title: "Invalid Input",
          text: `${name} must be within the range: ${ranges[name]}`,
        });
      } else {
        setButtonDisabled(false);
      }
    }, 500)
  ).current;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
    debouncedValidation(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    try {
      const response = await axios.post(
        "https://ml-algo-for-glucobuddy.onrender.com/predict",
        userInput
      );
      setPrediction(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    setButtonDisabled(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center pb-3 md:pb-0'>
      <div className='flex flex-col sm:flex-row items-center justify-center w-full'>
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
          className='max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 sm:p-6 md:p-8 w-full sm:w-auto'
        >
          <h1 className='text-3xl font-bold mb-6 text-center text-purple-800'>
            Enter all details
          </h1>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {Object.keys(userInput).map((key) => (
                <div key={key} className='mb-4'>
                  <label
                    htmlFor={key}
                    className='block text-gray-700 font-bold mb-2'
                  >
                    {key}
                  </label>
                  <input
                    type='number'
                    name={key}
                    placeholder={`Range ${ranges[key]}`}
                    value={userInput[key]}
                    onChange={handleChange}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-500'
                  />
                </div>
              ))}
            </div>

            <div className='flex justify-center mt-6'>
              <button
                type='submit'
                className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 ${
                  buttonDisabled
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-purple-500 hover:bg-purple-700 text-white font-bold"
                }`}
                disabled={buttonDisabled}
              >
                Predict
              </button>
            </div>
          </form>
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
          className='w-full sm:w-auto mx-auto mt-8 sm:mt-0 sm:ml-8'
        >
          {!prediction && (
            <div className='bg-white p-6 rounded-lg shadow-lg mx-4 sm:mx-0 mt-4 sm:mt-0 w-full max-w-3xl'>
              <h2 className='text-2xl font-bold mb-4 text-purple-800 text-center'>
                About the Parameters
              </h2>
              <ul className='list-disc pl-5 space-y-2 text-gray-700'>
                <li>
                  <strong>Age:</strong> The age of the patient. Age is a risk
                  factor because the likelihood of developing diabetes increases
                  as you get older.
                </li>
                <li>
                  <strong>Pregnancies:</strong> The number of times the patient
                  has been pregnant. Pregnancy can affect insulin sensitivity,
                  and a higher number of pregnancies might indicate a higher
                  risk of developing diabetes.
                </li>
                <li>
                  <strong>Glucose:</strong> Plasma glucose concentration after a
                  2-hour oral glucose tolerance test. High glucose levels are a
                  primary indicator of diabetes.
                </li>
                <li>
                  <strong>Blood Pressure:</strong> Diastolic blood pressure (mm
                  Hg). High blood pressure is associated with an increased risk
                  of diabetes and its complications.
                </li>
                <li>
                  <strong>Insulin:</strong> 2-Hour serum insulin (mu U/ml).
                  Abnormal insulin levels can be a sign of insulin resistance, a
                  condition often associated with diabetes.
                </li>
                <li>
                  <strong>BMI:</strong> Body Mass Index (weight in kg/(height in
                  m)^2). Higher BMI values indicate obesity, which is a major
                  risk factor for diabetes.
                </li>
                <li>
                  <strong>Skin Thickness:</strong> Triceps skin fold thickness
                  (mm). This measure can indicate body fat distribution, which
                  is related to diabetes risk.
                </li>
                <li>
                  <strong>DPF:</strong> Diabetes Pedigree Function. This
                  function estimates the genetic impact on diabetes by
                  considering family history, helping to understand hereditary
                  risk.
                </li>
              </ul>
            </div>
          )}
          {prediction && (
            <div className='bg-green-100 border mx-auto flex flex-col gap-5 border-green-400 text-green-700 py-2 rounded text-center max-w-3xl'>
              <img
                src={prediction.gif_url}
                alt='Prediction GIF'
                className='mx-auto pt-4 rounded-md'
              />
              <p className='font-bold text-2xl px-3 mx-2 '>
                {prediction.prediction}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Prediction;
