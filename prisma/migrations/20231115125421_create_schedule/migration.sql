-- CreateTable
CREATE TABLE "ScheduleUser" (
    "idScheduleUser" TEXT NOT NULL PRIMARY KEY,
    "idUser" TEXT NOT NULL,
    "idEvent" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ScheduleUser_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("idUser") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ScheduleUser_idEvent_fkey" FOREIGN KEY ("idEvent") REFERENCES "Event" ("idEvent") ON DELETE CASCADE ON UPDATE CASCADE
);
