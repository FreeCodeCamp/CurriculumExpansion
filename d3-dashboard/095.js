const margin = 70,
  svgWidth = 700,
  svgHeight = 500;

const lineGraph = d3.select('.dashboard')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

const yScale = d3.scaleLinear()

/*
  d3 has a bunch of functions for working with scales, just like it does for working with selections. One of them is `domain`; it takes an array that is used to describe the highest and lowest values of your data for this scale. Taking a quick look at the `data.js` file, it looks like the values of the "followers" go from about 0 to 5000. This is the data you want to use for the y-scale. Chain the `domain` function to the `yScale` and pass it the array `[0, 5000]`. Here's an example of how this is done:
```
const myScale = d3.scaleLinear()
  .domain([100, 1000])
```
*/
