const uniq = (arr1, arr2) => {
    const toSet = new Set(arr1.concat(arr2));
    const uniqArr = Array.from(toSet);
    console.log(uniqArr);
  }
  
  uniq([1, 2, 3], [1, 3, 4, 5]);
  
  const diff = (arr1,arr2) => {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        result.push(arr1[i])
      }
    }
    console.log(result);
  }
  
  diff([1, 2, 3], [1, 3, 4, 5]);
  
  const diffFilter = (arr1,arr2) => {
    const result = arr1.filter(i => arr2.includes(i));
    console.log(result);
  }
  
  diffFilter([1, 2, 3], [1, 3, 4, 5]);
  
  const objTemp = {
    city: "Tver",
    country: "Russia"
  }
  
  const myInvert = (obj) => {
    const invertObj = Object.fromEntries(
      Object.entries(obj).map(([key,value]) => [value,key])
    )
    return invertObj;
  }
  
  myInvert(objTemp);
  
  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); 
  }
  
  fetchData('https://jsonplaceholder.typicode.com/todos/1');
  
  const saveAndRetrieve = (key, value) => {
    localStorage.setItem(key, value);
    console.log(localStorage.getItem(key));
  }
    
  saveAndRetrieve('username', 'John');
  
  
  
  
    