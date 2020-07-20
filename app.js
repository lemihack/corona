const getData = async () => {
    //Fetching Data 
    const response = await fetch('https://covid19.mohp.gov.np/covid/api/confirmedcases');
    const rsp = await response.json()

    //Assign Useful Data to Variable 
  

    //Normal Life
    update = rsp.nepal.updated_at;
    deaths = rsp.nepal.deaths;
    newCases = rsp.nepal.today_newcase;
    positive = rsp.nepal.positive;
    tested = rsp.nepal.samples_tested;
    

    //Showing Data in Website
    document.getElementById('update').innerHTML = update.substr(0, 10);
    document.getElementById('deaths').innerHTML = deaths;
    document.getElementById('newCases').innerHTML = newCases;
    document.getElementById('positive').innerHTML = positive;
    document.getElementById('tested').innerHTML = tested;
    
    setInterval(() => getData(), 100000);

    
}

getData()