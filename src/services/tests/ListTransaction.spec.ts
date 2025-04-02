function teste() {
  return 2 + 2
}

it("should sum numbers", () => {
  expect(teste()).toBe(4)
})
