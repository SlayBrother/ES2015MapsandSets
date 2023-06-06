// 1. 
// {1,2,3,4}

// 2. 
// "ref"

// 3. 
// let m = new Map();
// m.set([1,2,3],true);
// m.set([1,2,3],false);

// {Array(3) => true}
// {Array(3) => false}

// 4. 
// const hasDuplicate = (arr) => {
//     const newArr = new Set(arr)
//             if (newArr.size !== arr.length){
//             return true
//         } else {
//             return false
//         }
//     }


// 5. 

function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }

