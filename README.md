## Dark Mode Toggle Feature

This repository contains a Dark Mode Toggle feature implemented in React. It allows users to switch between light and dark themes with a visually appealing animated button. The feature respects the user's system preference for dark mode and provides an interactive user experience.

<img src=/src/assets/images/screen1.jpg>
<img src=/src/assets/images/screen2.jpg>

To use this Dark Mode Toggle feature in your project, follow these steps:
Clone the repository to your local machine:
git clone
Navigate to the project directory:
Install the required dependencies:

To use the Dark Mode Toggle in your React application, follow these steps:
Import the DarkMode component:
import DarkMode from './DarkMode';
Place the DarkMode component within your component's JSX:
'<DarkMode size={25} />' Customize the size prop to adjust the button's size as needed. (Minimal value is set to 25) !important

## Customization

While the Dark Mode Toggle feature is visually appealing, you can customize it further to match your project's design:

Adjust the colors in your project's Tailwind CSS configuration, particularly the :root CSS variables, to change the theme colors.

Customize the animations, transitions, and styles in the DarkMode component to fit your design requirements.

Explore additional options to make the feature more adaptable and versatile for your specific project.

## What I've Learned

In the process of creating this Dark Mode Toggle feature, I've learned several valuable lessons, including:

Tailwind CSS Integration: I learned how to integrate Tailwind CSS, a utility-first CSS framework, into a React project. Tailwind CSS allows for rapid UI development and can be combined with regular CSS to achieve specific styling requirements.

Customization and Scalability: I explored ways to make the Dark Mode Toggle feature customizable and scalable for reuse in different projects.

## License

This project is licensed under the MIT License. Feel free to use it.
