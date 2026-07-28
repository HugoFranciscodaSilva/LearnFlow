/*
  Warnings:

  - A unique constraint covering the columns `[alunoId,cursoId]` on the table `matriculas` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "matriculas_alunoId_key";

-- CreateIndex
CREATE UNIQUE INDEX "matriculas_alunoId_cursoId_key" ON "matriculas"("alunoId", "cursoId");
