# Banglore House Price Prediction Project


## Overview

This notebook presents a comprehensive analysis and predictive modeling project for predicting the prices of houses in Bangalore. The dataset includes various features such as area type, location, total square footage, number of bathrooms, balconies, and the number of bedrooms (BHK). We will preprocess the data, encode categorical features, and use machine learning techniques to train and evaluate our model. The final model will enable us to predict house prices accurately based on the provided features.

## Project Structure

- **client/**: Directory containing html, css and JavaScript files for the web application that is made to use the ML model conveniently
- **model/**: Directory containing the .csv data file and jupyter notebook that contains the ML model
- **server/**: Directory containing the python flask server and other important files that serves as backend to the project
- **README.md**: Comprehensive documentation about the project, including project overview, setup instructions, usage guide, and acknowledgments.
- **requirements.txt**: Text file listing all the Python packages required to run the code.

## Setup Instructions

To set up the project environment, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/Bangalore-House-Price-Prediction.git
   
2. Navigate to the project directory:
   
   ```bash
   cd Bangalore-House-Price-Prediction

3. Create a virtual environment (optional but recommended):
   
   ```bash
   python -m venv venv

4. Activate the virtual environment:
   1. On Windows:
      ```bash
      venv\Scripts\activate
   2. On macOS and Linux:
      ```bash
      source venv/bin/activate
5. Install the required Python packages:
   ```bash
   pip install -r requirements.txt

6. Navigate to the server directoryr of the project
   ```bash
   cd path/to/project/directory/server

7. Run the python flask server
   ```bash
   python server.py

8. Access your web application at http://localhost:5000 in your browser


### Additional Notes

- If you encounter any issues during setup or while running the application, feel free to [create an issue](https://github.com/Bangalore-House-Price-Prediction/issues) on GitHub for assistance.


## Usage Guide

The project can be used for the following purposes:

- Exploring the dataset and performing data analysis.
- Preprocessing the data, including handling missing values, encoding categorical variables, and feature engineering.
- Building machine learning models using various algorithms such as logistic regression, random forest, XGBoost.
- Saving trained models for future use and deployment.
- Optimizing model performance by tuning hyperparameters using techniques like grid search and cross-validation.
- Deployinng the machine learning model using Flask as the backend and serve predictions through a web interface.
Refer to the Jupyter notebook and python flask server for detailed code and explanations.


## Acknowledgments

- The dataset used in this project is sourced from kaggle.com
- [Link the dataset](https://www.kaggle.com/datasets/amitabhajoy/bengaluru-house-price-data)
- This project was made with the help of a YouTube tutorial of a channel named codebasics
- [Link to the playlist](https://www.youtube.com/playlist?list=PLeo1K3hjS3uu7clOTtwsp94PcHbzqpAdg)
