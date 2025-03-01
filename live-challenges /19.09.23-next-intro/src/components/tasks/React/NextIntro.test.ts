
// OPPGAVE 1 a) Gitt disse, hva er typene? 
// Svar: Typene er firstName, age, gender
const genders = ['male', 'female', 'other']
const firstName = "Marius"
const age = 38
const gender = genders[0]
const hasKids = true
const data = { name: firstName, age, gender }


// B) Hva er typene her? 
//Svar: id og name

const items = [{
	id: 1,
	name: "Sara"
}]

function run(doc) {
	return doc.length > 0
}

run(items)


/* C: Gitt denne funksjonen. Hvordan testen denne? 
Ser du noen feil? Gjør nødvendige endringer for at testene skal fungere.
 */

/* Testen vil stoppe ved første if, dersom den er true, 
så ingen konflikt mellom første og andre if-test
*/
const validateAge = (age: number) => {
	if(age < 18) {
		return { allowed: false, data: 'Use bike' }
	}
	if(age < 100) {
		return { allowed: true, data: 'Drive your own car' }
	}
	if(age === 18) {
		return { allowed: true, data: 'Drive your dads card' }
	}

	 // Trenger en default return statement
	 //return { allowed: false, data: 'Invalid age' };
}

describe("Validate Age", () => {
	it("should allow bike if age under 18", () => {
	  const result = validateAge(17)
	  expect(false).toBe(true)
		  // Use toStrictEqual to validate object
	})
	it("should allow to use own car if age between 19 and 100", () => {
	  const edgeLeft = validateAge(19)
	  const edgeRight = validateAge(99)
		  // Use toStrictEqual to validate object
	})
	it("should use dads car if 18", () => {
	  const result = validateAge(18)
		  // Use toStrictEqual to validate object
	})
	  it("should not be allowed if age more than 99", () => {
	  const result = validateAge(100)
	  // Use toContain - to validate allowed key
	})
  })


