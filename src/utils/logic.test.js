import {isHandymanForCategory} from "./logic"
test("isHandymanForCategory returns true if the id of this handyman matches this category", ()=> {
    const category = {
        "id": 1,
        "name": "Plumber",
        "price": "35",
        "jobDescription": "plumbing is for the pipes",
        "handymen": [
            {
                "id": 2,
                "username": "lturnbull1",
                "firstname": "Lucienne",
                "lastname": "Turnbull",
                "email": "lturnbull1@hhs.gov",
                "phonenumber": "690 765 9844",
                "street": "Sutherland",
                "housenumber": "73",
                "postalcode": "8315YO",
                "provincie": "Zuid-Holland",
                "roles": [
                    {
                        "id": 2,
                        "name": "ROLE_HANDYMAN"
                    }
                ]
            },
            {
                "id": 4,
                "username": "mmagwood3",
                "firstname": "Mart",
                "lastname": "Magwood",
                "email": "mmagwood3@walmart.com",
                "phonenumber": "885 528 8118",
                "street": "Vahlen",
                "housenumber": "8",
                "postalcode": "3189PA",
                "provincie": "Vérane",
                "roles": [
                    {
                        "id": 2,
                        "name": "ROLE_HANDYMAN"
                    }
                ]
            }
        ]
    }

    const handymanId = 4
    const belongsToThisCategory = isHandymanForCategory(category, handymanId)
    expect(belongsToThisCategory).toBe(true)
})


test("isHandymanForCategory returns false if the id of this handyman does not match this category", ()=> {
    const category = {
        "id": 1,
        "name": "Plumber",
        "price": "35",
        "jobDescription": "plumbing is for the pipes",
        "handymen": [
            {
                "id": 2,
                "username": "lturnbull1",
                "firstname": "Lucienne",
                "lastname": "Turnbull",
                "email": "lturnbull1@hhs.gov",
                "phonenumber": "690 765 9844",
                "street": "Sutherland",
                "housenumber": "73",
                "postalcode": "8315YO",
                "provincie": "Zuid-Holland",
                "roles": [
                    {
                        "id": 2,
                        "name": "ROLE_HANDYMAN"
                    }
                ]
            },
            {
                "id": 4,
                "username": "mmagwood3",
                "firstname": "Mart",
                "lastname": "Magwood",
                "email": "mmagwood3@walmart.com",
                "phonenumber": "885 528 8118",
                "street": "Vahlen",
                "housenumber": "8",
                "postalcode": "3189PA",
                "provincie": "Vérane",
                "roles": [
                    {
                        "id": 2,
                        "name": "ROLE_HANDYMAN"
                    }
                ]
            }
        ]
    }

    const handymanId = 9000
    const belongsToThisCategory = isHandymanForCategory(category, handymanId)
    expect(belongsToThisCategory).toBe(false)
})