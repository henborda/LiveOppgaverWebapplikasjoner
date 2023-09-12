import { CreateResponses } from "./types"
import {Faker} from "./types"
import { createResponses } from "./createResponse"

// TODO: Not implemented
const fakerMock: Faker = {
  id: () => "",
  score: () => 1,
  category: () => "",
  answer: () => "",
}

describe.only("Create responses", () => {
  const responses = createResponses({count: 10, faker: fakerMock})
  it("should create response", () => {
    expect(responses.size).toBe(10)
  })
  it("should have correct data", () => {
    const responses = createResponses({ count: 10, faker: fakerMock })
    expect(firstResponse.answer).toBe("answer")
    expect(firstResponse.score).toBe(3)
    expect(firstResponse.category).toBe("one")
  })
  it("should add to existing list", () => {
    expect(firstProduct.answer).toBe("answer")
    expect(firstProduct.category).toBe("Initial")
    expect(firstProduct.id).toBe("response-initial")
    expect(products.size).toBe(11)
  })
  it("should fail if no responses can be added", () => {})
})
