## BFHL API
A REST API developed for the VIT Full Stack assignment that processes mixed data arrays and returns organized categorized responses.

## Overview
This API accepts arrays containing mixed data types (numbers, letters, special characters) and processes them through the /bfhl endpoint, returning structured data with various transformations and categorizations.

## Functionality
When you send a POST request to /bfhl with a data array, the API performs the following operations:

Number Classification: Separates numbers into even and odd categories
Alphabet Processing: Converts all alphabetic characters to uppercase
Special Character Collection: Identifies and groups special characters and symbols
Numerical Summation: Calculates the sum of all numeric values
String Transformation: Creates a reversed string from all alphabets with alternating case pattern
User Information: Includes static user details (user_id, email, roll number)

