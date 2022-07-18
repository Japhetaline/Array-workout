// Get your shorts on - this is an array workout!
    // ## Array Workout 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];
      
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
  
      console.log(fifteen);
  
      // Array.prototype.map()
      // 2. Give us an array of the inventor first and last names
      const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
      console.log(fullNames);
  
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      // const ordered = inventors.sort(function(a, b) {
      //   if(a.year > b.year) {
      //     return 1;
      //   } else {
      //     return -1;
      //   }
      // });
  
      // console.table(ordered);
  
      const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
      console.table(ordered);
  
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live?
      const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
      }, 0);
  
      console.log(totalYears);
  
      // 5. Sort the inventors by years lived
      const oldest = inventors.sort(function(a, b) {
        const lastInventor = a.passed - a.year;
        const nextInventor = b.passed - b.year;
        return lastInventor > nextInventor ? -1 : 1;
      });
      
      console.table(oldest);
  
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  
      //  const category = document.querySelector('.mw-category');
      //  const links = Array.from(category.querySelectorAll('a'));
      //  const de = links.map(link => link.textContent);
      //              //.filter(streetName => streetName.includes('de'));
  
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
      });
      console.log(alpha);
  
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
  
      const transportation = data.reduce(function(obj, item) {
        if (!obj[item]) {
          obj[item] = 0;
        }
        obj[item]++;
        return obj;
      }, {});
  
      console.log(transportation);


      

      // ## Array Workout 2

    const populace = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
  
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
  
      // 1. Some and Every Checks
      // Array.prototype.some() // is at least one person 19?
      // const isAdult = populace.some(function(person) {
      //   const currentYear = (new Date()).getFullYear();
      //   if(currentYear - person.year >= 19) {
      //     return true;
      //   }
      // });
  
      const isAdult = populace.some(person => ((new Date()).getFullYear()) - person.year >= 19);
  
      console.log({isAdult});


      // 2. Array.prototype.every() // is everyone 19?
  
      const allAdults = populace.every(person => ((new Date()).getFullYear()) - person.year >= 19);
      console.log({allAdults});
  
      // 3. Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
  
  
      const comment = comments.find(comment => comment.id === 823423);
  
      console.log(comment);
  
      // 4. Array.prototype.findIndex()
      // Find the comment with this ID
      const index = comments.findIndex(comment => comment.id === 823423);
      console.log(index);
  
      // 5. delete the comment with the ID of 823423
      // comments.splice(index, 1);
  
    //   const newComments = [
    //     ...comments.slice(0, index),
    //     ...comments.slice(index + 1)
    //   ];