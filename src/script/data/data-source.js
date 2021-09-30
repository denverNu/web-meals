class DataSource {

  static searchClub(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {

        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`maaf team ${keyword} tidak tersedia`);
        }
      });
  }


  static randomMeal(){
      return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
          return response.json()
      })
      .then(responseJson => {
          if(responseJson.meals){
              return Promise.resolve(responseJson.meals)
          }else{
              return Promise.reject('maaf keyword tidak ditemukan')
          }
      })
  }


  static mealCategory(){
      return fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => {
          return response.json()
      })
      .then(responseJson => {
          if(responseJson.categories){
              return Promise.resolve(responseJson.categories)
          }else{
              return Promise.reject()
          }
      })
  }
}

export default DataSource;



