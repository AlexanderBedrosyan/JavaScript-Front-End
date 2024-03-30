function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let informationArray = JSON.parse(document.querySelector('#inputs > textarea').value);
      let employees = {};
      let restaurant = {};
      informationArray.forEach(element => {
         let [currentRestaurant, details] = element.split(' - ');
         if (!(restaurant.hasOwnProperty(currentRestaurant))){
            employees[currentRestaurant] = {};
            restaurant[currentRestaurant] = {counter: 0, bestSalary: 0, avgSalary: 0, totalSalary: 0};
         }
         details.split(', ').forEach(employee => {
            let [name, salary] = employee.split(' ');
            employees[currentRestaurant][name] = Number(salary);
            restaurant[currentRestaurant]['counter'] += 1;
            restaurant[currentRestaurant]['totalSalary'] += Number(salary);
            restaurant[currentRestaurant]['avgSalary'] = restaurant[currentRestaurant]['totalSalary'] / restaurant[currentRestaurant]['counter'];
            if (restaurant[currentRestaurant]['bestSalary'] < Number(salary)) {
               restaurant[currentRestaurant]['bestSalary'] = Number(salary);
            }
         })
      })
      let sortedRestaurants = {};
      Object.keys(restaurant)
         .sort((a, b) => restaurant[b]['avgSalary'] - restaurant[a]['avgSalary'])
         .forEach(element => sortedRestaurants[element] = restaurant[element]);

      console.log(restaurant)
      for (const key in sortedRestaurants) {
         let result = document.querySelector('#bestRestaurant > p');
         result.textContent = `Name: ${key} Average Salary: ${sortedRestaurants[key]['avgSalary'].toFixed(2)} Best Salary: ${sortedRestaurants[key]['bestSalary'].toFixed(2)}`
         
         let workers = [];
         Object.entries(employees[key]).sort((a, b) => b[1] - a[1])
            .forEach(element => workers.push(`Name: ${element[0]} With Salary: ${element[1]}`));
         let inforWorkers = document.querySelector('#workers > p');
         inforWorkers.textContent = workers.join(' ')
         break
      }
   }
}