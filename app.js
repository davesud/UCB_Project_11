const tableData = data;

// get table references
var tbody = d3.select("tbody");


function buildTable(data) {
  tbody.html("");

  data.forEach((dataRow) => {
    let row = tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}


var filter = {};



function updateFilters() {

       var inputEl = d3.select(this);
       console.log(inputEl)


        val = inputEl.property('value');

        id = inputEl.property('id');

      if (val == '' ){
        delete filter[id];
      }
      else
      {
        filter[id] = val;
      }



    filterTable();

  }


  function filterTable() {


    filteredData = tableData


    Object.entries(filter).forEach(([key,value]) => {
    filteredData = filteredData.filter(el => el[key] == value);

    });

    buildTable(filteredData)

  }

  d3.selectAll("input").on ("change", updateFilters)

  // Build the table when the page loads
  buildTable(tableData);
