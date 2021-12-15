import {formatMinDate} from "./dateFunction"
test("The minDate function exists", ()=> {
//    Hier gaan we dingen klaarzetten
    const today = new Date('December 2, 2021 03:24:00');
//  Hier gaan we iets uitvoeren
    const minDate = formatMinDate(today)
//    Hier gaan we iets checken
    expect(minDate).toBe("2021-12-2")
})
