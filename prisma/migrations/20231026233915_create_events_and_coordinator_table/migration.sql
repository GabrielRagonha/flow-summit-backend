-- CreateTable
CREATE TABLE "Coordinator" (
    "idCoordinator" TEXT NOT NULL PRIMARY KEY,
    "idUser" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    CONSTRAINT "Coordinator_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("idUser") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Event" (
    "idEvent" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    "idCoordinator" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Event_idCoordinator_fkey" FOREIGN KEY ("idCoordinator") REFERENCES "Coordinator" ("idCoordinator") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Coordinator_idUser_key" ON "Coordinator"("idUser");
