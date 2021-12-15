import {emailPattern} from "./validation"
test("Email should not match when incorrectly formatted",()=> {
    const incorrectEmail = "bla"
    const result = incorrectEmail.match(emailPattern)
    expect(result).toBe(null)

})

test("Email should match when correctly formatted",()=> {
    const correctEmail = "bla@bla.com"
    const result = correctEmail.match(emailPattern)
    expect(result.length).toBe(1)

})