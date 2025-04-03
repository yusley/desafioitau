-- CreateTable
CREATE TABLE "Transacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "valor" REAL NOT NULL,
    "dataHora" DATETIME DEFAULT CURRENT_TIMESTAMP
);
