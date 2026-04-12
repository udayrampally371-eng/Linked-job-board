const url = 'https://jsearch.p.rapidapi.com/search?query=developer%20in%20texas&page=1&num_pages=1';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd0c809dad6msh7399476cf38b57dp137674jsn4eba85fef8c1',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(JSON.stringify(json).substring(0, 200)))
  .catch(err => console.error('error:' + err));
