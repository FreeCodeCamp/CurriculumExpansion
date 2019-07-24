const margin = 70,
  svgWidth = 700,
  svgHeight = 500;

const lineGraph = d3.select('.dashboard')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

const yScale = d3.scaleLinear()
  .domain([0, 5000])
  .range([svgHeight - margin, margin]);

const xScale = d3.scaleLinear()
  .domain([2011, 2019])
  .range([margin, svgWidth - margin]);

const yAxis = d3.axisLeft(yScale)
  .ticks(6, '~s');
  
const xAxis = d3.axisBottom(xScale)
  .tickFormat(d3.format(''))
  .tickPadding(10);

lineGraph.append('g')
  .call(yAxis)
  .attr('transform', `translate(${margin}, 0)`)
  .style('font', '10px verdana');

lineGraph.append('g')
  .call(xAxis)
  .attr('transform', `translate(0, ${svgHeight - margin})`)
  .selectAll('text')
  .attr('class', 'x-axis-label')
  .style('transform', 'translate(-12px, 0) rotate(-50deg)')
  .style('text-anchor', 'end')
  .style('cursor', 'pointer')
  .style('font', '10px verdana');

const twitterLine = d3.line()
  .x(d => xScale(d.year))
  .y(d => yScale(d.followers.twitter));

lineGraph.append('path')
  .attr('d', twitterLine(data))
  .attr('stroke', '#7cd9d1')
  .attr('stroke-width', '3')
  .attr('fill', 'transparent');

const tumblrLine = d3.line()
  .x(d => xScale(d.year))
  .y(d => yScale(d.followers.tumblr));

lineGraph.append('path')
  .attr('d', tumblrLine(data))
  .attr('stroke', '#f6dd71')
  .attr('stroke-width', '3')
  .attr('fill', 'transparent');

const instagramLine = d3.line()
  .x(d => xScale(d.year))
  .y(d => yScale(d.followers.instagram));

lineGraph.append('path')
  .attr('d', instagramLine(data))
  .attr('stroke', '#fd9b98')
  .attr('stroke-width', '3')
  .attr('fill', 'transparent');
  
lineGraph.selectAll('twitter-circles')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', d => xScale(d.year))
  .attr('cy', d => yScale(d.followers.twitter))
  .attr('r', 6)
  .attr('fill', 'white')
  .attr('stroke', '#7cd9d1')
  .style('cursor', 'pointer')

lineGraph.selectAll('tumblr-circles')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', d => xScale(d.year))
  .attr('cy', d => yScale(d.followers.tumblr))
  .attr('r', 6)
  .attr('fill', 'white')
  .attr('stroke', '#f6dd71')
  .style('cursor', 'pointer')

lineGraph.selectAll('instagram-circles')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', d => xScale(d.year))
  .attr('cy', d => yScale(d.followers.instagram))
  .attr('r', 6)
  .attr('fill', 'white')
  .attr('stroke', '#fd9b98')
  .style('cursor', 'pointer')

const rightDashboard = d3.select('.dashboard')
  .append('div');

const pieGraph = rightDashboard.append('svg')
  .attr('width', 200)
  .attr('height', 200)

const pieArc = d3.arc()
  .outerRadius(100)
  .innerRadius(0);

const pieColors = d3.scaleOrdinal()  
  .domain(data[8].followers)
  .range(['#00fff6', '#f6dd71', '#fd9b98']);

const pie = d3.pie()
  .value(d => d.value);
  
const pieGraphData = pieGraph.selectAll('pieSlices')
  .data(pie(d3.entries(data[8].followers)))
  .enter()
  .append('g')

pieGraphData.append('path')
  .attr('d', pieArc)

/*
  The pie graph is being drawn at the `0, 0` coordinates of the `svg`. Go back to where you declared your `pieGraphData` variable and add an attribute that changes the `transform` to `translate(100, 100)`. Since the pie chart is has a 100 radius, this will move it so its center is in the center of the `svg`.
*/
