      /*
	  
	  
	  
	  
// TableToChart by Peter Schlamp //
// peterwschlamp@gmail.com //

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
	  
	  
	  
	  
	  
	  
	  
	  */
      
	  
	  
	  
	  google.load("visualization", "1", {packages:["linechart","piechart","areachart","columnchart","barchart","gauge"]});
      function drawChart(type,table,container,charttitle,width,height) {


        var data = new google.visualization.DataTable();

        rowsize = $("#"+table+" > tbody > tr").size();
        colsize = $("#"+table+" > tbody > tr:eq(1) > td").size();


for (j=0;j<colsize;j++){
   innertd = $("#"+table+" > tbody > tr:eq(1) > td:eq("+j+")").text();
   innerth = $("#"+table+" > tbody > tr:eq(0) > th:eq("+j+")").text();
   if ( innerth == "" ){
		alert('error: no th row in chart table');
		return 0;
   }
   if ( isNaN(innertd) ){
      data.addColumn('string', innerth);
   }else{
      data.addColumn('number', innerth);
   }
}





        


        data.addRows(rowsize-1);

       
        
 for (i=1;i<rowsize;i++){
           
            
        for (j=0;j<colsize;j++){

          if (j==1 || j==2){ // cant do it this way - check for type another way
            data.setValue(i-1, j, parseInt($("#"+table+" > tbody > tr:eq("+i+") > td:eq("+j+")").text()));
          }else{
            data.setValue(i-1, j, $("#"+table+" > tbody > tr:eq("+i+") > td:eq("+j+")").text());
          }

        }
           
  }



   
if (type == "piechart"){
var chart = new google.visualization.PieChart(document.getElementById(container));
}
else if (type == "gauge"){
var chart = new google.visualization.Gauge(document.getElementById(container));
}
else if (type == "columnchart"){
var chart = new google.visualization.ColumnChart(document.getElementById(container));
}
else if (type == "barchart"){
var chart = new google.visualization.BarChart(document.getElementById(container));
}
else if (type == "areachart"){
var chart = new google.visualization.AreaChart(document.getElementById(container));
}
else if (type == "barchart"){
var chart = new google.visualization.BarChart(document.getElementById(container));
}
else{
var chart = new google.visualization.BarChart(document.getElementById(container));
}

        chart.draw(data, {width: width, height: height, is3D: true, title: charttitle});


} // end drawChart