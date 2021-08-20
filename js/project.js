const citations = [];

const cites = $("sup[data-cite]");
for (var x = 0; x < cites.length; x++) {
    $(cites[x]).text(x + 1);
    $("#citations").append("<li>" + citations[$(cites[x]).attr('data-cite')] + "</li>");
}

window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
  };