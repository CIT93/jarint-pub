# Name of App: Decision Making App

## Description of Purpose:
This app helps users make decisions by providing personalized recommendations based on their habits, household size, and location. It suggests eco-friendly actions to adopt in daily life. The app calculates energy consumption and provides advice accordingly, promoting sustainability.

## Code Sources:
The code for the **Decision Making App** was implemented using **ChatGPT** (OpenAI's language model). Below is an explanation of the code and why it is the best choice for the app:

### Why Use ChatGPT to Implement This Code:
- **AI Assistance**: The code was generated with the help of ChatGPT, which provided efficient suggestions and guided the implementation of functional logic for calculating energy consumption and generating personalized recommendations.
- **Modularity**: The solution includes modular functions (`calculateEnergyConsumption` and `generateRecommendation`), which makes the code easy to maintain and extend.
- **Separation of Concerns**: The logic for calculating energy consumption and generating recommendations is separated into different functions. This follows best practices in software development and ensures that the code is clean and easy to understand.

### Functions Implemented:
1. **`calculateEnergyConsumption`**:
   - This function calculates the energy consumption based on the household size. It uses a constant factor (`20 kWh per person`) to estimate the consumption.
   - **Function Signature**:
   ```javascript
   const calculateEnergyConsumption = (householdSize) => { ... }
