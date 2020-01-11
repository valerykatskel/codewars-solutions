function likes(names) {
    let length = names.length;
    
    if (length === 0) {
      return 'no one likes this';
    } else if (length === 1) {
      return `${names[0]} likes this`
    } else if (length === 2) {
      let peoples = `${names[0]} and ${names[1]}`
      return `${peoples} like this`
    } else if (length === 3) {
      let peoples = `${names[0]}, ${names[1]} and ${names[2]}`
      return `${peoples} like this`
    } else {
      let peoples = `${names[0]}, ${names[1]} and ${names.length - 2} others`
      return `${peoples} like this`
    }
  }