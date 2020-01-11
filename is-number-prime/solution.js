function isPrime(num) {
    if ((!(num % 2) && num > 2) || (!(num % 3) && num > 3) || (num < 2 || num % 1)) return false
    const len = Math.sqrt(num)
    for (let count = 5; count <= len; count += 4) {
      if (!(num % count)) return false
      count += 2
      if (!(num % count)) return false
    }
    return true
}