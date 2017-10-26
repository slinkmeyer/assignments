let stringifyUrl = function(endpoint, query){
  let url = endpoint + "?";
  for(let key in query){
    url+=`${key}=${query[key]}&`;
  }
  return url.slice(0, -1);
}

module.exports = stringifyUrl;
