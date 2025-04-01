import ListTransactionService from "./ListTransactionsService"

it("should sum", () => {
  const listTransactionService = new ListTransactionService()
  expect(listTransactionService.execute()).toBe("transacao!")
})
