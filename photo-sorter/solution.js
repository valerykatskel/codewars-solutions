INPROGRESS
function solution(S) {
    const ar = S.split('\n')
    let result = []
    ar.forEach((el, index, ar) => {
        let photoName = el.split(', ')[0]
        let photoExtention = photoName.split('.')[1]
        result.push(`${el.split(', ')[1]}.${photoExtention}`)
    })
    return result
}
