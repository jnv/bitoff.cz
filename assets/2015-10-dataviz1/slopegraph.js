var TARGET_ELEMENT = d3.select('.d3-slopegraph')
var srcFile = TARGET_ELEMENT.attr('data-src')
TARGET_ELEMENT.html('')

d3.csv(srcFile, function(csv) {
    data = csv;
    // console.log("CSV", csv);

    var years = d3.keys(csv[0]).filter( function(d) { return d.match(/^\d/) }) // Return numerical keys

    // var countries = csv.map( function(d) { return d["Country Name"] })
        // Set "from" and "to" years to display
    var from = years[0]
    var to = years[years.length - 1]

    // Extract country names and start/end values from the dataset
    var data = csv.map( function(d) {
                        var r = {
                          label: d.country,
                          start: parseInt(d[from]),
                          end: parseInt(d[to])
                        };
                        // console.log(r);
                        return r;
                      })
                      .filter(function(d) { return (!isNaN(d.start) && !isNaN(d.end)); })
        // Extract the values for every country for both years in the dataset for the scale
    var values = data.map( function(d) { return d.start; })
                     .filter( function(d) { return d; } )
                     .concat(
                       data
                        .map( function(d) { return d.end; } )
                        .filter( function(d) { return d; } )
                      )
                      .sort(d3.descending)
    // Return true for countries without start/end values
    var missing = function(d) { return !d.start || !d.end; }

    var font_size = 12
    var margin = 20
    var width = 700
    var height = values.length * font_size*3 + margin
    // var height = 7000

    var chart = TARGET_ELEMENT.append("svg")
                  .attr("viewBox", "0 0 " + width + " " + height)

    // Scales and positioning
    var slope = d3.scale.ordinal()
                  .domain(values)
                  .rangePoints([margin, height*0.75]);

    //Go through the list of countries in order, adding additional space as necessary.
    var min_h_spacing = 1.2 * font_size, // 1.2 is standard font height:line space ratio
        previousY = 0,
        thisY,
        additionalSpacing;
    //Preset the Y positions (necessary only for the lower side)
    //These are used as suggested positions.
    data.forEach(function(d) {
        d.startY = slope(d3.round(d.start,1));
        d.endY = slope(d3.round(d.end,1));
    });
    //Loop over the higher side (right) values, adding space to both sides if there's a collision
    data
        .sort(function(a,b) {
            if (a.end === b.end) return 0;
            return (a.end < b.end) ? -1 : +1;
        })
        .forEach(function(d) {
            thisY = d.endY; //position "suggestion"
            additionalSpacing = d3.max([0, d3.min([(min_h_spacing - (thisY - previousY)), min_h_spacing])]);

            //Adjust all Y positions lower than this end's original Y position by the delta offset to preserve slopes:
            data.forEach(function(dd) {
                if (dd.startY >= d.endY) dd.startY += additionalSpacing;
                if (dd.endY >= d.endY) dd.endY += additionalSpacing;
            });

            previousY = thisY;
        });

    //Loop over the lower side (left) values, adding space to both sides if there's a collision
    previousY = 0;
    data
        .sort(function(a,b) {
            if (a.startY === b.startY) return 0;
            return (a.startY < b.startY) ? -1 : +1;
        })
        .forEach(function(d) {
            thisY = d.startY; //position "suggestion"
            additionalSpacing = d3.max([0, d3.min([(min_h_spacing - (thisY - previousY)), min_h_spacing])]);

            //Adjust all Y positions lower than this start's original Y position by the delta offset to preserve slopes:
            data.forEach(function(dd) {
                if (dd.endY >= d.startY) dd.endY += additionalSpacing;
                if (dd.label != d.label && dd.startY >= d.startY) dd.startY += additionalSpacing;
            });
            previousY = thisY;
        });

    // Countries
    var country = chart.selectAll("g.country")
                    .data( data )
                    .enter()
                    .append("g")
                    .attr("class", "country")
                    .classed("missing", function(d) { return missing(d); });

    country
      .on("mouseover", function(d,i) { return d3.select(this).classed("over", true); })
      .on("mouseout", function(d,i) { return d3.select(this).classed("over", false); });

    // ** Left column
    country
      .append("text")
      .classed("label start", true)
      .attr("x", 200)
      .attr("y", function(d) {return d.startY;})
      //.attr("y", function(d,i) { var rounded = d3.round(d.start, 1); return slope(rounded) })
      .attr("xml:space", "preserve")
      .style("font-size", font_size)
      .text(function(d) { return d.label+ " " + d.start; });

    // ** Right column
    country
      .append("text")
      .classed("label end", true)
      .attr("x", width-200)
      .attr("y", function(d) {return d.endY;})
      //.attr("y", function(d,i) { var rounded = d3.round(d.end, 1); return slope(rounded) })
      .attr("xml:space", "preserve")
      .style("font-size", font_size)
      .text(function(d) { return d.end + " " + d.label; });

    // ** Slope lines
    country
      .append("line")
      .classed("slope", function(d) { return d.start || d.end; })
      .attr("x1", 210)
      .attr("x2", width-210)
      .attr("y1", function(d,i) {
        return d.start && d.end ? d.startY - font_size/2 + 2 : null;
      })
      .attr("y2", function(d,i) {
        return d.end && d.end ? d.endY - font_size/2 + 2 : null;
      });

    return chart;
  });
