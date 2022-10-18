
function tab1(){
    
fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather").then((data)=>{
    if(data.ok){
    return data.json();
    }
    throw new Error("Oops, something went wrong!");
}).then((objectData)=>{

    let chartStatus = Chart.getChart("barChart"); 
if (chartStatus != undefined) {
  chartStatus.destroy();}
  document.getElementById("myInfo").innerHTML="";
    
    let tableData="";
    document.getElementById("table_head").innerHTML=`<tr>
    <th scope="col">#</th>
    <th scope="col">Date</th>
    <th scope="col">Time </th>
    <th scope="col">Type</th>
    <th scope="col">Value</th>
  </tr>`;
    

    for(let i=0;i<30;i++){
        
      
        tableData+=`<tr>
        <td>${i+1}</td>
        <td>${objectData[i].date_time.substring(0,10)}</td>
        <td>${objectData[i].date_time.substring(11,22)}</td>
        <td>${Object.keys(objectData[i].data)}</td>
        <td>${Object.values(objectData[i].data)}</td>
      </tr>`;
    }
    document.getElementById("table_body").innerHTML=tableData;
    
   
})
.catch((error)=>{
    console.log(error)
});
}
function tab2(){
    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature").then((data)=>{
        if(data.ok){
        return data.json();
        }
        throw new Error("Oops, something went wrong!");
    }).then((objectData)=>{

        let chartStatus = Chart.getChart("barChart"); 
        if (chartStatus != undefined) {
          chartStatus.destroy();}
    
        document.getElementById("myInfo").innerHTML="";
        
        const xLabels=[];
        const yData=[];
        
        let tableData="";
        document.getElementById("table_head").innerHTML=`<tr>
         <th scope="col">#</th>
         <th scope="col">Date</th>
         <th scope="col">Time </th>
         <th scope="col">°C</th>
         </tr>`;
        
    
        for(let i=0;i<20;i++){
            xLabels.push(objectData[i].date_time.substring(11,22));
            yData.push(objectData[i].temperature);
            tableData+=`<tr>
            <td>${i+1}</td>
            <td>${objectData[i].date_time.substring(0,10)}</td>
            <td>${objectData[i].date_time.substring(11,22)}</td>
            <td>${objectData[i].temperature}</td>
            </tr>`;
        }
        document.getElementById("table_body").innerHTML=tableData;

        
          
        const canvasElement=document.getElementById("barChart");
       
        const config={
            type:"bar",
            data: {
                labels: xLabels, 
                datasets:[
                    {
                        label: 'Temperature read in °C',
                        data: yData,
                     
                    }
                ]
            }
        };
        const barChart=new Chart(canvasElement,config);
        
    
    })
    .catch((error)=>{
        console.log(error)
    });
    }

    function tab3(){
        fetch("https://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed").then((data)=>{
            if(data.ok){
            return data.json();
            }
            throw new Error("Oops, something went wrong!");
        }).then((objectData)=>{
            

            let chartStatus = Chart.getChart("barChart"); 
            if (chartStatus != undefined) {
              chartStatus.destroy();}

              document.getElementById("myInfo").innerHTML="";
            
            const xLabels=[];
            const yData=[];

            let tableData="";
            document.getElementById("table_head").innerHTML=`<tr>
             <th scope="col">#</th>
             <th scope="col">Date</th>
             <th scope="col">Time </th>
             <th scope="col">m/s</th>
             </tr>`;
            
        
            for(let i=0;i<20;i++){
                xLabels.push(objectData[i].date_time.substring(11,22));
            yData.push(objectData[i].wind_speed);
                tableData+=`<tr>
                <td>${i+1}</td>
                <td>${objectData[i].date_time.substring(0,10)}</td>
                <td>${objectData[i].date_time.substring(11,22)}</td>
                <td>${objectData[i].wind_speed}</td>
                </tr>`;
            }
            document.getElementById("table_body").innerHTML=tableData;

           
            const canvasElement=document.getElementById("barChart");
       
            const config={
                type:"bar",
                data: {
                    labels: xLabels, 
                    datasets:[
                        {
                            label: 'Wind speed read in m/s',
                            data: yData,
                         
                        }
                    ]
                }
            };
            const barChart=new Chart(canvasElement,config);
        
        
        
        
        })
        .catch((error)=>{
            console.log(error)
        });
        }

function tab4(){
    document.getElementById("table_body").innerHTML="";
    document.getElementById("table_head").innerHTML="";
    let chartStatus = Chart.getChart("barChart"); 
            if (chartStatus != undefined) {
              chartStatus.destroy();}

    
    document.getElementById("myInfo").innerHTML=`<br><br>
    <ul> <a href="mailto:arb.kadrijaj@tuni.fi">Arb Kadrijaj</a></ul>
    
    <ul>Course Implementation: 3005</ul>` ;

                     
}