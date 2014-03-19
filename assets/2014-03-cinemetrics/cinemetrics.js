// global d3: true
/**
 * @source: https://github.com/jnv/bitoff.cz/tree/gh-pages/assets/2014-03-cinemetrics/cinemetrics.js
 * @licstart  magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
(function(d3)
{
  'use strict';

  // Based on http://bl.ocks.org/mbostock/4341417

  (function()
  {
    /**
     * Generates radial isosceles trapezoid - like arc, but with straight bases
     * Based on d3.svg.arc
     * https://github.com/mbostock/d3/blob/master/src/svg/arc.js
     */

    d3.svg.trapezoid = function(arc)
    {
      var innerRadius = d3_svg_arcInnerRadius,
        outerRadius = d3_svg_arcOuterRadius,
        startAngle = d3_svg_arcStartAngle,
        endAngle = d3_svg_arcEndAngle;

      var line = d3.svg.line();

      var vertices = function(d)
      {
        var r0 = innerRadius.apply(this, arguments),
          r1 = outerRadius.apply(this, arguments),
          a0 = startAngle.apply(this, arguments) + ARC_OFFSET,
          a1 = endAngle.apply(this, arguments) + ARC_OFFSET,
          c0 = Math.cos(a0),
          s0 = Math.sin(a0),
          c1 = Math.cos(a1),
          s1 = Math.sin(a1);

        return [[r1 * c0, r1 * s0], [r1 * c1, r1 * s1], [r0 * c1, r0 * s1], [r0 * c0, r0 * s0]];
      };

      var trapezoid = function(d)
      {
        var points = vertices(d);
        return line(points);
      };

      trapezoid.axis = function(data)
      {
        var p = vertices(data);

        var x1 = (p[0][0] + p[1][0]) / 2,
          y1 = (p[0][1] + p[1][1]) / 2;

        var x2 = (p[2][0] + p[3][0]) / 2,
          y2 = (p[2][1] + p[3][1]) / 2;

        return [[x1, y1], [x2, y2]];
      };

      trapezoid.relativeCentroid = function()
      {
        var r = (outerRadius.apply(this, arguments) - innerRadius.apply(this, arguments)),
          a = (startAngle.apply(this, arguments) + endAngle.apply(this, arguments)) / 2 + ARC_OFFSET;
        var c = 0.5;
        return [Math.cos(a) * c, Math.sin(a) * c];
      };

      trapezoid.innerRadius = function(v)
      {
        if (!arguments.length)
          return innerRadius;
        innerRadius = d3.functor(v);
        return trapezoid;
      };

      trapezoid.outerRadius = function(v)
      {
        if (!arguments.length)
          return outerRadius;
        outerRadius = d3.functor(v);
        return trapezoid;
      };

      trapezoid.startAngle = function(v)
      {
        if (!arguments.length)
          return startAngle;
        startAngle = d3.functor(v);
        return trapezoid;
      };

      trapezoid.endAngle = function(v)
      {
        if (!arguments.length) return endAngle;
        endAngle = d3.functor(v);
        return trapezoid;
      };

      return trapezoid;
    };

    var ARC_OFFSET = -(Math.PI / 2); //-halfπ

    function d3_svg_arcInnerRadius(d)
    {
      return d.innerRadius;
    }

    function d3_svg_arcOuterRadius(d)
    {
      return d.outerRadius;
    }

    function d3_svg_arcStartAngle(d)
    {
      return d.startAngle;
    }

    function d3_svg_arcEndAngle(d)
    {
      return d.endAngle;
    }
  }());

  function toDeg(radians)
  {
    return radians * (180 / Math.PI);
  }

  function clamp(a, b, c)
  {
    return Math.max(b, Math.min(c, a));
  }

  var chapterColorRef = function(id)
  {
    return function(i)
    {
      return 'ch_' + id + i;
    };
  };

  var colorGenerator = function(inChapters)
  {
    var chapters = inChapters;

    var toRgb = function(colorSet)
    {
      return 'rgb(' + colorSet[0] + ',' + colorSet[1] + ',' + colorSet[2] + ')';
    };

    var colorDefs = function()
    {

      var totalFrames = function(previousVal, colorSet)
      {
        return previousVal + colorSet[3];
      };

      var zipColors = function(total)
      {
        return function(colorSet)
        {
          return [toRgb(colorSet), colorSet[3] / total];
        };
      };

      return chapters.map(function(chapterColors)
      {
        var total = chapterColors.reduce(totalFrames, 0);
        return chapterColors.map(zipColors(total));
      });
    };

    return {
      colorDefs: colorDefs
    };
  };

  var preferredValue = function(pref, key)
  {
    return function(d)
    {
      return d[key] || pref;
    };
  };

  var movieChart = function(data, options)
  {
    //Width and height
    var w = options.w || 400;
    var h = options.h || 400;
    var dataset = data.durations;
    var motions = data.motions;

    var outerRadius = Math.min(w, h) * 0.4;
    var innerRadius = outerRadius * 0.5;
    var END_ANGLE = 1.8; // of 2Pi

    var motionmax = d3.max(motions);
    var trapezoid = d3.svg.trapezoid()
      .innerRadius(preferredValue(innerRadius, 'innerRadius'))
      .outerRadius(preferredValue(outerRadius, 'outerRadius'));
    var pie = d3.layout.pie().endAngle(Math.PI * END_ANGLE).sort(null);

    var dataPie = pie(dataset);

    var chapterId = chapterColorRef(data.id);

    //Easy colors accessible via a 10-step ordinal scale
    // var color = d3.scale.category10();
    var color = colorGenerator(data.colors);

    //Create SVG element
    var container = document.createElement('div');
    var svg = d3.select(container).append('svg')
                .attr('width', w)
                .attr('height', h)
                .attr('viewBox', '0 0 ' + w + ' ' + h)
                .attr('preserveAspectRatio', 'xMidYMid');


    var svgDefs = svg.append('svg:defs');
    var colorDefs = color.colorDefs();

    // TODO: this should be totally reimplemented with data bindings
    for (var i = 0; i < colorDefs.length; i++)
    {
      // One gradient per chapter
      var chapter = colorDefs[i];
      var segment = dataPie[i];

      var axis = trapezoid.axis(segment);
      var chapterDef = svgDefs.append('svg:linearGradient')
        .attr('id', chapterId(i))
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', axis[0][0])
        .attr('y1', axis[0][1])
        .attr('x2', axis[1][0])
        .attr('y2', axis[1][1]);


      var totalOffset = 0;
      for (var j = 0; j < chapter.length; j++)
      {
        // Two stops per chapter: prevents color blending
        var colorSet = chapter[j];
        var currentColor = colorSet[0],
          currentRatio = colorSet[1];

        chapterDef.append('svg:stop')
          .attr('stop-color', currentColor)
          .attr('offset', totalOffset + 0.01); // allow a little offset to prevent aliasing

        totalOffset += currentRatio;

        chapterDef.append('svg:stop')
          .attr('stop-color', currentColor)
          .attr('offset', totalOffset);
      }
    }

    var topGroup = svg.append('g')
      .attr('transform', 'translate(' + w / 2 + ',' + h / 2 + ')');

    //Set up groups
    var segmentGroups = topGroup.selectAll('g.segment')
      .data(dataPie)
      .enter()
      .append('g')
      .attr('class', 'segment');

    // paths
    var segments = segmentGroups.append('path').attr('fill', function(d, i)
    {
      //return color(i);
      return 'url(#' + chapterId(i) + ')';
    }).attr('d', trapezoid)
      .transition()
    // .delay(function(d, i) { return Math.random() * 10 * i; })
    .each(slide);

    function slide(d, i)
    {
      var m = motions[i],
        segment = d3.select(this);

      var trBase = m * outerRadius,
        duration = clamp(2000 - m * 10000, 100, Infinity); // more motion = shorter duration

      (function repeat()
      {
        segment.transition()
          .ease('quad')
          .duration(duration)
          .attrTween('d', tweenTrapezoid(function(d, i)
          {
            return {
              innerRadius: innerRadius,
              outerRadius: outerRadius + trBase
            };
          }))
          .transition()
          .attrTween('d', tweenTrapezoid(function(d, i)
          {
            return {

              innerRadius: innerRadius - trBase,
              outerRadius: outerRadius
            };
          }))
          .each('end', repeat);
      })();
    }


    function tweenTrapezoid(b)
    {
      return function(a, i)
      {
        var d = b.call(this, a, i),
          i = d3.interpolate(a, d);
        for (var k in d)
        {
          a[k] = d[k]; // update received data
        }
        return function(t)
        {
          return trapezoid(i(t));
        };
      };
    }


    return container;
  };

  var loadChart = function()
  {
    var target = this;
    // target.textContent = 'Loading&hellip;';

    var dataSrc = target.getAttribute('data-src'),
      w = target.getAttribute('data-w'),
      h = target.getAttribute('data-h');
    d3.json(dataSrc, function(error, json)
    {
      if (error)
      {
        // target.textContent = "";
        return console.warn(error);
      }

      var chart = movieChart(json,
      {
        w: w,
        h: h
      });
      target.textContent = '';
      target.appendChild(chart);
    });
  };

  d3.selectAll('[data-cinemetrics]').each(loadChart);
})(window.d3);
/* @license-end */
