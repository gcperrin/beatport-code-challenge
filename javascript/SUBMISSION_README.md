# Submission notes

With all of these tests, there are a number of features that would
be needed to make them production-ready. Things like strict type checks,
full test suites, fully scoped mobile issues, and other hardening was ignored
for the sake of simplicity and time.

1. Prefix flatten object
   - Order matters here, Object.keys preserves said order.

2. Integration Functions

3. Resize
   - Will not work on mobile.

4. React Carousel Component
   - To make a true resizable carousel component that can take
   tiles and images alike is a time comsuming problem. I pretty much stopped at
   creating the carousel due to the scope/time constraints. Close
   competitors in React have hundreds of commits and thousands of JS lines.

   - To extend the carousel to create tiles, I would have done the following...
     - Create new sub-components to represent dynamically sized rows and image groups
     - Passed a prop to components indicating the image size
     - Resize static components on window size changes
     - Animated images in & out using keyframes
