window.onload = function(){
    function parse_query_string(query) {
        var vars = query.split("&");
        var query_string = {};
        for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split("=");
          var key = decodeURIComponent(pair[0]);
          var value = decodeURIComponent(pair[1]);
          // If first entry with this name
          if (typeof query_string[key] === "undefined") {
            query_string[key] = decodeURIComponent(value);
            // If second entry with this name
          } else if (typeof query_string[key] === "string") {
            var arr = [query_string[key], decodeURIComponent(value)];
            query_string[key] = arr;
            // If third or later entry with this name
          } else {
            query_string[key].push(decodeURIComponent(value));
          }
        }
        return query_string;
      }
      
      var query_string = location.search.substring(1);
      var parsed_qs = parse_query_string(query_string);
      console.log(parsed_qs.timestamp);
      function set(id,prop){
        document.getElementById(id)[prop] = parsed_qs[id];
      }
      set("editorEmail","textContent");
      set("clubName","textContent");
      set("timestamp","textContent");
      set("thumbURL","src");
      set("img1URL","src");
      set("img2URL","src");
      set("img3URL","src");
    /* URL variables will pass these values:
    editorEmail	clubName	thumbURL	img1URL	img2URL	img3URL timestamp
    */

}